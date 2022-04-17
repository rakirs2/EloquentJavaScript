function range(start, end, step =1){
    output = []
    if (step>0){
        for (let i = start; i<= end; i+=step){
            output.push(i)
        }
    }else{
        for (let i = start; i>= end; i+=step){
            output.push(i)
        }
    }
    
    return output
}
function sum(array){
    sum = 0
    for (let i = 0; i <array.length; i++){
        sum +=array[i]
    }
    return sum
}
console.log(sum(range(1,10))==55)
console.log(range(1,10,2))
console.log(range(5,2,-1))
