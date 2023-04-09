let numRows = 5
let current = 0
while (current<numRows){
console.log("#######")
current +=6
}

do{
    console.log("#######")
    current+=5
}while(current<numRows)

for (let current = 0; current < numRows; current++) {
    console.log("#######")
}

for (let current = 0; current < numRows; current++) {
    if(current == 3){
        break;
    }
    console.log("#######")
}