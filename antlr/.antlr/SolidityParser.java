// Generated from /Users/feijunjie/Projects/m1n337_repos/auditor-notebook/antlr/Solidity.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class SolidityParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		T__52=53, T__53=54, T__54=55, T__55=56, T__56=57, T__57=58, T__58=59, 
		T__59=60, T__60=61, T__61=62, T__62=63, T__63=64, T__64=65, T__65=66, 
		T__66=67, T__67=68, T__68=69, T__69=70, T__70=71, T__71=72, T__72=73, 
		T__73=74, T__74=75, T__75=76, T__76=77, T__77=78, T__78=79, T__79=80, 
		T__80=81, T__81=82, T__82=83, T__83=84, T__84=85, T__85=86, T__86=87, 
		T__87=88, T__88=89, T__89=90, T__90=91, T__91=92, T__92=93, T__93=94, 
		T__94=95, T__95=96, Int=97, Uint=98, Byte=99, Fixed=100, Ufixed=101, BooleanLiteral=102, 
		DecimalNumber=103, HexNumber=104, NumberUnit=105, HexLiteralFragment=106, 
		ReservedKeyword=107, AnonymousKeyword=108, BreakKeyword=109, ConstantKeyword=110, 
		ImmutableKeyword=111, ContinueKeyword=112, LeaveKeyword=113, ExternalKeyword=114, 
		IndexedKeyword=115, InternalKeyword=116, PayableKeyword=117, PrivateKeyword=118, 
		PublicKeyword=119, VirtualKeyword=120, PureKeyword=121, TypeKeyword=122, 
		ViewKeyword=123, GlobalKeyword=124, ConstructorKeyword=125, FallbackKeyword=126, 
		ReceiveKeyword=127, Identifier=128, StringLiteralFragment=129, VersionLiteral=130, 
		WS=131, MultiLineComment=132, LineComment=133;
	public static final int
		RULE_sourceUnit = 0, RULE_pragmaDirective = 1, RULE_pragmaName = 2, RULE_pragmaValue = 3, 
		RULE_version = 4, RULE_versionOperator = 5, RULE_versionConstraint = 6, 
		RULE_importDeclaration = 7, RULE_importDirective = 8, RULE_importPath = 9, 
		RULE_contractDefinition = 10, RULE_inheritanceSpecifier = 11, RULE_contractPart = 12, 
		RULE_stateVariableDeclaration = 13, RULE_fileLevelConstant = 14, RULE_customErrorDefinition = 15, 
		RULE_typeDefinition = 16, RULE_usingForDeclaration = 17, RULE_usingForObject = 18, 
		RULE_usingForObjectDirective = 19, RULE_userDefinableOperators = 20, RULE_structDefinition = 21, 
		RULE_modifierDefinition = 22, RULE_modifierInvocation = 23, RULE_functionDefinition = 24, 
		RULE_functionDescriptor = 25, RULE_returnParameters = 26, RULE_modifierList = 27, 
		RULE_eventDefinition = 28, RULE_enumValue = 29, RULE_enumDefinition = 30, 
		RULE_parameterList = 31, RULE_parameter = 32, RULE_eventParameterList = 33, 
		RULE_eventParameter = 34, RULE_functionTypeParameterList = 35, RULE_functionTypeParameter = 36, 
		RULE_variableDeclaration = 37, RULE_typeName = 38, RULE_userDefinedTypeName = 39, 
		RULE_mappingKey = 40, RULE_mapping = 41, RULE_mappingKeyName = 42, RULE_mappingValueName = 43, 
		RULE_functionTypeName = 44, RULE_storageLocation = 45, RULE_stateMutability = 46, 
		RULE_block = 47, RULE_statement = 48, RULE_expressionStatement = 49, RULE_ifStatement = 50, 
		RULE_tryStatement = 51, RULE_catchClause = 52, RULE_whileStatement = 53, 
		RULE_simpleStatement = 54, RULE_uncheckedStatement = 55, RULE_forStatement = 56, 
		RULE_inlineAssemblyStatement = 57, RULE_inlineAssemblyStatementFlag = 58, 
		RULE_doWhileStatement = 59, RULE_continueStatement = 60, RULE_breakStatement = 61, 
		RULE_returnStatement = 62, RULE_throwStatement = 63, RULE_emitStatement = 64, 
		RULE_revertStatement = 65, RULE_variableDeclarationStatement = 66, RULE_variableDeclarationList = 67, 
		RULE_identifierList = 68, RULE_elementaryTypeName = 69, RULE_expression = 70, 
		RULE_primaryExpression = 71, RULE_expressionList = 72, RULE_nameValueList = 73, 
		RULE_nameValue = 74, RULE_functionCallArguments = 75, RULE_functionCall = 76, 
		RULE_assemblyBlock = 77, RULE_assemblyItem = 78, RULE_assemblyExpression = 79, 
		RULE_assemblyMember = 80, RULE_assemblyCall = 81, RULE_assemblyLocalDefinition = 82, 
		RULE_assemblyAssignment = 83, RULE_assemblyIdentifierOrList = 84, RULE_assemblyIdentifierList = 85, 
		RULE_assemblyStackAssignment = 86, RULE_labelDefinition = 87, RULE_assemblySwitch = 88, 
		RULE_assemblyCase = 89, RULE_assemblyFunctionDefinition = 90, RULE_assemblyFunctionReturns = 91, 
		RULE_assemblyFor = 92, RULE_assemblyIf = 93, RULE_assemblyLiteral = 94, 
		RULE_tupleExpression = 95, RULE_numberLiteral = 96, RULE_identifier = 97, 
		RULE_comment = 98, RULE_hexLiteral = 99, RULE_overrideSpecifier = 100, 
		RULE_stringLiteral = 101;
	private static String[] makeRuleNames() {
		return new String[] {
			"sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version", 
			"versionOperator", "versionConstraint", "importDeclaration", "importDirective", 
			"importPath", "contractDefinition", "inheritanceSpecifier", "contractPart", 
			"stateVariableDeclaration", "fileLevelConstant", "customErrorDefinition", 
			"typeDefinition", "usingForDeclaration", "usingForObject", "usingForObjectDirective", 
			"userDefinableOperators", "structDefinition", "modifierDefinition", "modifierInvocation", 
			"functionDefinition", "functionDescriptor", "returnParameters", "modifierList", 
			"eventDefinition", "enumValue", "enumDefinition", "parameterList", "parameter", 
			"eventParameterList", "eventParameter", "functionTypeParameterList", 
			"functionTypeParameter", "variableDeclaration", "typeName", "userDefinedTypeName", 
			"mappingKey", "mapping", "mappingKeyName", "mappingValueName", "functionTypeName", 
			"storageLocation", "stateMutability", "block", "statement", "expressionStatement", 
			"ifStatement", "tryStatement", "catchClause", "whileStatement", "simpleStatement", 
			"uncheckedStatement", "forStatement", "inlineAssemblyStatement", "inlineAssemblyStatementFlag", 
			"doWhileStatement", "continueStatement", "breakStatement", "returnStatement", 
			"throwStatement", "emitStatement", "revertStatement", "variableDeclarationStatement", 
			"variableDeclarationList", "identifierList", "elementaryTypeName", "expression", 
			"primaryExpression", "expressionList", "nameValueList", "nameValue", 
			"functionCallArguments", "functionCall", "assemblyBlock", "assemblyItem", 
			"assemblyExpression", "assemblyMember", "assemblyCall", "assemblyLocalDefinition", 
			"assemblyAssignment", "assemblyIdentifierOrList", "assemblyIdentifierList", 
			"assemblyStackAssignment", "labelDefinition", "assemblySwitch", "assemblyCase", 
			"assemblyFunctionDefinition", "assemblyFunctionReturns", "assemblyFor", 
			"assemblyIf", "assemblyLiteral", "tupleExpression", "numberLiteral", 
			"identifier", "comment", "hexLiteral", "overrideSpecifier", "stringLiteral"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'pragma'", "';'", "'*'", "'||'", "'^'", "'~'", "'>='", "'>'", 
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
			"'->'", "'callback'", "'override'", null, null, null, null, null, null, 
			null, null, null, null, null, "'anonymous'", "'break'", "'constant'", 
			"'immutable'", "'continue'", "'leave'", "'external'", "'indexed'", "'internal'", 
			"'payable'", "'private'", "'public'", "'virtual'", "'pure'", "'type'", 
			"'view'", "'global'", "'constructor'", "'fallback'", "'receive'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "Int", "Uint", "Byte", "Fixed", "Ufixed", "BooleanLiteral", "DecimalNumber", 
			"HexNumber", "NumberUnit", "HexLiteralFragment", "ReservedKeyword", "AnonymousKeyword", 
			"BreakKeyword", "ConstantKeyword", "ImmutableKeyword", "ContinueKeyword", 
			"LeaveKeyword", "ExternalKeyword", "IndexedKeyword", "InternalKeyword", 
			"PayableKeyword", "PrivateKeyword", "PublicKeyword", "VirtualKeyword", 
			"PureKeyword", "TypeKeyword", "ViewKeyword", "GlobalKeyword", "ConstructorKeyword", 
			"FallbackKeyword", "ReceiveKeyword", "Identifier", "StringLiteralFragment", 
			"VersionLiteral", "WS", "MultiLineComment", "LineComment"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Solidity.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SolidityParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SourceUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(SolidityParser.EOF, 0); }
		public List<CommentContext> comment() {
			return getRuleContexts(CommentContext.class);
		}
		public CommentContext comment(int i) {
			return getRuleContext(CommentContext.class,i);
		}
		public List<PragmaDirectiveContext> pragmaDirective() {
			return getRuleContexts(PragmaDirectiveContext.class);
		}
		public PragmaDirectiveContext pragmaDirective(int i) {
			return getRuleContext(PragmaDirectiveContext.class,i);
		}
		public List<ImportDirectiveContext> importDirective() {
			return getRuleContexts(ImportDirectiveContext.class);
		}
		public ImportDirectiveContext importDirective(int i) {
			return getRuleContext(ImportDirectiveContext.class,i);
		}
		public List<ContractDefinitionContext> contractDefinition() {
			return getRuleContexts(ContractDefinitionContext.class);
		}
		public ContractDefinitionContext contractDefinition(int i) {
			return getRuleContext(ContractDefinitionContext.class,i);
		}
		public List<EnumDefinitionContext> enumDefinition() {
			return getRuleContexts(EnumDefinitionContext.class);
		}
		public EnumDefinitionContext enumDefinition(int i) {
			return getRuleContext(EnumDefinitionContext.class,i);
		}
		public List<EventDefinitionContext> eventDefinition() {
			return getRuleContexts(EventDefinitionContext.class);
		}
		public EventDefinitionContext eventDefinition(int i) {
			return getRuleContext(EventDefinitionContext.class,i);
		}
		public List<StructDefinitionContext> structDefinition() {
			return getRuleContexts(StructDefinitionContext.class);
		}
		public StructDefinitionContext structDefinition(int i) {
			return getRuleContext(StructDefinitionContext.class,i);
		}
		public List<FunctionDefinitionContext> functionDefinition() {
			return getRuleContexts(FunctionDefinitionContext.class);
		}
		public FunctionDefinitionContext functionDefinition(int i) {
			return getRuleContext(FunctionDefinitionContext.class,i);
		}
		public List<FileLevelConstantContext> fileLevelConstant() {
			return getRuleContexts(FileLevelConstantContext.class);
		}
		public FileLevelConstantContext fileLevelConstant(int i) {
			return getRuleContext(FileLevelConstantContext.class,i);
		}
		public List<CustomErrorDefinitionContext> customErrorDefinition() {
			return getRuleContexts(CustomErrorDefinitionContext.class);
		}
		public CustomErrorDefinitionContext customErrorDefinition(int i) {
			return getRuleContext(CustomErrorDefinitionContext.class,i);
		}
		public List<TypeDefinitionContext> typeDefinition() {
			return getRuleContexts(TypeDefinitionContext.class);
		}
		public TypeDefinitionContext typeDefinition(int i) {
			return getRuleContext(TypeDefinitionContext.class,i);
		}
		public List<UsingForDeclarationContext> usingForDeclaration() {
			return getRuleContexts(UsingForDeclarationContext.class);
		}
		public UsingForDeclarationContext usingForDeclaration(int i) {
			return getRuleContext(UsingForDeclarationContext.class,i);
		}
		public SourceUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceUnit; }
	}

	public final SourceUnitContext sourceUnit() throws RecognitionException {
		SourceUnitContext _localctx = new SourceUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_sourceUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & -4610468515353436158L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & -855120710811516921L) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & 49L) != 0)) {
				{
				setState(216);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(204);
					comment();
					}
					break;
				case 2:
					{
					setState(205);
					pragmaDirective();
					}
					break;
				case 3:
					{
					setState(206);
					importDirective();
					}
					break;
				case 4:
					{
					setState(207);
					contractDefinition();
					}
					break;
				case 5:
					{
					setState(208);
					enumDefinition();
					}
					break;
				case 6:
					{
					setState(209);
					eventDefinition();
					}
					break;
				case 7:
					{
					setState(210);
					structDefinition();
					}
					break;
				case 8:
					{
					setState(211);
					functionDefinition();
					}
					break;
				case 9:
					{
					setState(212);
					fileLevelConstant();
					}
					break;
				case 10:
					{
					setState(213);
					customErrorDefinition();
					}
					break;
				case 11:
					{
					setState(214);
					typeDefinition();
					}
					break;
				case 12:
					{
					setState(215);
					usingForDeclaration();
					}
					break;
				}
				}
				setState(220);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(221);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PragmaDirectiveContext extends ParserRuleContext {
		public PragmaNameContext pragmaName() {
			return getRuleContext(PragmaNameContext.class,0);
		}
		public PragmaValueContext pragmaValue() {
			return getRuleContext(PragmaValueContext.class,0);
		}
		public PragmaDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pragmaDirective; }
	}

	public final PragmaDirectiveContext pragmaDirective() throws RecognitionException {
		PragmaDirectiveContext _localctx = new PragmaDirectiveContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_pragmaDirective);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(T__0);
			setState(224);
			pragmaName();
			setState(225);
			pragmaValue();
			setState(226);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PragmaNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public PragmaNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pragmaName; }
	}

	public final PragmaNameContext pragmaName() throws RecognitionException {
		PragmaNameContext _localctx = new PragmaNameContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_pragmaName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(228);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PragmaValueContext extends ParserRuleContext {
		public VersionContext version() {
			return getRuleContext(VersionContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public PragmaValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pragmaValue; }
	}

	public final PragmaValueContext pragmaValue() throws RecognitionException {
		PragmaValueContext _localctx = new PragmaValueContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_pragmaValue);
		try {
			setState(233);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(230);
				match(T__2);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(231);
				version();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(232);
				expression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VersionContext extends ParserRuleContext {
		public List<VersionConstraintContext> versionConstraint() {
			return getRuleContexts(VersionConstraintContext.class);
		}
		public VersionConstraintContext versionConstraint(int i) {
			return getRuleContext(VersionConstraintContext.class,i);
		}
		public VersionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_version; }
	}

	public final VersionContext version() throws RecognitionException {
		VersionContext _localctx = new VersionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_version);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			versionConstraint();
			setState(242);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4080L) != 0) || _la==DecimalNumber || _la==VersionLiteral) {
				{
				{
				setState(237);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__3) {
					{
					setState(236);
					match(T__3);
					}
				}

				setState(239);
				versionConstraint();
				}
				}
				setState(244);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VersionOperatorContext extends ParserRuleContext {
		public VersionOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_versionOperator; }
	}

	public final VersionOperatorContext versionOperator() throws RecognitionException {
		VersionOperatorContext _localctx = new VersionOperatorContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_versionOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4064L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VersionConstraintContext extends ParserRuleContext {
		public TerminalNode VersionLiteral() { return getToken(SolidityParser.VersionLiteral, 0); }
		public VersionOperatorContext versionOperator() {
			return getRuleContext(VersionOperatorContext.class,0);
		}
		public TerminalNode DecimalNumber() { return getToken(SolidityParser.DecimalNumber, 0); }
		public VersionConstraintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_versionConstraint; }
	}

	public final VersionConstraintContext versionConstraint() throws RecognitionException {
		VersionConstraintContext _localctx = new VersionConstraintContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_versionConstraint);
		int _la;
		try {
			setState(255);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(248);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4064L) != 0)) {
					{
					setState(247);
					versionOperator();
					}
				}

				setState(250);
				match(VersionLiteral);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(252);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4064L) != 0)) {
					{
					setState(251);
					versionOperator();
					}
				}

				setState(254);
				match(DecimalNumber);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImportDeclarationContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public ImportDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDeclaration; }
	}

	public final ImportDeclarationContext importDeclaration() throws RecognitionException {
		ImportDeclarationContext _localctx = new ImportDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_importDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			identifier();
			setState(260);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__11) {
				{
				setState(258);
				match(T__11);
				setState(259);
				identifier();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImportDirectiveContext extends ParserRuleContext {
		public ImportPathContext importPath() {
			return getRuleContext(ImportPathContext.class,0);
		}
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<ImportDeclarationContext> importDeclaration() {
			return getRuleContexts(ImportDeclarationContext.class);
		}
		public ImportDeclarationContext importDeclaration(int i) {
			return getRuleContext(ImportDeclarationContext.class,i);
		}
		public ImportDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDirective; }
	}

	public final ImportDirectiveContext importDirective() throws RecognitionException {
		ImportDirectiveContext _localctx = new ImportDirectiveContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_importDirective);
		int _la;
		try {
			setState(298);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(262);
				match(T__12);
				setState(263);
				importPath();
				setState(266);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__11) {
					{
					setState(264);
					match(T__11);
					setState(265);
					identifier();
					}
				}

				setState(268);
				match(T__1);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(270);
				match(T__12);
				setState(273);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__2:
					{
					setState(271);
					match(T__2);
					}
					break;
				case T__13:
				case T__24:
				case T__43:
				case T__49:
				case T__61:
				case T__94:
				case LeaveKeyword:
				case PayableKeyword:
				case GlobalKeyword:
				case ConstructorKeyword:
				case ReceiveKeyword:
				case Identifier:
				case MultiLineComment:
					{
					setState(272);
					identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(277);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__11) {
					{
					setState(275);
					match(T__11);
					setState(276);
					identifier();
					}
				}

				setState(279);
				match(T__13);
				setState(280);
				importPath();
				setState(281);
				match(T__1);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(283);
				match(T__12);
				setState(284);
				match(T__14);
				setState(285);
				importDeclaration();
				setState(290);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(286);
					match(T__15);
					setState(287);
					importDeclaration();
					}
					}
					setState(292);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(293);
				match(T__16);
				setState(294);
				match(T__13);
				setState(295);
				importPath();
				setState(296);
				match(T__1);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImportPathContext extends ParserRuleContext {
		public TerminalNode StringLiteralFragment() { return getToken(SolidityParser.StringLiteralFragment, 0); }
		public ImportPathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importPath; }
	}

	public final ImportPathContext importPath() throws RecognitionException {
		ImportPathContext _localctx = new ImportPathContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_importPath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			match(StringLiteralFragment);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContractDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<InheritanceSpecifierContext> inheritanceSpecifier() {
			return getRuleContexts(InheritanceSpecifierContext.class);
		}
		public InheritanceSpecifierContext inheritanceSpecifier(int i) {
			return getRuleContext(InheritanceSpecifierContext.class,i);
		}
		public List<ContractPartContext> contractPart() {
			return getRuleContexts(ContractPartContext.class);
		}
		public ContractPartContext contractPart(int i) {
			return getRuleContext(ContractPartContext.class,i);
		}
		public ContractDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractDefinition; }
	}

	public final ContractDefinitionContext contractDefinition() throws RecognitionException {
		ContractDefinitionContext _localctx = new ContractDefinitionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_contractDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__17) {
				{
				setState(302);
				match(T__17);
				}
			}

			setState(305);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3670016L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(306);
			identifier();
			setState(316);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(307);
				match(T__21);
				setState(308);
				inheritanceSpecifier();
				setState(313);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(309);
					match(T__15);
					setState(310);
					inheritanceSpecifier();
					}
					}
					setState(315);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(318);
			match(T__14);
			setState(322);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & 8725798596909057L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 429098532989L) != 0)) {
				{
				{
				setState(319);
				contractPart();
				}
				}
				setState(324);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(325);
			match(T__16);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InheritanceSpecifierContext extends ParserRuleContext {
		public UserDefinedTypeNameContext userDefinedTypeName() {
			return getRuleContext(UserDefinedTypeNameContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public InheritanceSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inheritanceSpecifier; }
	}

	public final InheritanceSpecifierContext inheritanceSpecifier() throws RecognitionException {
		InheritanceSpecifierContext _localctx = new InheritanceSpecifierContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_inheritanceSpecifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(327);
			userDefinedTypeName();
			setState(333);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(328);
				match(T__22);
				setState(330);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
					{
					setState(329);
					expressionList();
					}
				}

				setState(332);
				match(T__23);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContractPartContext extends ParserRuleContext {
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public StateVariableDeclarationContext stateVariableDeclaration() {
			return getRuleContext(StateVariableDeclarationContext.class,0);
		}
		public UsingForDeclarationContext usingForDeclaration() {
			return getRuleContext(UsingForDeclarationContext.class,0);
		}
		public StructDefinitionContext structDefinition() {
			return getRuleContext(StructDefinitionContext.class,0);
		}
		public ModifierDefinitionContext modifierDefinition() {
			return getRuleContext(ModifierDefinitionContext.class,0);
		}
		public FunctionDefinitionContext functionDefinition() {
			return getRuleContext(FunctionDefinitionContext.class,0);
		}
		public EventDefinitionContext eventDefinition() {
			return getRuleContext(EventDefinitionContext.class,0);
		}
		public EnumDefinitionContext enumDefinition() {
			return getRuleContext(EnumDefinitionContext.class,0);
		}
		public CustomErrorDefinitionContext customErrorDefinition() {
			return getRuleContext(CustomErrorDefinitionContext.class,0);
		}
		public TypeDefinitionContext typeDefinition() {
			return getRuleContext(TypeDefinitionContext.class,0);
		}
		public ContractPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractPart; }
	}

	public final ContractPartContext contractPart() throws RecognitionException {
		ContractPartContext _localctx = new ContractPartContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_contractPart);
		try {
			setState(345);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(335);
				comment();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(336);
				stateVariableDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(337);
				usingForDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(338);
				structDefinition();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(339);
				modifierDefinition();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(340);
				functionDefinition();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(341);
				eventDefinition();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(342);
				enumDefinition();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(343);
				customErrorDefinition();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(344);
				typeDefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StateVariableDeclarationContext extends ParserRuleContext {
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TerminalNode> PublicKeyword() { return getTokens(SolidityParser.PublicKeyword); }
		public TerminalNode PublicKeyword(int i) {
			return getToken(SolidityParser.PublicKeyword, i);
		}
		public List<TerminalNode> InternalKeyword() { return getTokens(SolidityParser.InternalKeyword); }
		public TerminalNode InternalKeyword(int i) {
			return getToken(SolidityParser.InternalKeyword, i);
		}
		public List<TerminalNode> PrivateKeyword() { return getTokens(SolidityParser.PrivateKeyword); }
		public TerminalNode PrivateKeyword(int i) {
			return getToken(SolidityParser.PrivateKeyword, i);
		}
		public List<TerminalNode> ConstantKeyword() { return getTokens(SolidityParser.ConstantKeyword); }
		public TerminalNode ConstantKeyword(int i) {
			return getToken(SolidityParser.ConstantKeyword, i);
		}
		public List<TerminalNode> ImmutableKeyword() { return getTokens(SolidityParser.ImmutableKeyword); }
		public TerminalNode ImmutableKeyword(int i) {
			return getToken(SolidityParser.ImmutableKeyword, i);
		}
		public List<OverrideSpecifierContext> overrideSpecifier() {
			return getRuleContexts(OverrideSpecifierContext.class);
		}
		public OverrideSpecifierContext overrideSpecifier(int i) {
			return getRuleContext(OverrideSpecifierContext.class,i);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StateVariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateVariableDeclaration; }
	}

	public final StateVariableDeclarationContext stateVariableDeclaration() throws RecognitionException {
		StateVariableDeclarationContext _localctx = new StateVariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_stateVariableDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			typeName(0);
			setState(356);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 96)) & ~0x3f) == 0 && ((1L << (_la - 96)) & 13680641L) != 0)) {
				{
				setState(354);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PublicKeyword:
					{
					setState(348);
					match(PublicKeyword);
					}
					break;
				case InternalKeyword:
					{
					setState(349);
					match(InternalKeyword);
					}
					break;
				case PrivateKeyword:
					{
					setState(350);
					match(PrivateKeyword);
					}
					break;
				case ConstantKeyword:
					{
					setState(351);
					match(ConstantKeyword);
					}
					break;
				case ImmutableKeyword:
					{
					setState(352);
					match(ImmutableKeyword);
					}
					break;
				case T__95:
					{
					setState(353);
					overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(358);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(359);
			identifier();
			setState(362);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__10) {
				{
				setState(360);
				match(T__10);
				setState(361);
				expression(0);
				}
			}

			setState(364);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FileLevelConstantContext extends ParserRuleContext {
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public TerminalNode ConstantKeyword() { return getToken(SolidityParser.ConstantKeyword, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FileLevelConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fileLevelConstant; }
	}

	public final FileLevelConstantContext fileLevelConstant() throws RecognitionException {
		FileLevelConstantContext _localctx = new FileLevelConstantContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_fileLevelConstant);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(366);
			typeName(0);
			setState(367);
			match(ConstantKeyword);
			setState(368);
			identifier();
			setState(369);
			match(T__10);
			setState(370);
			expression(0);
			setState(371);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CustomErrorDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public CustomErrorDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_customErrorDefinition; }
	}

	public final CustomErrorDefinitionContext customErrorDefinition() throws RecognitionException {
		CustomErrorDefinitionContext _localctx = new CustomErrorDefinitionContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_customErrorDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(373);
			match(T__24);
			setState(374);
			identifier();
			setState(375);
			parameterList();
			setState(376);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeDefinitionContext extends ParserRuleContext {
		public TerminalNode TypeKeyword() { return getToken(SolidityParser.TypeKeyword, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ElementaryTypeNameContext elementaryTypeName() {
			return getRuleContext(ElementaryTypeNameContext.class,0);
		}
		public TypeDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDefinition; }
	}

	public final TypeDefinitionContext typeDefinition() throws RecognitionException {
		TypeDefinitionContext _localctx = new TypeDefinitionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_typeDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
			match(TypeKeyword);
			setState(379);
			identifier();
			setState(380);
			match(T__21);
			setState(381);
			elementaryTypeName();
			setState(382);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UsingForDeclarationContext extends ParserRuleContext {
		public UsingForObjectContext usingForObject() {
			return getRuleContext(UsingForObjectContext.class,0);
		}
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public TerminalNode GlobalKeyword() { return getToken(SolidityParser.GlobalKeyword, 0); }
		public UsingForDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingForDeclaration; }
	}

	public final UsingForDeclarationContext usingForDeclaration() throws RecognitionException {
		UsingForDeclarationContext _localctx = new UsingForDeclarationContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_usingForDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(384);
			match(T__25);
			setState(385);
			usingForObject();
			setState(386);
			match(T__26);
			setState(389);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
				{
				setState(387);
				match(T__2);
				}
				break;
			case T__13:
			case T__24:
			case T__37:
			case T__43:
			case T__45:
			case T__49:
			case T__61:
			case T__62:
			case T__63:
			case T__64:
			case T__65:
			case T__94:
			case Int:
			case Uint:
			case Byte:
			case Fixed:
			case Ufixed:
			case LeaveKeyword:
			case PayableKeyword:
			case GlobalKeyword:
			case ConstructorKeyword:
			case ReceiveKeyword:
			case Identifier:
			case MultiLineComment:
				{
				setState(388);
				typeName(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(392);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==GlobalKeyword) {
				{
				setState(391);
				match(GlobalKeyword);
				}
			}

			setState(394);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UsingForObjectContext extends ParserRuleContext {
		public UserDefinedTypeNameContext userDefinedTypeName() {
			return getRuleContext(UserDefinedTypeNameContext.class,0);
		}
		public List<UsingForObjectDirectiveContext> usingForObjectDirective() {
			return getRuleContexts(UsingForObjectDirectiveContext.class);
		}
		public UsingForObjectDirectiveContext usingForObjectDirective(int i) {
			return getRuleContext(UsingForObjectDirectiveContext.class,i);
		}
		public UsingForObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingForObject; }
	}

	public final UsingForObjectContext usingForObject() throws RecognitionException {
		UsingForObjectContext _localctx = new UsingForObjectContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_usingForObject);
		int _la;
		try {
			setState(408);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__13:
			case T__24:
			case T__43:
			case T__49:
			case T__61:
			case T__94:
			case LeaveKeyword:
			case PayableKeyword:
			case GlobalKeyword:
			case ConstructorKeyword:
			case ReceiveKeyword:
			case Identifier:
			case MultiLineComment:
				enterOuterAlt(_localctx, 1);
				{
				setState(396);
				userDefinedTypeName();
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 2);
				{
				setState(397);
				match(T__14);
				setState(398);
				usingForObjectDirective();
				setState(403);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(399);
					match(T__15);
					setState(400);
					usingForObjectDirective();
					}
					}
					setState(405);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(406);
				match(T__16);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UsingForObjectDirectiveContext extends ParserRuleContext {
		public UserDefinedTypeNameContext userDefinedTypeName() {
			return getRuleContext(UserDefinedTypeNameContext.class,0);
		}
		public UserDefinableOperatorsContext userDefinableOperators() {
			return getRuleContext(UserDefinableOperatorsContext.class,0);
		}
		public UsingForObjectDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingForObjectDirective; }
	}

	public final UsingForObjectDirectiveContext usingForObjectDirective() throws RecognitionException {
		UsingForObjectDirectiveContext _localctx = new UsingForObjectDirectiveContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_usingForObjectDirective);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(410);
			userDefinedTypeName();
			setState(413);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__11) {
				{
				setState(411);
				match(T__11);
				setState(412);
				userDefinableOperators();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UserDefinableOperatorsContext extends ParserRuleContext {
		public UserDefinableOperatorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_userDefinableOperators; }
	}

	public final UserDefinableOperatorsContext userDefinableOperators() throws RecognitionException {
		UserDefinableOperatorsContext _localctx = new UserDefinableOperatorsContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_userDefinableOperators);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(415);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 68451043304L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StructDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<CommentContext> comment() {
			return getRuleContexts(CommentContext.class);
		}
		public CommentContext comment(int i) {
			return getRuleContext(CommentContext.class,i);
		}
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public StructDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDefinition; }
	}

	public final StructDefinitionContext structDefinition() throws RecognitionException {
		StructDefinitionContext _localctx = new StructDefinitionContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_structDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
			match(T__35);
			setState(418);
			identifier();
			setState(419);
			match(T__14);
			setState(435);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & 8725798382995457L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 426816831613L) != 0)) {
				{
				setState(424);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
				case 1:
					{
					setState(420);
					comment();
					}
					break;
				case 2:
					{
					{
					setState(421);
					variableDeclaration();
					setState(422);
					match(T__1);
					}
					}
					break;
				}
				setState(432);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & 8725798382995457L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 426816831613L) != 0)) {
					{
					setState(430);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
					case 1:
						{
						setState(426);
						comment();
						}
						break;
					case 2:
						{
						{
						setState(427);
						variableDeclaration();
						setState(428);
						match(T__1);
						}
						}
						break;
					}
					}
					setState(434);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(437);
			match(T__16);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModifierDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public List<TerminalNode> VirtualKeyword() { return getTokens(SolidityParser.VirtualKeyword); }
		public TerminalNode VirtualKeyword(int i) {
			return getToken(SolidityParser.VirtualKeyword, i);
		}
		public List<OverrideSpecifierContext> overrideSpecifier() {
			return getRuleContexts(OverrideSpecifierContext.class);
		}
		public OverrideSpecifierContext overrideSpecifier(int i) {
			return getRuleContext(OverrideSpecifierContext.class,i);
		}
		public ModifierDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modifierDefinition; }
	}

	public final ModifierDefinitionContext modifierDefinition() throws RecognitionException {
		ModifierDefinitionContext _localctx = new ModifierDefinitionContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_modifierDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(439);
			match(T__36);
			setState(440);
			identifier();
			setState(442);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(441);
				parameterList();
				}
			}

			setState(448);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__95 || _la==VirtualKeyword) {
				{
				setState(446);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case VirtualKeyword:
					{
					setState(444);
					match(VirtualKeyword);
					}
					break;
				case T__95:
					{
					setState(445);
					overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(450);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(453);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				{
				setState(451);
				match(T__1);
				}
				break;
			case T__14:
				{
				setState(452);
				block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModifierInvocationContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ModifierInvocationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modifierInvocation; }
	}

	public final ModifierInvocationContext modifierInvocation() throws RecognitionException {
		ModifierInvocationContext _localctx = new ModifierInvocationContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_modifierInvocation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(455);
			identifier();
			setState(461);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(456);
				match(T__22);
				setState(458);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
					{
					setState(457);
					expressionList();
					}
				}

				setState(460);
				match(T__23);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDefinitionContext extends ParserRuleContext {
		public FunctionDescriptorContext functionDescriptor() {
			return getRuleContext(FunctionDescriptorContext.class,0);
		}
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public ModifierListContext modifierList() {
			return getRuleContext(ModifierListContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ReturnParametersContext returnParameters() {
			return getRuleContext(ReturnParametersContext.class,0);
		}
		public FunctionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDefinition; }
	}

	public final FunctionDefinitionContext functionDefinition() throws RecognitionException {
		FunctionDefinitionContext _localctx = new FunctionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_functionDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(463);
			functionDescriptor();
			setState(464);
			parameterList();
			setState(465);
			modifierList();
			setState(467);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__38) {
				{
				setState(466);
				returnParameters();
				}
			}

			setState(471);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				{
				setState(469);
				match(T__1);
				}
				break;
			case T__14:
				{
				setState(470);
				block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDescriptorContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ConstructorKeyword() { return getToken(SolidityParser.ConstructorKeyword, 0); }
		public TerminalNode FallbackKeyword() { return getToken(SolidityParser.FallbackKeyword, 0); }
		public TerminalNode ReceiveKeyword() { return getToken(SolidityParser.ReceiveKeyword, 0); }
		public FunctionDescriptorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDescriptor; }
	}

	public final FunctionDescriptorContext functionDescriptor() throws RecognitionException {
		FunctionDescriptorContext _localctx = new FunctionDescriptorContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_functionDescriptor);
		int _la;
		try {
			setState(480);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__37:
				enterOuterAlt(_localctx, 1);
				{
				setState(473);
				match(T__37);
				setState(475);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
					{
					setState(474);
					identifier();
					}
				}

				}
				break;
			case ConstructorKeyword:
				enterOuterAlt(_localctx, 2);
				{
				setState(477);
				match(ConstructorKeyword);
				}
				break;
			case FallbackKeyword:
				enterOuterAlt(_localctx, 3);
				{
				setState(478);
				match(FallbackKeyword);
				}
				break;
			case ReceiveKeyword:
				enterOuterAlt(_localctx, 4);
				{
				setState(479);
				match(ReceiveKeyword);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnParametersContext extends ParserRuleContext {
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public ReturnParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnParameters; }
	}

	public final ReturnParametersContext returnParameters() throws RecognitionException {
		ReturnParametersContext _localctx = new ReturnParametersContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_returnParameters);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(482);
			match(T__38);
			setState(483);
			parameterList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModifierListContext extends ParserRuleContext {
		public List<TerminalNode> ExternalKeyword() { return getTokens(SolidityParser.ExternalKeyword); }
		public TerminalNode ExternalKeyword(int i) {
			return getToken(SolidityParser.ExternalKeyword, i);
		}
		public List<TerminalNode> PublicKeyword() { return getTokens(SolidityParser.PublicKeyword); }
		public TerminalNode PublicKeyword(int i) {
			return getToken(SolidityParser.PublicKeyword, i);
		}
		public List<TerminalNode> InternalKeyword() { return getTokens(SolidityParser.InternalKeyword); }
		public TerminalNode InternalKeyword(int i) {
			return getToken(SolidityParser.InternalKeyword, i);
		}
		public List<TerminalNode> PrivateKeyword() { return getTokens(SolidityParser.PrivateKeyword); }
		public TerminalNode PrivateKeyword(int i) {
			return getToken(SolidityParser.PrivateKeyword, i);
		}
		public List<TerminalNode> VirtualKeyword() { return getTokens(SolidityParser.VirtualKeyword); }
		public TerminalNode VirtualKeyword(int i) {
			return getToken(SolidityParser.VirtualKeyword, i);
		}
		public List<StateMutabilityContext> stateMutability() {
			return getRuleContexts(StateMutabilityContext.class);
		}
		public StateMutabilityContext stateMutability(int i) {
			return getRuleContext(StateMutabilityContext.class,i);
		}
		public List<ModifierInvocationContext> modifierInvocation() {
			return getRuleContexts(ModifierInvocationContext.class);
		}
		public ModifierInvocationContext modifierInvocation(int i) {
			return getRuleContext(ModifierInvocationContext.class,i);
		}
		public List<OverrideSpecifierContext> overrideSpecifier() {
			return getRuleContexts(OverrideSpecifierContext.class);
		}
		public OverrideSpecifierContext overrideSpecifier(int i) {
			return getRuleContext(OverrideSpecifierContext.class,i);
		}
		public ModifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modifierList; }
	}

	public final ModifierListContext modifierList() throws RecognitionException {
		ModifierListContext _localctx = new ModifierListContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_modifierList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(495);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 152335843331L) != 0)) {
				{
				setState(493);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
				case 1:
					{
					setState(485);
					match(ExternalKeyword);
					}
					break;
				case 2:
					{
					setState(486);
					match(PublicKeyword);
					}
					break;
				case 3:
					{
					setState(487);
					match(InternalKeyword);
					}
					break;
				case 4:
					{
					setState(488);
					match(PrivateKeyword);
					}
					break;
				case 5:
					{
					setState(489);
					match(VirtualKeyword);
					}
					break;
				case 6:
					{
					setState(490);
					stateMutability();
					}
					break;
				case 7:
					{
					setState(491);
					modifierInvocation();
					}
					break;
				case 8:
					{
					setState(492);
					overrideSpecifier();
					}
					break;
				}
				}
				setState(497);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EventDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public EventParameterListContext eventParameterList() {
			return getRuleContext(EventParameterListContext.class,0);
		}
		public TerminalNode AnonymousKeyword() { return getToken(SolidityParser.AnonymousKeyword, 0); }
		public EventDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefinition; }
	}

	public final EventDefinitionContext eventDefinition() throws RecognitionException {
		EventDefinitionContext _localctx = new EventDefinitionContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_eventDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(498);
			match(T__39);
			setState(499);
			identifier();
			setState(500);
			eventParameterList();
			setState(502);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AnonymousKeyword) {
				{
				setState(501);
				match(AnonymousKeyword);
				}
			}

			setState(504);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumValueContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public EnumValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumValue; }
	}

	public final EnumValueContext enumValue() throws RecognitionException {
		EnumValueContext _localctx = new EnumValueContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_enumValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(506);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<EnumValueContext> enumValue() {
			return getRuleContexts(EnumValueContext.class);
		}
		public EnumValueContext enumValue(int i) {
			return getRuleContext(EnumValueContext.class,i);
		}
		public List<CommentContext> comment() {
			return getRuleContexts(CommentContext.class);
		}
		public CommentContext comment(int i) {
			return getRuleContext(CommentContext.class,i);
		}
		public EnumDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDefinition; }
	}

	public final EnumDefinitionContext enumDefinition() throws RecognitionException {
		EnumDefinitionContext _localctx = new EnumDefinitionContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_enumDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(508);
			match(T__40);
			setState(509);
			identifier();
			setState(510);
			match(T__14);
			setState(512);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
				{
				setState(511);
				enumValue();
				}
			}

			setState(521);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__15) {
				{
				{
				setState(514);
				match(T__15);
				setState(516);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
				case 1:
					{
					setState(515);
					comment();
					}
					break;
				}
				setState(518);
				enumValue();
				}
				}
				setState(523);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(524);
			match(T__16);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterListContext extends ParserRuleContext {
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public List<CommentContext> comment() {
			return getRuleContexts(CommentContext.class);
		}
		public CommentContext comment(int i) {
			return getRuleContext(CommentContext.class,i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_parameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(526);
			match(T__22);
			setState(541);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & 8725798382995457L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 426816831613L) != 0)) {
				{
				setState(528);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
				case 1:
					{
					setState(527);
					comment();
					}
					break;
				}
				setState(530);
				parameter();
				setState(538);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(531);
					match(T__15);
					setState(533);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
					case 1:
						{
						setState(532);
						comment();
						}
						break;
					}
					setState(535);
					parameter();
					}
					}
					setState(540);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(543);
			match(T__23);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterContext extends ParserRuleContext {
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public StorageLocationContext storageLocation() {
			return getRuleContext(StorageLocationContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_parameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(545);
			typeName(0);
			setState(547);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				{
				setState(546);
				storageLocation();
				}
				break;
			}
			setState(550);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
				{
				setState(549);
				identifier();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EventParameterListContext extends ParserRuleContext {
		public List<EventParameterContext> eventParameter() {
			return getRuleContexts(EventParameterContext.class);
		}
		public EventParameterContext eventParameter(int i) {
			return getRuleContext(EventParameterContext.class,i);
		}
		public EventParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventParameterList; }
	}

	public final EventParameterListContext eventParameterList() throws RecognitionException {
		EventParameterListContext _localctx = new EventParameterListContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_eventParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(552);
			match(T__22);
			setState(561);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & 8725798382995457L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924669L) != 0)) {
				{
				setState(553);
				eventParameter();
				setState(558);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(554);
					match(T__15);
					setState(555);
					eventParameter();
					}
					}
					setState(560);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(563);
			match(T__23);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EventParameterContext extends ParserRuleContext {
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public TerminalNode IndexedKeyword() { return getToken(SolidityParser.IndexedKeyword, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public EventParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventParameter; }
	}

	public final EventParameterContext eventParameter() throws RecognitionException {
		EventParameterContext _localctx = new EventParameterContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_eventParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(565);
			typeName(0);
			setState(567);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IndexedKeyword) {
				{
				setState(566);
				match(IndexedKeyword);
				}
			}

			setState(570);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
				{
				setState(569);
				identifier();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionTypeParameterListContext extends ParserRuleContext {
		public List<FunctionTypeParameterContext> functionTypeParameter() {
			return getRuleContexts(FunctionTypeParameterContext.class);
		}
		public FunctionTypeParameterContext functionTypeParameter(int i) {
			return getRuleContext(FunctionTypeParameterContext.class,i);
		}
		public FunctionTypeParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionTypeParameterList; }
	}

	public final FunctionTypeParameterListContext functionTypeParameterList() throws RecognitionException {
		FunctionTypeParameterListContext _localctx = new FunctionTypeParameterListContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_functionTypeParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(572);
			match(T__22);
			setState(581);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & 8725798382995457L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924669L) != 0)) {
				{
				setState(573);
				functionTypeParameter();
				setState(578);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(574);
					match(T__15);
					setState(575);
					functionTypeParameter();
					}
					}
					setState(580);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(583);
			match(T__23);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionTypeParameterContext extends ParserRuleContext {
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public StorageLocationContext storageLocation() {
			return getRuleContext(StorageLocationContext.class,0);
		}
		public FunctionTypeParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionTypeParameter; }
	}

	public final FunctionTypeParameterContext functionTypeParameter() throws RecognitionException {
		FunctionTypeParameterContext _localctx = new FunctionTypeParameterContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_functionTypeParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(585);
			typeName(0);
			setState(587);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1970324836974592L) != 0)) {
				{
				setState(586);
				storageLocation();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationContext extends ParserRuleContext {
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public StorageLocationContext storageLocation() {
			return getRuleContext(StorageLocationContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(589);
			typeName(0);
			setState(591);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				{
				setState(590);
				storageLocation();
				}
				break;
			}
			setState(593);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeNameContext extends ParserRuleContext {
		public ElementaryTypeNameContext elementaryTypeName() {
			return getRuleContext(ElementaryTypeNameContext.class,0);
		}
		public UserDefinedTypeNameContext userDefinedTypeName() {
			return getRuleContext(UserDefinedTypeNameContext.class,0);
		}
		public MappingContext mapping() {
			return getRuleContext(MappingContext.class,0);
		}
		public FunctionTypeNameContext functionTypeName() {
			return getRuleContext(FunctionTypeNameContext.class,0);
		}
		public TerminalNode PayableKeyword() { return getToken(SolidityParser.PayableKeyword, 0); }
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TypeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeName; }
	}

	public final TypeNameContext typeName() throws RecognitionException {
		return typeName(0);
	}

	private TypeNameContext typeName(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeNameContext _localctx = new TypeNameContext(_ctx, _parentState);
		TypeNameContext _prevctx = _localctx;
		int _startState = 76;
		enterRecursionRule(_localctx, 76, RULE_typeName, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(602);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				{
				setState(596);
				elementaryTypeName();
				}
				break;
			case 2:
				{
				setState(597);
				userDefinedTypeName();
				}
				break;
			case 3:
				{
				setState(598);
				mapping();
				}
				break;
			case 4:
				{
				setState(599);
				functionTypeName();
				}
				break;
			case 5:
				{
				setState(600);
				match(T__43);
				setState(601);
				match(PayableKeyword);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(612);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,65,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeNameContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_typeName);
					setState(604);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(605);
					match(T__41);
					setState(607);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
						{
						setState(606);
						expression(0);
						}
					}

					setState(609);
					match(T__42);
					}
					} 
				}
				setState(614);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,65,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UserDefinedTypeNameContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public UserDefinedTypeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_userDefinedTypeName; }
	}

	public final UserDefinedTypeNameContext userDefinedTypeName() throws RecognitionException {
		UserDefinedTypeNameContext _localctx = new UserDefinedTypeNameContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_userDefinedTypeName);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(615);
			identifier();
			setState(620);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,66,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(616);
					match(T__44);
					setState(617);
					identifier();
					}
					} 
				}
				setState(622);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,66,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MappingKeyContext extends ParserRuleContext {
		public ElementaryTypeNameContext elementaryTypeName() {
			return getRuleContext(ElementaryTypeNameContext.class,0);
		}
		public UserDefinedTypeNameContext userDefinedTypeName() {
			return getRuleContext(UserDefinedTypeNameContext.class,0);
		}
		public MappingKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mappingKey; }
	}

	public final MappingKeyContext mappingKey() throws RecognitionException {
		MappingKeyContext _localctx = new MappingKeyContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_mappingKey);
		try {
			setState(625);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,67,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(623);
				elementaryTypeName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(624);
				userDefinedTypeName();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MappingContext extends ParserRuleContext {
		public MappingKeyContext mappingKey() {
			return getRuleContext(MappingKeyContext.class,0);
		}
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public MappingKeyNameContext mappingKeyName() {
			return getRuleContext(MappingKeyNameContext.class,0);
		}
		public MappingValueNameContext mappingValueName() {
			return getRuleContext(MappingValueNameContext.class,0);
		}
		public MappingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapping; }
	}

	public final MappingContext mapping() throws RecognitionException {
		MappingContext _localctx = new MappingContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_mapping);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(627);
			match(T__45);
			setState(628);
			match(T__22);
			setState(629);
			mappingKey();
			setState(631);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
				{
				setState(630);
				mappingKeyName();
				}
			}

			setState(633);
			match(T__46);
			setState(634);
			typeName(0);
			setState(636);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
				{
				setState(635);
				mappingValueName();
				}
			}

			setState(638);
			match(T__23);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MappingKeyNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public MappingKeyNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mappingKeyName; }
	}

	public final MappingKeyNameContext mappingKeyName() throws RecognitionException {
		MappingKeyNameContext _localctx = new MappingKeyNameContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_mappingKeyName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(640);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MappingValueNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public MappingValueNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mappingValueName; }
	}

	public final MappingValueNameContext mappingValueName() throws RecognitionException {
		MappingValueNameContext _localctx = new MappingValueNameContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_mappingValueName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(642);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionTypeNameContext extends ParserRuleContext {
		public List<FunctionTypeParameterListContext> functionTypeParameterList() {
			return getRuleContexts(FunctionTypeParameterListContext.class);
		}
		public FunctionTypeParameterListContext functionTypeParameterList(int i) {
			return getRuleContext(FunctionTypeParameterListContext.class,i);
		}
		public List<TerminalNode> InternalKeyword() { return getTokens(SolidityParser.InternalKeyword); }
		public TerminalNode InternalKeyword(int i) {
			return getToken(SolidityParser.InternalKeyword, i);
		}
		public List<TerminalNode> ExternalKeyword() { return getTokens(SolidityParser.ExternalKeyword); }
		public TerminalNode ExternalKeyword(int i) {
			return getToken(SolidityParser.ExternalKeyword, i);
		}
		public List<StateMutabilityContext> stateMutability() {
			return getRuleContexts(StateMutabilityContext.class);
		}
		public StateMutabilityContext stateMutability(int i) {
			return getRuleContext(StateMutabilityContext.class,i);
		}
		public FunctionTypeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionTypeName; }
	}

	public final FunctionTypeNameContext functionTypeName() throws RecognitionException {
		FunctionTypeNameContext _localctx = new FunctionTypeNameContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_functionTypeName);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(644);
			match(T__37);
			setState(645);
			functionTypeParameterList();
			setState(651);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,71,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(649);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case InternalKeyword:
						{
						setState(646);
						match(InternalKeyword);
						}
						break;
					case ExternalKeyword:
						{
						setState(647);
						match(ExternalKeyword);
						}
						break;
					case ConstantKeyword:
					case PayableKeyword:
					case PureKeyword:
					case ViewKeyword:
						{
						setState(648);
						stateMutability();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(653);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,71,_ctx);
			}
			setState(656);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,72,_ctx) ) {
			case 1:
				{
				setState(654);
				match(T__38);
				setState(655);
				functionTypeParameterList();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StorageLocationContext extends ParserRuleContext {
		public StorageLocationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_storageLocation; }
	}

	public final StorageLocationContext storageLocation() throws RecognitionException {
		StorageLocationContext _localctx = new StorageLocationContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_storageLocation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(658);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1970324836974592L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StateMutabilityContext extends ParserRuleContext {
		public TerminalNode PureKeyword() { return getToken(SolidityParser.PureKeyword, 0); }
		public TerminalNode ConstantKeyword() { return getToken(SolidityParser.ConstantKeyword, 0); }
		public TerminalNode ViewKeyword() { return getToken(SolidityParser.ViewKeyword, 0); }
		public TerminalNode PayableKeyword() { return getToken(SolidityParser.PayableKeyword, 0); }
		public StateMutabilityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateMutability; }
	}

	public final StateMutabilityContext stateMutability() throws RecognitionException {
		StateMutabilityContext _localctx = new StateMutabilityContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_stateMutability);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(660);
			_la = _input.LA(1);
			if ( !(((((_la - 110)) & ~0x3f) == 0 && ((1L << (_la - 110)) & 10369L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(662);
			match(T__14);
			setState(666);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -367988449869055L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 7451282875665612803L) != 0)) {
				{
				{
				setState(663);
				statement();
				}
				}
				setState(668);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(669);
			match(T__16);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public TryStatementContext tryStatement() {
			return getRuleContext(TryStatementContext.class,0);
		}
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public ForStatementContext forStatement() {
			return getRuleContext(ForStatementContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public InlineAssemblyStatementContext inlineAssemblyStatement() {
			return getRuleContext(InlineAssemblyStatementContext.class,0);
		}
		public DoWhileStatementContext doWhileStatement() {
			return getRuleContext(DoWhileStatementContext.class,0);
		}
		public ContinueStatementContext continueStatement() {
			return getRuleContext(ContinueStatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public ThrowStatementContext throwStatement() {
			return getRuleContext(ThrowStatementContext.class,0);
		}
		public EmitStatementContext emitStatement() {
			return getRuleContext(EmitStatementContext.class,0);
		}
		public SimpleStatementContext simpleStatement() {
			return getRuleContext(SimpleStatementContext.class,0);
		}
		public UncheckedStatementContext uncheckedStatement() {
			return getRuleContext(UncheckedStatementContext.class,0);
		}
		public RevertStatementContext revertStatement() {
			return getRuleContext(RevertStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_statement);
		try {
			setState(687);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(671);
				comment();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(672);
				ifStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(673);
				tryStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(674);
				whileStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(675);
				forStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(676);
				block();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(677);
				inlineAssemblyStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(678);
				doWhileStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(679);
				continueStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(680);
				breakStatement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(681);
				returnStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(682);
				throwStatement();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(683);
				emitStatement();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(684);
				simpleStatement();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(685);
				uncheckedStatement();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(686);
				revertStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(689);
			expression(0);
			setState(690);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(692);
			match(T__50);
			setState(693);
			match(T__22);
			setState(694);
			expression(0);
			setState(695);
			match(T__23);
			setState(696);
			statement();
			setState(699);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
			case 1:
				{
				setState(697);
				match(T__51);
				setState(698);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TryStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ReturnParametersContext returnParameters() {
			return getRuleContext(ReturnParametersContext.class,0);
		}
		public List<CatchClauseContext> catchClause() {
			return getRuleContexts(CatchClauseContext.class);
		}
		public CatchClauseContext catchClause(int i) {
			return getRuleContext(CatchClauseContext.class,i);
		}
		public TryStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryStatement; }
	}

	public final TryStatementContext tryStatement() throws RecognitionException {
		TryStatementContext _localctx = new TryStatementContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_tryStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(701);
			match(T__52);
			setState(702);
			expression(0);
			setState(704);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__38) {
				{
				setState(703);
				returnParameters();
				}
			}

			setState(706);
			block();
			setState(708); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(707);
				catchClause();
				}
				}
				setState(710); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__53 );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CatchClauseContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public CatchClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchClause; }
	}

	public final CatchClauseContext catchClause() throws RecognitionException {
		CatchClauseContext _localctx = new CatchClauseContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_catchClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(712);
			match(T__53);
			setState(717);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510562234368L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
				{
				setState(714);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
					{
					setState(713);
					identifier();
					}
				}

				setState(716);
				parameterList();
				}
			}

			setState(719);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_whileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(721);
			match(T__54);
			setState(722);
			match(T__22);
			setState(723);
			expression(0);
			setState(724);
			match(T__23);
			setState(725);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SimpleStatementContext extends ParserRuleContext {
		public VariableDeclarationStatementContext variableDeclarationStatement() {
			return getRuleContext(VariableDeclarationStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public SimpleStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleStatement; }
	}

	public final SimpleStatementContext simpleStatement() throws RecognitionException {
		SimpleStatementContext _localctx = new SimpleStatementContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_simpleStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(729);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,80,_ctx) ) {
			case 1:
				{
				setState(727);
				variableDeclarationStatement();
				}
				break;
			case 2:
				{
				setState(728);
				expressionStatement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UncheckedStatementContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public UncheckedStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uncheckedStatement; }
	}

	public final UncheckedStatementContext uncheckedStatement() throws RecognitionException {
		UncheckedStatementContext _localctx = new UncheckedStatementContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_uncheckedStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(731);
			match(T__55);
			setState(732);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForStatementContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public SimpleStatementContext simpleStatement() {
			return getRuleContext(SimpleStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ForStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStatement; }
	}

	public final ForStatementContext forStatement() throws RecognitionException {
		ForStatementContext _localctx = new ForStatementContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_forStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(734);
			match(T__26);
			setState(735);
			match(T__22);
			setState(738);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
			case T__13:
			case T__22:
			case T__24:
			case T__29:
			case T__30:
			case T__37:
			case T__41:
			case T__43:
			case T__45:
			case T__49:
			case T__61:
			case T__62:
			case T__63:
			case T__64:
			case T__65:
			case T__66:
			case T__67:
			case T__68:
			case T__70:
			case T__71:
			case T__94:
			case Int:
			case Uint:
			case Byte:
			case Fixed:
			case Ufixed:
			case BooleanLiteral:
			case DecimalNumber:
			case HexNumber:
			case HexLiteralFragment:
			case LeaveKeyword:
			case PayableKeyword:
			case TypeKeyword:
			case GlobalKeyword:
			case ConstructorKeyword:
			case ReceiveKeyword:
			case Identifier:
			case StringLiteralFragment:
			case MultiLineComment:
				{
				setState(736);
				simpleStatement();
				}
				break;
			case T__1:
				{
				setState(737);
				match(T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(742);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
			case T__13:
			case T__22:
			case T__24:
			case T__29:
			case T__30:
			case T__37:
			case T__41:
			case T__43:
			case T__45:
			case T__49:
			case T__61:
			case T__62:
			case T__63:
			case T__64:
			case T__65:
			case T__66:
			case T__67:
			case T__68:
			case T__70:
			case T__71:
			case T__94:
			case Int:
			case Uint:
			case Byte:
			case Fixed:
			case Ufixed:
			case BooleanLiteral:
			case DecimalNumber:
			case HexNumber:
			case HexLiteralFragment:
			case LeaveKeyword:
			case PayableKeyword:
			case TypeKeyword:
			case GlobalKeyword:
			case ConstructorKeyword:
			case ReceiveKeyword:
			case Identifier:
			case StringLiteralFragment:
			case MultiLineComment:
				{
				setState(740);
				expressionStatement();
				}
				break;
			case T__1:
				{
				setState(741);
				match(T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(745);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
				{
				setState(744);
				expression(0);
				}
			}

			setState(747);
			match(T__23);
			setState(748);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InlineAssemblyStatementContext extends ParserRuleContext {
		public AssemblyBlockContext assemblyBlock() {
			return getRuleContext(AssemblyBlockContext.class,0);
		}
		public TerminalNode StringLiteralFragment() { return getToken(SolidityParser.StringLiteralFragment, 0); }
		public InlineAssemblyStatementFlagContext inlineAssemblyStatementFlag() {
			return getRuleContext(InlineAssemblyStatementFlagContext.class,0);
		}
		public InlineAssemblyStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineAssemblyStatement; }
	}

	public final InlineAssemblyStatementContext inlineAssemblyStatement() throws RecognitionException {
		InlineAssemblyStatementContext _localctx = new InlineAssemblyStatementContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_inlineAssemblyStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(750);
			match(T__56);
			setState(752);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==StringLiteralFragment) {
				{
				setState(751);
				match(StringLiteralFragment);
				}
			}

			setState(758);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(754);
				match(T__22);
				setState(755);
				inlineAssemblyStatementFlag();
				setState(756);
				match(T__23);
				}
			}

			setState(760);
			assemblyBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InlineAssemblyStatementFlagContext extends ParserRuleContext {
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public InlineAssemblyStatementFlagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineAssemblyStatementFlag; }
	}

	public final InlineAssemblyStatementFlagContext inlineAssemblyStatementFlag() throws RecognitionException {
		InlineAssemblyStatementFlagContext _localctx = new InlineAssemblyStatementFlagContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_inlineAssemblyStatementFlag);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(762);
			stringLiteral();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DoWhileStatementContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DoWhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doWhileStatement; }
	}

	public final DoWhileStatementContext doWhileStatement() throws RecognitionException {
		DoWhileStatementContext _localctx = new DoWhileStatementContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_doWhileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(764);
			match(T__57);
			setState(765);
			statement();
			setState(766);
			match(T__54);
			setState(767);
			match(T__22);
			setState(768);
			expression(0);
			setState(769);
			match(T__23);
			setState(770);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContinueStatementContext extends ParserRuleContext {
		public TerminalNode ContinueKeyword() { return getToken(SolidityParser.ContinueKeyword, 0); }
		public ContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStatement; }
	}

	public final ContinueStatementContext continueStatement() throws RecognitionException {
		ContinueStatementContext _localctx = new ContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(772);
			match(ContinueKeyword);
			setState(773);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BreakStatementContext extends ParserRuleContext {
		public TerminalNode BreakKeyword() { return getToken(SolidityParser.BreakKeyword, 0); }
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(775);
			match(BreakKeyword);
			setState(776);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_returnStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(778);
			match(T__58);
			setState(780);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
				{
				setState(779);
				expression(0);
				}
			}

			setState(782);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ThrowStatementContext extends ParserRuleContext {
		public ThrowStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throwStatement; }
	}

	public final ThrowStatementContext throwStatement() throws RecognitionException {
		ThrowStatementContext _localctx = new ThrowStatementContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_throwStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(784);
			match(T__59);
			setState(785);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EmitStatementContext extends ParserRuleContext {
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public EmitStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emitStatement; }
	}

	public final EmitStatementContext emitStatement() throws RecognitionException {
		EmitStatementContext _localctx = new EmitStatementContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_emitStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(787);
			match(T__60);
			setState(788);
			functionCall();
			setState(789);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RevertStatementContext extends ParserRuleContext {
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public RevertStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_revertStatement; }
	}

	public final RevertStatementContext revertStatement() throws RecognitionException {
		RevertStatementContext _localctx = new RevertStatementContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_revertStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(791);
			match(T__61);
			setState(792);
			functionCall();
			setState(793);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationStatementContext extends ParserRuleContext {
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableDeclarationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarationStatement; }
	}

	public final VariableDeclarationStatementContext variableDeclarationStatement() throws RecognitionException {
		VariableDeclarationStatementContext _localctx = new VariableDeclarationStatementContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_variableDeclarationStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(802);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,87,_ctx) ) {
			case 1:
				{
				setState(795);
				match(T__62);
				setState(796);
				identifierList();
				}
				break;
			case 2:
				{
				setState(797);
				variableDeclaration();
				}
				break;
			case 3:
				{
				setState(798);
				match(T__22);
				setState(799);
				variableDeclarationList();
				setState(800);
				match(T__23);
				}
				break;
			}
			setState(806);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__10) {
				{
				setState(804);
				match(T__10);
				setState(805);
				expression(0);
				}
			}

			setState(808);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationListContext extends ParserRuleContext {
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public VariableDeclarationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarationList; }
	}

	public final VariableDeclarationListContext variableDeclarationList() throws RecognitionException {
		VariableDeclarationListContext _localctx = new VariableDeclarationListContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_variableDeclarationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(811);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & 8725798382995457L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924669L) != 0)) {
				{
				setState(810);
				variableDeclaration();
				}
			}

			setState(819);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__15) {
				{
				{
				setState(813);
				match(T__15);
				setState(815);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & 8725798382995457L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924669L) != 0)) {
					{
					setState(814);
					variableDeclaration();
					}
				}

				}
				}
				setState(821);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierListContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public IdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierList; }
	}

	public final IdentifierListContext identifierList() throws RecognitionException {
		IdentifierListContext _localctx = new IdentifierListContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_identifierList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(822);
			match(T__22);
			setState(829);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,93,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(824);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
						{
						setState(823);
						identifier();
						}
					}

					setState(826);
					match(T__15);
					}
					} 
				}
				setState(831);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,93,_ctx);
			}
			setState(833);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
				{
				setState(832);
				identifier();
				}
			}

			setState(835);
			match(T__23);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElementaryTypeNameContext extends ParserRuleContext {
		public TerminalNode Int() { return getToken(SolidityParser.Int, 0); }
		public TerminalNode Uint() { return getToken(SolidityParser.Uint, 0); }
		public TerminalNode Byte() { return getToken(SolidityParser.Byte, 0); }
		public TerminalNode Fixed() { return getToken(SolidityParser.Fixed, 0); }
		public TerminalNode Ufixed() { return getToken(SolidityParser.Ufixed, 0); }
		public ElementaryTypeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementaryTypeName; }
	}

	public final ElementaryTypeNameContext elementaryTypeName() throws RecognitionException {
		ElementaryTypeNameContext _localctx = new ElementaryTypeNameContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_elementaryTypeName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(837);
			_la = _input.LA(1);
			if ( !(((((_la - 44)) & ~0x3f) == 0 && ((1L << (_la - 44)) & 279223176904835073L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public NameValueListContext nameValueList() {
			return getRuleContext(NameValueListContext.class,0);
		}
		public FunctionCallArgumentsContext functionCallArguments() {
			return getRuleContext(FunctionCallArgumentsContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 140;
		enterRecursionRule(_localctx, 140, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(857);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,95,_ctx) ) {
			case 1:
				{
				setState(840);
				match(T__68);
				setState(841);
				typeName(0);
				}
				break;
			case 2:
				{
				setState(842);
				match(T__22);
				setState(843);
				expression(0);
				setState(844);
				match(T__23);
				}
				break;
			case 3:
				{
				setState(846);
				_la = _input.LA(1);
				if ( !(_la==T__66 || _la==T__67) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(847);
				expression(19);
				}
				break;
			case 4:
				{
				setState(848);
				_la = _input.LA(1);
				if ( !(_la==T__29 || _la==T__30) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(849);
				expression(18);
				}
				break;
			case 5:
				{
				setState(850);
				match(T__70);
				setState(851);
				expression(17);
				}
				break;
			case 6:
				{
				setState(852);
				match(T__71);
				setState(853);
				expression(16);
				}
				break;
			case 7:
				{
				setState(854);
				match(T__5);
				setState(855);
				expression(15);
				}
				break;
			case 8:
				{
				setState(856);
				primaryExpression();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(933);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,99,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(931);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,98,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(859);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(860);
						match(T__72);
						setState(861);
						expression(15);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(862);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(863);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 12884901896L) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(864);
						expression(14);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(865);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(866);
						_la = _input.LA(1);
						if ( !(_la==T__29 || _la==T__30) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(867);
						expression(13);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(868);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(869);
						_la = _input.LA(1);
						if ( !(_la==T__73 || _la==T__74) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(870);
						expression(12);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(871);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(872);
						match(T__28);
						setState(873);
						expression(11);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(874);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(875);
						match(T__4);
						setState(876);
						expression(10);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(877);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(878);
						match(T__27);
						setState(879);
						expression(9);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(880);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(881);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1920L) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(882);
						expression(8);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(883);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(884);
						_la = _input.LA(1);
						if ( !(_la==T__33 || _la==T__34) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(885);
						expression(7);
						}
						break;
					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(886);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(887);
						match(T__75);
						setState(888);
						expression(6);
						}
						break;
					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(889);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(890);
						match(T__3);
						setState(891);
						expression(5);
						}
						break;
					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(892);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(893);
						match(T__76);
						setState(894);
						expression(0);
						setState(895);
						match(T__69);
						setState(896);
						expression(4);
						}
						break;
					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(898);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(899);
						_la = _input.LA(1);
						if ( !(_la==T__10 || ((((_la - 78)) & ~0x3f) == 0 && ((1L << (_la - 78)) & 1023L) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(900);
						expression(3);
						}
						break;
					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(901);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(902);
						_la = _input.LA(1);
						if ( !(_la==T__66 || _la==T__67) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						break;
					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(903);
						if (!(precpred(_ctx, 25))) throw new FailedPredicateException(this, "precpred(_ctx, 25)");
						setState(904);
						match(T__41);
						setState(905);
						expression(0);
						setState(906);
						match(T__42);
						}
						break;
					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(908);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(909);
						match(T__41);
						setState(911);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
							{
							setState(910);
							expression(0);
							}
						}

						setState(913);
						match(T__69);
						setState(915);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
							{
							setState(914);
							expression(0);
							}
						}

						setState(917);
						match(T__42);
						}
						break;
					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(918);
						if (!(precpred(_ctx, 23))) throw new FailedPredicateException(this, "precpred(_ctx, 23)");
						setState(919);
						match(T__44);
						setState(920);
						identifier();
						}
						break;
					case 18:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(921);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(922);
						match(T__14);
						setState(923);
						nameValueList();
						setState(924);
						match(T__16);
						}
						break;
					case 19:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(926);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(927);
						match(T__22);
						setState(928);
						functionCallArguments();
						setState(929);
						match(T__23);
						}
						break;
					}
					} 
				}
				setState(935);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,99,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimaryExpressionContext extends ParserRuleContext {
		public TerminalNode BooleanLiteral() { return getToken(SolidityParser.BooleanLiteral, 0); }
		public NumberLiteralContext numberLiteral() {
			return getRuleContext(NumberLiteralContext.class,0);
		}
		public HexLiteralContext hexLiteral() {
			return getRuleContext(HexLiteralContext.class,0);
		}
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode TypeKeyword() { return getToken(SolidityParser.TypeKeyword, 0); }
		public TerminalNode PayableKeyword() { return getToken(SolidityParser.PayableKeyword, 0); }
		public TupleExpressionContext tupleExpression() {
			return getRuleContext(TupleExpressionContext.class,0);
		}
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public PrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryExpression; }
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_primaryExpression);
		try {
			setState(945);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,100,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(936);
				match(BooleanLiteral);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(937);
				numberLiteral();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(938);
				hexLiteral();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(939);
				stringLiteral();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(940);
				identifier();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(941);
				match(TypeKeyword);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(942);
				match(PayableKeyword);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(943);
				tupleExpression();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(944);
				typeName(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(947);
			expression(0);
			setState(952);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__15) {
				{
				{
				setState(948);
				match(T__15);
				setState(949);
				expression(0);
				}
				}
				setState(954);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NameValueListContext extends ParserRuleContext {
		public List<NameValueContext> nameValue() {
			return getRuleContexts(NameValueContext.class);
		}
		public NameValueContext nameValue(int i) {
			return getRuleContext(NameValueContext.class,i);
		}
		public NameValueListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nameValueList; }
	}

	public final NameValueListContext nameValueList() throws RecognitionException {
		NameValueListContext _localctx = new NameValueListContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_nameValueList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(955);
			nameValue();
			setState(960);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,102,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(956);
					match(T__15);
					setState(957);
					nameValue();
					}
					} 
				}
				setState(962);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,102,_ctx);
			}
			setState(964);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__15) {
				{
				setState(963);
				match(T__15);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NameValueContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NameValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nameValue; }
	}

	public final NameValueContext nameValue() throws RecognitionException {
		NameValueContext _localctx = new NameValueContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_nameValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(966);
			identifier();
			setState(967);
			match(T__69);
			setState(968);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallArgumentsContext extends ParserRuleContext {
		public NameValueListContext nameValueList() {
			return getRuleContext(NameValueListContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public FunctionCallArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCallArguments; }
	}

	public final FunctionCallArgumentsContext functionCallArguments() throws RecognitionException {
		FunctionCallArgumentsContext _localctx = new FunctionCallArgumentsContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_functionCallArguments);
		int _la;
		try {
			setState(978);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
				enterOuterAlt(_localctx, 1);
				{
				setState(970);
				match(T__14);
				setState(972);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
					{
					setState(971);
					nameValueList();
					}
				}

				setState(974);
				match(T__16);
				}
				break;
			case T__5:
			case T__13:
			case T__22:
			case T__23:
			case T__24:
			case T__29:
			case T__30:
			case T__37:
			case T__41:
			case T__43:
			case T__45:
			case T__49:
			case T__61:
			case T__62:
			case T__63:
			case T__64:
			case T__65:
			case T__66:
			case T__67:
			case T__68:
			case T__70:
			case T__71:
			case T__94:
			case Int:
			case Uint:
			case Byte:
			case Fixed:
			case Ufixed:
			case BooleanLiteral:
			case DecimalNumber:
			case HexNumber:
			case HexLiteralFragment:
			case LeaveKeyword:
			case PayableKeyword:
			case TypeKeyword:
			case GlobalKeyword:
			case ConstructorKeyword:
			case ReceiveKeyword:
			case Identifier:
			case StringLiteralFragment:
			case MultiLineComment:
				enterOuterAlt(_localctx, 2);
				{
				setState(976);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
					{
					setState(975);
					expressionList();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FunctionCallArgumentsContext functionCallArguments() {
			return getRuleContext(FunctionCallArgumentsContext.class,0);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_functionCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(980);
			expression(0);
			setState(981);
			match(T__22);
			setState(982);
			functionCallArguments();
			setState(983);
			match(T__23);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyBlockContext extends ParserRuleContext {
		public List<AssemblyItemContext> assemblyItem() {
			return getRuleContexts(AssemblyItemContext.class);
		}
		public AssemblyItemContext assemblyItem(int i) {
			return getRuleContext(AssemblyItemContext.class,i);
		}
		public AssemblyBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyBlock; }
	}

	public final AssemblyBlockContext assemblyBlock() throws RecognitionException {
		AssemblyBlockContext _localctx = new AssemblyBlockContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_assemblyBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(985);
			match(T__14);
			setState(989);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & 4820466225129987L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 56831596937353L) != 0)) {
				{
				{
				setState(986);
				assemblyItem();
				}
				}
				setState(991);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(992);
			match(T__16);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyItemContext extends ParserRuleContext {
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public AssemblyBlockContext assemblyBlock() {
			return getRuleContext(AssemblyBlockContext.class,0);
		}
		public AssemblyExpressionContext assemblyExpression() {
			return getRuleContext(AssemblyExpressionContext.class,0);
		}
		public AssemblyLocalDefinitionContext assemblyLocalDefinition() {
			return getRuleContext(AssemblyLocalDefinitionContext.class,0);
		}
		public AssemblyAssignmentContext assemblyAssignment() {
			return getRuleContext(AssemblyAssignmentContext.class,0);
		}
		public AssemblyStackAssignmentContext assemblyStackAssignment() {
			return getRuleContext(AssemblyStackAssignmentContext.class,0);
		}
		public LabelDefinitionContext labelDefinition() {
			return getRuleContext(LabelDefinitionContext.class,0);
		}
		public AssemblySwitchContext assemblySwitch() {
			return getRuleContext(AssemblySwitchContext.class,0);
		}
		public AssemblyFunctionDefinitionContext assemblyFunctionDefinition() {
			return getRuleContext(AssemblyFunctionDefinitionContext.class,0);
		}
		public AssemblyForContext assemblyFor() {
			return getRuleContext(AssemblyForContext.class,0);
		}
		public AssemblyIfContext assemblyIf() {
			return getRuleContext(AssemblyIfContext.class,0);
		}
		public TerminalNode BreakKeyword() { return getToken(SolidityParser.BreakKeyword, 0); }
		public TerminalNode ContinueKeyword() { return getToken(SolidityParser.ContinueKeyword, 0); }
		public TerminalNode LeaveKeyword() { return getToken(SolidityParser.LeaveKeyword, 0); }
		public NumberLiteralContext numberLiteral() {
			return getRuleContext(NumberLiteralContext.class,0);
		}
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public HexLiteralContext hexLiteral() {
			return getRuleContext(HexLiteralContext.class,0);
		}
		public AssemblyItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyItem; }
	}

	public final AssemblyItemContext assemblyItem() throws RecognitionException {
		AssemblyItemContext _localctx = new AssemblyItemContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_assemblyItem);
		try {
			setState(1012);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,108,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(994);
				comment();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(995);
				identifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(996);
				assemblyBlock();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(997);
				assemblyExpression();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(998);
				assemblyLocalDefinition();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(999);
				assemblyAssignment();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1000);
				assemblyStackAssignment();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1001);
				labelDefinition();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1002);
				assemblySwitch();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(1003);
				assemblyFunctionDefinition();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(1004);
				assemblyFor();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(1005);
				assemblyIf();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(1006);
				match(BreakKeyword);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(1007);
				match(ContinueKeyword);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(1008);
				match(LeaveKeyword);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(1009);
				numberLiteral();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(1010);
				stringLiteral();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(1011);
				hexLiteral();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyExpressionContext extends ParserRuleContext {
		public AssemblyCallContext assemblyCall() {
			return getRuleContext(AssemblyCallContext.class,0);
		}
		public AssemblyLiteralContext assemblyLiteral() {
			return getRuleContext(AssemblyLiteralContext.class,0);
		}
		public AssemblyMemberContext assemblyMember() {
			return getRuleContext(AssemblyMemberContext.class,0);
		}
		public AssemblyExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyExpression; }
	}

	public final AssemblyExpressionContext assemblyExpression() throws RecognitionException {
		AssemblyExpressionContext _localctx = new AssemblyExpressionContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_assemblyExpression);
		try {
			setState(1017);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,109,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1014);
				assemblyCall();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1015);
				assemblyLiteral();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1016);
				assemblyMember();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyMemberContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public AssemblyMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyMember; }
	}

	public final AssemblyMemberContext assemblyMember() throws RecognitionException {
		AssemblyMemberContext _localctx = new AssemblyMemberContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_assemblyMember);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1019);
			identifier();
			setState(1020);
			match(T__44);
			setState(1021);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyCallContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<AssemblyExpressionContext> assemblyExpression() {
			return getRuleContexts(AssemblyExpressionContext.class);
		}
		public AssemblyExpressionContext assemblyExpression(int i) {
			return getRuleContext(AssemblyExpressionContext.class,i);
		}
		public AssemblyCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyCall; }
	}

	public final AssemblyCallContext assemblyCall() throws RecognitionException {
		AssemblyCallContext _localctx = new AssemblyCallContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_assemblyCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1027);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,110,_ctx) ) {
			case 1:
				{
				setState(1023);
				match(T__58);
				}
				break;
			case 2:
				{
				setState(1024);
				match(T__43);
				}
				break;
			case 3:
				{
				setState(1025);
				match(T__65);
				}
				break;
			case 4:
				{
				setState(1026);
				identifier();
				}
				break;
			}
			setState(1041);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,113,_ctx) ) {
			case 1:
				{
				setState(1029);
				match(T__22);
				setState(1031);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & 4820328769390593L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 169118796673L) != 0)) {
					{
					setState(1030);
					assemblyExpression();
					}
				}

				setState(1037);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(1033);
					match(T__15);
					setState(1034);
					assemblyExpression();
					}
					}
					setState(1039);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1040);
				match(T__23);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyLocalDefinitionContext extends ParserRuleContext {
		public AssemblyIdentifierOrListContext assemblyIdentifierOrList() {
			return getRuleContext(AssemblyIdentifierOrListContext.class,0);
		}
		public AssemblyExpressionContext assemblyExpression() {
			return getRuleContext(AssemblyExpressionContext.class,0);
		}
		public AssemblyLocalDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyLocalDefinition; }
	}

	public final AssemblyLocalDefinitionContext assemblyLocalDefinition() throws RecognitionException {
		AssemblyLocalDefinitionContext _localctx = new AssemblyLocalDefinitionContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_assemblyLocalDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1043);
			match(T__87);
			setState(1044);
			assemblyIdentifierOrList();
			setState(1047);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__88) {
				{
				setState(1045);
				match(T__88);
				setState(1046);
				assemblyExpression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyAssignmentContext extends ParserRuleContext {
		public AssemblyIdentifierOrListContext assemblyIdentifierOrList() {
			return getRuleContext(AssemblyIdentifierOrListContext.class,0);
		}
		public AssemblyExpressionContext assemblyExpression() {
			return getRuleContext(AssemblyExpressionContext.class,0);
		}
		public AssemblyAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyAssignment; }
	}

	public final AssemblyAssignmentContext assemblyAssignment() throws RecognitionException {
		AssemblyAssignmentContext _localctx = new AssemblyAssignmentContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_assemblyAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1049);
			assemblyIdentifierOrList();
			setState(1050);
			match(T__88);
			setState(1051);
			assemblyExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyIdentifierOrListContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public AssemblyMemberContext assemblyMember() {
			return getRuleContext(AssemblyMemberContext.class,0);
		}
		public AssemblyIdentifierListContext assemblyIdentifierList() {
			return getRuleContext(AssemblyIdentifierListContext.class,0);
		}
		public AssemblyIdentifierOrListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyIdentifierOrList; }
	}

	public final AssemblyIdentifierOrListContext assemblyIdentifierOrList() throws RecognitionException {
		AssemblyIdentifierOrListContext _localctx = new AssemblyIdentifierOrListContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_assemblyIdentifierOrList);
		try {
			setState(1060);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,115,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1053);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1054);
				assemblyMember();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1055);
				assemblyIdentifierList();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1056);
				match(T__22);
				setState(1057);
				assemblyIdentifierList();
				setState(1058);
				match(T__23);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyIdentifierListContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public AssemblyIdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyIdentifierList; }
	}

	public final AssemblyIdentifierListContext assemblyIdentifierList() throws RecognitionException {
		AssemblyIdentifierListContext _localctx = new AssemblyIdentifierListContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_assemblyIdentifierList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1062);
			identifier();
			setState(1067);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__15) {
				{
				{
				setState(1063);
				match(T__15);
				setState(1064);
				identifier();
				}
				}
				setState(1069);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyStackAssignmentContext extends ParserRuleContext {
		public AssemblyExpressionContext assemblyExpression() {
			return getRuleContext(AssemblyExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public AssemblyStackAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyStackAssignment; }
	}

	public final AssemblyStackAssignmentContext assemblyStackAssignment() throws RecognitionException {
		AssemblyStackAssignmentContext _localctx = new AssemblyStackAssignmentContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_assemblyStackAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1070);
			assemblyExpression();
			setState(1071);
			match(T__89);
			setState(1072);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LabelDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public LabelDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_labelDefinition; }
	}

	public final LabelDefinitionContext labelDefinition() throws RecognitionException {
		LabelDefinitionContext _localctx = new LabelDefinitionContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_labelDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1074);
			identifier();
			setState(1075);
			match(T__69);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblySwitchContext extends ParserRuleContext {
		public AssemblyExpressionContext assemblyExpression() {
			return getRuleContext(AssemblyExpressionContext.class,0);
		}
		public List<AssemblyCaseContext> assemblyCase() {
			return getRuleContexts(AssemblyCaseContext.class);
		}
		public AssemblyCaseContext assemblyCase(int i) {
			return getRuleContext(AssemblyCaseContext.class,i);
		}
		public AssemblySwitchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblySwitch; }
	}

	public final AssemblySwitchContext assemblySwitch() throws RecognitionException {
		AssemblySwitchContext _localctx = new AssemblySwitchContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_assemblySwitch);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1077);
			match(T__90);
			setState(1078);
			assemblyExpression();
			setState(1082);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__91 || _la==T__92) {
				{
				{
				setState(1079);
				assemblyCase();
				}
				}
				setState(1084);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyCaseContext extends ParserRuleContext {
		public AssemblyLiteralContext assemblyLiteral() {
			return getRuleContext(AssemblyLiteralContext.class,0);
		}
		public AssemblyBlockContext assemblyBlock() {
			return getRuleContext(AssemblyBlockContext.class,0);
		}
		public AssemblyCaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyCase; }
	}

	public final AssemblyCaseContext assemblyCase() throws RecognitionException {
		AssemblyCaseContext _localctx = new AssemblyCaseContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_assemblyCase);
		try {
			setState(1091);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__91:
				enterOuterAlt(_localctx, 1);
				{
				setState(1085);
				match(T__91);
				setState(1086);
				assemblyLiteral();
				setState(1087);
				assemblyBlock();
				}
				break;
			case T__92:
				enterOuterAlt(_localctx, 2);
				{
				setState(1089);
				match(T__92);
				setState(1090);
				assemblyBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyFunctionDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public AssemblyBlockContext assemblyBlock() {
			return getRuleContext(AssemblyBlockContext.class,0);
		}
		public AssemblyIdentifierListContext assemblyIdentifierList() {
			return getRuleContext(AssemblyIdentifierListContext.class,0);
		}
		public AssemblyFunctionReturnsContext assemblyFunctionReturns() {
			return getRuleContext(AssemblyFunctionReturnsContext.class,0);
		}
		public AssemblyFunctionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyFunctionDefinition; }
	}

	public final AssemblyFunctionDefinitionContext assemblyFunctionDefinition() throws RecognitionException {
		AssemblyFunctionDefinitionContext _localctx = new AssemblyFunctionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_assemblyFunctionDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1093);
			match(T__37);
			setState(1094);
			identifier();
			setState(1095);
			match(T__22);
			setState(1097);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) {
				{
				setState(1096);
				assemblyIdentifierList();
				}
			}

			setState(1099);
			match(T__23);
			setState(1101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__93) {
				{
				setState(1100);
				assemblyFunctionReturns();
				}
			}

			setState(1103);
			assemblyBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyFunctionReturnsContext extends ParserRuleContext {
		public AssemblyIdentifierListContext assemblyIdentifierList() {
			return getRuleContext(AssemblyIdentifierListContext.class,0);
		}
		public AssemblyFunctionReturnsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyFunctionReturns; }
	}

	public final AssemblyFunctionReturnsContext assemblyFunctionReturns() throws RecognitionException {
		AssemblyFunctionReturnsContext _localctx = new AssemblyFunctionReturnsContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_assemblyFunctionReturns);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1105);
			match(T__93);
			setState(1106);
			assemblyIdentifierList();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyForContext extends ParserRuleContext {
		public List<AssemblyExpressionContext> assemblyExpression() {
			return getRuleContexts(AssemblyExpressionContext.class);
		}
		public AssemblyExpressionContext assemblyExpression(int i) {
			return getRuleContext(AssemblyExpressionContext.class,i);
		}
		public List<AssemblyBlockContext> assemblyBlock() {
			return getRuleContexts(AssemblyBlockContext.class);
		}
		public AssemblyBlockContext assemblyBlock(int i) {
			return getRuleContext(AssemblyBlockContext.class,i);
		}
		public AssemblyForContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyFor; }
	}

	public final AssemblyForContext assemblyFor() throws RecognitionException {
		AssemblyForContext _localctx = new AssemblyForContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_assemblyFor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1108);
			match(T__26);
			setState(1111);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
				{
				setState(1109);
				assemblyBlock();
				}
				break;
			case T__13:
			case T__24:
			case T__43:
			case T__49:
			case T__58:
			case T__61:
			case T__65:
			case T__94:
			case BooleanLiteral:
			case DecimalNumber:
			case HexNumber:
			case HexLiteralFragment:
			case LeaveKeyword:
			case PayableKeyword:
			case GlobalKeyword:
			case ConstructorKeyword:
			case ReceiveKeyword:
			case Identifier:
			case StringLiteralFragment:
			case MultiLineComment:
				{
				setState(1110);
				assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1113);
			assemblyExpression();
			setState(1116);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
				{
				setState(1114);
				assemblyBlock();
				}
				break;
			case T__13:
			case T__24:
			case T__43:
			case T__49:
			case T__58:
			case T__61:
			case T__65:
			case T__94:
			case BooleanLiteral:
			case DecimalNumber:
			case HexNumber:
			case HexLiteralFragment:
			case LeaveKeyword:
			case PayableKeyword:
			case GlobalKeyword:
			case ConstructorKeyword:
			case ReceiveKeyword:
			case Identifier:
			case StringLiteralFragment:
			case MultiLineComment:
				{
				setState(1115);
				assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1118);
			assemblyBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyIfContext extends ParserRuleContext {
		public AssemblyExpressionContext assemblyExpression() {
			return getRuleContext(AssemblyExpressionContext.class,0);
		}
		public AssemblyBlockContext assemblyBlock() {
			return getRuleContext(AssemblyBlockContext.class,0);
		}
		public AssemblyIfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyIf; }
	}

	public final AssemblyIfContext assemblyIf() throws RecognitionException {
		AssemblyIfContext _localctx = new AssemblyIfContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_assemblyIf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1120);
			match(T__50);
			setState(1121);
			assemblyExpression();
			setState(1122);
			assemblyBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssemblyLiteralContext extends ParserRuleContext {
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public TerminalNode DecimalNumber() { return getToken(SolidityParser.DecimalNumber, 0); }
		public TerminalNode HexNumber() { return getToken(SolidityParser.HexNumber, 0); }
		public HexLiteralContext hexLiteral() {
			return getRuleContext(HexLiteralContext.class,0);
		}
		public TerminalNode BooleanLiteral() { return getToken(SolidityParser.BooleanLiteral, 0); }
		public AssemblyLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assemblyLiteral; }
	}

	public final AssemblyLiteralContext assemblyLiteral() throws RecognitionException {
		AssemblyLiteralContext _localctx = new AssemblyLiteralContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_assemblyLiteral);
		try {
			setState(1129);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case StringLiteralFragment:
				enterOuterAlt(_localctx, 1);
				{
				setState(1124);
				stringLiteral();
				}
				break;
			case DecimalNumber:
				enterOuterAlt(_localctx, 2);
				{
				setState(1125);
				match(DecimalNumber);
				}
				break;
			case HexNumber:
				enterOuterAlt(_localctx, 3);
				{
				setState(1126);
				match(HexNumber);
				}
				break;
			case HexLiteralFragment:
				enterOuterAlt(_localctx, 4);
				{
				setState(1127);
				hexLiteral();
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 5);
				{
				setState(1128);
				match(BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TupleExpressionContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TupleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleExpression; }
	}

	public final TupleExpressionContext tupleExpression() throws RecognitionException {
		TupleExpressionContext _localctx = new TupleExpressionContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_tupleExpression);
		int _la;
		try {
			setState(1157);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__22:
				enterOuterAlt(_localctx, 1);
				{
				setState(1131);
				match(T__22);
				{
				setState(1133);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
					{
					setState(1132);
					expression(0);
					}
				}

				setState(1141);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(1135);
					match(T__15);
					setState(1137);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
						{
						setState(1136);
						expression(0);
						}
					}

					}
					}
					setState(1143);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				setState(1144);
				match(T__23);
				}
				break;
			case T__41:
				enterOuterAlt(_localctx, 2);
				{
				setState(1145);
				match(T__41);
				setState(1154);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & -72038554396917503L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 2839594383337062403L) != 0)) {
					{
					setState(1146);
					expression(0);
					setState(1151);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__15) {
						{
						{
						setState(1147);
						match(T__15);
						setState(1148);
						expression(0);
						}
						}
						setState(1153);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(1156);
				match(T__42);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumberLiteralContext extends ParserRuleContext {
		public TerminalNode DecimalNumber() { return getToken(SolidityParser.DecimalNumber, 0); }
		public TerminalNode HexNumber() { return getToken(SolidityParser.HexNumber, 0); }
		public TerminalNode NumberUnit() { return getToken(SolidityParser.NumberUnit, 0); }
		public NumberLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numberLiteral; }
	}

	public final NumberLiteralContext numberLiteral() throws RecognitionException {
		NumberLiteralContext _localctx = new NumberLiteralContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_numberLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1159);
			_la = _input.LA(1);
			if ( !(_la==DecimalNumber || _la==HexNumber) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1161);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,130,_ctx) ) {
			case 1:
				{
				setState(1160);
				match(NumberUnit);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode ReceiveKeyword() { return getToken(SolidityParser.ReceiveKeyword, 0); }
		public TerminalNode GlobalKeyword() { return getToken(SolidityParser.GlobalKeyword, 0); }
		public TerminalNode ConstructorKeyword() { return getToken(SolidityParser.ConstructorKeyword, 0); }
		public TerminalNode PayableKeyword() { return getToken(SolidityParser.PayableKeyword, 0); }
		public TerminalNode LeaveKeyword() { return getToken(SolidityParser.LeaveKeyword, 0); }
		public TerminalNode Identifier() { return getToken(SolidityParser.Identifier, 0); }
		public TerminalNode MultiLineComment() { return getToken(SolidityParser.MultiLineComment, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_identifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1163);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4612829510553845760L) != 0) || ((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & 151938924545L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommentContext extends ParserRuleContext {
		public TerminalNode MultiLineComment() { return getToken(SolidityParser.MultiLineComment, 0); }
		public TerminalNode LineComment() { return getToken(SolidityParser.LineComment, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_comment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1165);
			_la = _input.LA(1);
			if ( !(_la==MultiLineComment || _la==LineComment) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class HexLiteralContext extends ParserRuleContext {
		public List<TerminalNode> HexLiteralFragment() { return getTokens(SolidityParser.HexLiteralFragment); }
		public TerminalNode HexLiteralFragment(int i) {
			return getToken(SolidityParser.HexLiteralFragment, i);
		}
		public HexLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hexLiteral; }
	}

	public final HexLiteralContext hexLiteral() throws RecognitionException {
		HexLiteralContext _localctx = new HexLiteralContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_hexLiteral);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1168); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1167);
					match(HexLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1170); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,131,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OverrideSpecifierContext extends ParserRuleContext {
		public List<UserDefinedTypeNameContext> userDefinedTypeName() {
			return getRuleContexts(UserDefinedTypeNameContext.class);
		}
		public UserDefinedTypeNameContext userDefinedTypeName(int i) {
			return getRuleContext(UserDefinedTypeNameContext.class,i);
		}
		public OverrideSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_overrideSpecifier; }
	}

	public final OverrideSpecifierContext overrideSpecifier() throws RecognitionException {
		OverrideSpecifierContext _localctx = new OverrideSpecifierContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_overrideSpecifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1172);
			match(T__95);
			setState(1184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(1173);
				match(T__22);
				setState(1174);
				userDefinedTypeName();
				setState(1179);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(1175);
					match(T__15);
					setState(1176);
					userDefinedTypeName();
					}
					}
					setState(1181);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1182);
				match(T__23);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringLiteralContext extends ParserRuleContext {
		public List<TerminalNode> StringLiteralFragment() { return getTokens(SolidityParser.StringLiteralFragment); }
		public TerminalNode StringLiteralFragment(int i) {
			return getToken(SolidityParser.StringLiteralFragment, i);
		}
		public StringLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringLiteral; }
	}

	public final StringLiteralContext stringLiteral() throws RecognitionException {
		StringLiteralContext _localctx = new StringLiteralContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_stringLiteral);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1187); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1186);
					match(StringLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1189); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,134,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 38:
			return typeName_sempred((TypeNameContext)_localctx, predIndex);
		case 70:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean typeName_sempred(TypeNameContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 14);
		case 2:
			return precpred(_ctx, 13);
		case 3:
			return precpred(_ctx, 12);
		case 4:
			return precpred(_ctx, 11);
		case 5:
			return precpred(_ctx, 10);
		case 6:
			return precpred(_ctx, 9);
		case 7:
			return precpred(_ctx, 8);
		case 8:
			return precpred(_ctx, 7);
		case 9:
			return precpred(_ctx, 6);
		case 10:
			return precpred(_ctx, 5);
		case 11:
			return precpred(_ctx, 4);
		case 12:
			return precpred(_ctx, 3);
		case 13:
			return precpred(_ctx, 2);
		case 14:
			return precpred(_ctx, 27);
		case 15:
			return precpred(_ctx, 25);
		case 16:
			return precpred(_ctx, 24);
		case 17:
			return precpred(_ctx, 23);
		case 18:
			return precpred(_ctx, 22);
		case 19:
			return precpred(_ctx, 21);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0085\u04a8\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007"+
		"\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007"+
		"\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007"+
		"\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007"+
		"\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007"+
		"\"\u0002#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007"+
		"\'\u0002(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007"+
		",\u0002-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u0007"+
		"1\u00022\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u0007"+
		"6\u00027\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007"+
		";\u0002<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0002@\u0007"+
		"@\u0002A\u0007A\u0002B\u0007B\u0002C\u0007C\u0002D\u0007D\u0002E\u0007"+
		"E\u0002F\u0007F\u0002G\u0007G\u0002H\u0007H\u0002I\u0007I\u0002J\u0007"+
		"J\u0002K\u0007K\u0002L\u0007L\u0002M\u0007M\u0002N\u0007N\u0002O\u0007"+
		"O\u0002P\u0007P\u0002Q\u0007Q\u0002R\u0007R\u0002S\u0007S\u0002T\u0007"+
		"T\u0002U\u0007U\u0002V\u0007V\u0002W\u0007W\u0002X\u0007X\u0002Y\u0007"+
		"Y\u0002Z\u0007Z\u0002[\u0007[\u0002\\\u0007\\\u0002]\u0007]\u0002^\u0007"+
		"^\u0002_\u0007_\u0002`\u0007`\u0002a\u0007a\u0002b\u0007b\u0002c\u0007"+
		"c\u0002d\u0007d\u0002e\u0007e\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0005\u0000\u00d9\b\u0000\n\u0000\f\u0000"+
		"\u00dc\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003\u00ea\b\u0003\u0001\u0004\u0001\u0004\u0003\u0004"+
		"\u00ee\b\u0004\u0001\u0004\u0005\u0004\u00f1\b\u0004\n\u0004\f\u0004\u00f4"+
		"\t\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0003\u0006\u00f9\b\u0006"+
		"\u0001\u0006\u0001\u0006\u0003\u0006\u00fd\b\u0006\u0001\u0006\u0003\u0006"+
		"\u0100\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007\u0105\b"+
		"\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0003\b\u010b\b\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0003\b\u0112\b\b\u0001\b\u0001\b\u0003\b\u0116"+
		"\b\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0005\b\u0121\b\b\n\b\f\b\u0124\t\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0003\b\u012b\b\b\u0001\t\u0001\t\u0001\n\u0003\n\u0130\b\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0005\n\u0138\b\n\n\n\f\n\u013b"+
		"\t\n\u0003\n\u013d\b\n\u0001\n\u0001\n\u0005\n\u0141\b\n\n\n\f\n\u0144"+
		"\t\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u014b"+
		"\b\u000b\u0001\u000b\u0003\u000b\u014e\b\u000b\u0001\f\u0001\f\u0001\f"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u015a"+
		"\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u0163"+
		"\b\r\n\r\f\r\u0166\t\r\u0001\r\u0001\r\u0001\r\u0003\r\u016b\b\r\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0003\u0011\u0186\b\u0011\u0001\u0011\u0003\u0011\u0189\b\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0005\u0012\u0192\b\u0012\n\u0012\f\u0012\u0195\t\u0012\u0001\u0012"+
		"\u0001\u0012\u0003\u0012\u0199\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0003\u0013\u019e\b\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0003\u0015"+
		"\u01a9\b\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0005\u0015"+
		"\u01af\b\u0015\n\u0015\f\u0015\u01b2\t\u0015\u0003\u0015\u01b4\b\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0003\u0016"+
		"\u01bb\b\u0016\u0001\u0016\u0001\u0016\u0005\u0016\u01bf\b\u0016\n\u0016"+
		"\f\u0016\u01c2\t\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u01c6\b\u0016"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u01cb\b\u0017\u0001\u0017"+
		"\u0003\u0017\u01ce\b\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0003\u0018\u01d4\b\u0018\u0001\u0018\u0001\u0018\u0003\u0018\u01d8\b"+
		"\u0018\u0001\u0019\u0001\u0019\u0003\u0019\u01dc\b\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0003\u0019\u01e1\b\u0019\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001"+
		"\u001b\u0001\u001b\u0001\u001b\u0005\u001b\u01ee\b\u001b\n\u001b\f\u001b"+
		"\u01f1\t\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c"+
		"\u01f7\b\u001c\u0001\u001c\u0001\u001c\u0001\u001d\u0001\u001d\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u0201\b\u001e\u0001\u001e"+
		"\u0001\u001e\u0003\u001e\u0205\b\u001e\u0001\u001e\u0005\u001e\u0208\b"+
		"\u001e\n\u001e\f\u001e\u020b\t\u001e\u0001\u001e\u0001\u001e\u0001\u001f"+
		"\u0001\u001f\u0003\u001f\u0211\b\u001f\u0001\u001f\u0001\u001f\u0001\u001f"+
		"\u0003\u001f\u0216\b\u001f\u0001\u001f\u0005\u001f\u0219\b\u001f\n\u001f"+
		"\f\u001f\u021c\t\u001f\u0003\u001f\u021e\b\u001f\u0001\u001f\u0001\u001f"+
		"\u0001 \u0001 \u0003 \u0224\b \u0001 \u0003 \u0227\b \u0001!\u0001!\u0001"+
		"!\u0001!\u0005!\u022d\b!\n!\f!\u0230\t!\u0003!\u0232\b!\u0001!\u0001!"+
		"\u0001\"\u0001\"\u0003\"\u0238\b\"\u0001\"\u0003\"\u023b\b\"\u0001#\u0001"+
		"#\u0001#\u0001#\u0005#\u0241\b#\n#\f#\u0244\t#\u0003#\u0246\b#\u0001#"+
		"\u0001#\u0001$\u0001$\u0003$\u024c\b$\u0001%\u0001%\u0003%\u0250\b%\u0001"+
		"%\u0001%\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0003&\u025b"+
		"\b&\u0001&\u0001&\u0001&\u0003&\u0260\b&\u0001&\u0005&\u0263\b&\n&\f&"+
		"\u0266\t&\u0001\'\u0001\'\u0001\'\u0005\'\u026b\b\'\n\'\f\'\u026e\t\'"+
		"\u0001(\u0001(\u0003(\u0272\b(\u0001)\u0001)\u0001)\u0001)\u0003)\u0278"+
		"\b)\u0001)\u0001)\u0001)\u0003)\u027d\b)\u0001)\u0001)\u0001*\u0001*\u0001"+
		"+\u0001+\u0001,\u0001,\u0001,\u0001,\u0001,\u0005,\u028a\b,\n,\f,\u028d"+
		"\t,\u0001,\u0001,\u0003,\u0291\b,\u0001-\u0001-\u0001.\u0001.\u0001/\u0001"+
		"/\u0005/\u0299\b/\n/\f/\u029c\t/\u0001/\u0001/\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00030\u02b0\b0\u00011\u00011\u00011\u00012\u00012\u0001"+
		"2\u00012\u00012\u00012\u00012\u00032\u02bc\b2\u00013\u00013\u00013\u0003"+
		"3\u02c1\b3\u00013\u00013\u00043\u02c5\b3\u000b3\f3\u02c6\u00014\u0001"+
		"4\u00034\u02cb\b4\u00014\u00034\u02ce\b4\u00014\u00014\u00015\u00015\u0001"+
		"5\u00015\u00015\u00015\u00016\u00016\u00036\u02da\b6\u00017\u00017\u0001"+
		"7\u00018\u00018\u00018\u00018\u00038\u02e3\b8\u00018\u00018\u00038\u02e7"+
		"\b8\u00018\u00038\u02ea\b8\u00018\u00018\u00018\u00019\u00019\u00039\u02f1"+
		"\b9\u00019\u00019\u00019\u00019\u00039\u02f7\b9\u00019\u00019\u0001:\u0001"+
		":\u0001;\u0001;\u0001;\u0001;\u0001;\u0001;\u0001;\u0001;\u0001<\u0001"+
		"<\u0001<\u0001=\u0001=\u0001=\u0001>\u0001>\u0003>\u030d\b>\u0001>\u0001"+
		">\u0001?\u0001?\u0001?\u0001@\u0001@\u0001@\u0001@\u0001A\u0001A\u0001"+
		"A\u0001A\u0001B\u0001B\u0001B\u0001B\u0001B\u0001B\u0001B\u0003B\u0323"+
		"\bB\u0001B\u0001B\u0003B\u0327\bB\u0001B\u0001B\u0001C\u0003C\u032c\b"+
		"C\u0001C\u0001C\u0003C\u0330\bC\u0005C\u0332\bC\nC\fC\u0335\tC\u0001D"+
		"\u0001D\u0003D\u0339\bD\u0001D\u0005D\u033c\bD\nD\fD\u033f\tD\u0001D\u0003"+
		"D\u0342\bD\u0001D\u0001D\u0001E\u0001E\u0001F\u0001F\u0001F\u0001F\u0001"+
		"F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001"+
		"F\u0001F\u0001F\u0001F\u0003F\u035a\bF\u0001F\u0001F\u0001F\u0001F\u0001"+
		"F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001"+
		"F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001"+
		"F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001"+
		"F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001"+
		"F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0003F\u0390\bF\u0001"+
		"F\u0001F\u0003F\u0394\bF\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001"+
		"F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0001F\u0005F\u03a4\bF\nF"+
		"\fF\u03a7\tF\u0001G\u0001G\u0001G\u0001G\u0001G\u0001G\u0001G\u0001G\u0001"+
		"G\u0003G\u03b2\bG\u0001H\u0001H\u0001H\u0005H\u03b7\bH\nH\fH\u03ba\tH"+
		"\u0001I\u0001I\u0001I\u0005I\u03bf\bI\nI\fI\u03c2\tI\u0001I\u0003I\u03c5"+
		"\bI\u0001J\u0001J\u0001J\u0001J\u0001K\u0001K\u0003K\u03cd\bK\u0001K\u0001"+
		"K\u0003K\u03d1\bK\u0003K\u03d3\bK\u0001L\u0001L\u0001L\u0001L\u0001L\u0001"+
		"M\u0001M\u0005M\u03dc\bM\nM\fM\u03df\tM\u0001M\u0001M\u0001N\u0001N\u0001"+
		"N\u0001N\u0001N\u0001N\u0001N\u0001N\u0001N\u0001N\u0001N\u0001N\u0001"+
		"N\u0001N\u0001N\u0001N\u0001N\u0001N\u0003N\u03f5\bN\u0001O\u0001O\u0001"+
		"O\u0003O\u03fa\bO\u0001P\u0001P\u0001P\u0001P\u0001Q\u0001Q\u0001Q\u0001"+
		"Q\u0003Q\u0404\bQ\u0001Q\u0001Q\u0003Q\u0408\bQ\u0001Q\u0001Q\u0005Q\u040c"+
		"\bQ\nQ\fQ\u040f\tQ\u0001Q\u0003Q\u0412\bQ\u0001R\u0001R\u0001R\u0001R"+
		"\u0003R\u0418\bR\u0001S\u0001S\u0001S\u0001S\u0001T\u0001T\u0001T\u0001"+
		"T\u0001T\u0001T\u0001T\u0003T\u0425\bT\u0001U\u0001U\u0001U\u0005U\u042a"+
		"\bU\nU\fU\u042d\tU\u0001V\u0001V\u0001V\u0001V\u0001W\u0001W\u0001W\u0001"+
		"X\u0001X\u0001X\u0005X\u0439\bX\nX\fX\u043c\tX\u0001Y\u0001Y\u0001Y\u0001"+
		"Y\u0001Y\u0001Y\u0003Y\u0444\bY\u0001Z\u0001Z\u0001Z\u0001Z\u0003Z\u044a"+
		"\bZ\u0001Z\u0001Z\u0003Z\u044e\bZ\u0001Z\u0001Z\u0001[\u0001[\u0001[\u0001"+
		"\\\u0001\\\u0001\\\u0003\\\u0458\b\\\u0001\\\u0001\\\u0001\\\u0003\\\u045d"+
		"\b\\\u0001\\\u0001\\\u0001]\u0001]\u0001]\u0001]\u0001^\u0001^\u0001^"+
		"\u0001^\u0001^\u0003^\u046a\b^\u0001_\u0001_\u0003_\u046e\b_\u0001_\u0001"+
		"_\u0003_\u0472\b_\u0005_\u0474\b_\n_\f_\u0477\t_\u0001_\u0001_\u0001_"+
		"\u0001_\u0001_\u0005_\u047e\b_\n_\f_\u0481\t_\u0003_\u0483\b_\u0001_\u0003"+
		"_\u0486\b_\u0001`\u0001`\u0003`\u048a\b`\u0001a\u0001a\u0001b\u0001b\u0001"+
		"c\u0004c\u0491\bc\u000bc\fc\u0492\u0001d\u0001d\u0001d\u0001d\u0001d\u0005"+
		"d\u049a\bd\nd\fd\u049d\td\u0001d\u0001d\u0003d\u04a1\bd\u0001e\u0004e"+
		"\u04a4\be\u000be\fe\u04a5\u0001e\u0000\u0002L\u008cf\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \""+
		"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086"+
		"\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e"+
		"\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6"+
		"\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u0000\u0010"+
		"\u0001\u0000\u0005\u000b\u0001\u0000\u0013\u0015\u0003\u0000\u0003\u0003"+
		"\u0005\n\u001c#\u0001\u000002\u0004\u0000nnuuyy{{\u0003\u0000,,?Bae\u0001"+
		"\u0000CD\u0001\u0000\u001e\u001f\u0002\u0000\u0003\u0003 !\u0001\u0000"+
		"JK\u0001\u0000\u0007\n\u0001\u0000\"#\u0002\u0000\u000b\u000bNW\u0001"+
		"\u0000gh\u000b\u0000\u000e\u000e\u0019\u0019,,22>>__qquu|}\u007f\u0080"+
		"\u0084\u0084\u0001\u0000\u0084\u0085\u0531\u0000\u00da\u0001\u0000\u0000"+
		"\u0000\u0002\u00df\u0001\u0000\u0000\u0000\u0004\u00e4\u0001\u0000\u0000"+
		"\u0000\u0006\u00e9\u0001\u0000\u0000\u0000\b\u00eb\u0001\u0000\u0000\u0000"+
		"\n\u00f5\u0001\u0000\u0000\u0000\f\u00ff\u0001\u0000\u0000\u0000\u000e"+
		"\u0101\u0001\u0000\u0000\u0000\u0010\u012a\u0001\u0000\u0000\u0000\u0012"+
		"\u012c\u0001\u0000\u0000\u0000\u0014\u012f\u0001\u0000\u0000\u0000\u0016"+
		"\u0147\u0001\u0000\u0000\u0000\u0018\u0159\u0001\u0000\u0000\u0000\u001a"+
		"\u015b\u0001\u0000\u0000\u0000\u001c\u016e\u0001\u0000\u0000\u0000\u001e"+
		"\u0175\u0001\u0000\u0000\u0000 \u017a\u0001\u0000\u0000\u0000\"\u0180"+
		"\u0001\u0000\u0000\u0000$\u0198\u0001\u0000\u0000\u0000&\u019a\u0001\u0000"+
		"\u0000\u0000(\u019f\u0001\u0000\u0000\u0000*\u01a1\u0001\u0000\u0000\u0000"+
		",\u01b7\u0001\u0000\u0000\u0000.\u01c7\u0001\u0000\u0000\u00000\u01cf"+
		"\u0001\u0000\u0000\u00002\u01e0\u0001\u0000\u0000\u00004\u01e2\u0001\u0000"+
		"\u0000\u00006\u01ef\u0001\u0000\u0000\u00008\u01f2\u0001\u0000\u0000\u0000"+
		":\u01fa\u0001\u0000\u0000\u0000<\u01fc\u0001\u0000\u0000\u0000>\u020e"+
		"\u0001\u0000\u0000\u0000@\u0221\u0001\u0000\u0000\u0000B\u0228\u0001\u0000"+
		"\u0000\u0000D\u0235\u0001\u0000\u0000\u0000F\u023c\u0001\u0000\u0000\u0000"+
		"H\u0249\u0001\u0000\u0000\u0000J\u024d\u0001\u0000\u0000\u0000L\u025a"+
		"\u0001\u0000\u0000\u0000N\u0267\u0001\u0000\u0000\u0000P\u0271\u0001\u0000"+
		"\u0000\u0000R\u0273\u0001\u0000\u0000\u0000T\u0280\u0001\u0000\u0000\u0000"+
		"V\u0282\u0001\u0000\u0000\u0000X\u0284\u0001\u0000\u0000\u0000Z\u0292"+
		"\u0001\u0000\u0000\u0000\\\u0294\u0001\u0000\u0000\u0000^\u0296\u0001"+
		"\u0000\u0000\u0000`\u02af\u0001\u0000\u0000\u0000b\u02b1\u0001\u0000\u0000"+
		"\u0000d\u02b4\u0001\u0000\u0000\u0000f\u02bd\u0001\u0000\u0000\u0000h"+
		"\u02c8\u0001\u0000\u0000\u0000j\u02d1\u0001\u0000\u0000\u0000l\u02d9\u0001"+
		"\u0000\u0000\u0000n\u02db\u0001\u0000\u0000\u0000p\u02de\u0001\u0000\u0000"+
		"\u0000r\u02ee\u0001\u0000\u0000\u0000t\u02fa\u0001\u0000\u0000\u0000v"+
		"\u02fc\u0001\u0000\u0000\u0000x\u0304\u0001\u0000\u0000\u0000z\u0307\u0001"+
		"\u0000\u0000\u0000|\u030a\u0001\u0000\u0000\u0000~\u0310\u0001\u0000\u0000"+
		"\u0000\u0080\u0313\u0001\u0000\u0000\u0000\u0082\u0317\u0001\u0000\u0000"+
		"\u0000\u0084\u0322\u0001\u0000\u0000\u0000\u0086\u032b\u0001\u0000\u0000"+
		"\u0000\u0088\u0336\u0001\u0000\u0000\u0000\u008a\u0345\u0001\u0000\u0000"+
		"\u0000\u008c\u0359\u0001\u0000\u0000\u0000\u008e\u03b1\u0001\u0000\u0000"+
		"\u0000\u0090\u03b3\u0001\u0000\u0000\u0000\u0092\u03bb\u0001\u0000\u0000"+
		"\u0000\u0094\u03c6\u0001\u0000\u0000\u0000\u0096\u03d2\u0001\u0000\u0000"+
		"\u0000\u0098\u03d4\u0001\u0000\u0000\u0000\u009a\u03d9\u0001\u0000\u0000"+
		"\u0000\u009c\u03f4\u0001\u0000\u0000\u0000\u009e\u03f9\u0001\u0000\u0000"+
		"\u0000\u00a0\u03fb\u0001\u0000\u0000\u0000\u00a2\u0403\u0001\u0000\u0000"+
		"\u0000\u00a4\u0413\u0001\u0000\u0000\u0000\u00a6\u0419\u0001\u0000\u0000"+
		"\u0000\u00a8\u0424\u0001\u0000\u0000\u0000\u00aa\u0426\u0001\u0000\u0000"+
		"\u0000\u00ac\u042e\u0001\u0000\u0000\u0000\u00ae\u0432\u0001\u0000\u0000"+
		"\u0000\u00b0\u0435\u0001\u0000\u0000\u0000\u00b2\u0443\u0001\u0000\u0000"+
		"\u0000\u00b4\u0445\u0001\u0000\u0000\u0000\u00b6\u0451\u0001\u0000\u0000"+
		"\u0000\u00b8\u0454\u0001\u0000\u0000\u0000\u00ba\u0460\u0001\u0000\u0000"+
		"\u0000\u00bc\u0469\u0001\u0000\u0000\u0000\u00be\u0485\u0001\u0000\u0000"+
		"\u0000\u00c0\u0487\u0001\u0000\u0000\u0000\u00c2\u048b\u0001\u0000\u0000"+
		"\u0000\u00c4\u048d\u0001\u0000\u0000\u0000\u00c6\u0490\u0001\u0000\u0000"+
		"\u0000\u00c8\u0494\u0001\u0000\u0000\u0000\u00ca\u04a3\u0001\u0000\u0000"+
		"\u0000\u00cc\u00d9\u0003\u00c4b\u0000\u00cd\u00d9\u0003\u0002\u0001\u0000"+
		"\u00ce\u00d9\u0003\u0010\b\u0000\u00cf\u00d9\u0003\u0014\n\u0000\u00d0"+
		"\u00d9\u0003<\u001e\u0000\u00d1\u00d9\u00038\u001c\u0000\u00d2\u00d9\u0003"+
		"*\u0015\u0000\u00d3\u00d9\u00030\u0018\u0000\u00d4\u00d9\u0003\u001c\u000e"+
		"\u0000\u00d5\u00d9\u0003\u001e\u000f\u0000\u00d6\u00d9\u0003 \u0010\u0000"+
		"\u00d7\u00d9\u0003\"\u0011\u0000\u00d8\u00cc\u0001\u0000\u0000\u0000\u00d8"+
		"\u00cd\u0001\u0000\u0000\u0000\u00d8\u00ce\u0001\u0000\u0000\u0000\u00d8"+
		"\u00cf\u0001\u0000\u0000\u0000\u00d8\u00d0\u0001\u0000\u0000\u0000\u00d8"+
		"\u00d1\u0001\u0000\u0000\u0000\u00d8\u00d2\u0001\u0000\u0000\u0000\u00d8"+
		"\u00d3\u0001\u0000\u0000\u0000\u00d8\u00d4\u0001\u0000\u0000\u0000\u00d8"+
		"\u00d5\u0001\u0000\u0000\u0000\u00d8\u00d6\u0001\u0000\u0000\u0000\u00d8"+
		"\u00d7\u0001\u0000\u0000\u0000\u00d9\u00dc\u0001\u0000\u0000\u0000\u00da"+
		"\u00d8\u0001\u0000\u0000\u0000\u00da\u00db\u0001\u0000\u0000\u0000\u00db"+
		"\u00dd\u0001\u0000\u0000\u0000\u00dc\u00da\u0001\u0000\u0000\u0000\u00dd"+
		"\u00de\u0005\u0000\u0000\u0001\u00de\u0001\u0001\u0000\u0000\u0000\u00df"+
		"\u00e0\u0005\u0001\u0000\u0000\u00e0\u00e1\u0003\u0004\u0002\u0000\u00e1"+
		"\u00e2\u0003\u0006\u0003\u0000\u00e2\u00e3\u0005\u0002\u0000\u0000\u00e3"+
		"\u0003\u0001\u0000\u0000\u0000\u00e4\u00e5\u0003\u00c2a\u0000\u00e5\u0005"+
		"\u0001\u0000\u0000\u0000\u00e6\u00ea\u0005\u0003\u0000\u0000\u00e7\u00ea"+
		"\u0003\b\u0004\u0000\u00e8\u00ea\u0003\u008cF\u0000\u00e9\u00e6\u0001"+
		"\u0000\u0000\u0000\u00e9\u00e7\u0001\u0000\u0000\u0000\u00e9\u00e8\u0001"+
		"\u0000\u0000\u0000\u00ea\u0007\u0001\u0000\u0000\u0000\u00eb\u00f2\u0003"+
		"\f\u0006\u0000\u00ec\u00ee\u0005\u0004\u0000\u0000\u00ed\u00ec\u0001\u0000"+
		"\u0000\u0000\u00ed\u00ee\u0001\u0000\u0000\u0000\u00ee\u00ef\u0001\u0000"+
		"\u0000\u0000\u00ef\u00f1\u0003\f\u0006\u0000\u00f0\u00ed\u0001\u0000\u0000"+
		"\u0000\u00f1\u00f4\u0001\u0000\u0000\u0000\u00f2\u00f0\u0001\u0000\u0000"+
		"\u0000\u00f2\u00f3\u0001\u0000\u0000\u0000\u00f3\t\u0001\u0000\u0000\u0000"+
		"\u00f4\u00f2\u0001\u0000\u0000\u0000\u00f5\u00f6\u0007\u0000\u0000\u0000"+
		"\u00f6\u000b\u0001\u0000\u0000\u0000\u00f7\u00f9\u0003\n\u0005\u0000\u00f8"+
		"\u00f7\u0001\u0000\u0000\u0000\u00f8\u00f9\u0001\u0000\u0000\u0000\u00f9"+
		"\u00fa\u0001\u0000\u0000\u0000\u00fa\u0100\u0005\u0082\u0000\u0000\u00fb"+
		"\u00fd\u0003\n\u0005\u0000\u00fc\u00fb\u0001\u0000\u0000\u0000\u00fc\u00fd"+
		"\u0001\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000\u0000\u0000\u00fe\u0100"+
		"\u0005g\u0000\u0000\u00ff\u00f8\u0001\u0000\u0000\u0000\u00ff\u00fc\u0001"+
		"\u0000\u0000\u0000\u0100\r\u0001\u0000\u0000\u0000\u0101\u0104\u0003\u00c2"+
		"a\u0000\u0102\u0103\u0005\f\u0000\u0000\u0103\u0105\u0003\u00c2a\u0000"+
		"\u0104\u0102\u0001\u0000\u0000\u0000\u0104\u0105\u0001\u0000\u0000\u0000"+
		"\u0105\u000f\u0001\u0000\u0000\u0000\u0106\u0107\u0005\r\u0000\u0000\u0107"+
		"\u010a\u0003\u0012\t\u0000\u0108\u0109\u0005\f\u0000\u0000\u0109\u010b"+
		"\u0003\u00c2a\u0000\u010a\u0108\u0001\u0000\u0000\u0000\u010a\u010b\u0001"+
		"\u0000\u0000\u0000\u010b\u010c\u0001\u0000\u0000\u0000\u010c\u010d\u0005"+
		"\u0002\u0000\u0000\u010d\u012b\u0001\u0000\u0000\u0000\u010e\u0111\u0005"+
		"\r\u0000\u0000\u010f\u0112\u0005\u0003\u0000\u0000\u0110\u0112\u0003\u00c2"+
		"a\u0000\u0111\u010f\u0001\u0000\u0000\u0000\u0111\u0110\u0001\u0000\u0000"+
		"\u0000\u0112\u0115\u0001\u0000\u0000\u0000\u0113\u0114\u0005\f\u0000\u0000"+
		"\u0114\u0116\u0003\u00c2a\u0000\u0115\u0113\u0001\u0000\u0000\u0000\u0115"+
		"\u0116\u0001\u0000\u0000\u0000\u0116\u0117\u0001\u0000\u0000\u0000\u0117"+
		"\u0118\u0005\u000e\u0000\u0000\u0118\u0119\u0003\u0012\t\u0000\u0119\u011a"+
		"\u0005\u0002\u0000\u0000\u011a\u012b\u0001\u0000\u0000\u0000\u011b\u011c"+
		"\u0005\r\u0000\u0000\u011c\u011d\u0005\u000f\u0000\u0000\u011d\u0122\u0003"+
		"\u000e\u0007\u0000\u011e\u011f\u0005\u0010\u0000\u0000\u011f\u0121\u0003"+
		"\u000e\u0007\u0000\u0120\u011e\u0001\u0000\u0000\u0000\u0121\u0124\u0001"+
		"\u0000\u0000\u0000\u0122\u0120\u0001\u0000\u0000\u0000\u0122\u0123\u0001"+
		"\u0000\u0000\u0000\u0123\u0125\u0001\u0000\u0000\u0000\u0124\u0122\u0001"+
		"\u0000\u0000\u0000\u0125\u0126\u0005\u0011\u0000\u0000\u0126\u0127\u0005"+
		"\u000e\u0000\u0000\u0127\u0128\u0003\u0012\t\u0000\u0128\u0129\u0005\u0002"+
		"\u0000\u0000\u0129\u012b\u0001\u0000\u0000\u0000\u012a\u0106\u0001\u0000"+
		"\u0000\u0000\u012a\u010e\u0001\u0000\u0000\u0000\u012a\u011b\u0001\u0000"+
		"\u0000\u0000\u012b\u0011\u0001\u0000\u0000\u0000\u012c\u012d\u0005\u0081"+
		"\u0000\u0000\u012d\u0013\u0001\u0000\u0000\u0000\u012e\u0130\u0005\u0012"+
		"\u0000\u0000\u012f\u012e\u0001\u0000\u0000\u0000\u012f\u0130\u0001\u0000"+
		"\u0000\u0000\u0130\u0131\u0001\u0000\u0000\u0000\u0131\u0132\u0007\u0001"+
		"\u0000\u0000\u0132\u013c\u0003\u00c2a\u0000\u0133\u0134\u0005\u0016\u0000"+
		"\u0000\u0134\u0139\u0003\u0016\u000b\u0000\u0135\u0136\u0005\u0010\u0000"+
		"\u0000\u0136\u0138\u0003\u0016\u000b\u0000\u0137\u0135\u0001\u0000\u0000"+
		"\u0000\u0138\u013b\u0001\u0000\u0000\u0000\u0139\u0137\u0001\u0000\u0000"+
		"\u0000\u0139\u013a\u0001\u0000\u0000\u0000\u013a\u013d\u0001\u0000\u0000"+
		"\u0000\u013b\u0139\u0001\u0000\u0000\u0000\u013c\u0133\u0001\u0000\u0000"+
		"\u0000\u013c\u013d\u0001\u0000\u0000\u0000\u013d\u013e\u0001\u0000\u0000"+
		"\u0000\u013e\u0142\u0005\u000f\u0000\u0000\u013f\u0141\u0003\u0018\f\u0000"+
		"\u0140\u013f\u0001\u0000\u0000\u0000\u0141\u0144\u0001\u0000\u0000\u0000"+
		"\u0142\u0140\u0001\u0000\u0000\u0000\u0142\u0143\u0001\u0000\u0000\u0000"+
		"\u0143\u0145\u0001\u0000\u0000\u0000\u0144\u0142\u0001\u0000\u0000\u0000"+
		"\u0145\u0146\u0005\u0011\u0000\u0000\u0146\u0015\u0001\u0000\u0000\u0000"+
		"\u0147\u014d\u0003N\'\u0000\u0148\u014a\u0005\u0017\u0000\u0000\u0149"+
		"\u014b\u0003\u0090H\u0000\u014a\u0149\u0001\u0000\u0000\u0000\u014a\u014b"+
		"\u0001\u0000\u0000\u0000\u014b\u014c\u0001\u0000\u0000\u0000\u014c\u014e"+
		"\u0005\u0018\u0000\u0000\u014d\u0148\u0001\u0000\u0000\u0000\u014d\u014e"+
		"\u0001\u0000\u0000\u0000\u014e\u0017\u0001\u0000\u0000\u0000\u014f\u015a"+
		"\u0003\u00c4b\u0000\u0150\u015a\u0003\u001a\r\u0000\u0151\u015a\u0003"+
		"\"\u0011\u0000\u0152\u015a\u0003*\u0015\u0000\u0153\u015a\u0003,\u0016"+
		"\u0000\u0154\u015a\u00030\u0018\u0000\u0155\u015a\u00038\u001c\u0000\u0156"+
		"\u015a\u0003<\u001e\u0000\u0157\u015a\u0003\u001e\u000f\u0000\u0158\u015a"+
		"\u0003 \u0010\u0000\u0159\u014f\u0001\u0000\u0000\u0000\u0159\u0150\u0001"+
		"\u0000\u0000\u0000\u0159\u0151\u0001\u0000\u0000\u0000\u0159\u0152\u0001"+
		"\u0000\u0000\u0000\u0159\u0153\u0001\u0000\u0000\u0000\u0159\u0154\u0001"+
		"\u0000\u0000\u0000\u0159\u0155\u0001\u0000\u0000\u0000\u0159\u0156\u0001"+
		"\u0000\u0000\u0000\u0159\u0157\u0001\u0000\u0000\u0000\u0159\u0158\u0001"+
		"\u0000\u0000\u0000\u015a\u0019\u0001\u0000\u0000\u0000\u015b\u0164\u0003"+
		"L&\u0000\u015c\u0163\u0005w\u0000\u0000\u015d\u0163\u0005t\u0000\u0000"+
		"\u015e\u0163\u0005v\u0000\u0000\u015f\u0163\u0005n\u0000\u0000\u0160\u0163"+
		"\u0005o\u0000\u0000\u0161\u0163\u0003\u00c8d\u0000\u0162\u015c\u0001\u0000"+
		"\u0000\u0000\u0162\u015d\u0001\u0000\u0000\u0000\u0162\u015e\u0001\u0000"+
		"\u0000\u0000\u0162\u015f\u0001\u0000\u0000\u0000\u0162\u0160\u0001\u0000"+
		"\u0000\u0000\u0162\u0161\u0001\u0000\u0000\u0000\u0163\u0166\u0001\u0000"+
		"\u0000\u0000\u0164\u0162\u0001\u0000\u0000\u0000\u0164\u0165\u0001\u0000"+
		"\u0000\u0000\u0165\u0167\u0001\u0000\u0000\u0000\u0166\u0164\u0001\u0000"+
		"\u0000\u0000\u0167\u016a\u0003\u00c2a\u0000\u0168\u0169\u0005\u000b\u0000"+
		"\u0000\u0169\u016b\u0003\u008cF\u0000\u016a\u0168\u0001\u0000\u0000\u0000"+
		"\u016a\u016b\u0001\u0000\u0000\u0000\u016b\u016c\u0001\u0000\u0000\u0000"+
		"\u016c\u016d\u0005\u0002\u0000\u0000\u016d\u001b\u0001\u0000\u0000\u0000"+
		"\u016e\u016f\u0003L&\u0000\u016f\u0170\u0005n\u0000\u0000\u0170\u0171"+
		"\u0003\u00c2a\u0000\u0171\u0172\u0005\u000b\u0000\u0000\u0172\u0173\u0003"+
		"\u008cF\u0000\u0173\u0174\u0005\u0002\u0000\u0000\u0174\u001d\u0001\u0000"+
		"\u0000\u0000\u0175\u0176\u0005\u0019\u0000\u0000\u0176\u0177\u0003\u00c2"+
		"a\u0000\u0177\u0178\u0003>\u001f\u0000\u0178\u0179\u0005\u0002\u0000\u0000"+
		"\u0179\u001f\u0001\u0000\u0000\u0000\u017a\u017b\u0005z\u0000\u0000\u017b"+
		"\u017c\u0003\u00c2a\u0000\u017c\u017d\u0005\u0016\u0000\u0000\u017d\u017e"+
		"\u0003\u008aE\u0000\u017e\u017f\u0005\u0002\u0000\u0000\u017f!\u0001\u0000"+
		"\u0000\u0000\u0180\u0181\u0005\u001a\u0000\u0000\u0181\u0182\u0003$\u0012"+
		"\u0000\u0182\u0185\u0005\u001b\u0000\u0000\u0183\u0186\u0005\u0003\u0000"+
		"\u0000\u0184\u0186\u0003L&\u0000\u0185\u0183\u0001\u0000\u0000\u0000\u0185"+
		"\u0184\u0001\u0000\u0000\u0000\u0186\u0188\u0001\u0000\u0000\u0000\u0187"+
		"\u0189\u0005|\u0000\u0000\u0188\u0187\u0001\u0000\u0000\u0000\u0188\u0189"+
		"\u0001\u0000\u0000\u0000\u0189\u018a\u0001\u0000\u0000\u0000\u018a\u018b"+
		"\u0005\u0002\u0000\u0000\u018b#\u0001\u0000\u0000\u0000\u018c\u0199\u0003"+
		"N\'\u0000\u018d\u018e\u0005\u000f\u0000\u0000\u018e\u0193\u0003&\u0013"+
		"\u0000\u018f\u0190\u0005\u0010\u0000\u0000\u0190\u0192\u0003&\u0013\u0000"+
		"\u0191\u018f\u0001\u0000\u0000\u0000\u0192\u0195\u0001\u0000\u0000\u0000"+
		"\u0193\u0191\u0001\u0000\u0000\u0000\u0193\u0194\u0001\u0000\u0000\u0000"+
		"\u0194\u0196\u0001\u0000\u0000\u0000\u0195\u0193\u0001\u0000\u0000\u0000"+
		"\u0196\u0197\u0005\u0011\u0000\u0000\u0197\u0199\u0001\u0000\u0000\u0000"+
		"\u0198\u018c\u0001\u0000\u0000\u0000\u0198\u018d\u0001\u0000\u0000\u0000"+
		"\u0199%\u0001\u0000\u0000\u0000\u019a\u019d\u0003N\'\u0000\u019b\u019c"+
		"\u0005\f\u0000\u0000\u019c\u019e\u0003(\u0014\u0000\u019d\u019b\u0001"+
		"\u0000\u0000\u0000\u019d\u019e\u0001\u0000\u0000\u0000\u019e\'\u0001\u0000"+
		"\u0000\u0000\u019f\u01a0\u0007\u0002\u0000\u0000\u01a0)\u0001\u0000\u0000"+
		"\u0000\u01a1\u01a2\u0005$\u0000\u0000\u01a2\u01a3\u0003\u00c2a\u0000\u01a3"+
		"\u01b3\u0005\u000f\u0000\u0000\u01a4\u01a9\u0003\u00c4b\u0000\u01a5\u01a6"+
		"\u0003J%\u0000\u01a6\u01a7\u0005\u0002\u0000\u0000\u01a7\u01a9\u0001\u0000"+
		"\u0000\u0000\u01a8\u01a4\u0001\u0000\u0000\u0000\u01a8\u01a5\u0001\u0000"+
		"\u0000\u0000\u01a9\u01b0\u0001\u0000\u0000\u0000\u01aa\u01af\u0003\u00c4"+
		"b\u0000\u01ab\u01ac\u0003J%\u0000\u01ac\u01ad\u0005\u0002\u0000\u0000"+
		"\u01ad\u01af\u0001\u0000\u0000\u0000\u01ae\u01aa\u0001\u0000\u0000\u0000"+
		"\u01ae\u01ab\u0001\u0000\u0000\u0000\u01af\u01b2\u0001\u0000\u0000\u0000"+
		"\u01b0\u01ae\u0001\u0000\u0000\u0000\u01b0\u01b1\u0001\u0000\u0000\u0000"+
		"\u01b1\u01b4\u0001\u0000\u0000\u0000\u01b2\u01b0\u0001\u0000\u0000\u0000"+
		"\u01b3\u01a8\u0001\u0000\u0000\u0000\u01b3\u01b4\u0001\u0000\u0000\u0000"+
		"\u01b4\u01b5\u0001\u0000\u0000\u0000\u01b5\u01b6\u0005\u0011\u0000\u0000"+
		"\u01b6+\u0001\u0000\u0000\u0000\u01b7\u01b8\u0005%\u0000\u0000\u01b8\u01ba"+
		"\u0003\u00c2a\u0000\u01b9\u01bb\u0003>\u001f\u0000\u01ba\u01b9\u0001\u0000"+
		"\u0000\u0000\u01ba\u01bb\u0001\u0000\u0000\u0000\u01bb\u01c0\u0001\u0000"+
		"\u0000\u0000\u01bc\u01bf\u0005x\u0000\u0000\u01bd\u01bf\u0003\u00c8d\u0000"+
		"\u01be\u01bc\u0001\u0000\u0000\u0000\u01be\u01bd\u0001\u0000\u0000\u0000"+
		"\u01bf\u01c2\u0001\u0000\u0000\u0000\u01c0\u01be\u0001\u0000\u0000\u0000"+
		"\u01c0\u01c1\u0001\u0000\u0000\u0000\u01c1\u01c5\u0001\u0000\u0000\u0000"+
		"\u01c2\u01c0\u0001\u0000\u0000\u0000\u01c3\u01c6\u0005\u0002\u0000\u0000"+
		"\u01c4\u01c6\u0003^/\u0000\u01c5\u01c3\u0001\u0000\u0000\u0000\u01c5\u01c4"+
		"\u0001\u0000\u0000\u0000\u01c6-\u0001\u0000\u0000\u0000\u01c7\u01cd\u0003"+
		"\u00c2a\u0000\u01c8\u01ca\u0005\u0017\u0000\u0000\u01c9\u01cb\u0003\u0090"+
		"H\u0000\u01ca\u01c9\u0001\u0000\u0000\u0000\u01ca\u01cb\u0001\u0000\u0000"+
		"\u0000\u01cb\u01cc\u0001\u0000\u0000\u0000\u01cc\u01ce\u0005\u0018\u0000"+
		"\u0000\u01cd\u01c8\u0001\u0000\u0000\u0000\u01cd\u01ce\u0001\u0000\u0000"+
		"\u0000\u01ce/\u0001\u0000\u0000\u0000\u01cf\u01d0\u00032\u0019\u0000\u01d0"+
		"\u01d1\u0003>\u001f\u0000\u01d1\u01d3\u00036\u001b\u0000\u01d2\u01d4\u0003"+
		"4\u001a\u0000\u01d3\u01d2\u0001\u0000\u0000\u0000\u01d3\u01d4\u0001\u0000"+
		"\u0000\u0000\u01d4\u01d7\u0001\u0000\u0000\u0000\u01d5\u01d8\u0005\u0002"+
		"\u0000\u0000\u01d6\u01d8\u0003^/\u0000\u01d7\u01d5\u0001\u0000\u0000\u0000"+
		"\u01d7\u01d6\u0001\u0000\u0000\u0000\u01d81\u0001\u0000\u0000\u0000\u01d9"+
		"\u01db\u0005&\u0000\u0000\u01da\u01dc\u0003\u00c2a\u0000\u01db\u01da\u0001"+
		"\u0000\u0000\u0000\u01db\u01dc\u0001\u0000\u0000\u0000\u01dc\u01e1\u0001"+
		"\u0000\u0000\u0000\u01dd\u01e1\u0005}\u0000\u0000\u01de\u01e1\u0005~\u0000"+
		"\u0000\u01df\u01e1\u0005\u007f\u0000\u0000\u01e0\u01d9\u0001\u0000\u0000"+
		"\u0000\u01e0\u01dd\u0001\u0000\u0000\u0000\u01e0\u01de\u0001\u0000\u0000"+
		"\u0000\u01e0\u01df\u0001\u0000\u0000\u0000\u01e13\u0001\u0000\u0000\u0000"+
		"\u01e2\u01e3\u0005\'\u0000\u0000\u01e3\u01e4\u0003>\u001f\u0000\u01e4"+
		"5\u0001\u0000\u0000\u0000\u01e5\u01ee\u0005r\u0000\u0000\u01e6\u01ee\u0005"+
		"w\u0000\u0000\u01e7\u01ee\u0005t\u0000\u0000\u01e8\u01ee\u0005v\u0000"+
		"\u0000\u01e9\u01ee\u0005x\u0000\u0000\u01ea\u01ee\u0003\\.\u0000\u01eb"+
		"\u01ee\u0003.\u0017\u0000\u01ec\u01ee\u0003\u00c8d\u0000\u01ed\u01e5\u0001"+
		"\u0000\u0000\u0000\u01ed\u01e6\u0001\u0000\u0000\u0000\u01ed\u01e7\u0001"+
		"\u0000\u0000\u0000\u01ed\u01e8\u0001\u0000\u0000\u0000\u01ed\u01e9\u0001"+
		"\u0000\u0000\u0000\u01ed\u01ea\u0001\u0000\u0000\u0000\u01ed\u01eb\u0001"+
		"\u0000\u0000\u0000\u01ed\u01ec\u0001\u0000\u0000\u0000\u01ee\u01f1\u0001"+
		"\u0000\u0000\u0000\u01ef\u01ed\u0001\u0000\u0000\u0000\u01ef\u01f0\u0001"+
		"\u0000\u0000\u0000\u01f07\u0001\u0000\u0000\u0000\u01f1\u01ef\u0001\u0000"+
		"\u0000\u0000\u01f2\u01f3\u0005(\u0000\u0000\u01f3\u01f4\u0003\u00c2a\u0000"+
		"\u01f4\u01f6\u0003B!\u0000\u01f5\u01f7\u0005l\u0000\u0000\u01f6\u01f5"+
		"\u0001\u0000\u0000\u0000\u01f6\u01f7\u0001\u0000\u0000\u0000\u01f7\u01f8"+
		"\u0001\u0000\u0000\u0000\u01f8\u01f9\u0005\u0002\u0000\u0000\u01f99\u0001"+
		"\u0000\u0000\u0000\u01fa\u01fb\u0003\u00c2a\u0000\u01fb;\u0001\u0000\u0000"+
		"\u0000\u01fc\u01fd\u0005)\u0000\u0000\u01fd\u01fe\u0003\u00c2a\u0000\u01fe"+
		"\u0200\u0005\u000f\u0000\u0000\u01ff\u0201\u0003:\u001d\u0000\u0200\u01ff"+
		"\u0001\u0000\u0000\u0000\u0200\u0201\u0001\u0000\u0000\u0000\u0201\u0209"+
		"\u0001\u0000\u0000\u0000\u0202\u0204\u0005\u0010\u0000\u0000\u0203\u0205"+
		"\u0003\u00c4b\u0000\u0204\u0203\u0001\u0000\u0000\u0000\u0204\u0205\u0001"+
		"\u0000\u0000\u0000\u0205\u0206\u0001\u0000\u0000\u0000\u0206\u0208\u0003"+
		":\u001d\u0000\u0207\u0202\u0001\u0000\u0000\u0000\u0208\u020b\u0001\u0000"+
		"\u0000\u0000\u0209\u0207\u0001\u0000\u0000\u0000\u0209\u020a\u0001\u0000"+
		"\u0000\u0000\u020a\u020c\u0001\u0000\u0000\u0000\u020b\u0209\u0001\u0000"+
		"\u0000\u0000\u020c\u020d\u0005\u0011\u0000\u0000\u020d=\u0001\u0000\u0000"+
		"\u0000\u020e\u021d\u0005\u0017\u0000\u0000\u020f\u0211\u0003\u00c4b\u0000"+
		"\u0210\u020f\u0001\u0000\u0000\u0000\u0210\u0211\u0001\u0000\u0000\u0000"+
		"\u0211\u0212\u0001\u0000\u0000\u0000\u0212\u021a\u0003@ \u0000\u0213\u0215"+
		"\u0005\u0010\u0000\u0000\u0214\u0216\u0003\u00c4b\u0000\u0215\u0214\u0001"+
		"\u0000\u0000\u0000\u0215\u0216\u0001\u0000\u0000\u0000\u0216\u0217\u0001"+
		"\u0000\u0000\u0000\u0217\u0219\u0003@ \u0000\u0218\u0213\u0001\u0000\u0000"+
		"\u0000\u0219\u021c\u0001\u0000\u0000\u0000\u021a\u0218\u0001\u0000\u0000"+
		"\u0000\u021a\u021b\u0001\u0000\u0000\u0000\u021b\u021e\u0001\u0000\u0000"+
		"\u0000\u021c\u021a\u0001\u0000\u0000\u0000\u021d\u0210\u0001\u0000\u0000"+
		"\u0000\u021d\u021e\u0001\u0000\u0000\u0000\u021e\u021f\u0001\u0000\u0000"+
		"\u0000\u021f\u0220\u0005\u0018\u0000\u0000\u0220?\u0001\u0000\u0000\u0000"+
		"\u0221\u0223\u0003L&\u0000\u0222\u0224\u0003Z-\u0000\u0223\u0222\u0001"+
		"\u0000\u0000\u0000\u0223\u0224\u0001\u0000\u0000\u0000\u0224\u0226\u0001"+
		"\u0000\u0000\u0000\u0225\u0227\u0003\u00c2a\u0000\u0226\u0225\u0001\u0000"+
		"\u0000\u0000\u0226\u0227\u0001\u0000\u0000\u0000\u0227A\u0001\u0000\u0000"+
		"\u0000\u0228\u0231\u0005\u0017\u0000\u0000\u0229\u022e\u0003D\"\u0000"+
		"\u022a\u022b\u0005\u0010\u0000\u0000\u022b\u022d\u0003D\"\u0000\u022c"+
		"\u022a\u0001\u0000\u0000\u0000\u022d\u0230\u0001\u0000\u0000\u0000\u022e"+
		"\u022c\u0001\u0000\u0000\u0000\u022e\u022f\u0001\u0000\u0000\u0000\u022f"+
		"\u0232\u0001\u0000\u0000\u0000\u0230\u022e\u0001\u0000\u0000\u0000\u0231"+
		"\u0229\u0001\u0000\u0000\u0000\u0231\u0232\u0001\u0000\u0000\u0000\u0232"+
		"\u0233\u0001\u0000\u0000\u0000\u0233\u0234\u0005\u0018\u0000\u0000\u0234"+
		"C\u0001\u0000\u0000\u0000\u0235\u0237\u0003L&\u0000\u0236\u0238\u0005"+
		"s\u0000\u0000\u0237\u0236\u0001\u0000\u0000\u0000\u0237\u0238\u0001\u0000"+
		"\u0000\u0000\u0238\u023a\u0001\u0000\u0000\u0000\u0239\u023b\u0003\u00c2"+
		"a\u0000\u023a\u0239\u0001\u0000\u0000\u0000\u023a\u023b\u0001\u0000\u0000"+
		"\u0000\u023bE\u0001\u0000\u0000\u0000\u023c\u0245\u0005\u0017\u0000\u0000"+
		"\u023d\u0242\u0003H$\u0000\u023e\u023f\u0005\u0010\u0000\u0000\u023f\u0241"+
		"\u0003H$\u0000\u0240\u023e\u0001\u0000\u0000\u0000\u0241\u0244\u0001\u0000"+
		"\u0000\u0000\u0242\u0240\u0001\u0000\u0000\u0000\u0242\u0243\u0001\u0000"+
		"\u0000\u0000\u0243\u0246\u0001\u0000\u0000\u0000\u0244\u0242\u0001\u0000"+
		"\u0000\u0000\u0245\u023d\u0001\u0000\u0000\u0000\u0245\u0246\u0001\u0000"+
		"\u0000\u0000\u0246\u0247\u0001\u0000\u0000\u0000\u0247\u0248\u0005\u0018"+
		"\u0000\u0000\u0248G\u0001\u0000\u0000\u0000\u0249\u024b\u0003L&\u0000"+
		"\u024a\u024c\u0003Z-\u0000\u024b\u024a\u0001\u0000\u0000\u0000\u024b\u024c"+
		"\u0001\u0000\u0000\u0000\u024cI\u0001\u0000\u0000\u0000\u024d\u024f\u0003"+
		"L&\u0000\u024e\u0250\u0003Z-\u0000\u024f\u024e\u0001\u0000\u0000\u0000"+
		"\u024f\u0250\u0001\u0000\u0000\u0000\u0250\u0251\u0001\u0000\u0000\u0000"+
		"\u0251\u0252\u0003\u00c2a\u0000\u0252K\u0001\u0000\u0000\u0000\u0253\u0254"+
		"\u0006&\uffff\uffff\u0000\u0254\u025b\u0003\u008aE\u0000\u0255\u025b\u0003"+
		"N\'\u0000\u0256\u025b\u0003R)\u0000\u0257\u025b\u0003X,\u0000\u0258\u0259"+
		"\u0005,\u0000\u0000\u0259\u025b\u0005u\u0000\u0000\u025a\u0253\u0001\u0000"+
		"\u0000\u0000\u025a\u0255\u0001\u0000\u0000\u0000\u025a\u0256\u0001\u0000"+
		"\u0000\u0000\u025a\u0257\u0001\u0000\u0000\u0000\u025a\u0258\u0001\u0000"+
		"\u0000\u0000\u025b\u0264\u0001\u0000\u0000\u0000\u025c\u025d\n\u0003\u0000"+
		"\u0000\u025d\u025f\u0005*\u0000\u0000\u025e\u0260\u0003\u008cF\u0000\u025f"+
		"\u025e\u0001\u0000\u0000\u0000\u025f\u0260\u0001\u0000\u0000\u0000\u0260"+
		"\u0261\u0001\u0000\u0000\u0000\u0261\u0263\u0005+\u0000\u0000\u0262\u025c"+
		"\u0001\u0000\u0000\u0000\u0263\u0266\u0001\u0000\u0000\u0000\u0264\u0262"+
		"\u0001\u0000\u0000\u0000\u0264\u0265\u0001\u0000\u0000\u0000\u0265M\u0001"+
		"\u0000\u0000\u0000\u0266\u0264\u0001\u0000\u0000\u0000\u0267\u026c\u0003"+
		"\u00c2a\u0000\u0268\u0269\u0005-\u0000\u0000\u0269\u026b\u0003\u00c2a"+
		"\u0000\u026a\u0268\u0001\u0000\u0000\u0000\u026b\u026e\u0001\u0000\u0000"+
		"\u0000\u026c\u026a\u0001\u0000\u0000\u0000\u026c\u026d\u0001\u0000\u0000"+
		"\u0000\u026dO\u0001\u0000\u0000\u0000\u026e\u026c\u0001\u0000\u0000\u0000"+
		"\u026f\u0272\u0003\u008aE\u0000\u0270\u0272\u0003N\'\u0000\u0271\u026f"+
		"\u0001\u0000\u0000\u0000\u0271\u0270\u0001\u0000\u0000\u0000\u0272Q\u0001"+
		"\u0000\u0000\u0000\u0273\u0274\u0005.\u0000\u0000\u0274\u0275\u0005\u0017"+
		"\u0000\u0000\u0275\u0277\u0003P(\u0000\u0276\u0278\u0003T*\u0000\u0277"+
		"\u0276\u0001\u0000\u0000\u0000\u0277\u0278\u0001\u0000\u0000\u0000\u0278"+
		"\u0279\u0001\u0000\u0000\u0000\u0279\u027a\u0005/\u0000\u0000\u027a\u027c"+
		"\u0003L&\u0000\u027b\u027d\u0003V+\u0000\u027c\u027b\u0001\u0000\u0000"+
		"\u0000\u027c\u027d\u0001\u0000\u0000\u0000\u027d\u027e\u0001\u0000\u0000"+
		"\u0000\u027e\u027f\u0005\u0018\u0000\u0000\u027fS\u0001\u0000\u0000\u0000"+
		"\u0280\u0281\u0003\u00c2a\u0000\u0281U\u0001\u0000\u0000\u0000\u0282\u0283"+
		"\u0003\u00c2a\u0000\u0283W\u0001\u0000\u0000\u0000\u0284\u0285\u0005&"+
		"\u0000\u0000\u0285\u028b\u0003F#\u0000\u0286\u028a\u0005t\u0000\u0000"+
		"\u0287\u028a\u0005r\u0000\u0000\u0288\u028a\u0003\\.\u0000\u0289\u0286"+
		"\u0001\u0000\u0000\u0000\u0289\u0287\u0001\u0000\u0000\u0000\u0289\u0288"+
		"\u0001\u0000\u0000\u0000\u028a\u028d\u0001\u0000\u0000\u0000\u028b\u0289"+
		"\u0001\u0000\u0000\u0000\u028b\u028c\u0001\u0000\u0000\u0000\u028c\u0290"+
		"\u0001\u0000\u0000\u0000\u028d\u028b\u0001\u0000\u0000\u0000\u028e\u028f"+
		"\u0005\'\u0000\u0000\u028f\u0291\u0003F#\u0000\u0290\u028e\u0001\u0000"+
		"\u0000\u0000\u0290\u0291\u0001\u0000\u0000\u0000\u0291Y\u0001\u0000\u0000"+
		"\u0000\u0292\u0293\u0007\u0003\u0000\u0000\u0293[\u0001\u0000\u0000\u0000"+
		"\u0294\u0295\u0007\u0004\u0000\u0000\u0295]\u0001\u0000\u0000\u0000\u0296"+
		"\u029a\u0005\u000f\u0000\u0000\u0297\u0299\u0003`0\u0000\u0298\u0297\u0001"+
		"\u0000\u0000\u0000\u0299\u029c\u0001\u0000\u0000\u0000\u029a\u0298\u0001"+
		"\u0000\u0000\u0000\u029a\u029b\u0001\u0000\u0000\u0000\u029b\u029d\u0001"+
		"\u0000\u0000\u0000\u029c\u029a\u0001\u0000\u0000\u0000\u029d\u029e\u0005"+
		"\u0011\u0000\u0000\u029e_\u0001\u0000\u0000\u0000\u029f\u02b0\u0003\u00c4"+
		"b\u0000\u02a0\u02b0\u0003d2\u0000\u02a1\u02b0\u0003f3\u0000\u02a2\u02b0"+
		"\u0003j5\u0000\u02a3\u02b0\u0003p8\u0000\u02a4\u02b0\u0003^/\u0000\u02a5"+
		"\u02b0\u0003r9\u0000\u02a6\u02b0\u0003v;\u0000\u02a7\u02b0\u0003x<\u0000"+
		"\u02a8\u02b0\u0003z=\u0000\u02a9\u02b0\u0003|>\u0000\u02aa\u02b0\u0003"+
		"~?\u0000\u02ab\u02b0\u0003\u0080@\u0000\u02ac\u02b0\u0003l6\u0000\u02ad"+
		"\u02b0\u0003n7\u0000\u02ae\u02b0\u0003\u0082A\u0000\u02af\u029f\u0001"+
		"\u0000\u0000\u0000\u02af\u02a0\u0001\u0000\u0000\u0000\u02af\u02a1\u0001"+
		"\u0000\u0000\u0000\u02af\u02a2\u0001\u0000\u0000\u0000\u02af\u02a3\u0001"+
		"\u0000\u0000\u0000\u02af\u02a4\u0001\u0000\u0000\u0000\u02af\u02a5\u0001"+
		"\u0000\u0000\u0000\u02af\u02a6\u0001\u0000\u0000\u0000\u02af\u02a7\u0001"+
		"\u0000\u0000\u0000\u02af\u02a8\u0001\u0000\u0000\u0000\u02af\u02a9\u0001"+
		"\u0000\u0000\u0000\u02af\u02aa\u0001\u0000\u0000\u0000\u02af\u02ab\u0001"+
		"\u0000\u0000\u0000\u02af\u02ac\u0001\u0000\u0000\u0000\u02af\u02ad\u0001"+
		"\u0000\u0000\u0000\u02af\u02ae\u0001\u0000\u0000\u0000\u02b0a\u0001\u0000"+
		"\u0000\u0000\u02b1\u02b2\u0003\u008cF\u0000\u02b2\u02b3\u0005\u0002\u0000"+
		"\u0000\u02b3c\u0001\u0000\u0000\u0000\u02b4\u02b5\u00053\u0000\u0000\u02b5"+
		"\u02b6\u0005\u0017\u0000\u0000\u02b6\u02b7\u0003\u008cF\u0000\u02b7\u02b8"+
		"\u0005\u0018\u0000\u0000\u02b8\u02bb\u0003`0\u0000\u02b9\u02ba\u00054"+
		"\u0000\u0000\u02ba\u02bc\u0003`0\u0000\u02bb\u02b9\u0001\u0000\u0000\u0000"+
		"\u02bb\u02bc\u0001\u0000\u0000\u0000\u02bce\u0001\u0000\u0000\u0000\u02bd"+
		"\u02be\u00055\u0000\u0000\u02be\u02c0\u0003\u008cF\u0000\u02bf\u02c1\u0003"+
		"4\u001a\u0000\u02c0\u02bf\u0001\u0000\u0000\u0000\u02c0\u02c1\u0001\u0000"+
		"\u0000\u0000\u02c1\u02c2\u0001\u0000\u0000\u0000\u02c2\u02c4\u0003^/\u0000"+
		"\u02c3\u02c5\u0003h4\u0000\u02c4\u02c3\u0001\u0000\u0000\u0000\u02c5\u02c6"+
		"\u0001\u0000\u0000\u0000\u02c6\u02c4\u0001\u0000\u0000\u0000\u02c6\u02c7"+
		"\u0001\u0000\u0000\u0000\u02c7g\u0001\u0000\u0000\u0000\u02c8\u02cd\u0005"+
		"6\u0000\u0000\u02c9\u02cb\u0003\u00c2a\u0000\u02ca\u02c9\u0001\u0000\u0000"+
		"\u0000\u02ca\u02cb\u0001\u0000\u0000\u0000\u02cb\u02cc\u0001\u0000\u0000"+
		"\u0000\u02cc\u02ce\u0003>\u001f\u0000\u02cd\u02ca\u0001\u0000\u0000\u0000"+
		"\u02cd\u02ce\u0001\u0000\u0000\u0000\u02ce\u02cf\u0001\u0000\u0000\u0000"+
		"\u02cf\u02d0\u0003^/\u0000\u02d0i\u0001\u0000\u0000\u0000\u02d1\u02d2"+
		"\u00057\u0000\u0000\u02d2\u02d3\u0005\u0017\u0000\u0000\u02d3\u02d4\u0003"+
		"\u008cF\u0000\u02d4\u02d5\u0005\u0018\u0000\u0000\u02d5\u02d6\u0003`0"+
		"\u0000\u02d6k\u0001\u0000\u0000\u0000\u02d7\u02da\u0003\u0084B\u0000\u02d8"+
		"\u02da\u0003b1\u0000\u02d9\u02d7\u0001\u0000\u0000\u0000\u02d9\u02d8\u0001"+
		"\u0000\u0000\u0000\u02dam\u0001\u0000\u0000\u0000\u02db\u02dc\u00058\u0000"+
		"\u0000\u02dc\u02dd\u0003^/\u0000\u02ddo\u0001\u0000\u0000\u0000\u02de"+
		"\u02df\u0005\u001b\u0000\u0000\u02df\u02e2\u0005\u0017\u0000\u0000\u02e0"+
		"\u02e3\u0003l6\u0000\u02e1\u02e3\u0005\u0002\u0000\u0000\u02e2\u02e0\u0001"+
		"\u0000\u0000\u0000\u02e2\u02e1\u0001\u0000\u0000\u0000\u02e3\u02e6\u0001"+
		"\u0000\u0000\u0000\u02e4\u02e7\u0003b1\u0000\u02e5\u02e7\u0005\u0002\u0000"+
		"\u0000\u02e6\u02e4\u0001\u0000\u0000\u0000\u02e6\u02e5\u0001\u0000\u0000"+
		"\u0000\u02e7\u02e9\u0001\u0000\u0000\u0000\u02e8\u02ea\u0003\u008cF\u0000"+
		"\u02e9\u02e8\u0001\u0000\u0000\u0000\u02e9\u02ea\u0001\u0000\u0000\u0000"+
		"\u02ea\u02eb\u0001\u0000\u0000\u0000\u02eb\u02ec\u0005\u0018\u0000\u0000"+
		"\u02ec\u02ed\u0003`0\u0000\u02edq\u0001\u0000\u0000\u0000\u02ee\u02f0"+
		"\u00059\u0000\u0000\u02ef\u02f1\u0005\u0081\u0000\u0000\u02f0\u02ef\u0001"+
		"\u0000\u0000\u0000\u02f0\u02f1\u0001\u0000\u0000\u0000\u02f1\u02f6\u0001"+
		"\u0000\u0000\u0000\u02f2\u02f3\u0005\u0017\u0000\u0000\u02f3\u02f4\u0003"+
		"t:\u0000\u02f4\u02f5\u0005\u0018\u0000\u0000\u02f5\u02f7\u0001\u0000\u0000"+
		"\u0000\u02f6\u02f2\u0001\u0000\u0000\u0000\u02f6\u02f7\u0001\u0000\u0000"+
		"\u0000\u02f7\u02f8\u0001\u0000\u0000\u0000\u02f8\u02f9\u0003\u009aM\u0000"+
		"\u02f9s\u0001\u0000\u0000\u0000\u02fa\u02fb\u0003\u00cae\u0000\u02fbu"+
		"\u0001\u0000\u0000\u0000\u02fc\u02fd\u0005:\u0000\u0000\u02fd\u02fe\u0003"+
		"`0\u0000\u02fe\u02ff\u00057\u0000\u0000\u02ff\u0300\u0005\u0017\u0000"+
		"\u0000\u0300\u0301\u0003\u008cF\u0000\u0301\u0302\u0005\u0018\u0000\u0000"+
		"\u0302\u0303\u0005\u0002\u0000\u0000\u0303w\u0001\u0000\u0000\u0000\u0304"+
		"\u0305\u0005p\u0000\u0000\u0305\u0306\u0005\u0002\u0000\u0000\u0306y\u0001"+
		"\u0000\u0000\u0000\u0307\u0308\u0005m\u0000\u0000\u0308\u0309\u0005\u0002"+
		"\u0000\u0000\u0309{\u0001\u0000\u0000\u0000\u030a\u030c\u0005;\u0000\u0000"+
		"\u030b\u030d\u0003\u008cF\u0000\u030c\u030b\u0001\u0000\u0000\u0000\u030c"+
		"\u030d\u0001\u0000\u0000\u0000\u030d\u030e\u0001\u0000\u0000\u0000\u030e"+
		"\u030f\u0005\u0002\u0000\u0000\u030f}\u0001\u0000\u0000\u0000\u0310\u0311"+
		"\u0005<\u0000\u0000\u0311\u0312\u0005\u0002\u0000\u0000\u0312\u007f\u0001"+
		"\u0000\u0000\u0000\u0313\u0314\u0005=\u0000\u0000\u0314\u0315\u0003\u0098"+
		"L\u0000\u0315\u0316\u0005\u0002\u0000\u0000\u0316\u0081\u0001\u0000\u0000"+
		"\u0000\u0317\u0318\u0005>\u0000\u0000\u0318\u0319\u0003\u0098L\u0000\u0319"+
		"\u031a\u0005\u0002\u0000\u0000\u031a\u0083\u0001\u0000\u0000\u0000\u031b"+
		"\u031c\u0005?\u0000\u0000\u031c\u0323\u0003\u0088D\u0000\u031d\u0323\u0003"+
		"J%\u0000\u031e\u031f\u0005\u0017\u0000\u0000\u031f\u0320\u0003\u0086C"+
		"\u0000\u0320\u0321\u0005\u0018\u0000\u0000\u0321\u0323\u0001\u0000\u0000"+
		"\u0000\u0322\u031b\u0001\u0000\u0000\u0000\u0322\u031d\u0001\u0000\u0000"+
		"\u0000\u0322\u031e\u0001\u0000\u0000\u0000\u0323\u0326\u0001\u0000\u0000"+
		"\u0000\u0324\u0325\u0005\u000b\u0000\u0000\u0325\u0327\u0003\u008cF\u0000"+
		"\u0326\u0324\u0001\u0000\u0000\u0000\u0326\u0327\u0001\u0000\u0000\u0000"+
		"\u0327\u0328\u0001\u0000\u0000\u0000\u0328\u0329\u0005\u0002\u0000\u0000"+
		"\u0329\u0085\u0001\u0000\u0000\u0000\u032a\u032c\u0003J%\u0000\u032b\u032a"+
		"\u0001\u0000\u0000\u0000\u032b\u032c\u0001\u0000\u0000\u0000\u032c\u0333"+
		"\u0001\u0000\u0000\u0000\u032d\u032f\u0005\u0010\u0000\u0000\u032e\u0330"+
		"\u0003J%\u0000\u032f\u032e\u0001\u0000\u0000\u0000\u032f\u0330\u0001\u0000"+
		"\u0000\u0000\u0330\u0332\u0001\u0000\u0000\u0000\u0331\u032d\u0001\u0000"+
		"\u0000\u0000\u0332\u0335\u0001\u0000\u0000\u0000\u0333\u0331\u0001\u0000"+
		"\u0000\u0000\u0333\u0334\u0001\u0000\u0000\u0000\u0334\u0087\u0001\u0000"+
		"\u0000\u0000\u0335\u0333\u0001\u0000\u0000\u0000\u0336\u033d\u0005\u0017"+
		"\u0000\u0000\u0337\u0339\u0003\u00c2a\u0000\u0338\u0337\u0001\u0000\u0000"+
		"\u0000\u0338\u0339\u0001\u0000\u0000\u0000\u0339\u033a\u0001\u0000\u0000"+
		"\u0000\u033a\u033c\u0005\u0010\u0000\u0000\u033b\u0338\u0001\u0000\u0000"+
		"\u0000\u033c\u033f\u0001\u0000\u0000\u0000\u033d\u033b\u0001\u0000\u0000"+
		"\u0000\u033d\u033e\u0001\u0000\u0000\u0000\u033e\u0341\u0001\u0000\u0000"+
		"\u0000\u033f\u033d\u0001\u0000\u0000\u0000\u0340\u0342\u0003\u00c2a\u0000"+
		"\u0341\u0340\u0001\u0000\u0000\u0000\u0341\u0342\u0001\u0000\u0000\u0000"+
		"\u0342\u0343\u0001\u0000\u0000\u0000\u0343\u0344\u0005\u0018\u0000\u0000"+
		"\u0344\u0089\u0001\u0000\u0000\u0000\u0345\u0346\u0007\u0005\u0000\u0000"+
		"\u0346\u008b\u0001\u0000\u0000\u0000\u0347\u0348\u0006F\uffff\uffff\u0000"+
		"\u0348\u0349\u0005E\u0000\u0000\u0349\u035a\u0003L&\u0000\u034a\u034b"+
		"\u0005\u0017\u0000\u0000\u034b\u034c\u0003\u008cF\u0000\u034c\u034d\u0005"+
		"\u0018\u0000\u0000\u034d\u035a\u0001\u0000\u0000\u0000\u034e\u034f\u0007"+
		"\u0006\u0000\u0000\u034f\u035a\u0003\u008cF\u0013\u0350\u0351\u0007\u0007"+
		"\u0000\u0000\u0351\u035a\u0003\u008cF\u0012\u0352\u0353\u0005G\u0000\u0000"+
		"\u0353\u035a\u0003\u008cF\u0011\u0354\u0355\u0005H\u0000\u0000\u0355\u035a"+
		"\u0003\u008cF\u0010\u0356\u0357\u0005\u0006\u0000\u0000\u0357\u035a\u0003"+
		"\u008cF\u000f\u0358\u035a\u0003\u008eG\u0000\u0359\u0347\u0001\u0000\u0000"+
		"\u0000\u0359\u034a\u0001\u0000\u0000\u0000\u0359\u034e\u0001\u0000\u0000"+
		"\u0000\u0359\u0350\u0001\u0000\u0000\u0000\u0359\u0352\u0001\u0000\u0000"+
		"\u0000\u0359\u0354\u0001\u0000\u0000\u0000\u0359\u0356\u0001\u0000\u0000"+
		"\u0000\u0359\u0358\u0001\u0000\u0000\u0000\u035a\u03a5\u0001\u0000\u0000"+
		"\u0000\u035b\u035c\n\u000e\u0000\u0000\u035c\u035d\u0005I\u0000\u0000"+
		"\u035d\u03a4\u0003\u008cF\u000f\u035e\u035f\n\r\u0000\u0000\u035f\u0360"+
		"\u0007\b\u0000\u0000\u0360\u03a4\u0003\u008cF\u000e\u0361\u0362\n\f\u0000"+
		"\u0000\u0362\u0363\u0007\u0007\u0000\u0000\u0363\u03a4\u0003\u008cF\r"+
		"\u0364\u0365\n\u000b\u0000\u0000\u0365\u0366\u0007\t\u0000\u0000\u0366"+
		"\u03a4\u0003\u008cF\f\u0367\u0368\n\n\u0000\u0000\u0368\u0369\u0005\u001d"+
		"\u0000\u0000\u0369\u03a4\u0003\u008cF\u000b\u036a\u036b\n\t\u0000\u0000"+
		"\u036b\u036c\u0005\u0005\u0000\u0000\u036c\u03a4\u0003\u008cF\n\u036d"+
		"\u036e\n\b\u0000\u0000\u036e\u036f\u0005\u001c\u0000\u0000\u036f\u03a4"+
		"\u0003\u008cF\t\u0370\u0371\n\u0007\u0000\u0000\u0371\u0372\u0007\n\u0000"+
		"\u0000\u0372\u03a4\u0003\u008cF\b\u0373\u0374\n\u0006\u0000\u0000\u0374"+
		"\u0375\u0007\u000b\u0000\u0000\u0375\u03a4\u0003\u008cF\u0007\u0376\u0377"+
		"\n\u0005\u0000\u0000\u0377\u0378\u0005L\u0000\u0000\u0378\u03a4\u0003"+
		"\u008cF\u0006\u0379\u037a\n\u0004\u0000\u0000\u037a\u037b\u0005\u0004"+
		"\u0000\u0000\u037b\u03a4\u0003\u008cF\u0005\u037c\u037d\n\u0003\u0000"+
		"\u0000\u037d\u037e\u0005M\u0000\u0000\u037e\u037f\u0003\u008cF\u0000\u037f"+
		"\u0380\u0005F\u0000\u0000\u0380\u0381\u0003\u008cF\u0004\u0381\u03a4\u0001"+
		"\u0000\u0000\u0000\u0382\u0383\n\u0002\u0000\u0000\u0383\u0384\u0007\f"+
		"\u0000\u0000\u0384\u03a4\u0003\u008cF\u0003\u0385\u0386\n\u001b\u0000"+
		"\u0000\u0386\u03a4\u0007\u0006\u0000\u0000\u0387\u0388\n\u0019\u0000\u0000"+
		"\u0388\u0389\u0005*\u0000\u0000\u0389\u038a\u0003\u008cF\u0000\u038a\u038b"+
		"\u0005+\u0000\u0000\u038b\u03a4\u0001\u0000\u0000\u0000\u038c\u038d\n"+
		"\u0018\u0000\u0000\u038d\u038f\u0005*\u0000\u0000\u038e\u0390\u0003\u008c"+
		"F\u0000\u038f\u038e\u0001\u0000\u0000\u0000\u038f\u0390\u0001\u0000\u0000"+
		"\u0000\u0390\u0391\u0001\u0000\u0000\u0000\u0391\u0393\u0005F\u0000\u0000"+
		"\u0392\u0394\u0003\u008cF\u0000\u0393\u0392\u0001\u0000\u0000\u0000\u0393"+
		"\u0394\u0001\u0000\u0000\u0000\u0394\u0395\u0001\u0000\u0000\u0000\u0395"+
		"\u03a4\u0005+\u0000\u0000\u0396\u0397\n\u0017\u0000\u0000\u0397\u0398"+
		"\u0005-\u0000\u0000\u0398\u03a4\u0003\u00c2a\u0000\u0399\u039a\n\u0016"+
		"\u0000\u0000\u039a\u039b\u0005\u000f\u0000\u0000\u039b\u039c\u0003\u0092"+
		"I\u0000\u039c\u039d\u0005\u0011\u0000\u0000\u039d\u03a4\u0001\u0000\u0000"+
		"\u0000\u039e\u039f\n\u0015\u0000\u0000\u039f\u03a0\u0005\u0017\u0000\u0000"+
		"\u03a0\u03a1\u0003\u0096K\u0000\u03a1\u03a2\u0005\u0018\u0000\u0000\u03a2"+
		"\u03a4\u0001\u0000\u0000\u0000\u03a3\u035b\u0001\u0000\u0000\u0000\u03a3"+
		"\u035e\u0001\u0000\u0000\u0000\u03a3\u0361\u0001\u0000\u0000\u0000\u03a3"+
		"\u0364\u0001\u0000\u0000\u0000\u03a3\u0367\u0001\u0000\u0000\u0000\u03a3"+
		"\u036a\u0001\u0000\u0000\u0000\u03a3\u036d\u0001\u0000\u0000\u0000\u03a3"+
		"\u0370\u0001\u0000\u0000\u0000\u03a3\u0373\u0001\u0000\u0000\u0000\u03a3"+
		"\u0376\u0001\u0000\u0000\u0000\u03a3\u0379\u0001\u0000\u0000\u0000\u03a3"+
		"\u037c\u0001\u0000\u0000\u0000\u03a3\u0382\u0001\u0000\u0000\u0000\u03a3"+
		"\u0385\u0001\u0000\u0000\u0000\u03a3\u0387\u0001\u0000\u0000\u0000\u03a3"+
		"\u038c\u0001\u0000\u0000\u0000\u03a3\u0396\u0001\u0000\u0000\u0000\u03a3"+
		"\u0399\u0001\u0000\u0000\u0000\u03a3\u039e\u0001\u0000\u0000\u0000\u03a4"+
		"\u03a7\u0001\u0000\u0000\u0000\u03a5\u03a3\u0001\u0000\u0000\u0000\u03a5"+
		"\u03a6\u0001\u0000\u0000\u0000\u03a6\u008d\u0001\u0000\u0000\u0000\u03a7"+
		"\u03a5\u0001\u0000\u0000\u0000\u03a8\u03b2\u0005f\u0000\u0000\u03a9\u03b2"+
		"\u0003\u00c0`\u0000\u03aa\u03b2\u0003\u00c6c\u0000\u03ab\u03b2\u0003\u00ca"+
		"e\u0000\u03ac\u03b2\u0003\u00c2a\u0000\u03ad\u03b2\u0005z\u0000\u0000"+
		"\u03ae\u03b2\u0005u\u0000\u0000\u03af\u03b2\u0003\u00be_\u0000\u03b0\u03b2"+
		"\u0003L&\u0000\u03b1\u03a8\u0001\u0000\u0000\u0000\u03b1\u03a9\u0001\u0000"+
		"\u0000\u0000\u03b1\u03aa\u0001\u0000\u0000\u0000\u03b1\u03ab\u0001\u0000"+
		"\u0000\u0000\u03b1\u03ac\u0001\u0000\u0000\u0000\u03b1\u03ad\u0001\u0000"+
		"\u0000\u0000\u03b1\u03ae\u0001\u0000\u0000\u0000\u03b1\u03af\u0001\u0000"+
		"\u0000\u0000\u03b1\u03b0\u0001\u0000\u0000\u0000\u03b2\u008f\u0001\u0000"+
		"\u0000\u0000\u03b3\u03b8\u0003\u008cF\u0000\u03b4\u03b5\u0005\u0010\u0000"+
		"\u0000\u03b5\u03b7\u0003\u008cF\u0000\u03b6\u03b4\u0001\u0000\u0000\u0000"+
		"\u03b7\u03ba\u0001\u0000\u0000\u0000\u03b8\u03b6\u0001\u0000\u0000\u0000"+
		"\u03b8\u03b9\u0001\u0000\u0000\u0000\u03b9\u0091\u0001\u0000\u0000\u0000"+
		"\u03ba\u03b8\u0001\u0000\u0000\u0000\u03bb\u03c0\u0003\u0094J\u0000\u03bc"+
		"\u03bd\u0005\u0010\u0000\u0000\u03bd\u03bf\u0003\u0094J\u0000\u03be\u03bc"+
		"\u0001\u0000\u0000\u0000\u03bf\u03c2\u0001\u0000\u0000\u0000\u03c0\u03be"+
		"\u0001\u0000\u0000\u0000\u03c0\u03c1\u0001\u0000\u0000\u0000\u03c1\u03c4"+
		"\u0001\u0000\u0000\u0000\u03c2\u03c0\u0001\u0000\u0000\u0000\u03c3\u03c5"+
		"\u0005\u0010\u0000\u0000\u03c4\u03c3\u0001\u0000\u0000\u0000\u03c4\u03c5"+
		"\u0001\u0000\u0000\u0000\u03c5\u0093\u0001\u0000\u0000\u0000\u03c6\u03c7"+
		"\u0003\u00c2a\u0000\u03c7\u03c8\u0005F\u0000\u0000\u03c8\u03c9\u0003\u008c"+
		"F\u0000\u03c9\u0095\u0001\u0000\u0000\u0000\u03ca\u03cc\u0005\u000f\u0000"+
		"\u0000\u03cb\u03cd\u0003\u0092I\u0000\u03cc\u03cb\u0001\u0000\u0000\u0000"+
		"\u03cc\u03cd\u0001\u0000\u0000\u0000\u03cd\u03ce\u0001\u0000\u0000\u0000"+
		"\u03ce\u03d3\u0005\u0011\u0000\u0000\u03cf\u03d1\u0003\u0090H\u0000\u03d0"+
		"\u03cf\u0001\u0000\u0000\u0000\u03d0\u03d1\u0001\u0000\u0000\u0000\u03d1"+
		"\u03d3\u0001\u0000\u0000\u0000\u03d2\u03ca\u0001\u0000\u0000\u0000\u03d2"+
		"\u03d0\u0001\u0000\u0000\u0000\u03d3\u0097\u0001\u0000\u0000\u0000\u03d4"+
		"\u03d5\u0003\u008cF\u0000\u03d5\u03d6\u0005\u0017\u0000\u0000\u03d6\u03d7"+
		"\u0003\u0096K\u0000\u03d7\u03d8\u0005\u0018\u0000\u0000\u03d8\u0099\u0001"+
		"\u0000\u0000\u0000\u03d9\u03dd\u0005\u000f\u0000\u0000\u03da\u03dc\u0003"+
		"\u009cN\u0000\u03db\u03da\u0001\u0000\u0000\u0000\u03dc\u03df\u0001\u0000"+
		"\u0000\u0000\u03dd\u03db\u0001\u0000\u0000\u0000\u03dd\u03de\u0001\u0000"+
		"\u0000\u0000\u03de\u03e0\u0001\u0000\u0000\u0000\u03df\u03dd\u0001\u0000"+
		"\u0000\u0000\u03e0\u03e1\u0005\u0011\u0000\u0000\u03e1\u009b\u0001\u0000"+
		"\u0000\u0000\u03e2\u03f5\u0003\u00c4b\u0000\u03e3\u03f5\u0003\u00c2a\u0000"+
		"\u03e4\u03f5\u0003\u009aM\u0000\u03e5\u03f5\u0003\u009eO\u0000\u03e6\u03f5"+
		"\u0003\u00a4R\u0000\u03e7\u03f5\u0003\u00a6S\u0000\u03e8\u03f5\u0003\u00ac"+
		"V\u0000\u03e9\u03f5\u0003\u00aeW\u0000\u03ea\u03f5\u0003\u00b0X\u0000"+
		"\u03eb\u03f5\u0003\u00b4Z\u0000\u03ec\u03f5\u0003\u00b8\\\u0000\u03ed"+
		"\u03f5\u0003\u00ba]\u0000\u03ee\u03f5\u0005m\u0000\u0000\u03ef\u03f5\u0005"+
		"p\u0000\u0000\u03f0\u03f5\u0005q\u0000\u0000\u03f1\u03f5\u0003\u00c0`"+
		"\u0000\u03f2\u03f5\u0003\u00cae\u0000\u03f3\u03f5\u0003\u00c6c\u0000\u03f4"+
		"\u03e2\u0001\u0000\u0000\u0000\u03f4\u03e3\u0001\u0000\u0000\u0000\u03f4"+
		"\u03e4\u0001\u0000\u0000\u0000\u03f4\u03e5\u0001\u0000\u0000\u0000\u03f4"+
		"\u03e6\u0001\u0000\u0000\u0000\u03f4\u03e7\u0001\u0000\u0000\u0000\u03f4"+
		"\u03e8\u0001\u0000\u0000\u0000\u03f4\u03e9\u0001\u0000\u0000\u0000\u03f4"+
		"\u03ea\u0001\u0000\u0000\u0000\u03f4\u03eb\u0001\u0000\u0000\u0000\u03f4"+
		"\u03ec\u0001\u0000\u0000\u0000\u03f4\u03ed\u0001\u0000\u0000\u0000\u03f4"+
		"\u03ee\u0001\u0000\u0000\u0000\u03f4\u03ef\u0001\u0000\u0000\u0000\u03f4"+
		"\u03f0\u0001\u0000\u0000\u0000\u03f4\u03f1\u0001\u0000\u0000\u0000\u03f4"+
		"\u03f2\u0001\u0000\u0000\u0000\u03f4\u03f3\u0001\u0000\u0000\u0000\u03f5"+
		"\u009d\u0001\u0000\u0000\u0000\u03f6\u03fa\u0003\u00a2Q\u0000\u03f7\u03fa"+
		"\u0003\u00bc^\u0000\u03f8\u03fa\u0003\u00a0P\u0000\u03f9\u03f6\u0001\u0000"+
		"\u0000\u0000\u03f9\u03f7\u0001\u0000\u0000\u0000\u03f9\u03f8\u0001\u0000"+
		"\u0000\u0000\u03fa\u009f\u0001\u0000\u0000\u0000\u03fb\u03fc\u0003\u00c2"+
		"a\u0000\u03fc\u03fd\u0005-\u0000\u0000\u03fd\u03fe\u0003\u00c2a\u0000"+
		"\u03fe\u00a1\u0001\u0000\u0000\u0000\u03ff\u0404\u0005;\u0000\u0000\u0400"+
		"\u0404\u0005,\u0000\u0000\u0401\u0404\u0005B\u0000\u0000\u0402\u0404\u0003"+
		"\u00c2a\u0000\u0403\u03ff\u0001\u0000\u0000\u0000\u0403\u0400\u0001\u0000"+
		"\u0000\u0000\u0403\u0401\u0001\u0000\u0000\u0000\u0403\u0402\u0001\u0000"+
		"\u0000\u0000\u0404\u0411\u0001\u0000\u0000\u0000\u0405\u0407\u0005\u0017"+
		"\u0000\u0000\u0406\u0408\u0003\u009eO\u0000\u0407\u0406\u0001\u0000\u0000"+
		"\u0000\u0407\u0408\u0001\u0000\u0000\u0000\u0408\u040d\u0001\u0000\u0000"+
		"\u0000\u0409\u040a\u0005\u0010\u0000\u0000\u040a\u040c\u0003\u009eO\u0000"+
		"\u040b\u0409\u0001\u0000\u0000\u0000\u040c\u040f\u0001\u0000\u0000\u0000"+
		"\u040d\u040b\u0001\u0000\u0000\u0000\u040d\u040e\u0001\u0000\u0000\u0000"+
		"\u040e\u0410\u0001\u0000\u0000\u0000\u040f\u040d\u0001\u0000\u0000\u0000"+
		"\u0410\u0412\u0005\u0018\u0000\u0000\u0411\u0405\u0001\u0000\u0000\u0000"+
		"\u0411\u0412\u0001\u0000\u0000\u0000\u0412\u00a3\u0001\u0000\u0000\u0000"+
		"\u0413\u0414\u0005X\u0000\u0000\u0414\u0417\u0003\u00a8T\u0000\u0415\u0416"+
		"\u0005Y\u0000\u0000\u0416\u0418\u0003\u009eO\u0000\u0417\u0415\u0001\u0000"+
		"\u0000\u0000\u0417\u0418\u0001\u0000\u0000\u0000\u0418\u00a5\u0001\u0000"+
		"\u0000\u0000\u0419\u041a\u0003\u00a8T\u0000\u041a\u041b\u0005Y\u0000\u0000"+
		"\u041b\u041c\u0003\u009eO\u0000\u041c\u00a7\u0001\u0000\u0000\u0000\u041d"+
		"\u0425\u0003\u00c2a\u0000\u041e\u0425\u0003\u00a0P\u0000\u041f\u0425\u0003"+
		"\u00aaU\u0000\u0420\u0421\u0005\u0017\u0000\u0000\u0421\u0422\u0003\u00aa"+
		"U\u0000\u0422\u0423\u0005\u0018\u0000\u0000\u0423\u0425\u0001\u0000\u0000"+
		"\u0000\u0424\u041d\u0001\u0000\u0000\u0000\u0424\u041e\u0001\u0000\u0000"+
		"\u0000\u0424\u041f\u0001\u0000\u0000\u0000\u0424\u0420\u0001\u0000\u0000"+
		"\u0000\u0425\u00a9\u0001\u0000\u0000\u0000\u0426\u042b\u0003\u00c2a\u0000"+
		"\u0427\u0428\u0005\u0010\u0000\u0000\u0428\u042a\u0003\u00c2a\u0000\u0429"+
		"\u0427\u0001\u0000\u0000\u0000\u042a\u042d\u0001\u0000\u0000\u0000\u042b"+
		"\u0429\u0001\u0000\u0000\u0000\u042b\u042c\u0001\u0000\u0000\u0000\u042c"+
		"\u00ab\u0001\u0000\u0000\u0000\u042d\u042b\u0001\u0000\u0000\u0000\u042e"+
		"\u042f\u0003\u009eO\u0000\u042f\u0430\u0005Z\u0000\u0000\u0430\u0431\u0003"+
		"\u00c2a\u0000\u0431\u00ad\u0001\u0000\u0000\u0000\u0432\u0433\u0003\u00c2"+
		"a\u0000\u0433\u0434\u0005F\u0000\u0000\u0434\u00af\u0001\u0000\u0000\u0000"+
		"\u0435\u0436\u0005[\u0000\u0000\u0436\u043a\u0003\u009eO\u0000\u0437\u0439"+
		"\u0003\u00b2Y\u0000\u0438\u0437\u0001\u0000\u0000\u0000\u0439\u043c\u0001"+
		"\u0000\u0000\u0000\u043a\u0438\u0001\u0000\u0000\u0000\u043a\u043b\u0001"+
		"\u0000\u0000\u0000\u043b\u00b1\u0001\u0000\u0000\u0000\u043c\u043a\u0001"+
		"\u0000\u0000\u0000\u043d\u043e\u0005\\\u0000\u0000\u043e\u043f\u0003\u00bc"+
		"^\u0000\u043f\u0440\u0003\u009aM\u0000\u0440\u0444\u0001\u0000\u0000\u0000"+
		"\u0441\u0442\u0005]\u0000\u0000\u0442\u0444\u0003\u009aM\u0000\u0443\u043d"+
		"\u0001\u0000\u0000\u0000\u0443\u0441\u0001\u0000\u0000\u0000\u0444\u00b3"+
		"\u0001\u0000\u0000\u0000\u0445\u0446\u0005&\u0000\u0000\u0446\u0447\u0003"+
		"\u00c2a\u0000\u0447\u0449\u0005\u0017\u0000\u0000\u0448\u044a\u0003\u00aa"+
		"U\u0000\u0449\u0448\u0001\u0000\u0000\u0000\u0449\u044a\u0001\u0000\u0000"+
		"\u0000\u044a\u044b\u0001\u0000\u0000\u0000\u044b\u044d\u0005\u0018\u0000"+
		"\u0000\u044c\u044e\u0003\u00b6[\u0000\u044d\u044c\u0001\u0000\u0000\u0000"+
		"\u044d\u044e\u0001\u0000\u0000\u0000\u044e\u044f\u0001\u0000\u0000\u0000"+
		"\u044f\u0450\u0003\u009aM\u0000\u0450\u00b5\u0001\u0000\u0000\u0000\u0451"+
		"\u0452\u0005^\u0000\u0000\u0452\u0453\u0003\u00aaU\u0000\u0453\u00b7\u0001"+
		"\u0000\u0000\u0000\u0454\u0457\u0005\u001b\u0000\u0000\u0455\u0458\u0003"+
		"\u009aM\u0000\u0456\u0458\u0003\u009eO\u0000\u0457\u0455\u0001\u0000\u0000"+
		"\u0000\u0457\u0456\u0001\u0000\u0000\u0000\u0458\u0459\u0001\u0000\u0000"+
		"\u0000\u0459\u045c\u0003\u009eO\u0000\u045a\u045d\u0003\u009aM\u0000\u045b"+
		"\u045d\u0003\u009eO\u0000\u045c\u045a\u0001\u0000\u0000\u0000\u045c\u045b"+
		"\u0001\u0000\u0000\u0000\u045d\u045e\u0001\u0000\u0000\u0000\u045e\u045f"+
		"\u0003\u009aM\u0000\u045f\u00b9\u0001\u0000\u0000\u0000\u0460\u0461\u0005"+
		"3\u0000\u0000\u0461\u0462\u0003\u009eO\u0000\u0462\u0463\u0003\u009aM"+
		"\u0000\u0463\u00bb\u0001\u0000\u0000\u0000\u0464\u046a\u0003\u00cae\u0000"+
		"\u0465\u046a\u0005g\u0000\u0000\u0466\u046a\u0005h\u0000\u0000\u0467\u046a"+
		"\u0003\u00c6c\u0000\u0468\u046a\u0005f\u0000\u0000\u0469\u0464\u0001\u0000"+
		"\u0000\u0000\u0469\u0465\u0001\u0000\u0000\u0000\u0469\u0466\u0001\u0000"+
		"\u0000\u0000\u0469\u0467\u0001\u0000\u0000\u0000\u0469\u0468\u0001\u0000"+
		"\u0000\u0000\u046a\u00bd\u0001\u0000\u0000\u0000\u046b\u046d\u0005\u0017"+
		"\u0000\u0000\u046c\u046e\u0003\u008cF\u0000\u046d\u046c\u0001\u0000\u0000"+
		"\u0000\u046d\u046e\u0001\u0000\u0000\u0000\u046e\u0475\u0001\u0000\u0000"+
		"\u0000\u046f\u0471\u0005\u0010\u0000\u0000\u0470\u0472\u0003\u008cF\u0000"+
		"\u0471\u0470\u0001\u0000\u0000\u0000\u0471\u0472\u0001\u0000\u0000\u0000"+
		"\u0472\u0474\u0001\u0000\u0000\u0000\u0473\u046f\u0001\u0000\u0000\u0000"+
		"\u0474\u0477\u0001\u0000\u0000\u0000\u0475\u0473\u0001\u0000\u0000\u0000"+
		"\u0475\u0476\u0001\u0000\u0000\u0000\u0476\u0478\u0001\u0000\u0000\u0000"+
		"\u0477\u0475\u0001\u0000\u0000\u0000\u0478\u0486\u0005\u0018\u0000\u0000"+
		"\u0479\u0482\u0005*\u0000\u0000\u047a\u047f\u0003\u008cF\u0000\u047b\u047c"+
		"\u0005\u0010\u0000\u0000\u047c\u047e\u0003\u008cF\u0000\u047d\u047b\u0001"+
		"\u0000\u0000\u0000\u047e\u0481\u0001\u0000\u0000\u0000\u047f\u047d\u0001"+
		"\u0000\u0000\u0000\u047f\u0480\u0001\u0000\u0000\u0000\u0480\u0483\u0001"+
		"\u0000\u0000\u0000\u0481\u047f\u0001\u0000\u0000\u0000\u0482\u047a\u0001"+
		"\u0000\u0000\u0000\u0482\u0483\u0001\u0000\u0000\u0000\u0483\u0484\u0001"+
		"\u0000\u0000\u0000\u0484\u0486\u0005+\u0000\u0000\u0485\u046b\u0001\u0000"+
		"\u0000\u0000\u0485\u0479\u0001\u0000\u0000\u0000\u0486\u00bf\u0001\u0000"+
		"\u0000\u0000\u0487\u0489\u0007\r\u0000\u0000\u0488\u048a\u0005i\u0000"+
		"\u0000\u0489\u0488\u0001\u0000\u0000\u0000\u0489\u048a\u0001\u0000\u0000"+
		"\u0000\u048a\u00c1\u0001\u0000\u0000\u0000\u048b\u048c\u0007\u000e\u0000"+
		"\u0000\u048c\u00c3\u0001\u0000\u0000\u0000\u048d\u048e\u0007\u000f\u0000"+
		"\u0000\u048e\u00c5\u0001\u0000\u0000\u0000\u048f\u0491\u0005j\u0000\u0000"+
		"\u0490\u048f\u0001\u0000\u0000\u0000\u0491\u0492\u0001\u0000\u0000\u0000"+
		"\u0492\u0490\u0001\u0000\u0000\u0000\u0492\u0493\u0001\u0000\u0000\u0000"+
		"\u0493\u00c7\u0001\u0000\u0000\u0000\u0494\u04a0\u0005`\u0000\u0000\u0495"+
		"\u0496\u0005\u0017\u0000\u0000\u0496\u049b\u0003N\'\u0000\u0497\u0498"+
		"\u0005\u0010\u0000\u0000\u0498\u049a\u0003N\'\u0000\u0499\u0497\u0001"+
		"\u0000\u0000\u0000\u049a\u049d\u0001\u0000\u0000\u0000\u049b\u0499\u0001"+
		"\u0000\u0000\u0000\u049b\u049c\u0001\u0000\u0000\u0000\u049c\u049e\u0001"+
		"\u0000\u0000\u0000\u049d\u049b\u0001\u0000\u0000\u0000\u049e\u049f\u0005"+
		"\u0018\u0000\u0000\u049f\u04a1\u0001\u0000\u0000\u0000\u04a0\u0495\u0001"+
		"\u0000\u0000\u0000\u04a0\u04a1\u0001\u0000\u0000\u0000\u04a1\u00c9\u0001"+
		"\u0000\u0000\u0000\u04a2\u04a4\u0005\u0081\u0000\u0000\u04a3\u04a2\u0001"+
		"\u0000\u0000\u0000\u04a4\u04a5\u0001\u0000\u0000\u0000\u04a5\u04a3\u0001"+
		"\u0000\u0000\u0000\u04a5\u04a6\u0001\u0000\u0000\u0000\u04a6\u00cb\u0001"+
		"\u0000\u0000\u0000\u0087\u00d8\u00da\u00e9\u00ed\u00f2\u00f8\u00fc\u00ff"+
		"\u0104\u010a\u0111\u0115\u0122\u012a\u012f\u0139\u013c\u0142\u014a\u014d"+
		"\u0159\u0162\u0164\u016a\u0185\u0188\u0193\u0198\u019d\u01a8\u01ae\u01b0"+
		"\u01b3\u01ba\u01be\u01c0\u01c5\u01ca\u01cd\u01d3\u01d7\u01db\u01e0\u01ed"+
		"\u01ef\u01f6\u0200\u0204\u0209\u0210\u0215\u021a\u021d\u0223\u0226\u022e"+
		"\u0231\u0237\u023a\u0242\u0245\u024b\u024f\u025a\u025f\u0264\u026c\u0271"+
		"\u0277\u027c\u0289\u028b\u0290\u029a\u02af\u02bb\u02c0\u02c6\u02ca\u02cd"+
		"\u02d9\u02e2\u02e6\u02e9\u02f0\u02f6\u030c\u0322\u0326\u032b\u032f\u0333"+
		"\u0338\u033d\u0341\u0359\u038f\u0393\u03a3\u03a5\u03b1\u03b8\u03c0\u03c4"+
		"\u03cc\u03d0\u03d2\u03dd\u03f4\u03f9\u0403\u0407\u040d\u0411\u0417\u0424"+
		"\u042b\u043a\u0443\u0449\u044d\u0457\u045c\u0469\u046d\u0471\u0475\u047f"+
		"\u0482\u0485\u0489\u0492\u049b\u04a0\u04a5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}