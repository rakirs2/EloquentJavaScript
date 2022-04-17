function arrayToList(array){
    let list = {}
    let pointer = list
    for (let i = 0; i <array.length; i++){
        pointer["value"]= array[i]
        if (i!= array.length-1){
            pointer["rest"]= {}
        }
        else{
            pointer["rest"]= null
        }
        pointer = pointer["rest"]
    }
    return list
}
function listToArray(list){
    array = []
    temp = list
    while (temp.rest != null){
        array.push(temp["value"])
        temp = temp.rest
    }
    if (temp["value"]){
        array.push(temp["value"])
    }
    return array
}
function prepend(list, value){
  return {
    "value": value, 
    "rest": list}

}

function nth(list, value){

}

function nthRecursive(list,value){

}

let list = arrayToList([2,3])
console.log(listToArray(arrayToList([1,2,3])))
console.log(prepend(list,1))
