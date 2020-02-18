class Program {
    constructor(stmt) {
        this.stmt = stmt;
    }
}

class Assignment {
    constructor(id, exp) {
        Object.assign(this, { id, exp });
    }
}

class VarDeclaration {
    constructor(id, type, exp) {
        Object.assign(this, { id, type, exp });
    }
}

class Print {
    constructor(exp) {
        Object.assign(this, { exp });
    }
}

class ReturnStatement {
    constructor(returnValue) {
        this.returnValue = returnValue;
    }
}

class IfStmt {
    constructor(tests, consequence, alt) {
        Object.assign(this, { test, consequence, alt)
    }
}


class ForStmt {
    constructor(id, type, exp, body) {
        Object.assign(this, { index, start, end, body });
    }
}

class FuncDecStmt {
    constructor(id, params, type, body) {
        Object.assign(this, { index, start, end, body });
    }
}

class WhileStmt {
    constructor(condition, body) {
        Object.assign(this, { condition, body });
    }
}

class FieldVarExp {
    constructor(id, field) {
        Object.assign(this, { id, field });

    }
}
class IdentifierExpression {
    constructor(id) {
        this.id = id;
    }
}

class SubscriptedVarExp {
    constructor(id, key) {
        Object.assign(this, { id, key });
    }
}


class Param {
    constructor(id, type) {
        Object.assign(this, { id, type });
    }
}

class Call {
    constructor(id, args) {
        Object.assign(this, { id, args });
    }
}


class BinaryExpression {
    constructor(op, left, right) {
        Object.assign(this, { op, left, right });
    }
}

class PowExp {
    constructor(left, right) {
        Object.assign(this, { left, right });
    }
}

class PrefixExpression {
    constructor(op, operand) {
        Object.assign(this, { op, operand });
    }
}
class PostfixExpression {
    constructor(operand, op) {
        Object.assign(this, { op, operand });
    }
}


class Paren {
    constructor(exp) {
        Object.assign(this, { exp });
    }
}

class NumericLiteral {
    constructor(value) {
        this.value = value;
    }
}
class KeyValueExpression {
    constructor(key, value) {
        Object.assign(this, { key, value });
    }
}
class TextLiteral {
    constructor(value) {
        this.value = value;
    }
};
class ListExpression {
    constructor(members) {
        this.members = members;
    }
}
class DictExpression {
    constructor(exp) {
        Object.assign(this, { exp });
    }
}
class SetExpression {
    constructor(members) {
        this.members = members;
    }
}
class ListType {
    constructor(memberType) {
        Object.assign(this, { memberType });
    }
}
class SetType {
    constructor(memberType) {
        Object.assign(this, { memberType });
    }
}
class DictType {
    constructor(keyType, valueType) {
        Object.assign(this, { keyType, valueType });
    }
}

// module.exports = {
//     Program,
//     Assignment,
//     VarDeclaration,
//     Print,
//     Return,
//     IfStmt,
//     ForStmt,
//     FuncDecStmt,
//     WhileStmt,
//     VarExpression,
//     FieldVarExp,
//     SubscriptedVarExp,
//     Param,
//     Print,
//     Return,
//     IfStmt,
//     ForStmt,
//     FuncDecStmt,
//     WhileStmt,
//     VarExpression,
//     FieldVarExp,
//     SubscriptedVarExp,
//     Param,
//     Call,
//     PlusMinusExp,
//     RelopExp,
//     MulOpExp,
//     AddOpExp,
//     PowExp,
//     PrefixPostfixExp,
//     Paren
// }