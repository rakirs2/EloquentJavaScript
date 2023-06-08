function addToZero(x){
    // Think like 4+3+2+1+0=10 etc. Depeding on x.
    if(x == 1){
        return 1;
        //This is base case because we know this is true.
    }
    
    else if (x == 0){
        return 0;
        //This is base case because we know this is true.
    }

    return addToZero(x-1) + x;
    
}

console.log(addToZero(6))

//Spent about 30 mins on creating this recursion. 
//1. Know what your function should do.
//2. Pick a sub problem
//3. Use the answer in sub problem to answer the original problem
//4. Base case

//Note to self: Believe in yourself! :D 