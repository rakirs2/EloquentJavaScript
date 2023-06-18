objectOne = {
    
}
objectOne.insideObject = {
    property: 'intial'
}

objectTwo = {
    property: 'different'
}

console.log(objectOne.insideObject.property)
objectOne.insideObject = objectTwo
console.log(objectOne.insideObject.property)