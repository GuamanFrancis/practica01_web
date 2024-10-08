
let data = 12 //entero
let data1 = 23.6 // float
let data2 = "hola" //string
let data3 = '@' // char
let data4 = false // boolean
let data5 = undefined // undefined

let dato6 = ['hols ',54,false] //arreglos o arrays
3/5
let user = { //objetos
name: "josue",
activo: true
}

let password = "12345 francis guaman "

console.log(password.length);

//Metodos mas clasicos
console.log(password.trim()); //trim remueve los espacios en blanco como del principio y al final
console.log(password.includes('5')); // si en el password incluye el numero 5
//node --watch lo que hace es que se ejecute de manera automatica sin tener que limpiar la terminal
console.log(password.toUpperCase()); // lo que hace es que hace todo en mayuscula
console.log(password.toLocaleLowerCase()); // lo que hace es que convierte todo en minuscula
//quien dicta los estandares de la web
//la w3c permite determinar las reglas protocolos y eso
//Cuales son los protocolos para javascript: es ecmascript y en pocas es un organizmo que crea reglas y en pocas
//palabras es la forma en la que se debe escribir en javascript
//ES6 son reglas que me permiten saber como escribir en javascript pero tambien me perminte saber nuevas
caracteristicas
// Template strings me permite concatenar texto con variables y tambien se utiliza el signo de dolar
console.log(`El passwoed de juean es; ${password}`);
//-----------------------------------------
let gamprice1= "500.35"
let gamprice2= 500.35
// proceso de casting - ES6
4/5
console.log(+gamprice1+gamprice2);
//cuando ponemos el mas delante de un string se hace el proceso de casting
//---------------------------------------------------------------------------------
//ORDEN DE EJECUCION DE LOS OPERADORES (* / + - ** () )
//---------------------------------------------------------------------------------
//condicionales
let useCardBalance = 500
let cardBalance = 1000
//ES6 Operador ternario
//Esta es un forma mas rapida y simplificada del if
//cardBalance <= useCardBalance == condicion que se va a comprobar
//"Pay " esto se ejecuta si es verdadero
//"Consuming" esto se ejecuta si es falso
let result = cardBalance <= useCardBalance ? "Pay " : "Consuming"
//valores verdaderos - tambien llamados truthy son vvalores que no estan vacios
//valores falsos - tambien llamados falsy son valores que estan vacios
let email = "B@4GMAIL.COM"
!email ? console.log("provie an email") : console.log("Registrarse");
//comparacion estricta se encaga de que comparemos el valor y el tipo de dato y parr hacer eso se pone el ===
//triple igual
let userID = 123
userID === "123" ? console.log("user found ") : console.log("USER DOESNT EXIT ");
//------------------------------------------------------------------------------------------------------------------------
//clasicos loops o bucles
const goalss = ['learn js','play socces','watching netflix', "enjoy the holiday"]
goals.forEach((goal)=>{console.log(goal)})
goals.map(()=>{})
//clasicos loops o bucles
const goals = ['learn js','play socces','watching netflix', "enjoy the holiday"]
goals.forEach((goal)=>{console.log(goal)})
const newGoals = goals.map((goal)=>goal.toUpperCase())
//Summary
console.log(goals);
console.log(newGoals);