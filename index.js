// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    cats.push ("Ralph");
}

function destructivelyPrependCat (){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat (){
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo");
}

function appendCat(Broom){
  var cat_1 = [...cats, Broom]
   return cat_1;
}

function prependCat (Arnold){
    var cat_1 = [Arnold, ...cats];
    return cat_1;
}
function removeLastCat(){
    var cat_1 = cats.slice(0 , cats.length-1 );
    return (cat_1);
}
function removeFirstCat(){
    var cat_1 = cats.slice(1);
    return (cat_1);
}