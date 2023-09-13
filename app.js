let adddisplay = "";
let prevResult = "";
let result = document.getElementById("display");
let input = document.getElementById("show");
const show = function (number) {
    let i = number.toString();
    let array = adddisplay.split("");
    let array1Index = array[array.length - 1];
    if(prevResult !== "") {
        prevResult = "";
        adddisplay = "";
        adddisplay += i;
        result.innerHTML = adddisplay;
        input.innerHTML = i;
    }
    else {
        if (adddisplay[0] !== "0") {
            if(array1Index === "-" && array[array.length - 2] === "(") {
                adddisplay += i + ")";
                result.innerHTML = adddisplay;
                input.innerHTML = i;
            }
            else {
                adddisplay += i;
                result.innerHTML = adddisplay;
                input.innerHTML = i;
            }
        }
        else {

            if(array1Index === "-" && array[array.length - 2] === "(") {
                adddisplay = "";
                adddisplay += i + ")";
                result.innerHTML = adddisplay;
                input.innerHTML = i;
            }
            else {
                adddisplay = "";
                adddisplay += i;
                result.innerHTML = adddisplay;
                input.innerHTML = i;
            }
        }
    }
}
const clearButton = function () {
    result.innerHTML = "0";
    adddisplay = "";
    input.innerHTML = "";
}
const showAdd = function() {

    let i = "+";
    let array = adddisplay.split("");
    let reget = /[0-9]/;
    let array1Index = array[array.length - 1];
    if(prevResult !== "") {
        adddisplay = prevResult + i;
        result.innerHTML = adddisplay;
        input.innerHTML = i;
        prevResult = "";
    }
    else {

        if ((!array1Index.includes(i)) && (reget.test(array1Index) === true)) {
            adddisplay += i;
            result.innerHTML = adddisplay;
            input.innerHTML = i;
        }

        else if(array1Index === "/" || array1Index === "*" || (array1Index === "-" && reget.test(array[array.length - 2]))) {
            array[array.length - 1] = "+";
            adddisplay = array.join("").toString();
            result.innerHTML = adddisplay;
            input.innerHTML = i;
        }

        else if(array1Index === "-" && array[array.length - 2] === "*") {
            array[array.length - 1] = "+";
            let arrayChange = array.splice(1, 1);
            adddisplay = array.join("").toString();
            result.innerHTML = adddisplay;
            input.innerHTML = i;
        }

        else if ((array1Index === "-") && (array[array.length - 2] === "(") && (array[array.length - 3] === "-")) {
            array[array.length - 1] = "+";
            let arrayChange = array.splice(1, 2);
            adddisplay = array.join("").toString();
            result.innerHTML = adddisplay;
            input.innerHTML = i;
        }
    }
}
const showSubtract = function() {
    let i = "-";
    let array = adddisplay.split("");
    let reget = /[0-9]/;
    let array1Index = array[array.length - 1];
    if(prevResult !== "") {
        adddisplay = prevResult + i;
        result.innerHTML = adddisplay;
        input.innerHTML = i;
        prevResult = "";
    }

    else {
        if (array1Index.includes(i) && array[array.length - 2] !== "(") {
            adddisplay += "(" + i;
            result.innerHTML = adddisplay;
            input.innerHTML = i;
        }
        else if(!array1Index.includes(i)) {
            adddisplay += i;
            result.innerHTML = adddisplay;
            input.innerHTML = i;
        }
    }
}
const showMultiply = function() {
    let i = "*";
    let array = adddisplay.split("");
    let reget = /[0-9]/;
    let array1Index = array[array.length - 1];
    if(prevResult !== "") {
        adddisplay = prevResult + i;
        result.innerHTML = adddisplay;
        input.innerHTML = i;
        prevResult = "";
    }

    else {
        if ((!array1Index.includes(i)) && (reget.test(array1Index) === true)) {
            adddisplay += i;
            result.innerHTML = adddisplay;
            input.innerHTML = i;
        }
        else if(array1Index === "/" || array1Index === "+" || array1Index === "-") {
            array[array.length - 1] = "*";

            adddisplay = array.join("").toString();
            result.innerHTML = adddisplay;
            input.innerHTML = i;
        }
    }
}
const showDivide = function() {
    let array = adddisplay.split("");
    let reget = /[0-9]/;
    let i = "/";
    let array1Index = array[array.length - 1];
    if(prevResult !== "") {
        adddisplay = prevResult + i;
        result.innerHTML = adddisplay;
        prevResult = "";
    }
    else {

        if ((!array1Index.includes(i)) && (reget.test(array1Index) === true)) {
            adddisplay += i;
            result.innerHTML = adddisplay;
        }
        else if(array1Index === "*" || array1Index === "+" || array1Index === "-") {
            array[array.length - 1] = "/";

            adddisplay = array.join("").toString();
            result.innerHTML = adddisplay;
            input.innerHTML = i;
        }
    }
}
const showDecimal = function() {
    let i = ".";
    let reget = /[0-9]/;
    let array = adddisplay.split("");

    if ((!array[array.length - 1].includes(i)) && (array[array.length - 2] !== i ) ) {
        adddisplay += i;
        result.innerHTML = adddisplay;
        input.innerHTML = i;
    }
}
const showEqual = function () {
    let e = eval(adddisplay);
    prevResult = e;
    let showResult = " = " + e;
    adddisplay += showResult;
    result.innerHTML = e;
    input.innerHTML = adddisplay;
}