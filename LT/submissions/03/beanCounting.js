//Setting up code

function countBs(string){
    // create a result, set to 0
    let result = 0
    // loop over the string
    for (let i = 0; i <= string.length; i++){
     // if the curent character is a "B"
     if (string[i] === 'B')
       // increment our result by 1
       result = result + 1;
    }

    // return result
    return result;
    
}

function countChar(string, character){
    function countBs(string){
        return countChar(string, 'B');
    }
    
        let result = 0
        
        for (let i = 0; i <= string.length; i++){
         
         if (string[i] === character)
           
           result = result + 1;
        }
    
        
        return result;
}






//Test Code

console.log(countBs("BBC"));
// 2
console.log(countBs("BBBibbBB"));
// 5
console.log(countChar("abliflidfdl", "l"))
// 3
console.log(countChar("abcanccc", "c"))
// 4