let son = 45;
let yig = onlikyigindi(45);

let str = son.toString();
let tens = 1;


let sum = 0;
for(let i=0; i< +str.length; i++){

    let chapiinchison = +(str[i]);
    let onliksoni = Math.pow(10 ,(+str.length - 1 - i));
    let number = chapiinchison * onliksoni;
    // console.log(i, 'i inchi son ', chapiinchison);
    // console.log('onlik ', onliksoni);
    // console.log(number);
    if (onliksoni < 10){
        sum += 10 + chapiinchison;
        // console.log(chapiinchison)
    }
    else{
    sum +=onlikyigindi(number);

    }
    // console.log('forni ichi summ ', sum)
}
// console.log(sum)

function onlikyigindi(number){
    let sum = 0;
    for (let i=0; i<=number; i++){
        sum += i
    }
    return sum;
}

console.log(sum)

console.log(yig)

