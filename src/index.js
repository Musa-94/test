//init([array]) returns nothing;
massiv = [3, 4, 7, 9];
massiv.push(3);
massiv.unshift(1);

// clear() returns nothing;
massiv = [3, 4, 7, 9, 2, 1];
massiv.pop();
massiv.shift();
massiv.length = [];

//getSize() returns size;
getSizeArray([3, 4, 7, 9, 2, 1]);
function getSizeArray(msv){
    let lengthmsv = msv.length;

    return lengthmsv;
};

//toString() returns string, i.e. “[1, 0, -8]”;
getStringArray([3, 4, 7, 9, 2, 1]);
function getStringArray(msv){
    let stringmsv = msv.toString();

    return stringmsv;
};

// toArray() returns array of values [1, 0, -8];
getValuesArray([2, 5, 3, 4]);
function getValuesArray(msv){
    return msv;
};

// sort(function(first, seconod) returns nothing (сортирует массив на месте);
getSortArray([3, 4, 7, 9, 12, 1]);
function getSortArray(msv){
    msv.sort((a, b) => (a - b));
}

// get(index) returns element in ArrayLIst by index;
getIndexElementsArray([3, 5, 2, 7, 1]);
function getIndexElementsArray(msv){
    let allIndex = [];
    for(let index = 0; index < msv.length; index++){
        allIndex += index;
    }

    return allIndex;
};

// set(index, value) changes element in ArrayLIst by index;
getIndexAndValueElementsArray([3, 5, 2, 7, 1]);
function getIndexAndValueElementsArray(msv){
    let index = [];
    
    for(let inmsv = 0; inmsv < msv.length; inmsv++){
        index += inmsv;
		index += msv[inmsv];
    }

    return index;
}

// Реализовать структуру данных LinkedList (однонаправленную), реализующую те же свойства и методы.
let user = {};
user.name = "Musa";
user.age = 25;

for(let key in user){
console.log(key + user[key]);
}

