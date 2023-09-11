var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Task 1
var numArr = [];
numArr.push(10);
numArr.push(20);
console.log(numArr);
console.log("================================================");
//Task 2
var strNumarr = [];
strNumarr.push(10);
strNumarr.push("hello");
strNumarr.push("maino");
for (var i = 0; i < strNumarr.length; i++) {
    console.log(strNumarr[i]);
}
console.log("================================================");
//Task 3
var Direction;
(function (Direction) {
    Direction[Direction["x"] = 1] = "x";
    Direction[Direction["y"] = 2] = "y";
    Direction[Direction["z"] = 3] = "z";
})(Direction || (Direction = {}));
console.log(Direction);
console.log("================================================");
var j = false;
var v = 6;
var k = 88;
var l = true;
console.log(j, v, k, l);
console.log("================================================");
function add(a, b) {
    return a + b;
}
var str = add("hello", "world");
var num = add(4, 6);
console.log(str);
console.log(num);
console.log("================================================");
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "username", {
        get: function () { return this._username; },
        set: function (value) { this._username = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "address", {
        get: function () { return this._address; },
        set: function (value) { this._address = value; },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp1 = new Employee();
emp1.name = "Leanne Graham";
emp1.username = "Bret";
emp1.email = "Sincere@april.biz";
emp1.address = {
    street: "Kulas Light",
    suit: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
        lat: -37.3159,
        lng: 81.1496
    }
};
console.log(emp1);
console.log("================================================");
//Task 7 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Employee));
var ManagerObj = new Manager();
ManagerObj.address = {
    street: "Kulas Light",
    suit: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
        lat: -37.3159,
        lng: 81.1496
    }
};
console.log(ManagerObj.address);
