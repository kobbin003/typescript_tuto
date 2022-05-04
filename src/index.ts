let id:number = 9
console.log("ID:",id)

//  Tuple array
let tup:[number][]
tup = [[2],[4]]

// Union
let uni:string|boolean
uni = true
uni = "kobin"
/* *  */
/* ---------------------------------- enum ---------------------------------- */
enum Direction1{
    //. By default, the value of these will be 0,1,2 & 3

    //. whatever value the first field gets, the value of the remaining field
    //. ...will be in sequence.
    Up=3,
    Down,
    Left,
    Right
}

enum Direction2{
    //. we can asssign it to any value.
    Up="Up",
    Down='Down',
    Left='Left',
    Right='Right'
}

console.log(`enum:`,Direction1.Up)
console.log("enum:",Direction2.Left)
/* -------------------------------------------------------------------------- */
/*                                   Objects                                  */
/* -------------------------------------------------------------------------- */
const user:{
    id:number,
    name:string
}={
    id:1,
    name:'Kobon'
}

//OR using type

type User={
    id:number,
    name:string
}

const user2:User={
    id:1,
    name:'#FF2D00',
}

/* ----------------------------- type assertion ----------------------------- */
let cid:number = 1
let custId = cid //. custId will have the same type as cid

let cid2:any = 1
let custId2 = <string>cid2 //. cid2 must be assigned type 'any' for 'type change' to work.
let custId3 = <string|boolean>cid2
//OR
let custId4 = cid2 as string
let custId5 = cid2 as string|number

/* -------------------------------- function -------------------------------- */
// function addNum(){}
let addNum=(x:number,y:number)=>x+y

let log = (x:number|string) => console.log('function:', x)

                        //Interfaces
interface UserInterface{
    id:number,
    name:string
    
}

const user3:UserInterface={
    id:1,
    name:'Kobon'
}
// /* ----------------------//? Difference between Interface and type ---------------------------------- */

//.     Ans: 1. interface can only be used with object type
//.    whereas the type can be used with primitive ones too.
//.          2. we can extend interface(i.e new fields can be added) 
//.     but not types.
// e.g
type kobin = string
type trial ={
    name:string,
    writee():string  //. function as a field in type too.
}
let naam:kobin = 'duyu'

/* --------------------------- interface extension -------------------------- */
interface UserInterfacextension extends UserInterface{
    age?:number
}
/* ----------------------------- Optional field types in interface--------------------------------------------- */
// todo: do this
let info:UserInterfacextension = {
    id:1,
    name:'Kobon',
    // age:30 //. this is optional
}

/* ------------------------  Function as interface ----------------------- */

interface FunctionInterface{
(para1:number,para2:number):number
}

const add:FunctionInterface = (x:number, y: number)=> x + y
const subtract:FunctionInterface = (x:number, y: number)=> x - y

/* ---------------------------------- class --------------------------------- */

class Person {
    private id: number //. private fields are only accessible to the class
    name:string //.1 this is not a private fields. Therefore it can be accessed from outside
                //.2 this is equivalent to public name: string
    protected occupation: string

    //. the contructor function executes on every instantiation
    constructor(id:number,name:string,occupation:string){
        this.id =id
        this.name = name
        this.occupation = occupation
    }
}

/* ------------------------ class implemnts interface ----------------------- */

interface PersonInterface1{
    id:number,
    name:string,
    occupation: string,
    writeInfo(name:string,occupation:string): string //.function as a field
    
}
class Person1 implements PersonInterface1{
    id: number 
    name:string 
    occupation: string

    constructor(id:number,name:string,occupation:string){
        this.id =id
        this.name = name
        this.occupation = occupation
    }

    writeInfo = (name:string,occupation:string)=> `${name} is a ${occupation}`
}

let kobin = new Person(1,'Kobin','front end developer')

console.log(`Class as interface:`,kobin)

kobin.name = "Takha" //. name field being accessed from outside the clas.
console.log(`Class as interface: ${kobin.name} is my name`)

/* ----------------------------- class extension ---------------------------- */
//. subclasses: extended classes are known as subclasses.

interface PersonInterface2 extends PersonInterface1{
    salary:number
}
class Person2 extends Person1{
    salary:number

    constructor(id:number,name:string,occupation:string,salary:number){
        super(id,name,occupation)
        this.salary = salary
    }
}

const kobin2 = new Person2(2,'kobin','front end developer',500000);

console.log('subclass: ',kobin2.writeInfo('kobin','front end developer'))

/* -------------------------------- Generics -------------------------------- */
//. generics are used to make reusable component.

//. Here we are treating the type as a variable.

//. For. eg in genericFunction(below), we can use any type
//          ...we could have used any variable but then the return will also be any.
//          ...Now here if we use <Type>, then the return value's type will be the argument's type.



function genericFunction<Type>(params:Type): Type {
    return params
}

let myName:String = genericFunction<String>("Kobin")
console.log(`GenericFunction: my name is ${myName}`)

//. returns array type
function returnArrayType<Type>(params:Type[]): Type[]{
    return params
}
//todo Do this in
let myArray:number[] = returnArrayType<number>([9,4,2])
myArray.push(3)
console.log('generic Function[]: ',myArray)


/* ----------------------- Type of a Generic Function ----------------------- */

let typeOfagenericFunction: <Type>(params:Type) => Type = genericFunction

//. NOTE: In type of a generic function, we could write any word in place of Type.
//.      But it should be the same across the generic function.
//. For e.g: we could write 
//.  let typeOfagenericFunction: <Input>(params:Input) => Input = genericFunction




