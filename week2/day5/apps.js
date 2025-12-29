
// let n = 15;
// let m = '15';

// console.log(n === m);

// ? perfect square
// n=34
// root= Math.sqrt(n)
// root = Math.floor(root)
// if(root*root === n)
//     console.log(n, 'is a perfect square')
// else
//     console.log(`${n} is not a perfect square`)

// ! exam result
// averageScore = 78

// if(averageScore >= 0 && averageScore <= 50)
//     console.log(`Result is Fail`)
// else if(averageScore >= 51 && averageScore <= 65)
//     console.log(`Result is Second Class`)
// else if(averageScore >= 66 && averageScore <= 85)
//     console.log(`Result is First class`)
// else if(averageScore >= 86 && averageScore <= 100)
//     console.log(`Result is Outstanding`)
// else
//     console.log(`Invalid Average Score`)

// $ math table
// let inputnumber=12
// for(let i=1;i<=10;i++){
//     product=inputnumber*i
//     console.log(`${inputnumber} *${i}=${product}`)
// }

// ? sumof even digits


// let inputnumber=4568972
// sumofevendigit=0
// while(inputnumber>0){
//     remainder=inputnumber%10
//     if(remainder%2 ==0){
//         sumofevendigit+=remainder
//     }
//     inputnumber=Math.floor(inputnumber/10)
// }
// console.log(`sum of even digit is: ${sumofevendigit}`)

// ! fibo sequence

// let inputnumber=10
// let a=0
// let b=1
// console.log(a)
// console.log(b)
// for(let i=3;i<=inputnumber;i++){
//     let c=a+b
//     console.log(c)
//     a=b
//     b=c
//     }

// ~ prime or not

// let inputnumber=5
// let i
// for( i=2;i<inputnumber;i++){
//     if(inputnumber%i==0){
//         console.log("is not a prime")
//         break
//     }
// }
// if(i==inputnumber){
//     console.log("is a prime")
// }

// < prime between 2 numbers

let startnum = 40;
let tonum = 100;

for (let n = startnum; n <= tonum; n++) {

    if (n < 2) continue;

    let i;
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            break;
        }
    }

    if (i === n) {
        console.log(n);
    }
}
