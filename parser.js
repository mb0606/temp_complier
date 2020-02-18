const fs = require("fs");
const ohm = require("ohm-js");
const {
    Program,
    Assignment,
    VarDeclaration,
    Print,
    Return,
    IfStmt,
    ForStmt,
    FuncDecStmt,
    WhileStmt,
    VarExpression,
    FieldVarExp,
    SubscriptedVarExp,
    Param,
    Call,
    AndOrExp,
    AddOpExp,
    MulOpExp,
    RelopExp,
    PowExp,
    PrefixPostfixExp,
    Paren
} = require('../ast')
const grammar = ohm.grammar(fs.readFileSync("grammar/Inkling.ohm"));

function arrayToNullable(a) {
    return a.length === 0 ? null : a[0];
}

const astGenerator = grammar.createSemantics().addOperation('ast', {
    Program(stmt) {
        const p = new Program(stmt.ast());
        return p;
    },
    SimpleStmt_return(_, e) {
        return new ReturnStatement(arrayToNullable(e.ast()));
    },
    // Block(open ,stmts, close) {
    //     return new Block(stmts.ast());
    // },

    IfStmt_ternary(trueTest, _1, test, _2, falseTest) {
        return new TernaryExpression(test.ast(), trueTest.ast(), falseTest.ast());
    },
    IfExpr__if(_1, _2, firstTest, _3, firstBlock, _4, _5, _6, moreTests, _7, moreBlocks, _8, lastBlock) {
        return new IfStmt([firstTest.ast(), ...moreTests.ast()],
            [firstBlock.ast(), ...moreBlocks.ast()],
            arrayToNullable(lastBlock.ast());
    },
    ForLoop(_1, id, _2, type, _3, exp, body) {
        return new ForStmt(id.ast(), type.ast(), exp.ast(), body.ast());
    },
    WhileLoop(_, _open, exp, _close, body) {
        return new WhileStmt(exp.ast(), body.ast());
    },

    FuncDec_function(_funcKeyword, id, _open, params, _close, type, body) {
        return new FuncDecStmt(id.ast(), type.ast(), exp.ast(), body.ast());
    },
    FuncDec_ArrowFuncDec(id, _isKeyword, _alwaysKeyword, _open, params, _close, returnType, _arrowSymbol, body) {
        return new FuncDecStmt(id.ast(), params.ast(), returnType.ast(), body.ast());
    },
    LetVarDeclaration(id, _isKeyword, type, exp) {
        return new VarDeclaration(id.ast(), type.ast(), exp.ast());
    },
    ConstVarDeclaration(id, _isKeyword, _alwaysKeyword, type, exp) {
        return new VarDeclaration(id.ast(), type.ast(), exp.ast())
    },
    FieldVarExp(id, _dotOperator, field) {
        return new FieldVarExp(id.ast(), field.ast());
    },
    SubscriptedVarExp(id, _open, key, _close) {
        return new SubscriptedVarExp(id.ast(), key.ast());
    },
    Param(id, _isKeyword, type) {
        return new Param(id.ast(), type.ast())
    },
    Call(callName, _1, args, _2) {
        return new Call(callName.ast(), args.ast());
    },
    Exp_or(left, op, right) {
        return new BinaryExpression(op.ast(), left.ast(), right.ast());
    },
    Exp_and(left, op, right) {
        return new BinaryExpression(op.ast(), left.ast(), right.ast());
    },
    Exp1_binary(left, op, right) {
        return new BinaryExpression(op.ast(), left.ast(), right.ast());
    },
    Exp2_binary(left, op, right) {
        return new BinaryExpression(op.ast(), left.ast(), right.ast());
    },
    Exp3_binary(left, op, right) {
        return new BinaryExpression(op.ast(), left.ast(), right.ast());
    },
    Pow(left, _powKeyword, right) {
        return new PowExp(_powKeyword.ast(), left.ast(), right.ast());
    },
    Exp5_prefix(op, operand) {
        return new PrefixExpression(op.ast(), operand.ast());
    },
    Exp5_postfix(operand, op) {
        return new PostfixExpression(operand.ast(), op.ast());
    },
    id(_1, _2) {
        return this.sourceString;
    },
    KeyValue(id, _, exp) {
        return new KeyValueExpression(id.ast(), exp.ast());
    },
    SimpleStmt_print(_displayKeyword, exp) {
        return SimpleStmt_Print(exp.ast());
    }
    // SimpleStmt_return(_gimmeKeyword, exp) {
    //     if (!exp.ast()) {
    //         return new Return();
    //     }
    //     return new Return(exp.ast());
    // }
});