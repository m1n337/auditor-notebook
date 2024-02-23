/**
 * highlight.js Solidity syntax highlighting definition
 *
 * @see https://github.com/isagalaev/highlight.js
 *
 * @package: highlightjs-solidity
 * @author:  Sam Pospischil <sam@changegiving.com>
 * @since:   2016-07-01
 */

const {
    baseAssembly,
    solAposStringMode,
    solQuoteStringMode,
    HEX_APOS_STRING_MODE,
    HEX_QUOTE_STRING_MODE,
    SOL_NUMBER,
    isNegativeLookbehindAvailable
} = require("../common.js");

module.exports = function(hljs) {
    var SOL_LEXEMES_RE = /[A-Za-z_$][A-Za-z_$0-9]*/;

    var SOL_APOS_STRING_MODE = solAposStringMode(hljs);
    var SOL_QUOTE_STRING_MODE = solQuoteStringMode(hljs);


    var SOL_KEYWORDS = [
        "var",
        "enum",
        "struct",
        "mapping",
        "new",
        "delete",
        "if",
        "else",
        "for",
        "while",
        "continue",
        "break", 
        "return", 
        "throw", 
        "emit",
        "try",
        "catch",
        "revert",
        "unchecked",
        //NOTE: doesn't always act as a keyword, but seems fine to include
        "_",
        "function", 
        "modifier", 
        "event", 
        "constructor", 
        "fallback", 
        "receive", 
        "error",
        "virtual", 
        "override",
        "constant", 
        "immutable", 
        "anonymous", 
        "indexed", 
        "storage", 
        "memory", 
        "calldata",
        "external", 
        "public", 
        "internal", 
        "payable", 
        "pure", 
        "view", 
        "private", 
        "returns",
        "import", 
        "from", 
        "as", 
        "using", 
        "global", 
        "pragma",
        "contract", 
        "interface", 
        "library", 
        "is", 
        "abstract",
        "type", 
        "assembly",
    ]

    //first: let's set up all parameterized types (bytes, int, uint, fixed, ufixed)
    //NOTE: unparameterized versions are *not* included here, those are included
    //manually
    var byteSizes = [];
    for(var i = 0; i < 32; i++) {
        byteSizes[i] = i+1;
    }
    var numSizes = byteSizes.map(function(bytes) { return bytes * 8 } );
    var precisions = [];
    for(i = 0; i <= 80; i++) {
        precisions[i] = i;
    }
    var sizePrecisionPairs = [].concat.apply([],
        numSizes.map(function(size) {
            return precisions.map(function(precision) {
                return size + 'x' + precision;
            })
        })
    );
    var intTypes = numSizes.map(function(size) { return 'int' + size });
    var uintTypes = numSizes.map(function(size) { return 'uint' + size });
    var bytesTypes = byteSizes.map(function(size) { return 'bytes' + size });
    var fixedTypes = sizePrecisionPairs.map(function(pair) { return 'fixed' + pair });
    var ufixedTypes = sizePrecisionPairs.map(function(pair) { return 'ufixed' + pair });

    var SOL_TYPES = [
        "bool",
        "string",
        "int",
        ...intTypes,
        "uint",
        ...uintTypes,
        "byte",
        "bytes",
        ...bytesTypes,
        "fixed",
        "ufixed",
        ...fixedTypes,
        ...ufixedTypes,
        "address"
    ]
    var KEYWORDS = {
        $pattern: SOL_LEXEMES_RE,
        keyword: SOL_KEYWORDS,
        types: SOL_TYPES,
        literal:
            'true false ' +
            'wei gwei szabo finney ether ' +
            'seconds minutes hours days weeks years',
        built_in:
            'self ' +   // :NOTE: not a real keyword, but a convention used in storage manipulation libraries
            'this super selfdestruct suicide ' +
            'now ' +
            'msg block tx abi ' +
            'blockhash gasleft ' +
            'assert require ' +
            'Error Panic ' +
            'sha3 sha256 keccak256 ripemd160 ecrecover addmod mulmod ' +
            'log0 log1 log2 log3 log4'
    };

    //note: we always put operators below comments so
    //it won't interfere with comments
    var SOL_OPERATORS = {
        className: 'operator',
        begin: /[+\-!~*\/%<>&^|=]/ //excluding ?: because having : as operator causes problems
    };


    var SOL_FUNC_PARAMS = {
        className: 'params',
        begin: /\(/, end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            SOL_APOS_STRING_MODE,
            SOL_QUOTE_STRING_MODE,
            SOL_NUMBER,
            'self' //to account for mappings and fn variables
        ]
    };

    var SOL_RESERVED_MEMBERS = {
        begin: /\.\s*/,  // match any property access up to start of prop
        end: /[^A-Za-z0-9$_\.]/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: {
            built_in: 'gas value selector address length push pop ' + //members of external functions; members of arrays
                'send transfer call callcode delegatecall staticcall ' + //members of addresses
                'balance code codehash ' + //more members of addresses
                'wrap unwrap ' + //members of UDVTs (the types not the values)
                'name creationCode runtimeCode interfaceId min max' //members of type(...)
        },
        relevance: 2,
    };

    var SOL_TITLE_MODE =
        hljs.inherit(hljs.TITLE_MODE, {
            begin: /[A-Za-z$_][0-9A-Za-z$_]*/,
            keywords: KEYWORDS
        });

    //special parameters (note: these aren't really handled properly, but this seems like the best compromise for now)
    var SOL_SPECIAL_PARAMETERS_LIST = ['gas', 'value', 'salt'];
    var SOL_SPECIAL_PARAMETERS_PARTIAL_RE = '(' + SOL_SPECIAL_PARAMETERS_LIST.join('|') + ')(?=:)';
    var SOL_SPECIAL_PARAMETERS = {
        className: 'built_in',
        begin: (isNegativeLookbehindAvailable() ? '(?<!\\$)\\b' : '\\b') + SOL_SPECIAL_PARAMETERS_PARTIAL_RE
    };

    function makeBuiltinProps(obj, props) {
        return {
            begin: (isNegativeLookbehindAvailable() ? '(?<!\\$)\\b' : '\\b') + obj + '\\.\\s*',
            end: /[^A-Za-z0-9$_\.]/,
            excludeBegin: false,
            excludeEnd: true,
            keywords: {
                built_in: obj + ' ' + props,
            },
            contains: [
                SOL_RESERVED_MEMBERS
            ],
            relevance: 10,
        };
    }

    //covers the special slot/offset notation in assembly
    //(old-style, with an underscore)
    var SOL_ASSEMBLY_MEMBERS_OLD = {
        begin: /_/,
        end: /[^A-Za-z0-9$.]/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: {
            built_in: 'slot offset'
        },
        relevance: 2,
    };

    //covers the special slot/offset notation in assembly
    //(new-style, with a dot; keeping this separate as it
    //may be expanded in the future)
    var SOL_ASSEMBLY_MEMBERS = {
        begin: /\./,
        end: /[^A-Za-z0-9$.]/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: {
            built_in: 'slot offset length address selector'
        },
        relevance: 2,
    };

    var BASE_ASSEMBLY_ENVIRONMENT = baseAssembly(hljs);
    var SOL_ASSEMBLY_ENVIRONMENT = hljs.inherit(BASE_ASSEMBLY_ENVIRONMENT, {
        contains: BASE_ASSEMBLY_ENVIRONMENT.contains.concat([
            SOL_ASSEMBLY_MEMBERS,
            SOL_ASSEMBLY_MEMBERS_OLD
        ])
    });

    return {
        name: 'Solidity',
        aliases: ['sol'],
        keywords: KEYWORDS,
        illegal: /#/,
        contains: [
            // basic literal definitions
            SOL_APOS_STRING_MODE,
            SOL_QUOTE_STRING_MODE,
            HEX_APOS_STRING_MODE,
            HEX_QUOTE_STRING_MODE,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            SOL_NUMBER,
            SOL_SPECIAL_PARAMETERS,
            SOL_OPERATORS,
            { // functions
                className: 'function',
                beginKeywords: 'function modifier event constructor fallback receive error', end: /[{;]/, excludeEnd: true,
                contains: [
                    SOL_TITLE_MODE,
                    SOL_FUNC_PARAMS,
                    SOL_SPECIAL_PARAMETERS,
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ],
                illegal: /%/,
            },
            // built-in members
            makeBuiltinProps('msg', 'gas value data sender sig'),
            makeBuiltinProps('block', 'blockhash coinbase difficulty prevrandao gaslimit basefee number timestamp chainid'),
            makeBuiltinProps('tx', 'gasprice origin'),
            makeBuiltinProps('abi', 'decode encode encodePacked encodeWithSelector encodeWithSignature encodeCall'),
            makeBuiltinProps('bytes', 'concat'),
            makeBuiltinProps('string', 'concat'),
            SOL_RESERVED_MEMBERS,
            { // contracts & libraries & interfaces
                className: 'class',
                beginKeywords: 'contract interface library', end: '{', excludeEnd: true,
                illegal: /[:"\[\]]/,
                contains: [
                    { beginKeywords: 'is', $pattern: SOL_LEXEMES_RE },
                    SOL_TITLE_MODE,
                    SOL_FUNC_PARAMS,
                    SOL_SPECIAL_PARAMETERS,
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ]
            },
            { // structs & enums
                beginKeywords: 'struct enum', end: '{', excludeEnd: true,
                illegal: /[:"\[\]]/,
                contains: [
                    SOL_TITLE_MODE,
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ]
            },
            { // imports
                beginKeywords: 'import', end: ';',
                keywords: 'import from as',
                contains: [
                    SOL_TITLE_MODE,
                    SOL_APOS_STRING_MODE,
                    SOL_QUOTE_STRING_MODE,
                    HEX_APOS_STRING_MODE,
                    HEX_QUOTE_STRING_MODE,
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    SOL_OPERATORS
                ]
            },
            { // using
                beginKeywords: 'using', end: ';',
                keywords: 'using for global',
                contains: [
                    SOL_TITLE_MODE,
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    SOL_OPERATORS
                ]
            },
            { // pragmas
                className: 'meta',
                beginKeywords: 'pragma', end: ';',
                keywords: {
                    keyword: 'pragma solidity experimental abicoder',
                    built_in: 'ABIEncoderV2 SMTChecker v1 v2'
                },
                contains: [
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    hljs.inherit(SOL_APOS_STRING_MODE, { className: 'meta-string' }),
                    hljs.inherit(SOL_QUOTE_STRING_MODE, { className: 'meta-string' })
                ]
            },
            { //assembly section
                beginKeywords: 'assembly',
                end: /\b\B/, //unsatisfiable regex; ended by endsParent instead
                contains: [
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    hljs.inherit(SOL_APOS_STRING_MODE, { className: 'meta-string' }), //going to count "memory-safe" etc as meta-strings
                    hljs.inherit(SOL_QUOTE_STRING_MODE, { className: 'meta-string' }),
                    hljs.inherit(SOL_ASSEMBLY_ENVIRONMENT, { //the actual *block* in the assembly section
                        begin: '{', end: '}',
                        endsParent: true,
                        contains: SOL_ASSEMBLY_ENVIRONMENT.contains.concat([
                            hljs.inherit(SOL_ASSEMBLY_ENVIRONMENT, { //block within assembly
                                begin: '{', end: '}',
                                contains: SOL_ASSEMBLY_ENVIRONMENT.contains.concat(['self'])
                            })
                        ])
                    })
                ]
            }
        ]
    };
}
