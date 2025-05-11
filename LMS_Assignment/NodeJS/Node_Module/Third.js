let getPrime = (arr) => {
    let newArrPrime = arr.filter((curElem) => {
        if (curElem <= 1) {
            return false;
        }
        for (i = 2; i < curElem; i++) {
            if (curElem % i == 0) {
                return false;
            }
        }
        return true;
    })
    return newArrPrime;
}

/*
let longStr = (arr) => {
    let maxLen = arr[0].length

    for (i = 1; i <= arr.length; i++) {
        if (arr[i] > maxLen) {
            maxLen = arr[i];
        }
    }
    return arr[maxLen];
}
*/
let longStr = (arr) => {
    return arr.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    });
}

let currDate = () => {
    let d = new Date();
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}


module.exports = { getPrime, longStr, currDate }