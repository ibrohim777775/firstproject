let num = 1214;
// 10 000 000 000 000
let sum=0;
let str = num.toString().length;

if (str<10){
    for (let i=0; i<=num; i++){
        sum +=i
    }
}
else if(str===10){

}
let tens = 10 * 10 *10*10*10 *10 *10 *10
let result = sum * tens ;
// let str = num.toString();
// console.log(tens, 'onliklar', tens.toString().length, 'xonali')
// console.log(str);
// console.log(sum, sum.toString().length)
// console.log(result, result.toString().length);
console.log(sum);
let strsum = sum.toString();
console.log(strsum.length)
// console.log(7/10)