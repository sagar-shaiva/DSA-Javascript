"use strict";

// count number of digits
/*
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
*/
//Palindrome Number
const palindrome =function (num){
  let reverse=0,temp=num;
    while(temp!==0){
        let lastDigit =temp%10;
        reverse = reverse*10 + lastDigit;
        temp = Math.floor(temp/10);
    }

    return reverse === num;
}

console.log('Is palindrome:',palindrome(121));
//time complexity θ(n); for n digits
