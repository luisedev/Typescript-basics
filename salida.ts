console.log("Hello world");

//types
var myString: string = "Hello World";
var myNumber: number = 22;
var myBool: boolean = true;
//Cualquier tipo de dato
var myVar: any = "Hello";
myVar = false;

//Strings
document.write(myString.split("l").toString());
document.write("<br>");

//Arrays
var StringArray: string[] = ["1", "2", "3"];
var AnyArray: any[] = ["1", 2, true, [], {}];
document.write(StringArray.toString());
document.write("<br>");

//tuples
var strNumTuple: [string, number];
strNumTuple = ["Hello", 22];

//void, undefined, null
//let no pierde el scope (alcance) de la variable
let myVoid: void = undefined; //void|null
let myNull: null = undefined; //void|null
let myUndefined: undefined = undefined; //void|null

document.write(typeof strNumTuple);
document.write("<br>");

//Functions
function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

let mySum = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

//Parámetro opcional con ?
function getName(firstname: string, lastName?: string): string {
  if (lastName == undefined) {
    return firstname;
  }
  return `${firstname} ${lastName}`;
}

document.write(getName("Luis"));
document.write("<br>");
document.write(getName("Luis", "Edu"));

//no devolver nada
function myVoidFunction(): void {
  return;
}

//interfaces
interface ITodo {
  title: string;
  text: string;
}

function showTodo(todo: ITodo): void {
  console.log(`${todo.title} - ${todo.text}`);
}

let myTodo: ITodo = { title: "Typescript", text: "Aprendiendo typescript" };

showTodo(myTodo);
document.write("<br>");
document.write(myTodo.title + " " + myTodo.text);

//Classes
class User {
  public name: string;
  public email: string;
  public age: number;

  constructor(name) {
    this.name = name;
  }

  register() {
    return `${this.name} have been registered with ${this.email}`;
  }

  showInfo(){
    return `Name: ${this.name} <br>Email: ${this.email}<br>Age: ${this.age}`;

  }
  setAge(age:number){
      this.age = age;
  }
}

var luis = new User("Luis");
luis.email = "luis@gmail.com";
document.write("<br>");
document.write(luis.register());
document.write("<br>");
luis.setAge(25);
document.write(luis.showInfo());
document.write("<br>");

class Member extends User {
    id: number;

    constructor (id, name, email, age){
        super( name);
        this.id=id;
        this.name=name;
        this.email=email;
        this.age=age;
    }
}

var luise = new Member(1,"Eduardo", "eduardo@mail.com",25);
document.write("================================");
document.write("<br>");
document.write(luise.showInfo());