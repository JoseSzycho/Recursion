function mergeSort(array){
    if(array.length > 1){ //if array length is 2 or more
        //splits array in two parts
        let arrayMiddlePosition = Math.trunc(array.length / 2);
        let arrayLeftMiddle = array.slice(0, arrayMiddlePosition);
        let arrayRightMiddle = array.slice(arrayMiddlePosition, array.length);
        return merge(mergeSort(arrayLeftMiddle), mergeSort(arrayRightMiddle));
    }
    else{
        return array;
    }
}

function merge(arrayLeftMiddle, arrayRightMiddle){
    let result = []; //place for storage merged array

    while(arrayLeftMiddle.length != 0 && arrayRightMiddle.length != 0){ //while both of the arrays exists
        let value;
        if(arrayLeftMiddle[0] < arrayRightMiddle[0]){
            value = arrayLeftMiddle.shift() //ads minor value to result and removes it from array
        }
        else{
            value = arrayRightMiddle.shift(); //ads minor value to result and removes it from array
        }
        result.push(value);
    }

    //in case one array have a bigger value, this array will have reamaing numbers sorted, so we concat with result 
    if(arrayLeftMiddle.length > 0) result = result.concat(arrayLeftMiddle);
    if(arrayRightMiddle.length > 0) result = result.concat(arrayRightMiddle);

    return result;
}


let testArray = [2,453, -13, 5, 3, -9, 6, 3, 53];

let result = mergeSort(testArray);
console.log(result)