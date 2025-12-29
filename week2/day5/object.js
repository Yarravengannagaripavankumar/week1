
// ? objects 1
// const trainer = {
//     name : 'Nithin',
//     tech1() {  // ES6 Syntax to define a Method
//         console.log("AIML JavaFS Trainer")
//     },
//     tech2() {  // ES6 Syntax to define a Method
//         console.log("C++ MERN Trainer")
//     }
// };

// function func(param) {
//     trainer.tech1(); // Call to the method tech1()
//     trainer['name'] = 'Nithin Belamkar' // name of the trainer object modified
//     trainer[param]();
// }

// func('name'); // call to the function

// ! objects 2

// const trainer = {
//     name : 'Nithin',
//     tech1() {  
//         console.log("AIML JavaFS Trainer")
//     },
//     tech2() { 
//         console.log("C++ MERN Trainer")
//     }
// }

// function func(param1, param2, param3) {
//     trainer.tech1();
//     trainer['name'] = 'Nithin Belamkar'
//     trainer[param1]();
//     console.log(trainer.name);
//     trainer[param2.value] = param3;
//     console.log(trainer.name);
//     trainer[param2] = param3;
//     console.log(trainer.name);
//     console.log(param2.value);
//     console.log(param2);
// }

// func('tech2', 'name', 'Nithin Neelakanta Rao');

// ? objects 3

// const trainer = {                     // trainer object
//     name : 'Nithin',                  // property 'name' with initial value

//     tech1() {                         // method tech1
//         console.log(this.name);       // 'this' refers to the object calling the method (trainer)
//     }
// };

// // calls tech1() method → 'this' refers to trainer → prints 'Nithin'
// trainer.tech1();                      // Output: Nithin

// trainer.name = 'Belamkar';            // updates the name property of trainer object

// // calls tech1() again → 'this' still refers to trainer → prints updated name
// trainer.tech1();                      // Output: Belamkar

// ^ objects 4

// const trainer = {                     // trainer object is created
//     name : 'Nithin',                  // property of the object

//     tech1() {                         // method of the object
//         console.log(this);            // 'this' refers to the object that calls this method
//     }
// };

// trainer.tech1();                      // method is called using trainer → so 'this' = trainer object


// & objects 5

// const trainer = {
//     name : 'Nithin',
//     tech() { 
//         console.log(this);   // prints the value of 'this' based on how the function is called
//         return 5;            // returns number 5
//     }
// };

// const var1 = trainer.tech;   // var1 stores reference to trainer.tech (function, not called)
// console.log(var1);           // prints function definition

// const var2 = trainer.tech(); // method call → 'this' refers to trainer object
// console.log(var2 + "   " + typeof(var2)); // prints: 5   number

// var1();                      // normal function call → 'this' refers to global object (in Node.js)

// num = var1();                // calling again, return value stored in num
// console.log(num + "   " + typeof(num)); // prints: 5   number

// ? objects 6

const student = {
    name : 'mani',                 // student object with name property
    techStudent() {
        console.log(this);         // 'this' refers to the object that calls techStudent()
    }
};

const trainer = {
    name : 'Nithin',               // trainer object with name property
    techTrainer() {
        console.log(this);         // 'this' depends on how this function is called
    }
};

// bind() sets 'this' permanently to student and returns a new function
const walk1 = trainer.techTrainer.bind(student);
walk1();                            // prints student object

// method reference copied without bind()
// called as normal function → 'this' is global (Node.js) / window (browser)
const walk2 = trainer.techTrainer;
walk2();                            // prints global object (or undefined in strict mode)

// bind() sets 'this' permanently to trainer
const walk3 = trainer.techTrainer.bind(trainer);
walk3();                            // prints trainer object


// * o
