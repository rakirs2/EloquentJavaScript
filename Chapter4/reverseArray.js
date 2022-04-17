function reverseArray(array){
    output = []
    for (let i = array.length-1; i>=0; i--){
        output.push(array[i])
    }
    return output
}
function reverseInPlace(array){
    leftPointer= 0
    rightPointer = array.length-1
    while(leftPointer<rightPointer){
        temp = array[leftPointer]
        array[leftPointer]= array[rightPointer]
        array[rightPointer]= temp
        leftPointer++
        rightPointer--
    }
}

array = [1,2,3]
console.log(reverseArray([1,2]))
reverseInPlace(array)
console.log(array)