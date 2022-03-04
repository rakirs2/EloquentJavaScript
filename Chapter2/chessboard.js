let patternSize = 20

let pattern_a = ""
let pattern_b = ""

for (let i = 0; i<patternSize; i+=1){
    if (i%2==0){
        pattern_a+= "#"
        pattern_b+= " "
    }else{
        pattern_b+= "#"
        pattern_a+= " "
    }
}

for (let i = 0; i <patternSize; i+=1){
    if (i%2==0){
        console.log(pattern_a)
    }else{
        console.log(pattern_b)
    }
}