//Task 1
let numArr: number[] = [];
numArr.push(10);
numArr.push(20);
console.log(numArr);


console.log("================================================");



//Task 2
let strNumarr: (string | number)[] = [];
strNumarr.push(10);
strNumarr.push("hello");
strNumarr.push("maino");
for (let i = 0; i < strNumarr.length; i++){
    console.log(strNumarr[i]);
}


console.log("================================================");


//Task 3
enum Direction {
  x = 1,
  y = 2,
  z = 3,
}
console.log(Direction);


console.log("================================================");



//Task 4
type myDataType = boolean | number;
var j: myDataType = false;
var v: myDataType = 6;
var k: myDataType = 88;
var l: myDataType = true;
console.log(j, v, k, l);

console.log("================================================");


//Task 5
function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}
var str = add("hello", "world");
var num = add(4, 6);
console.log(str);
console.log(num);



console.log("================================================");



//Task 6
interface IEmployee {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suit: string,
        city: string,
        zipcode: string,
        geo: {
            lat: number,
            lng: number
        }
    }
}

class Employee implements IEmployee{
    readonly id: number;
    public name: string;
    private _username: string;
    public email: string;
    protected _address: {
        street: string,
        suit: string,
        city: string,
        zipcode: string,
        geo: {
            lat: number,
            lng: number
        }
    };
    get username() { return this._username }
    set username(value: string) { this._username = value }
    get address() { return this._address }
    set address(value) { this._address = value }
}

let emp1 = new Employee();
emp1.name = "Leanne Graham";
emp1.username = "Bret";
emp1.email = "Sincere@april.biz";
emp1.address = {
    street: "Kulas Light",
    suit: "Apt. 556",
    city: "Gwenborough",
    zipcode : "92998-3874",
    geo : {
        lat : -37.3159,
        lng : 81.1496
    }
};
console.log(emp1);




console.log("================================================");




//Task 7 
class Manager extends Employee{
    
}
let ManagerObj = new Manager();
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