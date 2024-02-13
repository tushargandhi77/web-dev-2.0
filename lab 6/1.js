const products = [
    {id:"p01",name:"Mobile",price:22000},
    {id:"p02",name:"Keyboard",price:1000},
    {id:"p03",name:"Mouse",price:500},
    {id:"p04",name:"Laptop",price:50000},
    {id:"p05",name:"headphone",price:100},
]

// // Display all
// products.forEach(product=>console.log(`${product.name} has a price of Rs ${product.price}`))

// // apply 10%
// let newProducts = products.map(product=>{
//     product.price = product.price - product.price*0.1 
//     return product
// })
// // Another method
// let newproducts = products.map(product=>({...product,price: product.price-product.price*0.1}))
// console.log(newproducts)


// Delete Headphone
let newProducts = products.filter(product => product.id!=="p05")
console.log(newProducts);


// Most valuelabel product

let mvProduct = products.reduce((mvp,product)=>{
    if(product.price>mvp.price){
        return product
    }
    else{
        return mvp
    }
},products[0])

console.log(mvProduct);

//sort

// products.sort((p1,p2)=>p1.price-p2.price)
products.sort((p1,p2)=>p2.name.localeCompare(p1.name))
console.log(products);
