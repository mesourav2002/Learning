// Datatype Types  (2)

// 1> Primitive DataType
// 2> Non-Primitive Datatype

// 1> Primitive DataType Types()

//    >Number
//    >String
//    >Boolean
//    >Undefined
//    >Null
//    >BigInt
//    >Symbol

// 2> Non-Primitive DataType Types()

//    >Object

// --------------------------------------------
// number type

let num = 100;
console.log("num"); //100
console.log(typeof num); //number

//string datatype

let str = "hai";
console.log(str); // hai
console.log(typeof str); //string

// boolean datatype

let bool = true;
console.log(bool); // true
console.log(typeof bool); //boolean

// undefined datatype

let a;
console.log(a); // undefined
console.log(typeof a); //undefined

// null datatyle

let b = null;
console.log(b); //null;
console.log(typeof null); //object

// -------------------------------

let num1 = Number();
console.log(num1); //0
console.log(typeof num1); //Number

let num2 = Number(100);
console.log(num2); // 100
console.log(typeof num2); //Number

let num3 = Number(true);
console.log(num3); // 1
console.log(typeof num3); //Number

let num4 = Number(false);
console.log(num4); // 0
console.log(typeof num4); //Number

let num5 = Number("hi");
console.log(num5); // NAN (Not A Number)
console.log(typeof num5); //Number
