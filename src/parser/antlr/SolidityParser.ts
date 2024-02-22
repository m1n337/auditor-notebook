// Generated from antlr/Solidity.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SolidityListener } from "./SolidityListener";
import { SolidityVisitor } from "./SolidityVisitor";


export class SolidityParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly Int = 97;
	public static readonly Uint = 98;
	public static readonly Byte = 99;
	public static readonly Fixed = 100;
	public static readonly Ufixed = 101;
	public static readonly BooleanLiteral = 102;
	public static readonly DecimalNumber = 103;
	public static readonly HexNumber = 104;
	public static readonly NumberUnit = 105;
	public static readonly HexLiteralFragment = 106;
	public static readonly ReservedKeyword = 107;
	public static readonly AnonymousKeyword = 108;
	public static readonly BreakKeyword = 109;
	public static readonly ConstantKeyword = 110;
	public static readonly ImmutableKeyword = 111;
	public static readonly ContinueKeyword = 112;
	public static readonly LeaveKeyword = 113;
	public static readonly ExternalKeyword = 114;
	public static readonly IndexedKeyword = 115;
	public static readonly InternalKeyword = 116;
	public static readonly PayableKeyword = 117;
	public static readonly PrivateKeyword = 118;
	public static readonly PublicKeyword = 119;
	public static readonly VirtualKeyword = 120;
	public static readonly PureKeyword = 121;
	public static readonly TypeKeyword = 122;
	public static readonly ViewKeyword = 123;
	public static readonly GlobalKeyword = 124;
	public static readonly ConstructorKeyword = 125;
	public static readonly FallbackKeyword = 126;
	public static readonly ReceiveKeyword = 127;
	public static readonly Identifier = 128;
	public static readonly StringLiteralFragment = 129;
	public static readonly VersionLiteral = 130;
	public static readonly WS = 131;
	public static readonly MultiLineComment = 132;
	public static readonly LineComment = 133;
	public static readonly RULE_sourceUnit = 0;
	public static readonly RULE_pragmaDirective = 1;
	public static readonly RULE_pragmaName = 2;
	public static readonly RULE_pragmaValue = 3;
	public static readonly RULE_version = 4;
	public static readonly RULE_versionOperator = 5;
	public static readonly RULE_versionConstraint = 6;
	public static readonly RULE_importDeclaration = 7;
	public static readonly RULE_importDirective = 8;
	public static readonly RULE_importPath = 9;
	public static readonly RULE_contractDefinition = 10;
	public static readonly RULE_inheritanceSpecifier = 11;
	public static readonly RULE_contractPart = 12;
	public static readonly RULE_stateVariableDeclaration = 13;
	public static readonly RULE_fileLevelConstant = 14;
	public static readonly RULE_customErrorDefinition = 15;
	public static readonly RULE_typeDefinition = 16;
	public static readonly RULE_usingForDeclaration = 17;
	public static readonly RULE_usingForObject = 18;
	public static readonly RULE_usingForObjectDirective = 19;
	public static readonly RULE_userDefinableOperators = 20;
	public static readonly RULE_structDefinition = 21;
	public static readonly RULE_modifierDefinition = 22;
	public static readonly RULE_modifierInvocation = 23;
	public static readonly RULE_functionDefinition = 24;
	public static readonly RULE_functionDescriptor = 25;
	public static readonly RULE_returnParameters = 26;
	public static readonly RULE_modifierList = 27;
	public static readonly RULE_eventDefinition = 28;
	public static readonly RULE_enumValue = 29;
	public static readonly RULE_enumDefinition = 30;
	public static readonly RULE_parameterList = 31;
	public static readonly RULE_parameter = 32;
	public static readonly RULE_eventParameterList = 33;
	public static readonly RULE_eventParameter = 34;
	public static readonly RULE_functionTypeParameterList = 35;
	public static readonly RULE_functionTypeParameter = 36;
	public static readonly RULE_variableDeclaration = 37;
	public static readonly RULE_typeName = 38;
	public static readonly RULE_userDefinedTypeName = 39;
	public static readonly RULE_mappingKey = 40;
	public static readonly RULE_mapping = 41;
	public static readonly RULE_mappingKeyName = 42;
	public static readonly RULE_mappingValueName = 43;
	public static readonly RULE_functionTypeName = 44;
	public static readonly RULE_storageLocation = 45;
	public static readonly RULE_stateMutability = 46;
	public static readonly RULE_block = 47;
	public static readonly RULE_statement = 48;
	public static readonly RULE_expressionStatement = 49;
	public static readonly RULE_ifStatement = 50;
	public static readonly RULE_tryStatement = 51;
	public static readonly RULE_catchClause = 52;
	public static readonly RULE_whileStatement = 53;
	public static readonly RULE_simpleStatement = 54;
	public static readonly RULE_uncheckedStatement = 55;
	public static readonly RULE_forStatement = 56;
	public static readonly RULE_inlineAssemblyStatement = 57;
	public static readonly RULE_inlineAssemblyStatementFlag = 58;
	public static readonly RULE_doWhileStatement = 59;
	public static readonly RULE_continueStatement = 60;
	public static readonly RULE_breakStatement = 61;
	public static readonly RULE_returnStatement = 62;
	public static readonly RULE_throwStatement = 63;
	public static readonly RULE_emitStatement = 64;
	public static readonly RULE_revertStatement = 65;
	public static readonly RULE_variableDeclarationStatement = 66;
	public static readonly RULE_variableDeclarationList = 67;
	public static readonly RULE_identifierList = 68;
	public static readonly RULE_elementaryTypeName = 69;
	public static readonly RULE_expression = 70;
	public static readonly RULE_primaryExpression = 71;
	public static readonly RULE_expressionList = 72;
	public static readonly RULE_nameValueList = 73;
	public static readonly RULE_nameValue = 74;
	public static readonly RULE_functionCallArguments = 75;
	public static readonly RULE_functionCall = 76;
	public static readonly RULE_assemblyBlock = 77;
	public static readonly RULE_assemblyItem = 78;
	public static readonly RULE_assemblyExpression = 79;
	public static readonly RULE_assemblyMember = 80;
	public static readonly RULE_assemblyCall = 81;
	public static readonly RULE_assemblyLocalDefinition = 82;
	public static readonly RULE_assemblyAssignment = 83;
	public static readonly RULE_assemblyIdentifierOrList = 84;
	public static readonly RULE_assemblyIdentifierList = 85;
	public static readonly RULE_assemblyStackAssignment = 86;
	public static readonly RULE_labelDefinition = 87;
	public static readonly RULE_assemblySwitch = 88;
	public static readonly RULE_assemblyCase = 89;
	public static readonly RULE_assemblyFunctionDefinition = 90;
	public static readonly RULE_assemblyFunctionReturns = 91;
	public static readonly RULE_assemblyFor = 92;
	public static readonly RULE_assemblyIf = 93;
	public static readonly RULE_assemblyLiteral = 94;
	public static readonly RULE_tupleExpression = 95;
	public static readonly RULE_numberLiteral = 96;
	public static readonly RULE_identifier = 97;
	public static readonly RULE_comment = 98;
	public static readonly RULE_hexLiteral = 99;
	public static readonly RULE_overrideSpecifier = 100;
	public static readonly RULE_stringLiteral = 101;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version", 
		"versionOperator", "versionConstraint", "importDeclaration", "importDirective", 
		"importPath", "contractDefinition", "inheritanceSpecifier", "contractPart", 
		"stateVariableDeclaration", "fileLevelConstant", "customErrorDefinition", 
		"typeDefinition", "usingForDeclaration", "usingForObject", "usingForObjectDirective", 
		"userDefinableOperators", "structDefinition", "modifierDefinition", "modifierInvocation", 
		"functionDefinition", "functionDescriptor", "returnParameters", "modifierList", 
		"eventDefinition", "enumValue", "enumDefinition", "parameterList", "parameter", 
		"eventParameterList", "eventParameter", "functionTypeParameterList", "functionTypeParameter", 
		"variableDeclaration", "typeName", "userDefinedTypeName", "mappingKey", 
		"mapping", "mappingKeyName", "mappingValueName", "functionTypeName", "storageLocation", 
		"stateMutability", "block", "statement", "expressionStatement", "ifStatement", 
		"tryStatement", "catchClause", "whileStatement", "simpleStatement", "uncheckedStatement", 
		"forStatement", "inlineAssemblyStatement", "inlineAssemblyStatementFlag", 
		"doWhileStatement", "continueStatement", "breakStatement", "returnStatement", 
		"throwStatement", "emitStatement", "revertStatement", "variableDeclarationStatement", 
		"variableDeclarationList", "identifierList", "elementaryTypeName", "expression", 
		"primaryExpression", "expressionList", "nameValueList", "nameValue", "functionCallArguments", 
		"functionCall", "assemblyBlock", "assemblyItem", "assemblyExpression", 
		"assemblyMember", "assemblyCall", "assemblyLocalDefinition", "assemblyAssignment", 
		"assemblyIdentifierOrList", "assemblyIdentifierList", "assemblyStackAssignment", 
		"labelDefinition", "assemblySwitch", "assemblyCase", "assemblyFunctionDefinition", 
		"assemblyFunctionReturns", "assemblyFor", "assemblyIf", "assemblyLiteral", 
		"tupleExpression", "numberLiteral", "identifier", "comment", "hexLiteral", 
		"overrideSpecifier", "stringLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'pragma'", "';'", "'*'", "'||'", "'^'", "'~'", "'>='", "'>'", 
		"'<'", "'<='", "'='", "'as'", "'import'", "'from'", "'{'", "','", "'}'", 
		"'abstract'", "'contract'", "'interface'", "'library'", "'is'", "'('", 
		"')'", "'error'", "'using'", "'for'", "'|'", "'&'", "'+'", "'-'", "'/'", 
		"'%'", "'=='", "'!='", "'struct'", "'modifier'", "'function'", "'returns'", 
		"'event'", "'enum'", "'['", "']'", "'address'", "'.'", "'mapping'", "'=>'", 
		"'memory'", "'storage'", "'calldata'", "'if'", "'else'", "'try'", "'catch'", 
		"'while'", "'unchecked'", "'assembly'", "'do'", "'return'", "'throw'", 
		"'emit'", "'revert'", "'var'", "'bool'", "'string'", "'byte'", "'++'", 
		"'--'", "'new'", "':'", "'delete'", "'!'", "'**'", "'<<'", "'>>'", "'&&'", 
		"'?'", "'|='", "'^='", "'&='", "'<<='", "'>>='", "'+='", "'-='", "'*='", 
		"'/='", "'%='", "'let'", "':='", "'=:'", "'switch'", "'case'", "'default'", 
		"'->'", "'callback'", "'override'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'anonymous'", "'break'", "'constant'", "'immutable'", "'continue'", "'leave'", 
		"'external'", "'indexed'", "'internal'", "'payable'", "'private'", "'public'", 
		"'virtual'", "'pure'", "'type'", "'view'", "'global'", "'constructor'", 
		"'fallback'", "'receive'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "Int", 
		"Uint", "Byte", "Fixed", "Ufixed", "BooleanLiteral", "DecimalNumber", 
		"HexNumber", "NumberUnit", "HexLiteralFragment", "ReservedKeyword", "AnonymousKeyword", 
		"BreakKeyword", "ConstantKeyword", "ImmutableKeyword", "ContinueKeyword", 
		"LeaveKeyword", "ExternalKeyword", "IndexedKeyword", "InternalKeyword", 
		"PayableKeyword", "PrivateKeyword", "PublicKeyword", "VirtualKeyword", 
		"PureKeyword", "TypeKeyword", "ViewKeyword", "GlobalKeyword", "ConstructorKeyword", 
		"FallbackKeyword", "ReceiveKeyword", "Identifier", "StringLiteralFragment", 
		"VersionLiteral", "WS", "MultiLineComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SolidityParser._LITERAL_NAMES, SolidityParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SolidityParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Solidity.g4"; }

	// @Override
	public get ruleNames(): string[] { return SolidityParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SolidityParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SolidityParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceUnit(): SourceUnitContext {
		let _localctx: SourceUnitContext = new SourceUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SolidityParser.RULE_sourceUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__0) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__17) | (1 << SolidityParser.T__18) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__25))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__37 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__40 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__45 - 36)) | (1 << (SolidityParser.T__49 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.Int - 95)) | (1 << (SolidityParser.Uint - 95)) | (1 << (SolidityParser.Byte - 95)) | (1 << (SolidityParser.Fixed - 95)) | (1 << (SolidityParser.Ufixed - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.TypeKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)) | (1 << (SolidityParser.FallbackKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)) | (1 << (SolidityParser.LineComment - 127)))) !== 0)) {
				{
				this.state = 216;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 204;
					this.comment();
					}
					break;

				case 2:
					{
					this.state = 205;
					this.pragmaDirective();
					}
					break;

				case 3:
					{
					this.state = 206;
					this.importDirective();
					}
					break;

				case 4:
					{
					this.state = 207;
					this.contractDefinition();
					}
					break;

				case 5:
					{
					this.state = 208;
					this.enumDefinition();
					}
					break;

				case 6:
					{
					this.state = 209;
					this.eventDefinition();
					}
					break;

				case 7:
					{
					this.state = 210;
					this.structDefinition();
					}
					break;

				case 8:
					{
					this.state = 211;
					this.functionDefinition();
					}
					break;

				case 9:
					{
					this.state = 212;
					this.fileLevelConstant();
					}
					break;

				case 10:
					{
					this.state = 213;
					this.customErrorDefinition();
					}
					break;

				case 11:
					{
					this.state = 214;
					this.typeDefinition();
					}
					break;

				case 12:
					{
					this.state = 215;
					this.usingForDeclaration();
					}
					break;
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 221;
			this.match(SolidityParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaDirective(): PragmaDirectiveContext {
		let _localctx: PragmaDirectiveContext = new PragmaDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SolidityParser.RULE_pragmaDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(SolidityParser.T__0);
			this.state = 224;
			this.pragmaName();
			this.state = 225;
			this.pragmaValue();
			this.state = 226;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaName(): PragmaNameContext {
		let _localctx: PragmaNameContext = new PragmaNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SolidityParser.RULE_pragmaName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaValue(): PragmaValueContext {
		let _localctx: PragmaValueContext = new PragmaValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SolidityParser.RULE_pragmaValue);
		try {
			this.state = 233;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.match(SolidityParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				this.version();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 232;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public version(): VersionContext {
		let _localctx: VersionContext = new VersionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SolidityParser.RULE_version);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.versionConstraint();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10))) !== 0) || _la === SolidityParser.DecimalNumber || _la === SolidityParser.VersionLiteral) {
				{
				{
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__3) {
					{
					this.state = 236;
					this.match(SolidityParser.T__3);
					}
				}

				this.state = 239;
				this.versionConstraint();
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionOperator(): VersionOperatorContext {
		let _localctx: VersionOperatorContext = new VersionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SolidityParser.RULE_versionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionConstraint(): VersionConstraintContext {
		let _localctx: VersionConstraintContext = new VersionConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SolidityParser.RULE_versionConstraint);
		let _la: number;
		try {
			this.state = 255;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10))) !== 0)) {
					{
					this.state = 247;
					this.versionOperator();
					}
				}

				this.state = 250;
				this.match(SolidityParser.VersionLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10))) !== 0)) {
					{
					this.state = 251;
					this.versionOperator();
					}
				}

				this.state = 254;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SolidityParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.identifier();
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__11) {
				{
				this.state = 258;
				this.match(SolidityParser.T__11);
				this.state = 259;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDirective(): ImportDirectiveContext {
		let _localctx: ImportDirectiveContext = new ImportDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SolidityParser.RULE_importDirective);
		let _la: number;
		try {
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 262;
				this.match(SolidityParser.T__12);
				this.state = 263;
				this.importPath();
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__11) {
					{
					this.state = 264;
					this.match(SolidityParser.T__11);
					this.state = 265;
					this.identifier();
					}
				}

				this.state = 268;
				this.match(SolidityParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 270;
				this.match(SolidityParser.T__12);
				this.state = 273;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.T__2:
					{
					this.state = 271;
					this.match(SolidityParser.T__2);
					}
					break;
				case SolidityParser.T__13:
				case SolidityParser.T__24:
				case SolidityParser.T__43:
				case SolidityParser.T__49:
				case SolidityParser.T__61:
				case SolidityParser.T__94:
				case SolidityParser.LeaveKeyword:
				case SolidityParser.PayableKeyword:
				case SolidityParser.GlobalKeyword:
				case SolidityParser.ConstructorKeyword:
				case SolidityParser.ReceiveKeyword:
				case SolidityParser.Identifier:
				case SolidityParser.MultiLineComment:
					{
					this.state = 272;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__11) {
					{
					this.state = 275;
					this.match(SolidityParser.T__11);
					this.state = 276;
					this.identifier();
					}
				}

				this.state = 279;
				this.match(SolidityParser.T__13);
				this.state = 280;
				this.importPath();
				this.state = 281;
				this.match(SolidityParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 283;
				this.match(SolidityParser.T__12);
				this.state = 284;
				this.match(SolidityParser.T__14);
				this.state = 285;
				this.importDeclaration();
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 286;
					this.match(SolidityParser.T__15);
					this.state = 287;
					this.importDeclaration();
					}
					}
					this.state = 292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 293;
				this.match(SolidityParser.T__16);
				this.state = 294;
				this.match(SolidityParser.T__13);
				this.state = 295;
				this.importPath();
				this.state = 296;
				this.match(SolidityParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SolidityParser.RULE_importPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.match(SolidityParser.StringLiteralFragment);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractDefinition(): ContractDefinitionContext {
		let _localctx: ContractDefinitionContext = new ContractDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SolidityParser.RULE_contractDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__17) {
				{
				this.state = 302;
				this.match(SolidityParser.T__17);
				}
			}

			this.state = 305;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__18) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 306;
			this.identifier();
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__21) {
				{
				this.state = 307;
				this.match(SolidityParser.T__21);
				this.state = 308;
				this.inheritanceSpecifier();
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 309;
					this.match(SolidityParser.T__15);
					this.state = 310;
					this.inheritanceSpecifier();
					}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 318;
			this.match(SolidityParser.T__14);
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__25))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__36 - 36)) | (1 << (SolidityParser.T__37 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__40 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__45 - 36)) | (1 << (SolidityParser.T__49 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.Int - 95)) | (1 << (SolidityParser.Uint - 95)) | (1 << (SolidityParser.Byte - 95)) | (1 << (SolidityParser.Fixed - 95)) | (1 << (SolidityParser.Ufixed - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.TypeKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)) | (1 << (SolidityParser.FallbackKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)) | (1 << (SolidityParser.LineComment - 127)))) !== 0)) {
				{
				{
				this.state = 319;
				this.contractPart();
				}
				}
				this.state = 324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 325;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritanceSpecifier(): InheritanceSpecifierContext {
		let _localctx: InheritanceSpecifierContext = new InheritanceSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SolidityParser.RULE_inheritanceSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.userDefinedTypeName();
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__22) {
				{
				this.state = 328;
				this.match(SolidityParser.T__22);
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
					{
					this.state = 329;
					this.expressionList();
					}
				}

				this.state = 332;
				this.match(SolidityParser.T__23);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractPart(): ContractPartContext {
		let _localctx: ContractPartContext = new ContractPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SolidityParser.RULE_contractPart);
		try {
			this.state = 345;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 335;
				this.comment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 336;
				this.stateVariableDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 337;
				this.usingForDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 338;
				this.structDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 339;
				this.modifierDefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 340;
				this.functionDefinition();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 341;
				this.eventDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 342;
				this.enumDefinition();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 343;
				this.customErrorDefinition();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 344;
				this.typeDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateVariableDeclaration(): StateVariableDeclarationContext {
		let _localctx: StateVariableDeclarationContext = new StateVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SolidityParser.RULE_stateVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.typeName(0);
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (SolidityParser.T__95 - 96)) | (1 << (SolidityParser.ConstantKeyword - 96)) | (1 << (SolidityParser.ImmutableKeyword - 96)) | (1 << (SolidityParser.InternalKeyword - 96)) | (1 << (SolidityParser.PrivateKeyword - 96)) | (1 << (SolidityParser.PublicKeyword - 96)))) !== 0)) {
				{
				this.state = 354;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.PublicKeyword:
					{
					this.state = 348;
					this.match(SolidityParser.PublicKeyword);
					}
					break;
				case SolidityParser.InternalKeyword:
					{
					this.state = 349;
					this.match(SolidityParser.InternalKeyword);
					}
					break;
				case SolidityParser.PrivateKeyword:
					{
					this.state = 350;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;
				case SolidityParser.ConstantKeyword:
					{
					this.state = 351;
					this.match(SolidityParser.ConstantKeyword);
					}
					break;
				case SolidityParser.ImmutableKeyword:
					{
					this.state = 352;
					this.match(SolidityParser.ImmutableKeyword);
					}
					break;
				case SolidityParser.T__95:
					{
					this.state = 353;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 359;
			this.identifier();
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__10) {
				{
				this.state = 360;
				this.match(SolidityParser.T__10);
				this.state = 361;
				this.expression(0);
				}
			}

			this.state = 364;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fileLevelConstant(): FileLevelConstantContext {
		let _localctx: FileLevelConstantContext = new FileLevelConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SolidityParser.RULE_fileLevelConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.typeName(0);
			this.state = 367;
			this.match(SolidityParser.ConstantKeyword);
			this.state = 368;
			this.identifier();
			this.state = 369;
			this.match(SolidityParser.T__10);
			this.state = 370;
			this.expression(0);
			this.state = 371;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public customErrorDefinition(): CustomErrorDefinitionContext {
		let _localctx: CustomErrorDefinitionContext = new CustomErrorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SolidityParser.RULE_customErrorDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(SolidityParser.T__24);
			this.state = 374;
			this.identifier();
			this.state = 375;
			this.parameterList();
			this.state = 376;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDefinition(): TypeDefinitionContext {
		let _localctx: TypeDefinitionContext = new TypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SolidityParser.RULE_typeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(SolidityParser.TypeKeyword);
			this.state = 379;
			this.identifier();
			this.state = 380;
			this.match(SolidityParser.T__21);
			this.state = 381;
			this.elementaryTypeName();
			this.state = 382;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingForDeclaration(): UsingForDeclarationContext {
		let _localctx: UsingForDeclarationContext = new UsingForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SolidityParser.RULE_usingForDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(SolidityParser.T__25);
			this.state = 385;
			this.usingForObject();
			this.state = 386;
			this.match(SolidityParser.T__26);
			this.state = 389;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__2:
				{
				this.state = 387;
				this.match(SolidityParser.T__2);
				}
				break;
			case SolidityParser.T__13:
			case SolidityParser.T__24:
			case SolidityParser.T__37:
			case SolidityParser.T__43:
			case SolidityParser.T__45:
			case SolidityParser.T__49:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.T__94:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.GlobalKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.MultiLineComment:
				{
				this.state = 388;
				this.typeName(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.GlobalKeyword) {
				{
				this.state = 391;
				this.match(SolidityParser.GlobalKeyword);
				}
			}

			this.state = 394;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingForObject(): UsingForObjectContext {
		let _localctx: UsingForObjectContext = new UsingForObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SolidityParser.RULE_usingForObject);
		let _la: number;
		try {
			this.state = 408;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__13:
			case SolidityParser.T__24:
			case SolidityParser.T__43:
			case SolidityParser.T__49:
			case SolidityParser.T__61:
			case SolidityParser.T__94:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.GlobalKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.MultiLineComment:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 396;
				this.userDefinedTypeName();
				}
				break;
			case SolidityParser.T__14:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 397;
				this.match(SolidityParser.T__14);
				this.state = 398;
				this.usingForObjectDirective();
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 399;
					this.match(SolidityParser.T__15);
					this.state = 400;
					this.usingForObjectDirective();
					}
					}
					this.state = 405;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 406;
				this.match(SolidityParser.T__16);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingForObjectDirective(): UsingForObjectDirectiveContext {
		let _localctx: UsingForObjectDirectiveContext = new UsingForObjectDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SolidityParser.RULE_usingForObjectDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.userDefinedTypeName();
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__11) {
				{
				this.state = 411;
				this.match(SolidityParser.T__11);
				this.state = 412;
				this.userDefinableOperators();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userDefinableOperators(): UserDefinableOperatorsContext {
		let _localctx: UserDefinableOperatorsContext = new UserDefinableOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SolidityParser.RULE_userDefinableOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__2) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__27) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__33 - 32)) | (1 << (SolidityParser.T__34 - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefinition(): StructDefinitionContext {
		let _localctx: StructDefinitionContext = new StructDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SolidityParser.RULE_structDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(SolidityParser.T__35);
			this.state = 418;
			this.identifier();
			this.state = 419;
			this.match(SolidityParser.T__14);
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.Int - 95)) | (1 << (SolidityParser.Uint - 95)) | (1 << (SolidityParser.Byte - 95)) | (1 << (SolidityParser.Fixed - 95)) | (1 << (SolidityParser.Ufixed - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)) | (1 << (SolidityParser.LineComment - 127)))) !== 0)) {
				{
				this.state = 424;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 420;
					this.comment();
					}
					break;

				case 2:
					{
					{
					this.state = 421;
					this.variableDeclaration();
					this.state = 422;
					this.match(SolidityParser.T__1);
					}
					}
					break;
				}
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.Int - 95)) | (1 << (SolidityParser.Uint - 95)) | (1 << (SolidityParser.Byte - 95)) | (1 << (SolidityParser.Fixed - 95)) | (1 << (SolidityParser.Ufixed - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)) | (1 << (SolidityParser.LineComment - 127)))) !== 0)) {
					{
					this.state = 430;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						this.state = 426;
						this.comment();
						}
						break;

					case 2:
						{
						{
						this.state = 427;
						this.variableDeclaration();
						this.state = 428;
						this.match(SolidityParser.T__1);
						}
						}
						break;
					}
					}
					this.state = 434;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 437;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierDefinition(): ModifierDefinitionContext {
		let _localctx: ModifierDefinitionContext = new ModifierDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SolidityParser.RULE_modifierDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(SolidityParser.T__36);
			this.state = 440;
			this.identifier();
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__22) {
				{
				this.state = 441;
				this.parameterList();
				}
			}

			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__95 || _la === SolidityParser.VirtualKeyword) {
				{
				this.state = 446;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.VirtualKeyword:
					{
					this.state = 444;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;
				case SolidityParser.T__95:
					{
					this.state = 445;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 451;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__14:
				{
				this.state = 452;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierInvocation(): ModifierInvocationContext {
		let _localctx: ModifierInvocationContext = new ModifierInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SolidityParser.RULE_modifierInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.identifier();
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__22) {
				{
				this.state = 456;
				this.match(SolidityParser.T__22);
				this.state = 458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
					{
					this.state = 457;
					this.expressionList();
					}
				}

				this.state = 460;
				this.match(SolidityParser.T__23);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SolidityParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.functionDescriptor();
			this.state = 464;
			this.parameterList();
			this.state = 465;
			this.modifierList();
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__38) {
				{
				this.state = 466;
				this.returnParameters();
				}
			}

			this.state = 471;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 469;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__14:
				{
				this.state = 470;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDescriptor(): FunctionDescriptorContext {
		let _localctx: FunctionDescriptorContext = new FunctionDescriptorContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SolidityParser.RULE_functionDescriptor);
		let _la: number;
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__37:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 473;
				this.match(SolidityParser.T__37);
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
					{
					this.state = 474;
					this.identifier();
					}
				}

				}
				break;
			case SolidityParser.ConstructorKeyword:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 477;
				this.match(SolidityParser.ConstructorKeyword);
				}
				break;
			case SolidityParser.FallbackKeyword:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 478;
				this.match(SolidityParser.FallbackKeyword);
				}
				break;
			case SolidityParser.ReceiveKeyword:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 479;
				this.match(SolidityParser.ReceiveKeyword);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnParameters(): ReturnParametersContext {
		let _localctx: ReturnParametersContext = new ReturnParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SolidityParser.RULE_returnParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(SolidityParser.T__38);
			this.state = 483;
			this.parameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierList(): ModifierListContext {
		let _localctx: ModifierListContext = new ModifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SolidityParser.RULE_modifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.T__95 - 95)) | (1 << (SolidityParser.ConstantKeyword - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.ExternalKeyword - 95)) | (1 << (SolidityParser.InternalKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.PrivateKeyword - 95)) | (1 << (SolidityParser.PublicKeyword - 95)) | (1 << (SolidityParser.VirtualKeyword - 95)) | (1 << (SolidityParser.PureKeyword - 95)) | (1 << (SolidityParser.ViewKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 493;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 485;
					this.match(SolidityParser.ExternalKeyword);
					}
					break;

				case 2:
					{
					this.state = 486;
					this.match(SolidityParser.PublicKeyword);
					}
					break;

				case 3:
					{
					this.state = 487;
					this.match(SolidityParser.InternalKeyword);
					}
					break;

				case 4:
					{
					this.state = 488;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;

				case 5:
					{
					this.state = 489;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;

				case 6:
					{
					this.state = 490;
					this.stateMutability();
					}
					break;

				case 7:
					{
					this.state = 491;
					this.modifierInvocation();
					}
					break;

				case 8:
					{
					this.state = 492;
					this.overrideSpecifier();
					}
					break;
				}
				}
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefinition(): EventDefinitionContext {
		let _localctx: EventDefinitionContext = new EventDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SolidityParser.RULE_eventDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.match(SolidityParser.T__39);
			this.state = 499;
			this.identifier();
			this.state = 500;
			this.eventParameterList();
			this.state = 502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.AnonymousKeyword) {
				{
				this.state = 501;
				this.match(SolidityParser.AnonymousKeyword);
				}
			}

			this.state = 504;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValue(): EnumValueContext {
		let _localctx: EnumValueContext = new EnumValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SolidityParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDefinition(): EnumDefinitionContext {
		let _localctx: EnumDefinitionContext = new EnumDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SolidityParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(SolidityParser.T__40);
			this.state = 509;
			this.identifier();
			this.state = 510;
			this.match(SolidityParser.T__14);
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 511;
				this.enumValue();
				}
			}

			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__15) {
				{
				{
				this.state = 514;
				this.match(SolidityParser.T__15);
				this.state = 515;
				this.enumValue();
				}
				}
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 521;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SolidityParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(SolidityParser.T__22);
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.Int - 95)) | (1 << (SolidityParser.Uint - 95)) | (1 << (SolidityParser.Byte - 95)) | (1 << (SolidityParser.Fixed - 95)) | (1 << (SolidityParser.Ufixed - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)) | (1 << (SolidityParser.LineComment - 127)))) !== 0)) {
				{
				this.state = 525;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 524;
					this.comment();
					}
					break;
				}
				this.state = 527;
				this.parameter();
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 528;
					this.match(SolidityParser.T__15);
					this.state = 530;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
					case 1:
						{
						this.state = 529;
						this.comment();
						}
						break;
					}
					this.state = 532;
					this.parameter();
					}
					}
					this.state = 537;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 540;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SolidityParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.typeName(0);
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 543;
				this.storageLocation();
				}
				break;
			}
			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 546;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventParameterList(): EventParameterListContext {
		let _localctx: EventParameterListContext = new EventParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SolidityParser.RULE_eventParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.match(SolidityParser.T__22);
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.Int - 95)) | (1 << (SolidityParser.Uint - 95)) | (1 << (SolidityParser.Byte - 95)) | (1 << (SolidityParser.Fixed - 95)) | (1 << (SolidityParser.Ufixed - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 550;
				this.eventParameter();
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 551;
					this.match(SolidityParser.T__15);
					this.state = 552;
					this.eventParameter();
					}
					}
					this.state = 557;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 560;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventParameter(): EventParameterContext {
		let _localctx: EventParameterContext = new EventParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SolidityParser.RULE_eventParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.typeName(0);
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.IndexedKeyword) {
				{
				this.state = 563;
				this.match(SolidityParser.IndexedKeyword);
				}
			}

			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 566;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeParameterList(): FunctionTypeParameterListContext {
		let _localctx: FunctionTypeParameterListContext = new FunctionTypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SolidityParser.RULE_functionTypeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.match(SolidityParser.T__22);
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.Int - 95)) | (1 << (SolidityParser.Uint - 95)) | (1 << (SolidityParser.Byte - 95)) | (1 << (SolidityParser.Fixed - 95)) | (1 << (SolidityParser.Ufixed - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 570;
				this.functionTypeParameter();
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 571;
					this.match(SolidityParser.T__15);
					this.state = 572;
					this.functionTypeParameter();
					}
					}
					this.state = 577;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 580;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeParameter(): FunctionTypeParameterContext {
		let _localctx: FunctionTypeParameterContext = new FunctionTypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SolidityParser.RULE_functionTypeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this.typeName(0);
			this.state = 584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__48 - 48)) | (1 << (SolidityParser.T__49 - 48)))) !== 0)) {
				{
				this.state = 583;
				this.storageLocation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SolidityParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this.typeName(0);
			this.state = 588;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 587;
				this.storageLocation();
				}
				break;
			}
			this.state = 590;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeName(): TypeNameContext;
	public typeName(_p: number): TypeNameContext;
	// @RuleVersion(0)
	public typeName(_p?: number): TypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, _parentState);
		let _prevctx: TypeNameContext = _localctx;
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, SolidityParser.RULE_typeName, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 593;
				this.elementaryTypeName();
				}
				break;

			case 2:
				{
				this.state = 594;
				this.userDefinedTypeName();
				}
				break;

			case 3:
				{
				this.state = 595;
				this.mapping();
				}
				break;

			case 4:
				{
				this.state = 596;
				this.functionTypeName();
				}
				break;

			case 5:
				{
				this.state = 597;
				this.match(SolidityParser.T__43);
				this.state = 598;
				this.match(SolidityParser.PayableKeyword);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 609;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_typeName);
					this.state = 601;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 602;
					this.match(SolidityParser.T__41);
					this.state = 604;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
						{
						this.state = 603;
						this.expression(0);
						}
					}

					this.state = 606;
					this.match(SolidityParser.T__42);
					}
					}
				}
				this.state = 611;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		let _localctx: UserDefinedTypeNameContext = new UserDefinedTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SolidityParser.RULE_userDefinedTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.identifier();
			this.state = 617;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 613;
					this.match(SolidityParser.T__44);
					this.state = 614;
					this.identifier();
					}
					}
				}
				this.state = 619;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mappingKey(): MappingKeyContext {
		let _localctx: MappingKeyContext = new MappingKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SolidityParser.RULE_mappingKey);
		try {
			this.state = 622;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 620;
				this.elementaryTypeName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 621;
				this.userDefinedTypeName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapping(): MappingContext {
		let _localctx: MappingContext = new MappingContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SolidityParser.RULE_mapping);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this.match(SolidityParser.T__45);
			this.state = 625;
			this.match(SolidityParser.T__22);
			this.state = 626;
			this.mappingKey();
			this.state = 628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 627;
				this.mappingKeyName();
				}
			}

			this.state = 630;
			this.match(SolidityParser.T__46);
			this.state = 631;
			this.typeName(0);
			this.state = 633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 632;
				this.mappingValueName();
				}
			}

			this.state = 635;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mappingKeyName(): MappingKeyNameContext {
		let _localctx: MappingKeyNameContext = new MappingKeyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SolidityParser.RULE_mappingKeyName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mappingValueName(): MappingValueNameContext {
		let _localctx: MappingValueNameContext = new MappingValueNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SolidityParser.RULE_mappingValueName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 639;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeName(): FunctionTypeNameContext {
		let _localctx: FunctionTypeNameContext = new FunctionTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SolidityParser.RULE_functionTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.match(SolidityParser.T__37);
			this.state = 642;
			this.functionTypeParameterList();
			this.state = 648;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 646;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SolidityParser.InternalKeyword:
						{
						this.state = 643;
						this.match(SolidityParser.InternalKeyword);
						}
						break;
					case SolidityParser.ExternalKeyword:
						{
						this.state = 644;
						this.match(SolidityParser.ExternalKeyword);
						}
						break;
					case SolidityParser.ConstantKeyword:
					case SolidityParser.PayableKeyword:
					case SolidityParser.PureKeyword:
					case SolidityParser.ViewKeyword:
						{
						this.state = 645;
						this.stateMutability();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 650;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			this.state = 653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 651;
				this.match(SolidityParser.T__38);
				this.state = 652;
				this.functionTypeParameterList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageLocation(): StorageLocationContext {
		let _localctx: StorageLocationContext = new StorageLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SolidityParser.RULE_storageLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			_la = this._input.LA(1);
			if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__48 - 48)) | (1 << (SolidityParser.T__49 - 48)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateMutability(): StateMutabilityContext {
		let _localctx: StateMutabilityContext = new StateMutabilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SolidityParser.RULE_stateMutability);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			_la = this._input.LA(1);
			if (!(((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (SolidityParser.ConstantKeyword - 110)) | (1 << (SolidityParser.PayableKeyword - 110)) | (1 << (SolidityParser.PureKeyword - 110)) | (1 << (SolidityParser.ViewKeyword - 110)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SolidityParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.match(SolidityParser.T__14);
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__14) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__50 - 38)) | (1 << (SolidityParser.T__52 - 38)) | (1 << (SolidityParser.T__54 - 38)) | (1 << (SolidityParser.T__55 - 38)) | (1 << (SolidityParser.T__56 - 38)) | (1 << (SolidityParser.T__57 - 38)) | (1 << (SolidityParser.T__58 - 38)) | (1 << (SolidityParser.T__59 - 38)) | (1 << (SolidityParser.T__60 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.BreakKeyword - 103)) | (1 << (SolidityParser.ContinueKeyword - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)) | (1 << (SolidityParser.LineComment - 103)))) !== 0)) {
				{
				{
				this.state = 660;
				this.statement();
				}
				}
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 666;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SolidityParser.RULE_statement);
		try {
			this.state = 684;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 668;
				this.comment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 669;
				this.ifStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 670;
				this.tryStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 671;
				this.whileStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 672;
				this.forStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 673;
				this.block();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 674;
				this.inlineAssemblyStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 675;
				this.doWhileStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 676;
				this.continueStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 677;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 678;
				this.returnStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 679;
				this.throwStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 680;
				this.emitStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 681;
				this.simpleStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 682;
				this.uncheckedStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 683;
				this.revertStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SolidityParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.expression(0);
			this.state = 687;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SolidityParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this.match(SolidityParser.T__50);
			this.state = 690;
			this.match(SolidityParser.T__22);
			this.state = 691;
			this.expression(0);
			this.state = 692;
			this.match(SolidityParser.T__23);
			this.state = 693;
			this.statement();
			this.state = 696;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 694;
				this.match(SolidityParser.T__51);
				this.state = 695;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SolidityParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			this.match(SolidityParser.T__52);
			this.state = 699;
			this.expression(0);
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__38) {
				{
				this.state = 700;
				this.returnParameters();
				}
			}

			this.state = 703;
			this.block();
			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 704;
				this.catchClause();
				}
				}
				this.state = 707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SolidityParser.T__53);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SolidityParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.match(SolidityParser.T__53);
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
					{
					this.state = 710;
					this.identifier();
					}
				}

				this.state = 713;
				this.parameterList();
				}
			}

			this.state = 716;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SolidityParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(SolidityParser.T__54);
			this.state = 719;
			this.match(SolidityParser.T__22);
			this.state = 720;
			this.expression(0);
			this.state = 721;
			this.match(SolidityParser.T__23);
			this.state = 722;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleStatement(): SimpleStatementContext {
		let _localctx: SimpleStatementContext = new SimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SolidityParser.RULE_simpleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 724;
				this.variableDeclarationStatement();
				}
				break;

			case 2:
				{
				this.state = 725;
				this.expressionStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uncheckedStatement(): UncheckedStatementContext {
		let _localctx: UncheckedStatementContext = new UncheckedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SolidityParser.RULE_uncheckedStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.match(SolidityParser.T__55);
			this.state = 729;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SolidityParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.match(SolidityParser.T__26);
			this.state = 732;
			this.match(SolidityParser.T__22);
			this.state = 735;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__5:
			case SolidityParser.T__13:
			case SolidityParser.T__22:
			case SolidityParser.T__24:
			case SolidityParser.T__29:
			case SolidityParser.T__30:
			case SolidityParser.T__37:
			case SolidityParser.T__41:
			case SolidityParser.T__43:
			case SolidityParser.T__45:
			case SolidityParser.T__49:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.T__66:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__70:
			case SolidityParser.T__71:
			case SolidityParser.T__94:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.GlobalKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
			case SolidityParser.MultiLineComment:
				{
				this.state = 733;
				this.simpleStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 734;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 739;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__5:
			case SolidityParser.T__13:
			case SolidityParser.T__22:
			case SolidityParser.T__24:
			case SolidityParser.T__29:
			case SolidityParser.T__30:
			case SolidityParser.T__37:
			case SolidityParser.T__41:
			case SolidityParser.T__43:
			case SolidityParser.T__45:
			case SolidityParser.T__49:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.T__66:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__70:
			case SolidityParser.T__71:
			case SolidityParser.T__94:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.GlobalKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
			case SolidityParser.MultiLineComment:
				{
				this.state = 737;
				this.expressionStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 738;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
				{
				this.state = 741;
				this.expression(0);
				}
			}

			this.state = 744;
			this.match(SolidityParser.T__23);
			this.state = 745;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineAssemblyStatement(): InlineAssemblyStatementContext {
		let _localctx: InlineAssemblyStatementContext = new InlineAssemblyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SolidityParser.RULE_inlineAssemblyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.match(SolidityParser.T__56);
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.StringLiteralFragment) {
				{
				this.state = 748;
				this.match(SolidityParser.StringLiteralFragment);
				}
			}

			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__22) {
				{
				this.state = 751;
				this.match(SolidityParser.T__22);
				this.state = 752;
				this.inlineAssemblyStatementFlag();
				this.state = 753;
				this.match(SolidityParser.T__23);
				}
			}

			this.state = 757;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineAssemblyStatementFlag(): InlineAssemblyStatementFlagContext {
		let _localctx: InlineAssemblyStatementFlagContext = new InlineAssemblyStatementFlagContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SolidityParser.RULE_inlineAssemblyStatementFlag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.stringLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SolidityParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(SolidityParser.T__57);
			this.state = 762;
			this.statement();
			this.state = 763;
			this.match(SolidityParser.T__54);
			this.state = 764;
			this.match(SolidityParser.T__22);
			this.state = 765;
			this.expression(0);
			this.state = 766;
			this.match(SolidityParser.T__23);
			this.state = 767;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SolidityParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			this.match(SolidityParser.ContinueKeyword);
			this.state = 770;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SolidityParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this.match(SolidityParser.BreakKeyword);
			this.state = 773;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SolidityParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this.match(SolidityParser.T__58);
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
				{
				this.state = 776;
				this.expression(0);
				}
			}

			this.state = 779;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SolidityParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.match(SolidityParser.T__59);
			this.state = 782;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emitStatement(): EmitStatementContext {
		let _localctx: EmitStatementContext = new EmitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SolidityParser.RULE_emitStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this.match(SolidityParser.T__60);
			this.state = 785;
			this.functionCall();
			this.state = 786;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public revertStatement(): RevertStatementContext {
		let _localctx: RevertStatementContext = new RevertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SolidityParser.RULE_revertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 788;
			this.match(SolidityParser.T__61);
			this.state = 789;
			this.functionCall();
			this.state = 790;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		let _localctx: VariableDeclarationStatementContext = new VariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SolidityParser.RULE_variableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 799;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 792;
				this.match(SolidityParser.T__62);
				this.state = 793;
				this.identifierList();
				}
				break;

			case 2:
				{
				this.state = 794;
				this.variableDeclaration();
				}
				break;

			case 3:
				{
				this.state = 795;
				this.match(SolidityParser.T__22);
				this.state = 796;
				this.variableDeclarationList();
				this.state = 797;
				this.match(SolidityParser.T__23);
				}
				break;
			}
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__10) {
				{
				this.state = 801;
				this.match(SolidityParser.T__10);
				this.state = 802;
				this.expression(0);
				}
			}

			this.state = 805;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SolidityParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.Int - 95)) | (1 << (SolidityParser.Uint - 95)) | (1 << (SolidityParser.Byte - 95)) | (1 << (SolidityParser.Fixed - 95)) | (1 << (SolidityParser.Ufixed - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 807;
				this.variableDeclaration();
				}
			}

			this.state = 816;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__15) {
				{
				{
				this.state = 810;
				this.match(SolidityParser.T__15);
				this.state = 812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.Int - 95)) | (1 << (SolidityParser.Uint - 95)) | (1 << (SolidityParser.Byte - 95)) | (1 << (SolidityParser.Fixed - 95)) | (1 << (SolidityParser.Ufixed - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
					{
					this.state = 811;
					this.variableDeclaration();
					}
				}

				}
				}
				this.state = 818;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SolidityParser.RULE_identifierList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.match(SolidityParser.T__22);
			this.state = 826;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 821;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
						{
						this.state = 820;
						this.identifier();
						}
					}

					this.state = 823;
					this.match(SolidityParser.T__15);
					}
					}
				}
				this.state = 828;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			}
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 829;
				this.identifier();
				}
			}

			this.state = 832;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementaryTypeName(): ElementaryTypeNameContext {
		let _localctx: ElementaryTypeNameContext = new ElementaryTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SolidityParser.RULE_elementaryTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			_la = this._input.LA(1);
			if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__62 - 44)) | (1 << (SolidityParser.T__63 - 44)) | (1 << (SolidityParser.T__64 - 44)) | (1 << (SolidityParser.T__65 - 44)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (SolidityParser.Int - 97)) | (1 << (SolidityParser.Uint - 97)) | (1 << (SolidityParser.Byte - 97)) | (1 << (SolidityParser.Fixed - 97)) | (1 << (SolidityParser.Ufixed - 97)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 140;
		this.enterRecursionRule(_localctx, 140, SolidityParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 837;
				this.match(SolidityParser.T__68);
				this.state = 838;
				this.typeName(0);
				}
				break;

			case 2:
				{
				this.state = 839;
				this.match(SolidityParser.T__22);
				this.state = 840;
				this.expression(0);
				this.state = 841;
				this.match(SolidityParser.T__23);
				}
				break;

			case 3:
				{
				this.state = 843;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__66 || _la === SolidityParser.T__67)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 844;
				this.expression(19);
				}
				break;

			case 4:
				{
				this.state = 845;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__29 || _la === SolidityParser.T__30)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 846;
				this.expression(18);
				}
				break;

			case 5:
				{
				this.state = 847;
				this.match(SolidityParser.T__70);
				this.state = 848;
				this.expression(17);
				}
				break;

			case 6:
				{
				this.state = 849;
				this.match(SolidityParser.T__71);
				this.state = 850;
				this.expression(16);
				}
				break;

			case 7:
				{
				this.state = 851;
				this.match(SolidityParser.T__5);
				this.state = 852;
				this.expression(15);
				}
				break;

			case 8:
				{
				this.state = 853;
				this.primaryExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 930;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 928;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 856;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 857;
						this.match(SolidityParser.T__72);
						this.state = 858;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 859;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 860;
						_la = this._input.LA(1);
						if (!(((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (SolidityParser.T__2 - 3)) | (1 << (SolidityParser.T__31 - 3)) | (1 << (SolidityParser.T__32 - 3)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 861;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 862;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 863;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__29 || _la === SolidityParser.T__30)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 864;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 865;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 866;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__73 || _la === SolidityParser.T__74)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 867;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 868;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 869;
						this.match(SolidityParser.T__28);
						this.state = 870;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 871;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 872;
						this.match(SolidityParser.T__4);
						this.state = 873;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 874;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 875;
						this.match(SolidityParser.T__27);
						this.state = 876;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 877;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 878;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 879;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 880;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 881;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__33 || _la === SolidityParser.T__34)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 882;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 883;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 884;
						this.match(SolidityParser.T__75);
						this.state = 885;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 886;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 887;
						this.match(SolidityParser.T__3);
						this.state = 888;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 889;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 890;
						this.match(SolidityParser.T__76);
						this.state = 891;
						this.expression(0);
						this.state = 892;
						this.match(SolidityParser.T__69);
						this.state = 893;
						this.expression(4);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 895;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 896;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__10 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (SolidityParser.T__77 - 78)) | (1 << (SolidityParser.T__78 - 78)) | (1 << (SolidityParser.T__79 - 78)) | (1 << (SolidityParser.T__80 - 78)) | (1 << (SolidityParser.T__81 - 78)) | (1 << (SolidityParser.T__82 - 78)) | (1 << (SolidityParser.T__83 - 78)) | (1 << (SolidityParser.T__84 - 78)) | (1 << (SolidityParser.T__85 - 78)) | (1 << (SolidityParser.T__86 - 78)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 897;
						this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 898;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 899;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__66 || _la === SolidityParser.T__67)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 900;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 901;
						this.match(SolidityParser.T__41);
						this.state = 902;
						this.expression(0);
						this.state = 903;
						this.match(SolidityParser.T__42);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 905;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 906;
						this.match(SolidityParser.T__41);
						this.state = 908;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
							{
							this.state = 907;
							this.expression(0);
							}
						}

						this.state = 910;
						this.match(SolidityParser.T__69);
						this.state = 912;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
							{
							this.state = 911;
							this.expression(0);
							}
						}

						this.state = 914;
						this.match(SolidityParser.T__42);
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 915;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 916;
						this.match(SolidityParser.T__44);
						this.state = 917;
						this.identifier();
						}
						break;

					case 18:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 918;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 919;
						this.match(SolidityParser.T__14);
						this.state = 920;
						this.nameValueList();
						this.state = 921;
						this.match(SolidityParser.T__16);
						}
						break;

					case 19:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 923;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 924;
						this.match(SolidityParser.T__22);
						this.state = 925;
						this.functionCallArguments();
						this.state = 926;
						this.match(SolidityParser.T__23);
						}
						break;
					}
					}
				}
				this.state = 932;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SolidityParser.RULE_primaryExpression);
		try {
			this.state = 942;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 933;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 934;
				this.numberLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 935;
				this.hexLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 936;
				this.stringLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 937;
				this.identifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 938;
				this.match(SolidityParser.TypeKeyword);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 939;
				this.match(SolidityParser.PayableKeyword);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 940;
				this.tupleExpression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 941;
				this.typeName(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SolidityParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 944;
			this.expression(0);
			this.state = 949;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__15) {
				{
				{
				this.state = 945;
				this.match(SolidityParser.T__15);
				this.state = 946;
				this.expression(0);
				}
				}
				this.state = 951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameValueList(): NameValueListContext {
		let _localctx: NameValueListContext = new NameValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SolidityParser.RULE_nameValueList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.nameValue();
			this.state = 957;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 953;
					this.match(SolidityParser.T__15);
					this.state = 954;
					this.nameValue();
					}
					}
				}
				this.state = 959;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			}
			this.state = 961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__15) {
				{
				this.state = 960;
				this.match(SolidityParser.T__15);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameValue(): NameValueContext {
		let _localctx: NameValueContext = new NameValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SolidityParser.RULE_nameValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 963;
			this.identifier();
			this.state = 964;
			this.match(SolidityParser.T__69);
			this.state = 965;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCallArguments(): FunctionCallArgumentsContext {
		let _localctx: FunctionCallArgumentsContext = new FunctionCallArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SolidityParser.RULE_functionCallArguments);
		let _la: number;
		try {
			this.state = 975;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 967;
				this.match(SolidityParser.T__14);
				this.state = 969;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
					{
					this.state = 968;
					this.nameValueList();
					}
				}

				this.state = 971;
				this.match(SolidityParser.T__16);
				}
				break;
			case SolidityParser.T__5:
			case SolidityParser.T__13:
			case SolidityParser.T__22:
			case SolidityParser.T__23:
			case SolidityParser.T__24:
			case SolidityParser.T__29:
			case SolidityParser.T__30:
			case SolidityParser.T__37:
			case SolidityParser.T__41:
			case SolidityParser.T__43:
			case SolidityParser.T__45:
			case SolidityParser.T__49:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.T__66:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__70:
			case SolidityParser.T__71:
			case SolidityParser.T__94:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.GlobalKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
			case SolidityParser.MultiLineComment:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 973;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
					{
					this.state = 972;
					this.expressionList();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SolidityParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
			this.expression(0);
			this.state = 978;
			this.match(SolidityParser.T__22);
			this.state = 979;
			this.functionCallArguments();
			this.state = 980;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyBlock(): AssemblyBlockContext {
		let _localctx: AssemblyBlockContext = new AssemblyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SolidityParser.RULE_assemblyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982;
			this.match(SolidityParser.T__14);
			this.state = 986;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__14) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__50 - 38)) | (1 << (SolidityParser.T__58 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__65 - 38)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (SolidityParser.T__87 - 88)) | (1 << (SolidityParser.T__90 - 88)) | (1 << (SolidityParser.T__94 - 88)) | (1 << (SolidityParser.BooleanLiteral - 88)) | (1 << (SolidityParser.DecimalNumber - 88)) | (1 << (SolidityParser.HexNumber - 88)) | (1 << (SolidityParser.HexLiteralFragment - 88)) | (1 << (SolidityParser.BreakKeyword - 88)) | (1 << (SolidityParser.ContinueKeyword - 88)) | (1 << (SolidityParser.LeaveKeyword - 88)) | (1 << (SolidityParser.PayableKeyword - 88)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (SolidityParser.GlobalKeyword - 124)) | (1 << (SolidityParser.ConstructorKeyword - 124)) | (1 << (SolidityParser.ReceiveKeyword - 124)) | (1 << (SolidityParser.Identifier - 124)) | (1 << (SolidityParser.StringLiteralFragment - 124)) | (1 << (SolidityParser.MultiLineComment - 124)) | (1 << (SolidityParser.LineComment - 124)))) !== 0)) {
				{
				{
				this.state = 983;
				this.assemblyItem();
				}
				}
				this.state = 988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 989;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyItem(): AssemblyItemContext {
		let _localctx: AssemblyItemContext = new AssemblyItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SolidityParser.RULE_assemblyItem);
		try {
			this.state = 1009;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 991;
				this.comment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 992;
				this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 993;
				this.assemblyBlock();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 994;
				this.assemblyExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 995;
				this.assemblyLocalDefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 996;
				this.assemblyAssignment();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 997;
				this.assemblyStackAssignment();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 998;
				this.labelDefinition();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 999;
				this.assemblySwitch();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1000;
				this.assemblyFunctionDefinition();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1001;
				this.assemblyFor();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1002;
				this.assemblyIf();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1003;
				this.match(SolidityParser.BreakKeyword);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1004;
				this.match(SolidityParser.ContinueKeyword);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1005;
				this.match(SolidityParser.LeaveKeyword);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1006;
				this.numberLiteral();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1007;
				this.stringLiteral();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1008;
				this.hexLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyExpression(): AssemblyExpressionContext {
		let _localctx: AssemblyExpressionContext = new AssemblyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SolidityParser.RULE_assemblyExpression);
		try {
			this.state = 1014;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1011;
				this.assemblyCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1012;
				this.assemblyLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1013;
				this.assemblyMember();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyMember(): AssemblyMemberContext {
		let _localctx: AssemblyMemberContext = new AssemblyMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SolidityParser.RULE_assemblyMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1016;
			this.identifier();
			this.state = 1017;
			this.match(SolidityParser.T__44);
			this.state = 1018;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyCall(): AssemblyCallContext {
		let _localctx: AssemblyCallContext = new AssemblyCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SolidityParser.RULE_assemblyCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1024;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 1020;
				this.match(SolidityParser.T__58);
				}
				break;

			case 2:
				{
				this.state = 1021;
				this.match(SolidityParser.T__43);
				}
				break;

			case 3:
				{
				this.state = 1022;
				this.match(SolidityParser.T__65);
				}
				break;

			case 4:
				{
				this.state = 1023;
				this.identifier();
				}
				break;
			}
			this.state = 1038;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1026;
				this.match(SolidityParser.T__22);
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__58 - 44)) | (1 << (SolidityParser.T__61 - 44)) | (1 << (SolidityParser.T__65 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.BooleanLiteral - 95)) | (1 << (SolidityParser.DecimalNumber - 95)) | (1 << (SolidityParser.HexNumber - 95)) | (1 << (SolidityParser.HexLiteralFragment - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.StringLiteralFragment - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
					{
					this.state = 1027;
					this.assemblyExpression();
					}
				}

				this.state = 1034;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 1030;
					this.match(SolidityParser.T__15);
					this.state = 1031;
					this.assemblyExpression();
					}
					}
					this.state = 1036;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1037;
				this.match(SolidityParser.T__23);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext {
		let _localctx: AssemblyLocalDefinitionContext = new AssemblyLocalDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SolidityParser.RULE_assemblyLocalDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			this.match(SolidityParser.T__87);
			this.state = 1041;
			this.assemblyIdentifierOrList();
			this.state = 1044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__88) {
				{
				this.state = 1042;
				this.match(SolidityParser.T__88);
				this.state = 1043;
				this.assemblyExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyAssignment(): AssemblyAssignmentContext {
		let _localctx: AssemblyAssignmentContext = new AssemblyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SolidityParser.RULE_assemblyAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1046;
			this.assemblyIdentifierOrList();
			this.state = 1047;
			this.match(SolidityParser.T__88);
			this.state = 1048;
			this.assemblyExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		let _localctx: AssemblyIdentifierOrListContext = new AssemblyIdentifierOrListContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SolidityParser.RULE_assemblyIdentifierOrList);
		try {
			this.state = 1057;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1050;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1051;
				this.assemblyMember();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1052;
				this.assemblyIdentifierList();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1053;
				this.match(SolidityParser.T__22);
				this.state = 1054;
				this.assemblyIdentifierList();
				this.state = 1055;
				this.match(SolidityParser.T__23);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		let _localctx: AssemblyIdentifierListContext = new AssemblyIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SolidityParser.RULE_assemblyIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			this.identifier();
			this.state = 1064;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__15) {
				{
				{
				this.state = 1060;
				this.match(SolidityParser.T__15);
				this.state = 1061;
				this.identifier();
				}
				}
				this.state = 1066;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyStackAssignment(): AssemblyStackAssignmentContext {
		let _localctx: AssemblyStackAssignmentContext = new AssemblyStackAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SolidityParser.RULE_assemblyStackAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1067;
			this.assemblyExpression();
			this.state = 1068;
			this.match(SolidityParser.T__89);
			this.state = 1069;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelDefinition(): LabelDefinitionContext {
		let _localctx: LabelDefinitionContext = new LabelDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SolidityParser.RULE_labelDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1071;
			this.identifier();
			this.state = 1072;
			this.match(SolidityParser.T__69);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblySwitch(): AssemblySwitchContext {
		let _localctx: AssemblySwitchContext = new AssemblySwitchContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, SolidityParser.RULE_assemblySwitch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.match(SolidityParser.T__90);
			this.state = 1075;
			this.assemblyExpression();
			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__91 || _la === SolidityParser.T__92) {
				{
				{
				this.state = 1076;
				this.assemblyCase();
				}
				}
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyCase(): AssemblyCaseContext {
		let _localctx: AssemblyCaseContext = new AssemblyCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SolidityParser.RULE_assemblyCase);
		try {
			this.state = 1088;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__91:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1082;
				this.match(SolidityParser.T__91);
				this.state = 1083;
				this.assemblyLiteral();
				this.state = 1084;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__92:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1086;
				this.match(SolidityParser.T__92);
				this.state = 1087;
				this.assemblyBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext {
		let _localctx: AssemblyFunctionDefinitionContext = new AssemblyFunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, SolidityParser.RULE_assemblyFunctionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			this.match(SolidityParser.T__37);
			this.state = 1091;
			this.identifier();
			this.state = 1092;
			this.match(SolidityParser.T__22);
			this.state = 1094;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0)) {
				{
				this.state = 1093;
				this.assemblyIdentifierList();
				}
			}

			this.state = 1096;
			this.match(SolidityParser.T__23);
			this.state = 1098;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__93) {
				{
				this.state = 1097;
				this.assemblyFunctionReturns();
				}
			}

			this.state = 1100;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext {
		let _localctx: AssemblyFunctionReturnsContext = new AssemblyFunctionReturnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SolidityParser.RULE_assemblyFunctionReturns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1102;
			this.match(SolidityParser.T__93);
			this.state = 1103;
			this.assemblyIdentifierList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFor(): AssemblyForContext {
		let _localctx: AssemblyForContext = new AssemblyForContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, SolidityParser.RULE_assemblyFor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1105;
			this.match(SolidityParser.T__26);
			this.state = 1108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__14:
				{
				this.state = 1106;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__13:
			case SolidityParser.T__24:
			case SolidityParser.T__43:
			case SolidityParser.T__49:
			case SolidityParser.T__58:
			case SolidityParser.T__61:
			case SolidityParser.T__65:
			case SolidityParser.T__94:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.GlobalKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
			case SolidityParser.MultiLineComment:
				{
				this.state = 1107;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1110;
			this.assemblyExpression();
			this.state = 1113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__14:
				{
				this.state = 1111;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__13:
			case SolidityParser.T__24:
			case SolidityParser.T__43:
			case SolidityParser.T__49:
			case SolidityParser.T__58:
			case SolidityParser.T__61:
			case SolidityParser.T__65:
			case SolidityParser.T__94:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.GlobalKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
			case SolidityParser.MultiLineComment:
				{
				this.state = 1112;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1115;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIf(): AssemblyIfContext {
		let _localctx: AssemblyIfContext = new AssemblyIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, SolidityParser.RULE_assemblyIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1117;
			this.match(SolidityParser.T__50);
			this.state = 1118;
			this.assemblyExpression();
			this.state = 1119;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyLiteral(): AssemblyLiteralContext {
		let _localctx: AssemblyLiteralContext = new AssemblyLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, SolidityParser.RULE_assemblyLiteral);
		try {
			this.state = 1126;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.StringLiteralFragment:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1121;
				this.stringLiteral();
				}
				break;
			case SolidityParser.DecimalNumber:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1122;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			case SolidityParser.HexNumber:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1123;
				this.match(SolidityParser.HexNumber);
				}
				break;
			case SolidityParser.HexLiteralFragment:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1124;
				this.hexLiteral();
				}
				break;
			case SolidityParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1125;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, SolidityParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.state = 1154;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1128;
				this.match(SolidityParser.T__22);
				{
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
					{
					this.state = 1129;
					this.expression(0);
					}
				}

				this.state = 1138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 1132;
					this.match(SolidityParser.T__15);
					this.state = 1134;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
						{
						this.state = 1133;
						this.expression(0);
						}
					}

					}
					}
					this.state = 1140;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 1141;
				this.match(SolidityParser.T__23);
				}
				break;
			case SolidityParser.T__41:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1142;
				this.match(SolidityParser.T__41);
				this.state = 1151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__49 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SolidityParser.T__70 - 71)) | (1 << (SolidityParser.T__71 - 71)) | (1 << (SolidityParser.T__94 - 71)) | (1 << (SolidityParser.Int - 71)) | (1 << (SolidityParser.Uint - 71)) | (1 << (SolidityParser.Byte - 71)) | (1 << (SolidityParser.Fixed - 71)) | (1 << (SolidityParser.Ufixed - 71)) | (1 << (SolidityParser.BooleanLiteral - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.DecimalNumber - 103)) | (1 << (SolidityParser.HexNumber - 103)) | (1 << (SolidityParser.HexLiteralFragment - 103)) | (1 << (SolidityParser.LeaveKeyword - 103)) | (1 << (SolidityParser.PayableKeyword - 103)) | (1 << (SolidityParser.TypeKeyword - 103)) | (1 << (SolidityParser.GlobalKeyword - 103)) | (1 << (SolidityParser.ConstructorKeyword - 103)) | (1 << (SolidityParser.ReceiveKeyword - 103)) | (1 << (SolidityParser.Identifier - 103)) | (1 << (SolidityParser.StringLiteralFragment - 103)) | (1 << (SolidityParser.MultiLineComment - 103)))) !== 0)) {
					{
					this.state = 1143;
					this.expression(0);
					this.state = 1148;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SolidityParser.T__15) {
						{
						{
						this.state = 1144;
						this.match(SolidityParser.T__15);
						this.state = 1145;
						this.expression(0);
						}
						}
						this.state = 1150;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1153;
				this.match(SolidityParser.T__42);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberLiteral(): NumberLiteralContext {
		let _localctx: NumberLiteralContext = new NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, SolidityParser.RULE_numberLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1156;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.DecimalNumber || _la === SolidityParser.HexNumber)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1157;
				this.match(SolidityParser.NumberUnit);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, SolidityParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1160;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SolidityParser.T__43 - 44)) | (1 << (SolidityParser.T__49 - 44)) | (1 << (SolidityParser.T__61 - 44)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (SolidityParser.T__94 - 95)) | (1 << (SolidityParser.LeaveKeyword - 95)) | (1 << (SolidityParser.PayableKeyword - 95)) | (1 << (SolidityParser.GlobalKeyword - 95)) | (1 << (SolidityParser.ConstructorKeyword - 95)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (SolidityParser.ReceiveKeyword - 127)) | (1 << (SolidityParser.Identifier - 127)) | (1 << (SolidityParser.MultiLineComment - 127)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, SolidityParser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1162;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.MultiLineComment || _la === SolidityParser.LineComment)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hexLiteral(): HexLiteralContext {
		let _localctx: HexLiteralContext = new HexLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, SolidityParser.RULE_hexLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1164;
					this.match(SolidityParser.HexLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1167;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideSpecifier(): OverrideSpecifierContext {
		let _localctx: OverrideSpecifierContext = new OverrideSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, SolidityParser.RULE_overrideSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1169;
			this.match(SolidityParser.T__95);
			this.state = 1181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__22) {
				{
				this.state = 1170;
				this.match(SolidityParser.T__22);
				this.state = 1171;
				this.userDefinedTypeName();
				this.state = 1176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 1172;
					this.match(SolidityParser.T__15);
					this.state = 1173;
					this.userDefinedTypeName();
					}
					}
					this.state = 1178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1179;
				this.match(SolidityParser.T__23);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, SolidityParser.RULE_stringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1184;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1183;
					this.match(SolidityParser.StringLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1186;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 38:
			return this.typeName_sempred(_localctx as TypeNameContext, predIndex);

		case 70:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private typeName_sempred(_localctx: TypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 14);

		case 2:
			return this.precpred(this._ctx, 13);

		case 3:
			return this.precpred(this._ctx, 12);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 27);

		case 15:
			return this.precpred(this._ctx, 25);

		case 16:
			return this.precpred(this._ctx, 24);

		case 17:
			return this.precpred(this._ctx, 23);

		case 18:
			return this.precpred(this._ctx, 22);

		case 19:
			return this.precpred(this._ctx, 21);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x87\u04A7\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x07\x02\xDB\n\x02\f\x02\x0E\x02\xDE\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x05\x05\xEC\n\x05\x03\x06\x03\x06\x05\x06\xF0\n\x06\x03\x06\x07" +
		"\x06\xF3\n\x06\f\x06\x0E\x06\xF6\v\x06\x03\x07\x03\x07\x03\b\x05\b\xFB" +
		"\n\b\x03\b\x03\b\x05\b\xFF\n\b\x03\b\x05\b\u0102\n\b\x03\t\x03\t\x03\t" +
		"\x05\t\u0107\n\t\x03\n\x03\n\x03\n\x03\n\x05\n\u010D\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u0114\n\n\x03\n\x03\n\x05\n\u0118\n\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0123\n\n\f\n\x0E\n\u0126" +
		"\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u012D\n\n\x03\v\x03\v\x03\f\x05" +
		"\f\u0132\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u013A\n\f\f\f\x0E" +
		"\f\u013D\v\f\x05\f\u013F\n\f\x03\f\x03\f\x07\f\u0143\n\f\f\f\x0E\f\u0146" +
		"\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\u014D\n\r\x03\r\x05\r\u0150\n" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u015C\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\u0165\n\x0F\f\x0F\x0E\x0F\u0168\v\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u016D\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x05\x13\u0188\n\x13\x03\x13\x05\x13\u018B\n\x13\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0194\n\x14" +
		"\f\x14\x0E\x14\u0197\v\x14\x03\x14\x03\x14\x05\x14\u019B\n\x14\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u01A0\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u01AB\n\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x07\x17\u01B1\n\x17\f\x17\x0E\x17\u01B4\v\x17\x05\x17" +
		"\u01B6\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18\u01BD\n\x18" +
		"\x03\x18\x03\x18\x07\x18\u01C1\n\x18\f\x18\x0E\x18\u01C4\v\x18\x03\x18" +
		"\x03\x18\x05\x18\u01C8\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u01CD\n\x19" +
		"\x03\x19\x05\x19\u01D0\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01D6" +
		"\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01DA\n\x1A\x03\x1B\x03\x1B\x05\x1B\u01DE" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01E3\n\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07" +
		"\x1D\u01F0\n\x1D\f\x1D\x0E\x1D\u01F3\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u01F9\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03" +
		" \x03 \x05 \u0203\n \x03 \x03 \x07 \u0207\n \f \x0E \u020A\v \x03 \x03" +
		" \x03!\x03!\x05!\u0210\n!\x03!\x03!\x03!\x05!\u0215\n!\x03!\x07!\u0218" +
		"\n!\f!\x0E!\u021B\v!\x05!\u021D\n!\x03!\x03!\x03\"\x03\"\x05\"\u0223\n" +
		"\"\x03\"\x05\"\u0226\n\"\x03#\x03#\x03#\x03#\x07#\u022C\n#\f#\x0E#\u022F" +
		"\v#\x05#\u0231\n#\x03#\x03#\x03$\x03$\x05$\u0237\n$\x03$\x05$\u023A\n" +
		"$\x03%\x03%\x03%\x03%\x07%\u0240\n%\f%\x0E%\u0243\v%\x05%\u0245\n%\x03" +
		"%\x03%\x03&\x03&\x05&\u024B\n&\x03\'\x03\'\x05\'\u024F\n\'\x03\'\x03\'" +
		"\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u025A\n(\x03(\x03(\x03(\x05(" +
		"\u025F\n(\x03(\x07(\u0262\n(\f(\x0E(\u0265\v(\x03)\x03)\x03)\x07)\u026A" +
		"\n)\f)\x0E)\u026D\v)\x03*\x03*\x05*\u0271\n*\x03+\x03+\x03+\x03+\x05+" +
		"\u0277\n+\x03+\x03+\x03+\x05+\u027C\n+\x03+\x03+\x03,\x03,\x03-\x03-\x03" +
		".\x03.\x03.\x03.\x03.\x07.\u0289\n.\f.\x0E.\u028C\v.\x03.\x03.\x05.\u0290" +
		"\n.\x03/\x03/\x030\x030\x031\x031\x071\u0298\n1\f1\x0E1\u029B\v1\x031" +
		"\x031\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x052\u02AF\n2\x033\x033\x033\x034\x034\x034\x034\x03" +
		"4\x034\x034\x054\u02BB\n4\x035\x035\x035\x055\u02C0\n5\x035\x035\x065" +
		"\u02C4\n5\r5\x0E5\u02C5\x036\x036\x056\u02CA\n6\x036\x056\u02CD\n6\x03" +
		"6\x036\x037\x037\x037\x037\x037\x037\x038\x038\x058\u02D9\n8\x039\x03" +
		"9\x039\x03:\x03:\x03:\x03:\x05:\u02E2\n:\x03:\x03:\x05:\u02E6\n:\x03:" +
		"\x05:\u02E9\n:\x03:\x03:\x03:\x03;\x03;\x05;\u02F0\n;\x03;\x03;\x03;\x03" +
		";\x05;\u02F6\n;\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x03>\x03>\x03>\x03?\x03?\x03?\x03@\x03@\x05@\u030C\n@\x03@\x03" +
		"@\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x05D\u0322\nD\x03D\x03D\x05D\u0326\nD\x03D\x03D" +
		"\x03E\x05E\u032B\nE\x03E\x03E\x05E\u032F\nE\x07E\u0331\nE\fE\x0EE\u0334" +
		"\vE\x03F\x03F\x05F\u0338\nF\x03F\x07F\u033B\nF\fF\x0EF\u033E\vF\x03F\x05" +
		"F\u0341\nF\x03F\x03F\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0359\nH\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u038F\nH\x03H\x03" +
		"H\x05H\u0393\nH\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x07H\u03A3\nH\fH\x0EH\u03A6\vH\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x05I\u03B1\nI\x03J\x03J\x03J\x07J\u03B6\nJ\fJ\x0E" +
		"J\u03B9\vJ\x03K\x03K\x03K\x07K\u03BE\nK\fK\x0EK\u03C1\vK\x03K\x05K\u03C4" +
		"\nK\x03L\x03L\x03L\x03L\x03M\x03M\x05M\u03CC\nM\x03M\x03M\x05M\u03D0\n" +
		"M\x05M\u03D2\nM\x03N\x03N\x03N\x03N\x03N\x03O\x03O\x07O\u03DB\nO\fO\x0E" +
		"O\u03DE\vO\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
		"P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u03F4\nP\x03Q\x03Q\x03" +
		"Q\x05Q\u03F9\nQ\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x05S\u0403\nS" +
		"\x03S\x03S\x05S\u0407\nS\x03S\x03S\x07S\u040B\nS\fS\x0ES\u040E\vS\x03" +
		"S\x05S\u0411\nS\x03T\x03T\x03T\x03T\x05T\u0417\nT\x03U\x03U\x03U\x03U" +
		"\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u0424\nV\x03W\x03W\x03W\x07W" +
		"\u0429\nW\fW\x0EW\u042C\vW\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Z\x03" +
		"Z\x03Z\x07Z\u0438\nZ\fZ\x0EZ\u043B\vZ\x03[\x03[\x03[\x03[\x03[\x03[\x05" +
		"[\u0443\n[\x03\\\x03\\\x03\\\x03\\\x05\\\u0449\n\\\x03\\\x03\\\x05\\\u044D" +
		"\n\\\x03\\\x03\\\x03]\x03]\x03]\x03^\x03^\x03^\x05^\u0457\n^\x03^\x03" +
		"^\x03^\x05^\u045C\n^\x03^\x03^\x03_\x03_\x03_\x03_\x03`\x03`\x03`\x03" +
		"`\x03`\x05`\u0469\n`\x03a\x03a\x05a\u046D\na\x03a\x03a\x05a\u0471\na\x07" +
		"a\u0473\na\fa\x0Ea\u0476\va\x03a\x03a\x03a\x03a\x03a\x07a\u047D\na\fa" +
		"\x0Ea\u0480\va\x05a\u0482\na\x03a\x05a\u0485\na\x03b\x03b\x05b\u0489\n" +
		"b\x03c\x03c\x03d\x03d\x03e\x06e\u0490\ne\re\x0Ee\u0491\x03f\x03f\x03f" +
		"\x03f\x03f\x07f\u0499\nf\ff\x0Ef\u049C\vf\x03f\x03f\x05f\u04A0\nf\x03" +
		"g\x06g\u04A3\ng\rg\x0Eg\u04A4\x03g\x02\x02\x04N\x8Eh\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
		"\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02" +
		"\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02" +
		"\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02" +
		"\xCC\x02\x02\x12\x03\x02\x07\r\x03\x02\x15\x17\x05\x02\x05\x05\x07\f\x1E" +
		"%\x03\x0224\x06\x02ppww{{}}\x05\x02..ADcg\x03\x02EF\x03\x02 !\x04\x02" +
		"\x05\x05\"#\x03\x02LM\x03\x02\t\f\x03\x02$%\x04\x02\r\rPY\x03\x02ij\r" +
		"\x02\x10\x10\x1B\x1B..44@@aassww~\x7F\x81\x82\x86\x86\x03\x02\x86\x87" +
		"\x02\u052F\x02\xDC\x03\x02\x02\x02\x04\xE1\x03\x02\x02\x02\x06\xE6\x03" +
		"\x02\x02\x02\b\xEB\x03\x02\x02\x02\n\xED\x03\x02\x02\x02\f\xF7\x03\x02" +
		"\x02\x02\x0E\u0101\x03\x02\x02\x02\x10\u0103\x03\x02\x02\x02\x12\u012C" +
		"\x03\x02\x02\x02\x14\u012E\x03\x02\x02\x02\x16\u0131\x03\x02\x02\x02\x18" +
		"\u0149\x03\x02\x02\x02\x1A\u015B\x03\x02\x02\x02\x1C\u015D\x03\x02\x02" +
		"\x02\x1E\u0170\x03\x02\x02\x02 \u0177\x03\x02\x02\x02\"\u017C\x03\x02" +
		"\x02\x02$\u0182\x03\x02\x02\x02&\u019A\x03\x02\x02\x02(\u019C\x03\x02" +
		"\x02\x02*\u01A1\x03\x02\x02\x02,\u01A3\x03\x02\x02\x02.\u01B9\x03\x02" +
		"\x02\x020\u01C9\x03\x02\x02\x022\u01D1\x03\x02\x02\x024\u01E2\x03\x02" +
		"\x02\x026\u01E4\x03\x02\x02\x028\u01F1\x03\x02\x02\x02:\u01F4\x03\x02" +
		"\x02\x02<\u01FC\x03\x02\x02\x02>\u01FE\x03\x02\x02\x02@\u020D\x03\x02" +
		"\x02\x02B\u0220\x03\x02\x02\x02D\u0227\x03\x02\x02\x02F\u0234\x03\x02" +
		"\x02\x02H\u023B\x03\x02\x02\x02J\u0248\x03\x02\x02\x02L\u024C\x03\x02" +
		"\x02\x02N\u0259\x03\x02\x02\x02P\u0266\x03\x02\x02\x02R\u0270\x03\x02" +
		"\x02\x02T\u0272\x03\x02\x02\x02V\u027F\x03\x02\x02\x02X\u0281\x03\x02" +
		"\x02\x02Z\u0283\x03\x02\x02\x02\\\u0291\x03\x02\x02\x02^\u0293\x03\x02" +
		"\x02\x02`\u0295\x03\x02\x02\x02b\u02AE\x03\x02\x02\x02d\u02B0\x03\x02" +
		"\x02\x02f\u02B3\x03\x02\x02\x02h\u02BC\x03\x02\x02\x02j\u02C7\x03\x02" +
		"\x02\x02l\u02D0\x03\x02\x02\x02n\u02D8\x03\x02\x02\x02p\u02DA\x03\x02" +
		"\x02\x02r\u02DD\x03\x02\x02\x02t\u02ED\x03\x02\x02\x02v\u02F9\x03\x02" +
		"\x02\x02x\u02FB\x03\x02\x02\x02z\u0303\x03\x02\x02\x02|\u0306\x03\x02" +
		"\x02\x02~\u0309\x03\x02\x02\x02\x80\u030F\x03\x02\x02\x02\x82\u0312\x03" +
		"\x02\x02\x02\x84\u0316\x03\x02\x02\x02\x86\u0321\x03\x02\x02\x02\x88\u032A" +
		"\x03\x02\x02\x02\x8A\u0335\x03\x02\x02\x02\x8C\u0344\x03\x02\x02\x02\x8E" +
		"\u0358\x03\x02\x02\x02\x90\u03B0\x03\x02\x02\x02\x92\u03B2\x03\x02\x02" +
		"\x02\x94\u03BA\x03\x02\x02\x02\x96\u03C5\x03\x02\x02\x02\x98\u03D1\x03" +
		"\x02\x02\x02\x9A\u03D3\x03\x02\x02\x02\x9C\u03D8\x03\x02\x02\x02\x9E\u03F3" +
		"\x03\x02\x02\x02\xA0\u03F8\x03\x02\x02\x02\xA2\u03FA\x03\x02\x02\x02\xA4" +
		"\u0402\x03\x02\x02\x02\xA6\u0412\x03\x02\x02\x02\xA8\u0418\x03\x02\x02" +
		"\x02\xAA\u0423\x03\x02\x02\x02\xAC\u0425\x03\x02\x02\x02\xAE\u042D\x03" +
		"\x02\x02\x02\xB0\u0431\x03\x02\x02\x02\xB2\u0434\x03\x02\x02\x02\xB4\u0442" +
		"\x03\x02\x02\x02\xB6\u0444\x03\x02\x02\x02\xB8\u0450\x03\x02\x02\x02\xBA" +
		"\u0453\x03\x02\x02\x02\xBC\u045F\x03\x02\x02\x02\xBE\u0468\x03\x02\x02" +
		"\x02\xC0\u0484\x03\x02\x02\x02\xC2\u0486\x03\x02\x02\x02\xC4\u048A\x03" +
		"\x02\x02\x02\xC6\u048C\x03\x02\x02\x02\xC8\u048F\x03\x02\x02\x02\xCA\u0493" +
		"\x03\x02\x02\x02\xCC\u04A2\x03\x02\x02\x02\xCE\xDB\x05\xC6d\x02\xCF\xDB" +
		"\x05\x04\x03\x02\xD0\xDB\x05\x12\n\x02\xD1\xDB\x05\x16\f\x02\xD2\xDB\x05" +
		"> \x02\xD3\xDB\x05:\x1E\x02\xD4\xDB\x05,\x17\x02\xD5\xDB\x052\x1A\x02" +
		"\xD6\xDB\x05\x1E\x10\x02\xD7\xDB\x05 \x11\x02\xD8\xDB\x05\"\x12\x02\xD9" +
		"\xDB\x05$\x13\x02\xDA\xCE\x03\x02\x02\x02\xDA\xCF\x03\x02\x02\x02\xDA" +
		"\xD0\x03\x02\x02\x02\xDA\xD1\x03\x02\x02\x02\xDA\xD2\x03\x02\x02\x02\xDA" +
		"\xD3\x03\x02\x02\x02\xDA\xD4\x03\x02\x02\x02\xDA\xD5\x03\x02\x02\x02\xDA" +
		"\xD6\x03\x02\x02\x02\xDA\xD7\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA" +
		"\xD9\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC" +
		"\xDD\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF" +
		"\xE0\x07\x02\x02\x03\xE0\x03\x03\x02\x02\x02\xE1\xE2\x07\x03\x02\x02\xE2" +
		"\xE3\x05\x06\x04\x02\xE3\xE4\x05\b\x05\x02\xE4\xE5\x07\x04\x02\x02\xE5" +
		"\x05\x03\x02\x02\x02\xE6\xE7\x05\xC4c\x02\xE7\x07\x03\x02\x02\x02\xE8" +
		"\xEC\x07\x05\x02\x02\xE9\xEC\x05\n\x06\x02\xEA\xEC\x05\x8EH\x02\xEB\xE8" +
		"\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEA\x03\x02\x02\x02\xEC\t" +
		"\x03\x02\x02\x02\xED\xF4\x05\x0E\b\x02\xEE\xF0\x07\x06\x02\x02\xEF\xEE" +
		"\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3" +
		"\x05\x0E\b\x02\xF2\xEF\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2" +
		"\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\v\x03\x02\x02\x02\xF6\xF4" +
		"\x03\x02\x02\x02\xF7\xF8\t\x02\x02\x02\xF8\r\x03\x02\x02\x02\xF9\xFB\x05" +
		"\f\x07\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x03" +
		"\x02\x02\x02\xFC\u0102\x07\x84\x02\x02\xFD\xFF\x05\f\x07\x02\xFE\xFD\x03" +
		"\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102" +
		"\x07i\x02\x02\u0101\xFA\x03\x02\x02\x02\u0101\xFE\x03\x02\x02\x02\u0102" +
		"\x0F\x03\x02\x02\x02\u0103\u0106\x05\xC4c\x02\u0104\u0105\x07\x0E\x02" +
		"\x02\u0105\u0107\x05\xC4c\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107" +
		"\x03\x02\x02\x02\u0107\x11\x03\x02\x02\x02\u0108\u0109\x07\x0F\x02\x02" +
		"\u0109\u010C\x05\x14\v\x02\u010A\u010B\x07\x0E\x02\x02\u010B\u010D\x05" +
		"\xC4c\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D" +
		"\u010E\x03\x02\x02\x02\u010E\u010F\x07\x04\x02\x02\u010F\u012D\x03\x02" +
		"\x02\x02\u0110\u0113\x07\x0F\x02\x02\u0111\u0114\x07\x05\x02\x02\u0112" +
		"\u0114\x05\xC4c\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0112\x03\x02\x02" +
		"\x02\u0114\u0117\x03\x02\x02\x02\u0115\u0116\x07\x0E\x02\x02\u0116\u0118" +
		"\x05\xC4c\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02" +
		"\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x07\x10\x02\x02\u011A\u011B\x05" +
		"\x14\v\x02\u011B\u011C\x07\x04\x02\x02\u011C\u012D\x03\x02\x02\x02\u011D" +
		"\u011E\x07\x0F\x02\x02\u011E\u011F\x07\x11\x02\x02\u011F\u0124\x05\x10" +
		"\t\x02\u0120\u0121\x07\x12\x02\x02\u0121\u0123\x05\x10\t\x02\u0122\u0120" +
		"\x03\x02\x02\x02\u0123\u0126\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02" +
		"\u0124\u0125\x03\x02\x02\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0124\x03" +
		"\x02\x02\x02\u0127\u0128\x07\x13\x02\x02\u0128\u0129\x07\x10\x02\x02\u0129" +
		"\u012A\x05\x14\v\x02\u012A\u012B\x07\x04\x02\x02\u012B\u012D\x03\x02\x02" +
		"\x02\u012C\u0108\x03\x02\x02\x02\u012C\u0110\x03\x02\x02\x02\u012C\u011D" +
		"\x03\x02\x02\x02\u012D\x13\x03\x02\x02\x02\u012E\u012F\x07\x83\x02\x02" +
		"\u012F\x15\x03\x02\x02\x02\u0130\u0132\x07\x14\x02\x02\u0131\u0130\x03" +
		"\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133" +
		"\u0134\t\x03\x02\x02\u0134\u013E\x05\xC4c\x02\u0135\u0136\x07\x18\x02" +
		"\x02\u0136\u013B\x05\x18\r\x02\u0137\u0138\x07\x12\x02\x02\u0138\u013A" +
		"\x05\x18\r\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02" +
		"\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013F\x03" +
		"\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E\u0135\x03\x02\x02\x02\u013E" +
		"\u013F\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0144\x07\x11" +
		"\x02\x02\u0141\u0143\x05\x1A\x0E\x02\u0142\u0141\x03\x02\x02\x02\u0143" +
		"\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02" +
		"\x02\x02\u0145\u0147\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147" +
		"\u0148\x07\x13\x02\x02\u0148\x17\x03\x02\x02\x02\u0149\u014F\x05P)\x02" +
		"\u014A\u014C\x07\x19\x02\x02\u014B\u014D\x05\x92J\x02\u014C\u014B\x03" +
		"\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E" +
		"\u0150\x07\x1A\x02\x02\u014F\u014A\x03\x02\x02\x02\u014F\u0150\x03\x02" +
		"\x02\x02\u0150\x19\x03\x02\x02\x02\u0151\u015C\x05\xC6d\x02\u0152\u015C" +
		"\x05\x1C\x0F\x02\u0153\u015C\x05$\x13\x02\u0154\u015C\x05,\x17\x02\u0155" +
		"\u015C\x05.\x18\x02\u0156\u015C\x052\x1A\x02\u0157\u015C\x05:\x1E\x02" +
		"\u0158\u015C\x05> \x02\u0159\u015C\x05 \x11\x02\u015A\u015C\x05\"\x12" +
		"\x02\u015B\u0151\x03\x02\x02\x02\u015B\u0152\x03\x02\x02\x02\u015B\u0153" +
		"\x03\x02\x02\x02\u015B\u0154\x03\x02\x02\x02\u015B\u0155\x03\x02\x02\x02" +
		"\u015B\u0156\x03\x02\x02\x02\u015B\u0157\x03\x02\x02\x02\u015B\u0158\x03" +
		"\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015A\x03\x02\x02\x02\u015C" +
		"\x1B\x03\x02\x02\x02\u015D\u0166\x05N(\x02\u015E\u0165\x07y\x02\x02\u015F" +
		"\u0165\x07v\x02\x02\u0160\u0165\x07x\x02\x02\u0161\u0165\x07p\x02\x02" +
		"\u0162\u0165\x07q\x02\x02\u0163\u0165\x05\xCAf\x02\u0164\u015E\x03\x02" +
		"\x02\x02\u0164\u015F\x03\x02\x02\x02\u0164\u0160\x03\x02\x02\x02\u0164" +
		"\u0161\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164\u0163\x03\x02" +
		"\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166" +
		"\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168\u0166\x03\x02" +
		"\x02\x02\u0169\u016C\x05\xC4c\x02\u016A\u016B\x07\r\x02\x02\u016B\u016D" +
		"\x05\x8EH\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02" +
		"\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x07\x04\x02\x02\u016F\x1D\x03" +
		"\x02\x02\x02\u0170\u0171\x05N(\x02\u0171\u0172\x07p\x02\x02\u0172\u0173" +
		"\x05\xC4c\x02\u0173\u0174\x07\r\x02\x02\u0174\u0175\x05\x8EH\x02\u0175" +
		"\u0176\x07\x04\x02\x02\u0176\x1F\x03\x02\x02\x02\u0177\u0178\x07\x1B\x02" +
		"\x02\u0178\u0179\x05\xC4c\x02\u0179\u017A\x05@!\x02\u017A\u017B\x07\x04" +
		"\x02\x02\u017B!\x03\x02\x02\x02\u017C\u017D\x07|\x02\x02\u017D\u017E\x05" +
		"\xC4c\x02\u017E\u017F\x07\x18\x02\x02\u017F\u0180\x05\x8CG\x02\u0180\u0181" +
		"\x07\x04\x02\x02\u0181#\x03\x02\x02\x02\u0182\u0183\x07\x1C\x02\x02\u0183" +
		"\u0184\x05&\x14\x02\u0184\u0187\x07\x1D\x02\x02\u0185\u0188\x07\x05\x02" +
		"\x02\u0186\u0188\x05N(\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0186\x03" +
		"\x02\x02\x02\u0188\u018A\x03\x02\x02\x02\u0189\u018B\x07~\x02\x02\u018A" +
		"\u0189\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018C\x03\x02" +
		"\x02\x02\u018C\u018D\x07\x04\x02\x02\u018D%\x03\x02\x02\x02\u018E\u019B" +
		"\x05P)\x02\u018F\u0190\x07\x11\x02\x02\u0190\u0195\x05(\x15\x02\u0191" +
		"\u0192\x07\x12\x02\x02\u0192\u0194\x05(\x15\x02\u0193\u0191\x03\x02\x02" +
		"\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196" +
		"\x03\x02\x02\x02\u0196\u0198\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02" +
		"\u0198\u0199\x07\x13";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0199\u019B\x03\x02\x02\x02\u019A\u018E\x03\x02\x02\x02\u019A" +
		"\u018F\x03\x02\x02\x02\u019B\'\x03\x02\x02\x02\u019C\u019F\x05P)\x02\u019D" +
		"\u019E\x07\x0E\x02\x02\u019E\u01A0\x05*\x16\x02\u019F\u019D\x03\x02\x02" +
		"\x02\u019F\u01A0\x03\x02\x02\x02\u01A0)\x03\x02\x02\x02\u01A1\u01A2\t" +
		"\x04\x02\x02\u01A2+\x03\x02\x02\x02\u01A3\u01A4\x07&\x02\x02\u01A4\u01A5" +
		"\x05\xC4c\x02\u01A5\u01B5\x07\x11\x02\x02\u01A6\u01AB\x05\xC6d\x02\u01A7" +
		"\u01A8\x05L\'\x02\u01A8\u01A9\x07\x04\x02\x02\u01A9\u01AB\x03\x02\x02" +
		"\x02\u01AA\u01A6\x03\x02\x02\x02\u01AA\u01A7\x03\x02\x02\x02\u01AB\u01B2" +
		"\x03\x02\x02\x02\u01AC\u01B1\x05\xC6d\x02\u01AD\u01AE\x05L\'\x02\u01AE" +
		"\u01AF\x07\x04\x02\x02\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01AC\x03\x02" +
		"\x02\x02\u01B0\u01AD\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2" +
		"\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B6\x03\x02" +
		"\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01AA\x03\x02\x02\x02\u01B5" +
		"\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x07\x13" +
		"\x02\x02\u01B8-\x03\x02\x02\x02\u01B9\u01BA\x07\'\x02\x02\u01BA\u01BC" +
		"\x05\xC4c\x02\u01BB\u01BD\x05@!\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC" +
		"\u01BD\x03\x02\x02\x02\u01BD\u01C2\x03\x02\x02\x02\u01BE\u01C1\x07z\x02" +
		"\x02\u01BF\u01C1\x05\xCAf\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01BF" +
		"\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02" +
		"\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C7\x03\x02\x02\x02\u01C4\u01C2\x03" +
		"\x02\x02\x02\u01C5\u01C8\x07\x04\x02\x02\u01C6\u01C8\x05`1\x02\u01C7\u01C5" +
		"\x03\x02\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8/\x03\x02\x02\x02\u01C9" +
		"\u01CF\x05\xC4c\x02\u01CA\u01CC\x07\x19\x02\x02\u01CB\u01CD\x05\x92J\x02" +
		"\u01CC\u01CB\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03" +
		"\x02\x02\x02\u01CE\u01D0\x07\x1A\x02\x02\u01CF\u01CA\x03\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D01\x03\x02\x02\x02\u01D1\u01D2\x054\x1B\x02" +
		"\u01D2\u01D3\x05@!\x02\u01D3\u01D5\x058\x1D\x02\u01D4\u01D6\x056\x1C\x02" +
		"\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D9\x03" +
		"\x02\x02\x02\u01D7\u01DA\x07\x04\x02\x02\u01D8\u01DA\x05`1\x02\u01D9\u01D7" +
		"\x03\x02\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01DA3\x03\x02\x02\x02\u01DB" +
		"\u01DD\x07(\x02\x02\u01DC\u01DE\x05\xC4c\x02\u01DD\u01DC\x03\x02\x02\x02" +
		"\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E3\x03\x02\x02\x02\u01DF\u01E3\x07" +
		"\x7F\x02\x02\u01E0\u01E3\x07\x80\x02\x02\u01E1\u01E3\x07\x81\x02\x02\u01E2" +
		"\u01DB\x03\x02\x02\x02\u01E2\u01DF\x03\x02\x02\x02\u01E2\u01E0\x03\x02" +
		"\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E35\x03\x02\x02\x02\u01E4\u01E5" +
		"\x07)\x02\x02\u01E5\u01E6\x05@!\x02\u01E67\x03\x02\x02\x02\u01E7\u01F0" +
		"\x07t\x02\x02\u01E8\u01F0\x07y\x02\x02\u01E9\u01F0\x07v\x02\x02\u01EA" +
		"\u01F0\x07x\x02\x02\u01EB\u01F0\x07z\x02\x02\u01EC\u01F0\x05^0\x02\u01ED" +
		"\u01F0\x050\x19\x02\u01EE\u01F0\x05\xCAf\x02\u01EF\u01E7\x03\x02\x02\x02" +
		"\u01EF\u01E8\x03\x02\x02\x02\u01EF\u01E9\x03\x02\x02\x02\u01EF\u01EA\x03" +
		"\x02\x02\x02\u01EF\u01EB\x03\x02\x02\x02\u01EF\u01EC\x03\x02\x02\x02\u01EF" +
		"\u01ED\x03\x02\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F3\x03\x02" +
		"\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
		"9\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4\u01F5\x07*\x02\x02" +
		"\u01F5\u01F6\x05\xC4c\x02\u01F6\u01F8\x05D#\x02\u01F7\u01F9\x07n\x02\x02" +
		"\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA\x03" +
		"\x02\x02\x02\u01FA\u01FB\x07\x04\x02\x02\u01FB;\x03\x02\x02\x02\u01FC" +
		"\u01FD\x05\xC4c\x02\u01FD=\x03\x02\x02\x02\u01FE\u01FF\x07+\x02\x02\u01FF" +
		"\u0200\x05\xC4c\x02\u0200\u0202\x07\x11\x02\x02\u0201\u0203\x05<\x1F\x02" +
		"\u0202\u0201\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0208\x03" +
		"\x02\x02\x02\u0204\u0205\x07\x12\x02\x02\u0205\u0207\x05<\x1F\x02\u0206" +
		"\u0204\x03\x02\x02\x02\u0207\u020A\x03\x02\x02\x02\u0208\u0206\x03\x02" +
		"\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020B\x03\x02\x02\x02\u020A" +
		"\u0208\x03\x02\x02\x02\u020B\u020C\x07\x13\x02\x02\u020C?\x03\x02\x02" +
		"\x02\u020D\u021C\x07\x19\x02\x02\u020E\u0210\x05\xC6d\x02\u020F\u020E" +
		"\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02" +
		"\u0211\u0219\x05B\"\x02\u0212\u0214\x07\x12\x02\x02\u0213\u0215\x05\xC6" +
		"d\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0216" +
		"\x03\x02\x02\x02\u0216\u0218\x05B\"\x02\u0217\u0212\x03\x02\x02\x02\u0218" +
		"\u021B\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02" +
		"\x02\x02\u021A\u021D\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C" +
		"\u020F\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x03\x02" +
		"\x02\x02\u021E\u021F\x07\x1A\x02\x02\u021FA\x03\x02\x02\x02\u0220\u0222" +
		"\x05N(\x02\u0221\u0223\x05\\/\x02\u0222\u0221\x03\x02\x02\x02\u0222\u0223" +
		"\x03\x02\x02\x02\u0223\u0225\x03\x02\x02\x02\u0224\u0226\x05\xC4c\x02" +
		"\u0225\u0224\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226C\x03\x02" +
		"\x02\x02\u0227\u0230\x07\x19\x02\x02\u0228\u022D\x05F$\x02\u0229\u022A" +
		"\x07\x12\x02\x02\u022A\u022C\x05F$\x02\u022B\u0229\x03\x02\x02\x02\u022C" +
		"\u022F\x03\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E\x03\x02" +
		"\x02\x02\u022E\u0231\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u0230" +
		"\u0228\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0232\x03\x02" +
		"\x02\x02\u0232\u0233\x07\x1A\x02\x02\u0233E\x03\x02\x02\x02\u0234\u0236" +
		"\x05N(\x02\u0235\u0237\x07u\x02\x02\u0236\u0235\x03\x02\x02\x02\u0236" +
		"\u0237\x03\x02\x02\x02\u0237\u0239\x03\x02\x02\x02\u0238\u023A\x05\xC4" +
		"c\x02\u0239\u0238\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023AG\x03" +
		"\x02\x02\x02\u023B\u0244\x07\x19\x02\x02\u023C\u0241\x05J&\x02\u023D\u023E" +
		"\x07\x12\x02\x02\u023E\u0240\x05J&\x02\u023F\u023D\x03\x02\x02\x02\u0240" +
		"\u0243\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241\u0242\x03\x02" +
		"\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0241\x03\x02\x02\x02\u0244" +
		"\u023C\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0246\x03\x02" +
		"\x02\x02\u0246\u0247\x07\x1A\x02\x02\u0247I\x03\x02\x02\x02\u0248\u024A" +
		"\x05N(\x02\u0249\u024B\x05\\/\x02\u024A\u0249\x03\x02\x02\x02\u024A\u024B" +
		"\x03\x02\x02\x02\u024BK\x03\x02\x02\x02\u024C\u024E\x05N(\x02\u024D\u024F" +
		"\x05\\/\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F" +
		"\u0250\x03\x02\x02\x02\u0250\u0251\x05\xC4c\x02\u0251M\x03\x02\x02\x02" +
		"\u0252\u0253\b(\x01\x02\u0253\u025A\x05\x8CG\x02\u0254\u025A\x05P)\x02" +
		"\u0255\u025A\x05T+\x02\u0256\u025A\x05Z.\x02\u0257\u0258\x07.\x02\x02" +
		"\u0258\u025A\x07w\x02\x02\u0259\u0252\x03\x02\x02\x02\u0259\u0254\x03" +
		"\x02\x02\x02\u0259\u0255\x03\x02\x02\x02\u0259\u0256\x03\x02\x02\x02\u0259" +
		"\u0257\x03\x02\x02\x02\u025A\u0263\x03\x02\x02\x02\u025B\u025C\f\x05\x02" +
		"\x02\u025C\u025E\x07,\x02\x02\u025D\u025F\x05\x8EH\x02\u025E\u025D\x03" +
		"\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
		"\u0262\x07-\x02\x02\u0261\u025B\x03\x02\x02\x02\u0262\u0265\x03\x02\x02" +
		"\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264O\x03" +
		"\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u026B\x05\xC4c\x02\u0267" +
		"\u0268\x07/\x02\x02\u0268\u026A\x05\xC4c\x02\u0269\u0267\x03\x02\x02\x02" +
		"\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026C\x03" +
		"\x02\x02\x02\u026CQ\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026E" +
		"\u0271\x05\x8CG\x02\u026F\u0271\x05P)\x02\u0270\u026E\x03\x02\x02\x02" +
		"\u0270\u026F\x03\x02\x02\x02\u0271S\x03\x02\x02\x02\u0272\u0273\x070\x02" +
		"\x02\u0273\u0274\x07\x19\x02\x02\u0274\u0276\x05R*\x02\u0275\u0277\x05" +
		"V,\x02\u0276\u0275\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278" +
		"\x03\x02\x02\x02\u0278\u0279\x071\x02\x02\u0279\u027B\x05N(\x02\u027A" +
		"\u027C\x05X-\x02\u027B\u027A\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02" +
		"\u027C\u027D\x03\x02\x02\x02\u027D\u027E\x07\x1A\x02\x02\u027EU\x03\x02" +
		"\x02\x02\u027F\u0280\x05\xC4c\x02\u0280W\x03\x02\x02\x02\u0281\u0282\x05" +
		"\xC4c\x02\u0282Y\x03\x02\x02\x02\u0283\u0284\x07(\x02\x02\u0284\u028A" +
		"\x05H%\x02\u0285\u0289\x07v\x02\x02\u0286\u0289\x07t\x02\x02\u0287\u0289" +
		"\x05^0\x02\u0288\u0285\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0288" +
		"\u0287\x03\x02\x02\x02\u0289\u028C\x03\x02\x02\x02\u028A\u0288\x03\x02" +
		"\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u028F\x03\x02\x02\x02\u028C" +
		"\u028A\x03\x02\x02\x02\u028D\u028E\x07)\x02\x02\u028E\u0290\x05H%\x02" +
		"\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290[\x03\x02" +
		"\x02\x02\u0291\u0292\t\x05\x02\x02\u0292]\x03\x02\x02\x02\u0293\u0294" +
		"\t\x06\x02\x02\u0294_\x03\x02\x02\x02\u0295\u0299\x07\x11\x02\x02\u0296" +
		"\u0298\x05b2\x02\u0297\u0296\x03\x02\x02\x02\u0298\u029B\x03\x02\x02\x02" +
		"\u0299\u0297\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029C\x03" +
		"\x02\x02\x02\u029B\u0299\x03\x02\x02\x02\u029C\u029D\x07\x13\x02\x02\u029D" +
		"a\x03\x02\x02\x02\u029E\u02AF\x05\xC6d\x02\u029F\u02AF\x05f4\x02\u02A0" +
		"\u02AF\x05h5\x02\u02A1\u02AF\x05l7\x02\u02A2\u02AF\x05r:\x02\u02A3\u02AF" +
		"\x05`1\x02\u02A4\u02AF\x05t;\x02\u02A5\u02AF\x05x=\x02\u02A6\u02AF\x05" +
		"z>\x02\u02A7\u02AF\x05|?\x02\u02A8\u02AF\x05~@\x02\u02A9\u02AF\x05\x80" +
		"A\x02\u02AA\u02AF\x05\x82B\x02\u02AB\u02AF\x05n8\x02\u02AC\u02AF\x05p" +
		"9\x02\u02AD\u02AF\x05\x84C\x02\u02AE\u029E\x03\x02\x02\x02\u02AE\u029F" +
		"\x03\x02\x02\x02\u02AE\u02A0\x03\x02\x02\x02\u02AE\u02A1\x03\x02\x02\x02" +
		"\u02AE\u02A2\x03\x02\x02\x02\u02AE\u02A3\x03\x02\x02\x02\u02AE\u02A4\x03" +
		"\x02\x02\x02\u02AE\u02A5\x03\x02\x02\x02\u02AE\u02A6\x03\x02\x02\x02\u02AE" +
		"\u02A7\x03\x02\x02\x02\u02AE\u02A8\x03\x02\x02\x02\u02AE\u02A9\x03\x02" +
		"\x02\x02\u02AE\u02AA\x03\x02\x02\x02\u02AE\u02AB\x03\x02\x02\x02\u02AE" +
		"\u02AC\x03\x02\x02\x02\u02AE\u02AD\x03\x02\x02\x02\u02AFc\x03\x02\x02" +
		"\x02\u02B0\u02B1\x05\x8EH\x02\u02B1\u02B2\x07\x04\x02\x02\u02B2e\x03\x02" +
		"\x02\x02\u02B3\u02B4\x075\x02\x02\u02B4\u02B5\x07\x19\x02\x02\u02B5\u02B6" +
		"\x05\x8EH\x02\u02B6\u02B7\x07\x1A\x02\x02\u02B7\u02BA\x05b2\x02\u02B8" +
		"\u02B9\x076\x02\x02\u02B9\u02BB\x05b2\x02\u02BA\u02B8\x03\x02\x02\x02" +
		"\u02BA\u02BB\x03\x02\x02\x02\u02BBg\x03\x02\x02\x02\u02BC\u02BD\x077\x02" +
		"\x02\u02BD\u02BF\x05\x8EH\x02\u02BE\u02C0\x056\x1C\x02\u02BF\u02BE\x03" +
		"\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1" +
		"\u02C3\x05`1\x02\u02C2\u02C4\x05j6\x02\u02C3\u02C2\x03\x02\x02\x02\u02C4" +
		"\u02C5\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C6\x03\x02" +
		"\x02\x02\u02C6i\x03\x02\x02\x02\u02C7\u02CC\x078\x02\x02\u02C8\u02CA\x05" +
		"\xC4c\x02\u02C9\u02C8\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA" +
		"\u02CB\x03\x02\x02\x02\u02CB\u02CD\x05@!\x02\u02CC\u02C9\x03\x02\x02\x02" +
		"\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x05" +
		"`1\x02\u02CFk\x03\x02\x02\x02\u02D0\u02D1\x079\x02\x02\u02D1\u02D2\x07" +
		"\x19\x02\x02\u02D2\u02D3\x05\x8EH\x02\u02D3\u02D4\x07\x1A\x02\x02\u02D4" +
		"\u02D5\x05b2\x02\u02D5m\x03\x02\x02\x02\u02D6\u02D9\x05\x86D\x02\u02D7" +
		"\u02D9\x05d3\x02\u02D8\u02D6\x03\x02\x02\x02\u02D8\u02D7\x03\x02\x02\x02" +
		"\u02D9o\x03\x02\x02\x02\u02DA\u02DB\x07:\x02\x02\u02DB\u02DC\x05`1\x02" +
		"\u02DCq\x03\x02\x02\x02\u02DD\u02DE\x07\x1D\x02\x02\u02DE\u02E1\x07\x19" +
		"\x02\x02\u02DF\u02E2\x05n8\x02\u02E0\u02E2\x07\x04\x02\x02\u02E1\u02DF" +
		"\x03\x02\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02" +
		"\u02E3\u02E6\x05d3\x02\u02E4\u02E6\x07\x04\x02\x02\u02E5\u02E3\x03\x02" +
		"\x02\x02\u02E5\u02E4\x03\x02\x02\x02\u02E6\u02E8\x03\x02\x02\x02\u02E7" +
		"\u02E9\x05\x8EH\x02\u02E8\u02E7\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02" +
		"\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EB\x07\x1A\x02\x02\u02EB\u02EC" +
		"\x05b2\x02\u02ECs\x03\x02\x02\x02\u02ED\u02EF\x07;\x02\x02\u02EE\u02F0" +
		"\x07\x83\x02\x02\u02EF\u02EE\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02" +
		"\u02F0\u02F5\x03\x02\x02\x02\u02F1\u02F2\x07\x19\x02\x02\u02F2\u02F3\x05" +
		"v<\x02\u02F3\u02F4\x07\x1A\x02\x02\u02F4\u02F6\x03\x02\x02\x02\u02F5\u02F1" +
		"\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02" +
		"\u02F7\u02F8\x05\x9CO\x02\u02F8u\x03\x02\x02\x02\u02F9\u02FA\x05\xCCg" +
		"\x02\u02FAw\x03\x02\x02\x02\u02FB\u02FC\x07<\x02\x02\u02FC\u02FD\x05b" +
		"2\x02\u02FD\u02FE\x079\x02\x02\u02FE\u02FF\x07\x19\x02\x02\u02FF\u0300" +
		"\x05\x8EH\x02\u0300\u0301\x07\x1A\x02\x02\u0301\u0302\x07\x04\x02\x02" +
		"\u0302y\x03\x02\x02\x02\u0303\u0304\x07r\x02\x02\u0304\u0305\x07\x04\x02" +
		"\x02\u0305{\x03\x02\x02\x02\u0306\u0307\x07o\x02\x02\u0307\u0308\x07\x04" +
		"\x02\x02\u0308}\x03\x02\x02\x02\u0309\u030B\x07=\x02\x02\u030A\u030C\x05" +
		"\x8EH\x02\u030B\u030A\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02\u030C" +
		"\u030D\x03\x02\x02\x02\u030D\u030E\x07\x04\x02\x02\u030E\x7F\x03\x02\x02" +
		"\x02\u030F\u0310\x07>\x02\x02\u0310\u0311\x07\x04\x02\x02\u0311\x81\x03" +
		"\x02\x02\x02\u0312\u0313\x07?\x02\x02\u0313\u0314\x05\x9AN\x02\u0314\u0315" +
		"\x07\x04\x02\x02\u0315\x83\x03\x02\x02\x02\u0316\u0317\x07@\x02\x02\u0317" +
		"\u0318\x05\x9AN\x02\u0318\u0319\x07\x04\x02\x02\u0319\x85\x03\x02\x02" +
		"\x02\u031A\u031B\x07A\x02\x02\u031B\u0322\x05\x8AF\x02\u031C\u0322\x05" +
		"L\'\x02\u031D\u031E\x07\x19\x02\x02\u031E\u031F\x05\x88E\x02\u031F\u0320" +
		"\x07\x1A\x02\x02\u0320\u0322\x03\x02\x02\x02\u0321\u031A\x03\x02\x02\x02" +
		"\u0321\u031C\x03\x02\x02\x02\u0321\u031D\x03\x02\x02\x02\u0322\u0325\x03" +
		"\x02\x02\x02\u0323\u0324\x07\r\x02\x02\u0324\u0326\x05\x8EH\x02\u0325" +
		"\u0323\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u0327\x03\x02" +
		"\x02\x02\u0327\u0328\x07\x04\x02\x02\u0328\x87\x03\x02\x02\x02\u0329\u032B" +
		"\x05L\'\x02\u032A\u0329\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B" +
		"\u0332\x03\x02\x02\x02\u032C\u032E\x07\x12\x02\x02\u032D\u032F\x05L\'" +
		"\x02\u032E\u032D\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0331" +
		"\x03\x02\x02\x02\u0330\u032C\x03\x02\x02\x02\u0331\u0334\x03\x02\x02\x02" +
		"\u0332\u0330\x03\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\x89\x03" +
		"\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0335\u033C\x07\x19\x02\x02\u0336" +
		"\u0338\x05\xC4c\x02\u0337\u0336\x03\x02\x02\x02\u0337\u0338\x03\x02\x02" +
		"\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033B\x07\x12\x02\x02\u033A\u0337" +
		"\x03\x02\x02\x02\u033B\u033E\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02" +
		"\u033C\u033D\x03\x02\x02\x02\u033D\u0340\x03\x02\x02\x02\u033E\u033C\x03" +
		"\x02\x02\x02\u033F\u0341\x05\xC4c\x02\u0340\u033F\x03\x02\x02\x02\u0340" +
		"\u0341\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x07\x1A" +
		"\x02\x02\u0343\x8B\x03\x02\x02\x02\u0344\u0345\t\x07\x02\x02\u0345\x8D" +
		"\x03\x02\x02\x02\u0346\u0347\bH\x01\x02\u0347\u0348\x07G\x02\x02\u0348" +
		"\u0359\x05N(\x02\u0349\u034A\x07\x19\x02\x02\u034A\u034B\x05\x8EH\x02" +
		"\u034B\u034C\x07\x1A\x02\x02\u034C\u0359\x03\x02\x02\x02\u034D\u034E\t" +
		"\b\x02\x02\u034E\u0359\x05\x8EH\x15\u034F\u0350\t\t\x02\x02\u0350\u0359" +
		"\x05\x8EH\x14\u0351\u0352\x07I\x02\x02\u0352\u0359\x05\x8EH\x13\u0353" +
		"\u0354\x07J\x02\x02\u0354\u0359\x05\x8EH\x12\u0355\u0356\x07\b\x02\x02" +
		"\u0356\u0359\x05\x8EH\x11\u0357\u0359\x05\x90I\x02\u0358\u0346\x03\x02" +
		"\x02\x02\u0358\u0349\x03\x02\x02\x02\u0358\u034D\x03\x02\x02\x02\u0358" +
		"\u034F\x03\x02\x02\x02\u0358\u0351\x03\x02\x02\x02\u0358\u0353\x03\x02" +
		"\x02\x02\u0358\u0355\x03\x02\x02\x02\u0358\u0357\x03\x02\x02\x02\u0359" +
		"\u03A4\x03\x02\x02\x02\u035A\u035B\f\x10\x02\x02\u035B\u035C\x07K\x02" +
		"\x02\u035C\u03A3\x05\x8EH\x11\u035D\u035E\f\x0F\x02\x02\u035E\u035F\t" +
		"\n\x02\x02\u035F\u03A3\x05\x8EH\x10\u0360\u0361\f\x0E\x02\x02\u0361\u0362" +
		"\t\t\x02\x02\u0362\u03A3\x05\x8EH\x0F\u0363\u0364\f\r\x02\x02\u0364\u0365" +
		"\t\v\x02\x02\u0365\u03A3\x05\x8EH\x0E\u0366\u0367\f\f\x02\x02\u0367\u0368" +
		"\x07\x1F\x02\x02\u0368\u03A3\x05\x8EH\r\u0369\u036A\f\v\x02\x02\u036A" +
		"\u036B\x07\x07\x02\x02\u036B\u03A3\x05\x8EH\f\u036C\u036D\f\n\x02\x02" +
		"\u036D\u036E\x07\x1E\x02\x02\u036E\u03A3\x05\x8EH\v\u036F\u0370\f\t\x02" +
		"\x02\u0370\u0371\t\f\x02\x02\u0371\u03A3\x05\x8EH\n\u0372\u0373\f\b\x02" +
		"\x02\u0373\u0374\t\r\x02\x02\u0374\u03A3\x05\x8EH\t\u0375\u0376\f\x07" +
		"\x02\x02\u0376\u0377\x07N\x02\x02\u0377\u03A3\x05\x8EH\b\u0378\u0379\f" +
		"\x06\x02\x02\u0379\u037A\x07\x06\x02\x02\u037A\u03A3\x05\x8EH\x07\u037B" +
		"\u037C\f\x05\x02\x02\u037C\u037D\x07O\x02\x02\u037D\u037E\x05\x8EH\x02" +
		"\u037E\u037F\x07H\x02\x02\u037F\u0380\x05\x8EH\x06\u0380\u03A3\x03\x02" +
		"\x02\x02\u0381\u0382\f\x04\x02\x02\u0382\u0383\t\x0E\x02\x02\u0383\u03A3" +
		"\x05\x8EH\x05\u0384\u0385\f\x1D\x02\x02\u0385\u03A3\t\b\x02\x02\u0386" +
		"\u0387\f\x1B\x02\x02\u0387\u0388\x07,\x02\x02\u0388\u0389\x05\x8EH\x02" +
		"\u0389\u038A\x07-\x02\x02\u038A\u03A3\x03\x02\x02\x02\u038B\u038C\f\x1A" +
		"\x02\x02\u038C\u038E\x07,\x02\x02\u038D\u038F\x05\x8EH\x02\u038E\u038D" +
		"\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02" +
		"\u0390\u0392\x07H\x02\x02\u0391\u0393\x05\x8EH\x02\u0392\u0391\x03\x02" +
		"\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394" +
		"\u03A3\x07-\x02\x02\u0395\u0396\f\x19\x02\x02\u0396\u0397\x07/\x02\x02" +
		"\u0397\u03A3\x05\xC4c\x02\u0398\u0399\f\x18\x02\x02\u0399\u039A\x07\x11" +
		"\x02\x02\u039A\u039B\x05\x94K\x02\u039B\u039C\x07\x13\x02\x02\u039C\u03A3" +
		"\x03\x02\x02\x02\u039D\u039E\f\x17\x02\x02\u039E\u039F\x07\x19\x02\x02" +
		"\u039F\u03A0\x05\x98M\x02\u03A0\u03A1\x07\x1A\x02\x02\u03A1\u03A3\x03" +
		"\x02\x02\x02\u03A2\u035A\x03\x02\x02\x02\u03A2\u035D\x03\x02\x02\x02\u03A2" +
		"\u0360\x03\x02\x02\x02\u03A2\u0363\x03\x02\x02\x02\u03A2\u0366\x03\x02" +
		"\x02\x02\u03A2\u0369\x03\x02\x02\x02\u03A2\u036C\x03\x02\x02\x02\u03A2" +
		"\u036F\x03\x02\x02\x02\u03A2\u0372\x03\x02\x02\x02\u03A2\u0375\x03\x02" +
		"\x02\x02\u03A2\u0378\x03\x02\x02\x02\u03A2\u037B\x03\x02\x02\x02\u03A2" +
		"\u0381\x03\x02\x02\x02\u03A2\u0384\x03\x02\x02\x02\u03A2\u0386\x03\x02" +
		"\x02\x02\u03A2\u038B\x03\x02\x02\x02\u03A2\u0395\x03\x02\x02\x02\u03A2" +
		"\u0398\x03\x02\x02\x02\u03A2\u039D\x03\x02\x02\x02\u03A3\u03A6\x03\x02" +
		"\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5" +
		"\x8F\x03\x02\x02\x02\u03A6\u03A4\x03\x02\x02\x02\u03A7\u03B1\x07h\x02" +
		"\x02\u03A8\u03B1\x05\xC2b\x02\u03A9\u03B1\x05\xC8e\x02\u03AA\u03B1\x05" +
		"\xCCg\x02\u03AB\u03B1\x05\xC4c\x02\u03AC\u03B1\x07|\x02\x02\u03AD\u03B1" +
		"\x07w\x02\x02\u03AE\u03B1\x05\xC0a\x02\u03AF\u03B1\x05N(\x02\u03B0\u03A7" +
		"\x03\x02\x02\x02\u03B0\u03A8\x03\x02\x02\x02\u03B0\u03A9\x03\x02\x02\x02" +
		"\u03B0\u03AA\x03\x02\x02\x02\u03B0\u03AB\x03\x02\x02\x02\u03B0\u03AC\x03" +
		"\x02\x02\x02\u03B0\u03AD\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B0" +
		"\u03AF\x03\x02\x02\x02\u03B1\x91\x03\x02\x02\x02\u03B2\u03B7\x05\x8EH" +
		"\x02\u03B3\u03B4\x07\x12\x02\x02\u03B4\u03B6\x05\x8EH\x02\u03B5\u03B3" +
		"\x03\x02\x02\x02\u03B6\u03B9\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02" +
		"\u03B7\u03B8\x03\x02\x02\x02\u03B8\x93\x03\x02\x02\x02\u03B9\u03B7\x03" +
		"\x02\x02\x02\u03BA\u03BF\x05\x96L\x02\u03BB\u03BC\x07\x12\x02\x02\u03BC" +
		"\u03BE\x05\x96L\x02\u03BD\u03BB\x03\x02\x02\x02\u03BE\u03C1\x03\x02\x02" +
		"\x02\u03BF\u03BD\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C3" +
		"\x03\x02\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C2\u03C4\x07\x12\x02\x02" +
		"\u03C3\u03C2\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\x95\x03" +
		"\x02\x02\x02\u03C5\u03C6\x05\xC4c\x02\u03C6\u03C7\x07H\x02\x02\u03C7\u03C8" +
		"\x05\x8EH\x02\u03C8\x97\x03\x02\x02\x02\u03C9\u03CB\x07\x11\x02\x02\u03CA" +
		"\u03CC\x05\x94K\x02\u03CB\u03CA\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02" +
		"\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD\u03D2\x07\x13\x02\x02\u03CE\u03D0" +
		"\x05\x92J\x02\u03CF\u03CE\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02" +
		"\u03D0\u03D2\x03\x02\x02\x02\u03D1\u03C9\x03\x02\x02\x02\u03D1\u03CF\x03" +
		"\x02\x02\x02\u03D2\x99\x03\x02\x02\x02\u03D3\u03D4\x05\x8EH\x02\u03D4" +
		"\u03D5\x07\x19\x02\x02\u03D5\u03D6\x05\x98M\x02\u03D6\u03D7\x07\x1A\x02" +
		"\x02\u03D7\x9B\x03\x02\x02\x02\u03D8\u03DC\x07\x11\x02\x02\u03D9\u03DB" +
		"\x05\x9EP\x02\u03DA\u03D9\x03\x02\x02\x02\u03DB\u03DE\x03\x02\x02\x02" +
		"\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DF\x03" +
		"\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DF\u03E0\x07\x13\x02\x02\u03E0" +
		"\x9D\x03\x02\x02\x02\u03E1\u03F4\x05\xC6d\x02\u03E2\u03F4\x05\xC4c\x02" +
		"\u03E3\u03F4\x05\x9CO\x02\u03E4\u03F4\x05\xA0Q\x02\u03E5\u03F4\x05\xA6" +
		"T\x02\u03E6\u03F4\x05\xA8U\x02\u03E7\u03F4\x05\xAEX\x02\u03E8\u03F4\x05" +
		"\xB0Y\x02\u03E9\u03F4\x05\xB2Z\x02\u03EA\u03F4\x05\xB6\\\x02\u03EB\u03F4" +
		"\x05\xBA^\x02\u03EC\u03F4\x05\xBC_\x02\u03ED\u03F4\x07o\x02\x02\u03EE" +
		"\u03F4\x07r\x02\x02\u03EF\u03F4\x07s\x02\x02\u03F0\u03F4\x05\xC2b\x02" +
		"\u03F1\u03F4\x05\xCCg\x02\u03F2\u03F4\x05\xC8e\x02\u03F3\u03E1\x03\x02" +
		"\x02\x02\u03F3\u03E2\x03\x02\x02\x02\u03F3\u03E3\x03\x02\x02\x02\u03F3" +
		"\u03E4\x03\x02\x02\x02\u03F3\u03E5\x03\x02\x02\x02\u03F3\u03E6\x03\x02" +
		"\x02\x02\u03F3\u03E7\x03\x02\x02\x02\u03F3\u03E8\x03\x02\x02\x02\u03F3" +
		"\u03E9\x03\x02\x02\x02\u03F3\u03EA\x03\x02\x02\x02\u03F3\u03EB\x03\x02" +
		"\x02\x02\u03F3\u03EC\x03\x02\x02\x02\u03F3\u03ED\x03\x02\x02\x02\u03F3" +
		"\u03EE\x03\x02\x02\x02\u03F3\u03EF\x03\x02\x02\x02\u03F3\u03F0\x03\x02" +
		"\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F2\x03\x02\x02\x02\u03F4" +
		"\x9F\x03\x02\x02\x02\u03F5\u03F9\x05\xA4S\x02\u03F6\u03F9\x05\xBE`\x02" +
		"\u03F7\u03F9\x05\xA2R\x02\u03F8\u03F5\x03\x02\x02\x02\u03F8\u03F6\x03" +
		"\x02\x02\x02\u03F8\u03F7\x03\x02\x02\x02\u03F9\xA1\x03\x02\x02\x02\u03FA" +
		"\u03FB\x05\xC4c\x02\u03FB\u03FC\x07/\x02\x02\u03FC\u03FD\x05\xC4c\x02" +
		"\u03FD\xA3\x03\x02\x02\x02\u03FE\u0403\x07=\x02\x02\u03FF\u0403\x07.\x02" +
		"\x02\u0400\u0403\x07D\x02\x02\u0401\u0403\x05\xC4c\x02\u0402\u03FE\x03" +
		"\x02\x02\x02\u0402\u03FF\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402" +
		"\u0401\x03\x02\x02\x02\u0403\u0410\x03\x02\x02\x02\u0404\u0406\x07\x19" +
		"\x02\x02\u0405\u0407\x05\xA0Q\x02\u0406\u0405\x03\x02\x02\x02\u0406\u0407" +
		"\x03\x02\x02\x02\u0407\u040C\x03\x02\x02\x02\u0408\u0409\x07\x12\x02\x02" +
		"\u0409\u040B\x05\xA0Q\x02\u040A\u0408\x03\x02\x02\x02\u040B\u040E\x03" +
		"\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02\u040D" +
		"\u040F\x03\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040F\u0411\x07\x1A" +
		"\x02\x02\u0410\u0404\x03\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411" +
		"\xA5\x03\x02\x02\x02\u0412\u0413\x07Z\x02\x02\u0413\u0416\x05\xAAV\x02" +
		"\u0414\u0415\x07[\x02\x02\u0415\u0417\x05\xA0Q\x02\u0416\u0414\x03\x02" +
		"\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\xA7\x03\x02\x02\x02\u0418\u0419" +
		"\x05\xAAV\x02\u0419\u041A\x07[\x02\x02\u041A\u041B\x05\xA0Q\x02\u041B" +
		"\xA9\x03\x02\x02\x02\u041C\u0424\x05\xC4c\x02\u041D\u0424\x05\xA2R\x02" +
		"\u041E\u0424\x05\xACW\x02\u041F\u0420\x07\x19\x02\x02\u0420\u0421\x05" +
		"\xACW\x02\u0421\u0422\x07\x1A\x02\x02\u0422\u0424\x03\x02\x02\x02\u0423" +
		"\u041C\x03\x02\x02\x02\u0423\u041D\x03\x02\x02\x02\u0423\u041E\x03\x02" +
		"\x02\x02\u0423\u041F\x03\x02\x02\x02\u0424\xAB\x03\x02\x02\x02\u0425\u042A" +
		"\x05\xC4c\x02\u0426\u0427\x07\x12\x02\x02\u0427\u0429\x05\xC4c\x02\u0428" +
		"\u0426\x03\x02\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428\x03\x02" +
		"\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\xAD\x03\x02\x02\x02\u042C\u042A" +
		"\x03\x02\x02\x02\u042D\u042E\x05\xA0Q\x02\u042E\u042F\x07\\\x02\x02\u042F" +
		"\u0430\x05\xC4c\x02\u0430\xAF\x03\x02\x02\x02\u0431\u0432\x05\xC4c\x02" +
		"\u0432\u0433\x07H\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0433\xB1\x03\x02\x02\x02\u0434\u0435\x07]\x02\x02\u0435\u0439\x05\xA0" +
		"Q\x02\u0436\u0438\x05\xB4[\x02\u0437\u0436\x03\x02\x02\x02\u0438\u043B" +
		"\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02" +
		"\u043A\xB3\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043C\u043D\x07" +
		"^\x02\x02\u043D\u043E\x05\xBE`\x02\u043E\u043F\x05\x9CO\x02\u043F\u0443" +
		"\x03\x02\x02\x02\u0440\u0441\x07_\x02\x02\u0441\u0443\x05\x9CO\x02\u0442" +
		"\u043C\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0443\xB5\x03\x02\x02" +
		"\x02\u0444\u0445\x07(\x02\x02\u0445\u0446\x05\xC4c\x02\u0446\u0448\x07" +
		"\x19\x02\x02\u0447\u0449\x05\xACW\x02\u0448\u0447\x03\x02\x02\x02\u0448" +
		"\u0449\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044C\x07\x1A" +
		"\x02\x02\u044B\u044D\x05\xB8]\x02\u044C\u044B\x03\x02\x02\x02\u044C\u044D" +
		"\x03\x02\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E\u044F\x05\x9CO\x02" +
		"\u044F\xB7\x03\x02\x02\x02\u0450\u0451\x07`\x02\x02\u0451\u0452\x05\xAC" +
		"W\x02\u0452\xB9\x03\x02\x02\x02\u0453\u0456\x07\x1D\x02\x02\u0454\u0457" +
		"\x05\x9CO\x02\u0455\u0457\x05\xA0Q\x02\u0456\u0454\x03\x02\x02\x02\u0456" +
		"\u0455\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458\u045B\x05\xA0" +
		"Q\x02\u0459\u045C\x05\x9CO\x02\u045A\u045C\x05\xA0Q\x02\u045B\u0459\x03" +
		"\x02\x02\x02\u045B\u045A\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D" +
		"\u045E\x05\x9CO\x02\u045E\xBB\x03\x02\x02\x02\u045F\u0460\x075\x02\x02" +
		"\u0460\u0461\x05\xA0Q\x02\u0461\u0462\x05\x9CO\x02\u0462\xBD\x03\x02\x02" +
		"\x02\u0463\u0469\x05\xCCg\x02\u0464\u0469\x07i\x02\x02\u0465\u0469\x07" +
		"j\x02\x02\u0466\u0469\x05\xC8e\x02\u0467\u0469\x07h\x02\x02\u0468\u0463" +
		"\x03\x02\x02\x02\u0468\u0464\x03\x02\x02\x02\u0468\u0465\x03\x02\x02\x02" +
		"\u0468\u0466\x03\x02\x02\x02\u0468\u0467\x03\x02\x02\x02\u0469\xBF\x03" +
		"\x02\x02\x02\u046A\u046C\x07\x19\x02\x02\u046B\u046D\x05\x8EH\x02\u046C" +
		"\u046B\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u0474\x03\x02" +
		"\x02\x02\u046E\u0470\x07\x12\x02\x02\u046F\u0471\x05\x8EH\x02\u0470\u046F" +
		"\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471\u0473\x03\x02\x02\x02" +
		"\u0472\u046E\x03\x02\x02\x02\u0473\u0476\x03\x02\x02\x02\u0474\u0472\x03" +
		"\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475\u0477\x03\x02\x02\x02\u0476" +
		"\u0474\x03\x02\x02\x02\u0477\u0485\x07\x1A\x02\x02\u0478\u0481\x07,\x02" +
		"\x02\u0479\u047E\x05\x8EH\x02\u047A\u047B\x07\x12\x02\x02\u047B\u047D" +
		"\x05\x8EH\x02\u047C\u047A\x03\x02\x02\x02\u047D\u0480\x03\x02\x02\x02" +
		"\u047E\u047C\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02\u047F\u0482\x03" +
		"\x02\x02\x02\u0480\u047E\x03\x02\x02\x02\u0481\u0479\x03\x02\x02\x02\u0481" +
		"\u0482\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483\u0485\x07-\x02" +
		"\x02\u0484\u046A\x03\x02\x02\x02\u0484\u0478\x03\x02\x02\x02\u0485\xC1" +
		"\x03\x02\x02\x02\u0486\u0488\t\x0F\x02\x02\u0487\u0489\x07k\x02\x02\u0488" +
		"\u0487\x03\x02\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\xC3\x03\x02\x02" +
		"\x02\u048A\u048B\t\x10\x02\x02\u048B\xC5\x03\x02\x02\x02\u048C\u048D\t" +
		"\x11\x02\x02\u048D\xC7\x03\x02\x02\x02\u048E\u0490\x07l\x02\x02\u048F" +
		"\u048E\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u048F\x03\x02" +
		"\x02\x02\u0491\u0492\x03\x02\x02\x02\u0492\xC9\x03\x02\x02\x02\u0493\u049F" +
		"\x07b\x02\x02\u0494\u0495\x07\x19\x02\x02\u0495\u049A\x05P)\x02\u0496" +
		"\u0497\x07\x12\x02\x02\u0497\u0499\x05P)\x02\u0498\u0496\x03\x02\x02\x02" +
		"\u0499\u049C\x03\x02\x02\x02\u049A\u0498\x03\x02\x02\x02\u049A\u049B\x03" +
		"\x02\x02\x02\u049B\u049D\x03\x02\x02\x02\u049C\u049A\x03\x02\x02\x02\u049D" +
		"\u049E\x07\x1A\x02\x02\u049E\u04A0\x03\x02\x02\x02\u049F\u0494\x03\x02" +
		"\x02\x02\u049F\u04A0\x03\x02\x02\x02\u04A0\xCB\x03\x02\x02\x02\u04A1\u04A3" +
		"\x07\x83\x02\x02\u04A2\u04A1\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02" +
		"\u04A4\u04A2\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\xCD\x03" +
		"\x02\x02\x02\x88\xDA\xDC\xEB\xEF\xF4\xFA\xFE\u0101\u0106\u010C\u0113\u0117" +
		"\u0124\u012C\u0131\u013B\u013E\u0144\u014C\u014F\u015B\u0164\u0166\u016C" +
		"\u0187\u018A\u0195\u019A\u019F\u01AA\u01B0\u01B2\u01B5\u01BC\u01C0\u01C2" +
		"\u01C7\u01CC\u01CF\u01D5\u01D9\u01DD\u01E2\u01EF\u01F1\u01F8\u0202\u0208" +
		"\u020F\u0214\u0219\u021C\u0222\u0225\u022D\u0230\u0236\u0239\u0241\u0244" +
		"\u024A\u024E\u0259\u025E\u0263\u026B\u0270\u0276\u027B\u0288\u028A\u028F" +
		"\u0299\u02AE\u02BA\u02BF\u02C5\u02C9\u02CC\u02D8\u02E1\u02E5\u02E8\u02EF" +
		"\u02F5\u030B\u0321\u0325\u032A\u032E\u0332\u0337\u033C\u0340\u0358\u038E" +
		"\u0392\u03A2\u03A4\u03B0\u03B7\u03BF\u03C3\u03CB\u03CF\u03D1\u03DC\u03F3" +
		"\u03F8\u0402\u0406\u040C\u0410\u0416\u0423\u042A\u0439\u0442\u0448\u044C" +
		"\u0456\u045B\u0468\u046C\u0470\u0474\u047E\u0481\u0484\u0488\u0491\u049A" +
		"\u049F\u04A4";
	public static readonly _serializedATN: string = Utils.join(
		[
			SolidityParser._serializedATNSegment0,
			SolidityParser._serializedATNSegment1,
			SolidityParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SolidityParser.__ATN) {
			SolidityParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SolidityParser._serializedATN));
		}

		return SolidityParser.__ATN;
	}

}

