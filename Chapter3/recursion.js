function evenOrOdd(a){
    if (a ==0){
        return "even"
    }else if (a == 1){
        return "odd"
    }else if (a<0){
        return evenOrOdd(-a)
    }
    else{
        return evenOrOdd(a-2)
    }
}

console.log(evenOrOdd(50))
console.log(evenOrOdd(75))
console.log(evenOrOdd(-1))