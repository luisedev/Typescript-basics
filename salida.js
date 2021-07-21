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
console.log("Hello world");
//types
var myString = "Hello World";
var myNumber = 22;
var myBool = true;
//Cualquier tipo de dato
var myVar = "Hello";
myVar = false;
//Strings
document.write(myString.split("l").toString());
document.write("<br>");
//Arrays
var StringArray = ["1", "2", "3"];
var AnyArray = ["1", 2, true, [], {}];
document.write(StringArray.toString());
document.write("<br>");
//tuples
var strNumTuple;
strNumTuple = ["Hello", 22];
//void, undefined, null
//let no pierde el scope (alcance) de la variable
var myVoid = undefined; //void|null
var myNull = undefined; //void|null
var myUndefined = undefined; //void|null
document.write(typeof strNumTuple);
document.write("<br>");
//Functions
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//Parámetro opcional con ?
function getName(firstname, lastName) {
    if (lastName == undefined) {
        return firstname;
    }
    return firstname + " " + lastName;
}
document.write(getName("Luis"));
document.write("<br>");
document.write(getName("Luis", "Edu"));
//no devolver nada
function myVoidFunction() {
    return;
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
var myTodo = { title: "Typescript", text: "Aprendiendo typescript" };
showTodo(myTodo);
document.write("<br>");
document.write(myTodo.title + " " + myTodo.text);
//Classes
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.register = function () {
        return this.name + " have been registered with " + this.email;
    };
    User.prototype.showInfo = function () {
        return "Name: " + this.name + " <br>Email: " + this.email + "<br>Age: " + this.age;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    return User;
}());
var luis = new User("Luis");
luis.email = "luis@gmail.com";
document.write("<br>");
document.write(luis.register());
document.write("<br>");
luis.setAge(25);
document.write(luis.showInfo());
document.write("<br>");
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        _this.name = name;
        _this.email = email;
        _this.age = age;
        return _this;
    }
    return Member;
}(User));
var luise = new Member(1, "Eduardo", "eduardo@mail.com", 25);
document.write("================================");
document.write("<br>");
document.write(luise.showInfo());
