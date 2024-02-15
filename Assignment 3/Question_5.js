fruits = ["apple", "banana", "orange", "grape", "kiwi"]

// a
const displayFruits = (array) => console.log(array);

displayFruits(fruits)

// b

const addFruits = (fruit) => {
    fruits.push(fruit)
}
addFruits("mango")
console.log(fruits);


// c
const RemoveLst = ()=>{
    fruits.pop()
}

//d 
const contain = ()=>{
    if (fruits.includes("orange")){
        return true
    }
    else{
        return 
    }
}

const c = contain()
console.log(c);

// e
const sortFruits = ()=>{
    fruits.sort((a, b)=>b.localeCompare(a))
}
sortFruits()
console.log(fruits);

//f

const swallowCopy = ()=>{
    const copy = fruits.slice()
    console.log(copy);
}

swallowCopy()