function countChar(word, char){
    let count = 0
    for (let index = 0; index<word.length; index++){
        if (word[index]==char){
            count++
        }
    }
    return count
}

console.log(countChar("backstreet boys", "b"))