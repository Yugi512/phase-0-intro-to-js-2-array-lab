const cats = [
    "Milo","Otis","Garfield",
];

function destructivelyAppendCat(name){
    cats.push(name);   
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    const newCats = [...cats,name];
    return newCats;
}

function prependCat(name){
    const newCat = [name,...cats];
    return newCat;
}
function removeLastCat(name){
    const newestCat = [...cats.slice(0,cats.length-1)];
    return newestCat;
}
function removeFirstCat(name){
    const catsTwo = [...cats.slice(1,cats.length)];
    return catsTwo;
}