export class SourceUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SolidityParser.EOF, 0); }
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public pragmaDirective(): PragmaDirectiveContext[];
	public pragmaDirective(i: number): PragmaDirectiveContext;
	public pragmaDirective(i?: number): PragmaDirectiveContext | PragmaDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PragmaDirectiveContext);
		} else {
			return this.getRuleContext(i, PragmaDirectiveContext);
		}
	}
	public importDirective(): ImportDirectiveContext[];
	public importDirective(i: number): ImportDirectiveContext;
	public importDirective(i?: number): ImportDirectiveContext | ImportDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDirectiveContext);
		} else {
			return this.getRuleContext(i, ImportDirectiveContext);
		}
	}
	public contractDefinition(): ContractDefinitionContext[];
	public contractDefinition(i: number): ContractDefinitionContext;
	public contractDefinition(i?: number): ContractDefinitionContext | ContractDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractDefinitionContext);
		} else {
			return this.getRuleContext(i, ContractDefinitionContext);
		}
	}
	public enumDefinition(): EnumDefinitionContext[];
	public enumDefinition(i: number): EnumDefinitionContext;
	public enumDefinition(i?: number): EnumDefinitionContext | EnumDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumDefinitionContext);
		} else {
			return this.getRuleContext(i, EnumDefinitionContext);
		}
	}
	public eventDefinition(): EventDefinitionContext[];
	public eventDefinition(i: number): EventDefinitionContext;
	public eventDefinition(i?: number): EventDefinitionContext | EventDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventDefinitionContext);
		} else {
			return this.getRuleContext(i, EventDefinitionContext);
		}
	}
	public structDefinition(): StructDefinitionContext[];
	public structDefinition(i: number): StructDefinitionContext;
	public structDefinition(i?: number): StructDefinitionContext | StructDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDefinitionContext);
		} else {
			return this.getRuleContext(i, StructDefinitionContext);
		}
	}
	public functionDefinition(): FunctionDefinitionContext[];
	public functionDefinition(i: number): FunctionDefinitionContext;
	public functionDefinition(i?: number): FunctionDefinitionContext | FunctionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDefinitionContext);
		} else {
			return this.getRuleContext(i, FunctionDefinitionContext);
		}
	}
	public fileLevelConstant(): FileLevelConstantContext[];
	public fileLevelConstant(i: number): FileLevelConstantContext;
	public fileLevelConstant(i?: number): FileLevelConstantContext | FileLevelConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FileLevelConstantContext);
		} else {
			return this.getRuleContext(i, FileLevelConstantContext);
		}
	}
	public customErrorDefinition(): CustomErrorDefinitionContext[];
	public customErrorDefinition(i: number): CustomErrorDefinitionContext;
	public customErrorDefinition(i?: number): CustomErrorDefinitionContext | CustomErrorDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CustomErrorDefinitionContext);
		} else {
			return this.getRuleContext(i, CustomErrorDefinitionContext);
		}
	}
	public typeDefinition(): TypeDefinitionContext[];
	public typeDefinition(i: number): TypeDefinitionContext;
	public typeDefinition(i?: number): TypeDefinitionContext | TypeDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDefinitionContext);
		} else {
			return this.getRuleContext(i, TypeDefinitionContext);
		}
	}
	public usingForDeclaration(): UsingForDeclarationContext[];
	public usingForDeclaration(i: number): UsingForDeclarationContext;
	public usingForDeclaration(i?: number): UsingForDeclarationContext | UsingForDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UsingForDeclarationContext);
		} else {
			return this.getRuleContext(i, UsingForDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_sourceUnit; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSourceUnit) {
			listener.enterSourceUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSourceUnit) {
			listener.exitSourceUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSourceUnit) {
			return visitor.visitSourceUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaDirectiveContext extends ParserRuleContext {
	public pragmaName(): PragmaNameContext {
		return this.getRuleContext(0, PragmaNameContext);
	}
	public pragmaValue(): PragmaValueContext {
		return this.getRuleContext(0, PragmaValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaDirective) {
			listener.enterPragmaDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaDirective) {
			listener.exitPragmaDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaDirective) {
			return visitor.visitPragmaDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaName) {
			listener.enterPragmaName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaName) {
			listener.exitPragmaName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaName) {
			return visitor.visitPragmaName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaValueContext extends ParserRuleContext {
	public version(): VersionContext | undefined {
		return this.tryGetRuleContext(0, VersionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaValue) {
			listener.enterPragmaValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaValue) {
			listener.exitPragmaValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaValue) {
			return visitor.visitPragmaValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	public versionConstraint(): VersionConstraintContext[];
	public versionConstraint(i: number): VersionConstraintContext;
	public versionConstraint(i?: number): VersionConstraintContext | VersionConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VersionConstraintContext);
		} else {
			return this.getRuleContext(i, VersionConstraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_version; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersion) {
			listener.enterVersion(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersion) {
			listener.exitVersion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersion) {
			return visitor.visitVersion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_versionOperator; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersionOperator) {
			listener.enterVersionOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersionOperator) {
			listener.exitVersionOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionOperator) {
			return visitor.visitVersionOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionConstraintContext extends ParserRuleContext {
	public VersionLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.VersionLiteral, 0); }
	public versionOperator(): VersionOperatorContext | undefined {
		return this.tryGetRuleContext(0, VersionOperatorContext);
	}
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_versionConstraint; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersionConstraint) {
			listener.enterVersionConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersionConstraint) {
			listener.exitVersionConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionConstraint) {
			return visitor.visitVersionConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDirectiveContext extends ParserRuleContext {
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportDirective) {
			listener.enterImportDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportDirective) {
			listener.exitImportDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDirective) {
			return visitor.visitImportDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportPathContext extends ParserRuleContext {
	public StringLiteralFragment(): TerminalNode { return this.getToken(SolidityParser.StringLiteralFragment, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importPath; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportPath) {
			listener.enterImportPath(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportPath) {
			listener.exitImportPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportPath) {
			return visitor.visitImportPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public inheritanceSpecifier(): InheritanceSpecifierContext[];
	public inheritanceSpecifier(i: number): InheritanceSpecifierContext;
	public inheritanceSpecifier(i?: number): InheritanceSpecifierContext | InheritanceSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InheritanceSpecifierContext);
		} else {
			return this.getRuleContext(i, InheritanceSpecifierContext);
		}
	}
	public contractPart(): ContractPartContext[];
	public contractPart(i: number): ContractPartContext;
	public contractPart(i?: number): ContractPartContext | ContractPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractPartContext);
		} else {
			return this.getRuleContext(i, ContractPartContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContractDefinition) {
			listener.enterContractDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContractDefinition) {
			listener.exitContractDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractDefinition) {
			return visitor.visitContractDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InheritanceSpecifierContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getRuleContext(0, UserDefinedTypeNameContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inheritanceSpecifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInheritanceSpecifier) {
			listener.enterInheritanceSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInheritanceSpecifier) {
			listener.exitInheritanceSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInheritanceSpecifier) {
			return visitor.visitInheritanceSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractPartContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public stateVariableDeclaration(): StateVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StateVariableDeclarationContext);
	}
	public usingForDeclaration(): UsingForDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingForDeclarationContext);
	}
	public structDefinition(): StructDefinitionContext | undefined {
		return this.tryGetRuleContext(0, StructDefinitionContext);
	}
	public modifierDefinition(): ModifierDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ModifierDefinitionContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public eventDefinition(): EventDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EventDefinitionContext);
	}
	public enumDefinition(): EnumDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EnumDefinitionContext);
	}
	public customErrorDefinition(): CustomErrorDefinitionContext | undefined {
		return this.tryGetRuleContext(0, CustomErrorDefinitionContext);
	}
	public typeDefinition(): TypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TypeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractPart; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContractPart) {
			listener.enterContractPart(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContractPart) {
			listener.exitContractPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractPart) {
			return visitor.visitContractPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateVariableDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public PublicKeyword(): TerminalNode[];
	public PublicKeyword(i: number): TerminalNode;
	public PublicKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PublicKeyword);
		} else {
			return this.getToken(SolidityParser.PublicKeyword, i);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public PrivateKeyword(): TerminalNode[];
	public PrivateKeyword(i: number): TerminalNode;
	public PrivateKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PrivateKeyword);
		} else {
			return this.getToken(SolidityParser.PrivateKeyword, i);
		}
	}
	public ConstantKeyword(): TerminalNode[];
	public ConstantKeyword(i: number): TerminalNode;
	public ConstantKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ConstantKeyword);
		} else {
			return this.getToken(SolidityParser.ConstantKeyword, i);
		}
	}
	public ImmutableKeyword(): TerminalNode[];
	public ImmutableKeyword(i: number): TerminalNode;
	public ImmutableKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ImmutableKeyword);
		} else {
			return this.getToken(SolidityParser.ImmutableKeyword, i);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateVariableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStateVariableDeclaration) {
			listener.enterStateVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStateVariableDeclaration) {
			listener.exitStateVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateVariableDeclaration) {
			return visitor.visitStateVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileLevelConstantContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public ConstantKeyword(): TerminalNode { return this.getToken(SolidityParser.ConstantKeyword, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_fileLevelConstant; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFileLevelConstant) {
			listener.enterFileLevelConstant(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFileLevelConstant) {
			listener.exitFileLevelConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFileLevelConstant) {
			return visitor.visitFileLevelConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CustomErrorDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_customErrorDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterCustomErrorDefinition) {
			listener.enterCustomErrorDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitCustomErrorDefinition) {
			listener.exitCustomErrorDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCustomErrorDefinition) {
			return visitor.visitCustomErrorDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefinitionContext extends ParserRuleContext {
	public TypeKeyword(): TerminalNode { return this.getToken(SolidityParser.TypeKeyword, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public elementaryTypeName(): ElementaryTypeNameContext {
		return this.getRuleContext(0, ElementaryTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTypeDefinition) {
			listener.enterTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTypeDefinition) {
			listener.exitTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeDefinition) {
			return visitor.visitTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForDeclarationContext extends ParserRuleContext {
	public usingForObject(): UsingForObjectContext {
		return this.getRuleContext(0, UsingForObjectContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public GlobalKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.GlobalKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingForDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUsingForDeclaration) {
			listener.enterUsingForDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUsingForDeclaration) {
			listener.exitUsingForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForDeclaration) {
			return visitor.visitUsingForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForObjectContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	public usingForObjectDirective(): UsingForObjectDirectiveContext[];
	public usingForObjectDirective(i: number): UsingForObjectDirectiveContext;
	public usingForObjectDirective(i?: number): UsingForObjectDirectiveContext | UsingForObjectDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UsingForObjectDirectiveContext);
		} else {
			return this.getRuleContext(i, UsingForObjectDirectiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingForObject; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUsingForObject) {
			listener.enterUsingForObject(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUsingForObject) {
			listener.exitUsingForObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForObject) {
			return visitor.visitUsingForObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForObjectDirectiveContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getRuleContext(0, UserDefinedTypeNameContext);
	}
	public userDefinableOperators(): UserDefinableOperatorsContext | undefined {
		return this.tryGetRuleContext(0, UserDefinableOperatorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingForObjectDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUsingForObjectDirective) {
			listener.enterUsingForObjectDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUsingForObjectDirective) {
			listener.exitUsingForObjectDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForObjectDirective) {
			return visitor.visitUsingForObjectDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinableOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_userDefinableOperators; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUserDefinableOperators) {
			listener.enterUserDefinableOperators(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUserDefinableOperators) {
			listener.exitUserDefinableOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUserDefinableOperators) {
			return visitor.visitUserDefinableOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_structDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStructDefinition) {
			listener.enterStructDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStructDefinition) {
			listener.exitStructDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStructDefinition) {
			return visitor.visitStructDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public VirtualKeyword(): TerminalNode[];
	public VirtualKeyword(i: number): TerminalNode;
	public VirtualKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.VirtualKeyword);
		} else {
			return this.getToken(SolidityParser.VirtualKeyword, i);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierDefinition) {
			listener.enterModifierDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierDefinition) {
			listener.exitModifierDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierDefinition) {
			return visitor.visitModifierDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierInvocationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierInvocation; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierInvocation) {
			listener.enterModifierInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierInvocation) {
			listener.exitModifierInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierInvocation) {
			return visitor.visitModifierInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public functionDescriptor(): FunctionDescriptorContext {
		return this.getRuleContext(0, FunctionDescriptorContext);
	}
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public modifierList(): ModifierListContext {
		return this.getRuleContext(0, ModifierListContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public returnParameters(): ReturnParametersContext | undefined {
		return this.tryGetRuleContext(0, ReturnParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDescriptorContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ConstructorKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstructorKeyword, 0); }
	public FallbackKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.FallbackKeyword, 0); }
	public ReceiveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ReceiveKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionDescriptor; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionDescriptor) {
			listener.enterFunctionDescriptor(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionDescriptor) {
			listener.exitFunctionDescriptor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDescriptor) {
			return visitor.visitFunctionDescriptor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnParametersContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnParameters; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterReturnParameters) {
			listener.enterReturnParameters(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitReturnParameters) {
			listener.exitReturnParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnParameters) {
			return visitor.visitReturnParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierListContext extends ParserRuleContext {
	public ExternalKeyword(): TerminalNode[];
	public ExternalKeyword(i: number): TerminalNode;
	public ExternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ExternalKeyword);
		} else {
			return this.getToken(SolidityParser.ExternalKeyword, i);
		}
	}
	public PublicKeyword(): TerminalNode[];
	public PublicKeyword(i: number): TerminalNode;
	public PublicKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PublicKeyword);
		} else {
			return this.getToken(SolidityParser.PublicKeyword, i);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public PrivateKeyword(): TerminalNode[];
	public PrivateKeyword(i: number): TerminalNode;
	public PrivateKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PrivateKeyword);
		} else {
			return this.getToken(SolidityParser.PrivateKeyword, i);
		}
	}
	public VirtualKeyword(): TerminalNode[];
	public VirtualKeyword(i: number): TerminalNode;
	public VirtualKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.VirtualKeyword);
		} else {
			return this.getToken(SolidityParser.VirtualKeyword, i);
		}
	}
	public stateMutability(): StateMutabilityContext[];
	public stateMutability(i: number): StateMutabilityContext;
	public stateMutability(i?: number): StateMutabilityContext | StateMutabilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMutabilityContext);
		} else {
			return this.getRuleContext(i, StateMutabilityContext);
		}
	}
	public modifierInvocation(): ModifierInvocationContext[];
	public modifierInvocation(i: number): ModifierInvocationContext;
	public modifierInvocation(i?: number): ModifierInvocationContext | ModifierInvocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierInvocationContext);
		} else {
			return this.getRuleContext(i, ModifierInvocationContext);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierList) {
			listener.enterModifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierList) {
			listener.exitModifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierList) {
			return visitor.visitModifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public eventParameterList(): EventParameterListContext {
		return this.getRuleContext(0, EventParameterListContext);
	}
	public AnonymousKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AnonymousKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventDefinition) {
			listener.enterEventDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventDefinition) {
			listener.exitEventDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventDefinition) {
			return visitor.visitEventDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEnumValue) {
			listener.enterEnumValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEnumValue) {
			listener.exitEnumValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumValue) {
			return visitor.visitEnumValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enumValue(): EnumValueContext[];
	public enumValue(i: number): EnumValueContext;
	public enumValue(i?: number): EnumValueContext | EnumValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumValueContext);
		} else {
			return this.getRuleContext(i, EnumValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEnumDefinition) {
			listener.enterEnumDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEnumDefinition) {
			listener.exitEnumDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumDefinition) {
			return visitor.visitEnumDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterListContext extends ParserRuleContext {
	public eventParameter(): EventParameterContext[];
	public eventParameter(i: number): EventParameterContext;
	public eventParameter(i?: number): EventParameterContext | EventParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventParameterContext);
		} else {
			return this.getRuleContext(i, EventParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventParameterList) {
			listener.enterEventParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventParameterList) {
			listener.exitEventParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameterList) {
			return visitor.visitEventParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public IndexedKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.IndexedKeyword, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventParameter) {
			listener.enterEventParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventParameter) {
			listener.exitEventParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameter) {
			return visitor.visitEventParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeParameterListContext extends ParserRuleContext {
	public functionTypeParameter(): FunctionTypeParameterContext[];
	public functionTypeParameter(i: number): FunctionTypeParameterContext;
	public functionTypeParameter(i?: number): FunctionTypeParameterContext | FunctionTypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionTypeParameterContext);
		} else {
			return this.getRuleContext(i, FunctionTypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeParameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeParameterList) {
			listener.enterFunctionTypeParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeParameterList) {
			listener.exitFunctionTypeParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeParameterList) {
			return visitor.visitFunctionTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeParameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeParameter) {
			listener.enterFunctionTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeParameter) {
			listener.exitFunctionTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeParameter) {
			return visitor.visitFunctionTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	public mapping(): MappingContext | undefined {
		return this.tryGetRuleContext(0, MappingContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public functionTypeName(): FunctionTypeNameContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeNameContext);
	}
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinedTypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_userDefinedTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUserDefinedTypeName) {
			listener.enterUserDefinedTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUserDefinedTypeName) {
			listener.exitUserDefinedTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUserDefinedTypeName) {
			return visitor.visitUserDefinedTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingKeyContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mappingKey; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterMappingKey) {
			listener.enterMappingKey(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitMappingKey) {
			listener.exitMappingKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMappingKey) {
			return visitor.visitMappingKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingContext extends ParserRuleContext {
	public mappingKey(): MappingKeyContext {
		return this.getRuleContext(0, MappingKeyContext);
	}
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public mappingKeyName(): MappingKeyNameContext | undefined {
		return this.tryGetRuleContext(0, MappingKeyNameContext);
	}
	public mappingValueName(): MappingValueNameContext | undefined {
		return this.tryGetRuleContext(0, MappingValueNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mapping; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterMapping) {
			listener.enterMapping(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitMapping) {
			listener.exitMapping(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMapping) {
			return visitor.visitMapping(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingKeyNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mappingKeyName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterMappingKeyName) {
			listener.enterMappingKeyName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitMappingKeyName) {
			listener.exitMappingKeyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMappingKeyName) {
			return visitor.visitMappingKeyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingValueNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mappingValueName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterMappingValueName) {
			listener.enterMappingValueName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitMappingValueName) {
			listener.exitMappingValueName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMappingValueName) {
			return visitor.visitMappingValueName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeNameContext extends ParserRuleContext {
	public functionTypeParameterList(): FunctionTypeParameterListContext[];
	public functionTypeParameterList(i: number): FunctionTypeParameterListContext;
	public functionTypeParameterList(i?: number): FunctionTypeParameterListContext | FunctionTypeParameterListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionTypeParameterListContext);
		} else {
			return this.getRuleContext(i, FunctionTypeParameterListContext);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public ExternalKeyword(): TerminalNode[];
	public ExternalKeyword(i: number): TerminalNode;
	public ExternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ExternalKeyword);
		} else {
			return this.getToken(SolidityParser.ExternalKeyword, i);
		}
	}
	public stateMutability(): StateMutabilityContext[];
	public stateMutability(i: number): StateMutabilityContext;
	public stateMutability(i?: number): StateMutabilityContext | StateMutabilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMutabilityContext);
		} else {
			return this.getRuleContext(i, StateMutabilityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeName) {
			listener.enterFunctionTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeName) {
			listener.exitFunctionTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeName) {
			return visitor.visitFunctionTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageLocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_storageLocation; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStorageLocation) {
			listener.enterStorageLocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStorageLocation) {
			listener.exitStorageLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStorageLocation) {
			return visitor.visitStorageLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMutabilityContext extends ParserRuleContext {
	public PureKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PureKeyword, 0); }
	public ConstantKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstantKeyword, 0); }
	public ViewKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ViewKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateMutability; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStateMutability) {
			listener.enterStateMutability(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStateMutability) {
			listener.exitStateMutability(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateMutability) {
			return visitor.visitStateMutability(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_block; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public inlineAssemblyStatement(): InlineAssemblyStatementContext | undefined {
		return this.tryGetRuleContext(0, InlineAssemblyStatementContext);
	}
	public doWhileStatement(): DoWhileStatementContext | undefined {
		return this.tryGetRuleContext(0, DoWhileStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public emitStatement(): EmitStatementContext | undefined {
		return this.tryGetRuleContext(0, EmitStatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public uncheckedStatement(): UncheckedStatementContext | undefined {
		return this.tryGetRuleContext(0, UncheckedStatementContext);
	}
	public revertStatement(): RevertStatementContext | undefined {
		return this.tryGetRuleContext(0, RevertStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_statement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public returnParameters(): ReturnParametersContext | undefined {
		return this.tryGetRuleContext(0, ReturnParametersContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStatementContext extends ParserRuleContext {
	public variableDeclarationStatement(): VariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_simpleStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSimpleStatement) {
			listener.enterSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSimpleStatement) {
			listener.exitSimpleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSimpleStatement) {
			return visitor.visitSimpleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UncheckedStatementContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_uncheckedStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUncheckedStatement) {
			listener.enterUncheckedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUncheckedStatement) {
			listener.exitUncheckedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUncheckedStatement) {
			return visitor.visitUncheckedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAssemblyStatementContext extends ParserRuleContext {
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public StringLiteralFragment(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.StringLiteralFragment, 0); }
	public inlineAssemblyStatementFlag(): InlineAssemblyStatementFlagContext | undefined {
		return this.tryGetRuleContext(0, InlineAssemblyStatementFlagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inlineAssemblyStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInlineAssemblyStatement) {
			listener.enterInlineAssemblyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInlineAssemblyStatement) {
			listener.exitInlineAssemblyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInlineAssemblyStatement) {
			return visitor.visitInlineAssemblyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAssemblyStatementFlagContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inlineAssemblyStatementFlag; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInlineAssemblyStatementFlag) {
			listener.enterInlineAssemblyStatementFlag(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInlineAssemblyStatementFlag) {
			listener.exitInlineAssemblyStatementFlag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInlineAssemblyStatementFlag) {
			return visitor.visitInlineAssemblyStatementFlag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_doWhileStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterDoWhileStatement) {
			listener.enterDoWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitDoWhileStatement) {
			listener.exitDoWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitDoWhileStatement) {
			return visitor.visitDoWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public ContinueKeyword(): TerminalNode { return this.getToken(SolidityParser.ContinueKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BreakKeyword(): TerminalNode { return this.getToken(SolidityParser.BreakKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmitStatementContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_emitStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEmitStatement) {
			listener.enterEmitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEmitStatement) {
			listener.exitEmitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEmitStatement) {
			return visitor.visitEmitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RevertStatementContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_revertStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterRevertStatement) {
			listener.enterRevertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitRevertStatement) {
			listener.exitRevertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitRevertStatement) {
			return visitor.visitRevertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationStatementContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclarationStatement) {
			listener.enterVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclarationStatement) {
			listener.exitVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationStatement) {
			return visitor.visitVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaryTypeNameContext extends ParserRuleContext {
	public Int(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Int, 0); }
	public Uint(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Uint, 0); }
	public Byte(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Byte, 0); }
	public Fixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Fixed, 0); }
	public Ufixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Ufixed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_elementaryTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterElementaryTypeName) {
			listener.enterElementaryTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitElementaryTypeName) {
			listener.exitElementaryTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitElementaryTypeName) {
			return visitor.visitElementaryTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public nameValueList(): NameValueListContext | undefined {
		return this.tryGetRuleContext(0, NameValueListContext);
	}
	public functionCallArguments(): FunctionCallArgumentsContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallArgumentsContext);
	}
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BooleanLiteral, 0); }
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public TypeKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.TypeKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	public tupleExpression(): TupleExpressionContext | undefined {
		return this.tryGetRuleContext(0, TupleExpressionContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueListContext extends ParserRuleContext {
	public nameValue(): NameValueContext[];
	public nameValue(i: number): NameValueContext;
	public nameValue(i?: number): NameValueContext | NameValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameValueContext);
		} else {
			return this.getRuleContext(i, NameValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValueList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValueList) {
			listener.enterNameValueList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValueList) {
			listener.exitNameValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValueList) {
			return visitor.visitNameValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValue) {
			listener.enterNameValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValue) {
			listener.exitNameValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValue) {
			return visitor.visitNameValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallArgumentsContext extends ParserRuleContext {
	public nameValueList(): NameValueListContext | undefined {
		return this.tryGetRuleContext(0, NameValueListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionCallArguments; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionCallArguments) {
			listener.enterFunctionCallArguments(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionCallArguments) {
			listener.exitFunctionCallArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCallArguments) {
			return visitor.visitFunctionCallArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public functionCallArguments(): FunctionCallArgumentsContext {
		return this.getRuleContext(0, FunctionCallArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyBlockContext extends ParserRuleContext {
	public assemblyItem(): AssemblyItemContext[];
	public assemblyItem(i: number): AssemblyItemContext;
	public assemblyItem(i?: number): AssemblyItemContext | AssemblyItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyItemContext);
		} else {
			return this.getRuleContext(i, AssemblyItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyBlock; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyBlock) {
			listener.enterAssemblyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyBlock) {
			listener.exitAssemblyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyBlock) {
			return visitor.visitAssemblyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyItemContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext | undefined {
		return this.tryGetRuleContext(0, AssemblyBlockContext);
	}
	public assemblyExpression(): AssemblyExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLocalDefinitionContext);
	}
	public assemblyAssignment(): AssemblyAssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssemblyAssignmentContext);
	}
	public assemblyStackAssignment(): AssemblyStackAssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssemblyStackAssignmentContext);
	}
	public labelDefinition(): LabelDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LabelDefinitionContext);
	}
	public assemblySwitch(): AssemblySwitchContext | undefined {
		return this.tryGetRuleContext(0, AssemblySwitchContext);
	}
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFunctionDefinitionContext);
	}
	public assemblyFor(): AssemblyForContext | undefined {
		return this.tryGetRuleContext(0, AssemblyForContext);
	}
	public assemblyIf(): AssemblyIfContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIfContext);
	}
	public BreakKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BreakKeyword, 0); }
	public ContinueKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ContinueKeyword, 0); }
	public LeaveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LeaveKeyword, 0); }
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyItem; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyItem) {
			listener.enterAssemblyItem(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyItem) {
			listener.exitAssemblyItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyItem) {
			return visitor.visitAssemblyItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyExpressionContext extends ParserRuleContext {
	public assemblyCall(): AssemblyCallContext | undefined {
		return this.tryGetRuleContext(0, AssemblyCallContext);
	}
	public assemblyLiteral(): AssemblyLiteralContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLiteralContext);
	}
	public assemblyMember(): AssemblyMemberContext | undefined {
		return this.tryGetRuleContext(0, AssemblyMemberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyExpression) {
			listener.enterAssemblyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyExpression) {
			listener.exitAssemblyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyExpression) {
			return visitor.visitAssemblyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyMemberContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyMember; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyMember) {
			listener.enterAssemblyMember(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyMember) {
			listener.exitAssemblyMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyMember) {
			return visitor.visitAssemblyMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyExpression(): AssemblyExpressionContext[];
	public assemblyExpression(i: number): AssemblyExpressionContext;
	public assemblyExpression(i?: number): AssemblyExpressionContext | AssemblyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyExpressionContext);
		} else {
			return this.getRuleContext(i, AssemblyExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyCall; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyCall) {
			listener.enterAssemblyCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyCall) {
			listener.exitAssemblyCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCall) {
			return visitor.visitAssemblyCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLocalDefinitionContext extends ParserRuleContext {
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		return this.getRuleContext(0, AssemblyIdentifierOrListContext);
	}
	public assemblyExpression(): AssemblyExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyLocalDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyLocalDefinition) {
			listener.enterAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyLocalDefinition) {
			listener.exitAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLocalDefinition) {
			return visitor.visitAssemblyLocalDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyAssignmentContext extends ParserRuleContext {
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		return this.getRuleContext(0, AssemblyIdentifierOrListContext);
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyAssignment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyAssignment) {
			listener.enterAssemblyAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyAssignment) {
			listener.exitAssemblyAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyAssignment) {
			return visitor.visitAssemblyAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierOrListContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyMember(): AssemblyMemberContext | undefined {
		return this.tryGetRuleContext(0, AssemblyMemberContext);
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIdentifierOrList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIdentifierOrList) {
			listener.enterAssemblyIdentifierOrList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIdentifierOrList) {
			listener.exitAssemblyIdentifierOrList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierOrList) {
			return visitor.visitAssemblyIdentifierOrList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIdentifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIdentifierList) {
			listener.enterAssemblyIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIdentifierList) {
			listener.exitAssemblyIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierList) {
			return visitor.visitAssemblyIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyStackAssignmentContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyStackAssignment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyStackAssignment) {
			listener.enterAssemblyStackAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyStackAssignment) {
			listener.exitAssemblyStackAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyStackAssignment) {
			return visitor.visitAssemblyStackAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_labelDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterLabelDefinition) {
			listener.enterLabelDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitLabelDefinition) {
			listener.exitLabelDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitLabelDefinition) {
			return visitor.visitLabelDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblySwitchContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyCase(): AssemblyCaseContext[];
	public assemblyCase(i: number): AssemblyCaseContext;
	public assemblyCase(i?: number): AssemblyCaseContext | AssemblyCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyCaseContext);
		} else {
			return this.getRuleContext(i, AssemblyCaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblySwitch; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblySwitch) {
			listener.enterAssemblySwitch(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblySwitch) {
			listener.exitAssemblySwitch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblySwitch) {
			return visitor.visitAssemblySwitch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCaseContext extends ParserRuleContext {
	public assemblyLiteral(): AssemblyLiteralContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLiteralContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyCase; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyCase) {
			listener.enterAssemblyCase(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyCase) {
			listener.exitAssemblyCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCase) {
			return visitor.visitAssemblyCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFunctionReturnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFunctionDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFunctionDefinition) {
			listener.enterAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFunctionDefinition) {
			listener.exitAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionDefinition) {
			return visitor.visitAssemblyFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionReturnsContext extends ParserRuleContext {
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFunctionReturns; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFunctionReturns) {
			listener.enterAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFunctionReturns) {
			listener.exitAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionReturns) {
			return visitor.visitAssemblyFunctionReturns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyForContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext[];
	public assemblyExpression(i: number): AssemblyExpressionContext;
	public assemblyExpression(i?: number): AssemblyExpressionContext | AssemblyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyExpressionContext);
		} else {
			return this.getRuleContext(i, AssemblyExpressionContext);
		}
	}
	public assemblyBlock(): AssemblyBlockContext[];
	public assemblyBlock(i: number): AssemblyBlockContext;
	public assemblyBlock(i?: number): AssemblyBlockContext | AssemblyBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyBlockContext);
		} else {
			return this.getRuleContext(i, AssemblyBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFor; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFor) {
			listener.enterAssemblyFor(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFor) {
			listener.exitAssemblyFor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFor) {
			return visitor.visitAssemblyFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIfContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIf; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIf) {
			listener.enterAssemblyIf(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIf) {
			listener.exitAssemblyIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIf) {
			return visitor.visitAssemblyIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLiteralContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	public HexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexNumber, 0); }
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyLiteral) {
			listener.enterAssemblyLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyLiteral) {
			listener.exitAssemblyLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLiteral) {
			return visitor.visitAssemblyLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tupleExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	public HexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexNumber, 0); }
	public NumberUnit(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.NumberUnit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_numberLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ReceiveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ReceiveKeyword, 0); }
	public GlobalKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.GlobalKeyword, 0); }
	public ConstructorKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstructorKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	public LeaveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LeaveKeyword, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Identifier, 0); }
	public MultiLineComment(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.MultiLineComment, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public MultiLineComment(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.MultiLineComment, 0); }
	public LineComment(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LineComment, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_comment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexLiteralContext extends ParserRuleContext {
	public HexLiteralFragment(): TerminalNode[];
	public HexLiteralFragment(i: number): TerminalNode;
	public HexLiteralFragment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.HexLiteralFragment);
		} else {
			return this.getToken(SolidityParser.HexLiteralFragment, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_hexLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterHexLiteral) {
			listener.enterHexLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitHexLiteral) {
			listener.exitHexLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitHexLiteral) {
			return visitor.visitHexLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideSpecifierContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext[];
	public userDefinedTypeName(i: number): UserDefinedTypeNameContext;
	public userDefinedTypeName(i?: number): UserDefinedTypeNameContext | UserDefinedTypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserDefinedTypeNameContext);
		} else {
			return this.getRuleContext(i, UserDefinedTypeNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_overrideSpecifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterOverrideSpecifier) {
			listener.enterOverrideSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitOverrideSpecifier) {
			listener.exitOverrideSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitOverrideSpecifier) {
			return visitor.visitOverrideSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public StringLiteralFragment(): TerminalNode[];
	public StringLiteralFragment(i: number): TerminalNode;
	public StringLiteralFragment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.StringLiteralFragment);
		} else {
			return this.getToken(SolidityParser.StringLiteralFragment, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


