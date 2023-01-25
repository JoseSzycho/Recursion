function mergeSort(array){
    console.log(array)
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
    return arrayLeftMiddle.concat(arrayRightMiddle);
}


let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let result = mergeSort(testArray);
console.log(result)