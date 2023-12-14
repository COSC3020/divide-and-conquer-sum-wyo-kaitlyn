// finishing up one before bed - code still running for the tsp comparison
// so i'll get that turned in tomorrow 

function divideAndConquerSum(a) {
     // no list to divide, return zero
     if(a.length == 0) {
        return 0;
    }
    // only one element, return it
    else if (a.length == 1) {
        return a[0];
    }

    // first mid point - 1/3 of length
    let firstMid = Math.ceil(a.length / 3);
    // second mid point - 2/3 of length
    let secondMid = firstMid * 2;

    // create arrays based on midpoints
    let array1 = a.slice(0, firstMid);
    let array2 = a.slice(firstMid, secondMid);
    let array3 = a.slice(secondMid, a.length);

    // recursion for all parts
    return divideAndConquerSum(array1) + divideAndConquerSum(array2) + divideAndConquerSum(array3);
}
