function isEven(n){
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n-2)

}

console.log(isEven(2))
console.log(isEven(5))
console.log(isEven(9))
console.log(isEven(20))
console.log(isEven(-2))
console.log(isEven(-5))