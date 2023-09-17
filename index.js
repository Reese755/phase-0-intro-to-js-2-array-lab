// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"];
cats;
console.log(cats);
const newcat = [
    ...cats.slice(0,3),
    "Broom",
];
const allcats = [...cats,"Broom"];

function  destructivelyAppendCat() {
    cats.push("Ralph");
    console.log(cats);
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    console.log(cats)
}

function destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
}

function appendCat(cat) {
    const cats2 = [...cats, cat];
    return cats2;
    console.log(cats);
    console.log(cats2)
}
function prependCat(cat) {
    const cats3 = [cat, ...cats]
    return cats3;
    console.log(cats);
    console.log(cats3)
}
function removeLastCat() {
    return cats.slice(0, -1) 
}

function removeFirstCat() {
    return cats.slice(1) 
}