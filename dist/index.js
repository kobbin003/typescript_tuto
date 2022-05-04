"use strict";
let id = 9;
console.log("ID:", id);
//  Tuple array
let tup;
tup = [[2], [4]];
// Union
let uni;
uni = true;
uni = "kobin";
/* *  */
/* ---------------------------------- enum ---------------------------------- */
var Direction1;
(function (Direction1) {
    //. By default, the value of these will be 0,1,2 & 3
    //. whatever value the first field gets, the value of the remaining field
    //. ...will be in sequence.
    Direction1[Direction1["Up"] = 3] = "Up";
    Direction1[Direction1["Down"] = 4] = "Down";
    Direction1[Direction1["Left"] = 5] = "Left";
    Direction1[Direction1["Right"] = 6] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    //. we can asssign it to any value.
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(`enum:`, Direction1.Up);
console.log("enum:", Direction2.Left);
/* -------------------------------------------------------------------------- */
/*                                   Objects                                  */
/* -------------------------------------------------------------------------- */
const user = {
    id: 1,
    name: 'Kobon'
};
const user2 = {
    id: 1,
    name: '#FF2D00',
};
/* ----------------------------- type assertion ----------------------------- */
let cid = 1;
let custId = cid; //. custId will have the same type as cid
let cid2 = 1;
let custId2 = cid2; //. cid2 must be assigned type 'any' for 'type change' to work.
let custId3 = cid2;
//OR
let custId4 = cid2;
let custId5 = cid2;
/* -------------------------------- function -------------------------------- */
// function addNum(){}
let addNum = (x, y) => x + y;
let log = (x) => console.log('function:', x);
const user3 = {
    id: 1,
    name: 'Kobon'
};
let naam = 'duyu';
/* ----------------------------- Optional field types in interface--------------------------------------------- */
// todo: do this
let info = {
    id: 1,
    name: 'Kobon',
    // age:30 //. this is optional
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
/* ---------------------------------- class --------------------------------- */
class Person {
    //. the contructor function executes on every instantiation
    constructor(id, name, occupation) {
        this.id = id;
        this.name = name;
        this.occupation = occupation;
    }
}
class Person1 {
    constructor(id, name, occupation) {
        this.writeInfo = (name, occupation) => `${name} is a ${occupation}`;
        this.id = id;
        this.name = name;
        this.occupation = occupation;
    }
}
let kobin = new Person(1, 'Kobin', 'front end developer');
console.log(`Class as interface:`, kobin);
kobin.name = "Takha"; //. name field being accessed from outside the clas.
console.log(`Class as interface: ${kobin.name} is my name`);
class Person2 extends Person1 {
    constructor(id, name, occupation, salary) {
        super(id, name, occupation);
        this.salary = salary;
    }
}
const kobin2 = new Person2(2, 'kobin', 'front end developer', 500000);
console.log('subclass: ', kobin2.writeInfo('kobin', 'front end developer'));
/* -------------------------------- Generics -------------------------------- */
//. generics are used to make reusable component.
//. Here we are treating the type as a variable.
//. For. eg in genericFunction(below), we can use any type
//          ...we could have used any variable but then the return will also be any.
//          ...Now here if we use <Type>, then the return value's type will be the argument's type.
function genericFunction(params) {
    return params;
}
let myName = genericFunction("Kobin");
console.log(`GenericFunction: my name is ${myName}`);
//. returns array type
function returnArrayType(params) {
    return params;
}
let myArray = returnArrayType([9, 4, 2]);
myArray.push(3);
console.log('generic Function[]: ', myArray);
/* ----------------------- Type of a Generic Function ----------------------- */
let typeOfagenericFunction = genericFunction;
//. NOTE: In type of a generic function, we could write any word in place of Type.
//.      But it should be the same across the generic function.
//. For e.g: we could write 
//.  let typeOfagenericFunction: <Input>(params:Input) => Input = genericFunction
