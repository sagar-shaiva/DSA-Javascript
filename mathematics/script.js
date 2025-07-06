"use strict";

// count number of digits
const countDigits = (n)=>{

    let res =0;

    while(n>0){
        n = Math.floor(n/10);
        res++;
    }

    return res;

}

console.log(countDigits(1234));

//time complexity θ(n); for n digits