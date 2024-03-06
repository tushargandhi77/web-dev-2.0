const fetchProduct = async ()=>{
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        const product = await response.json()
        return product
    }
    catch(error){
        console.log(error);
        throw error
    }
}

const dispayProduct = async ()=>{
    const productContainer = document.getElementById('productContainer');

    try{
        const products = await fetchProduct();

        products.forEach(product=>{
            const productcard = document.createElement('div')
            productcard.className = 'product-card'

            const productImage = document.createElement('img')
            productImage.className = 'product-image'
            productImage.src = product.image 
            productImage.alt = product.title 

            const productName = document.createElement('p')
            productName.textContent = product.title 

            const productPrice = document.createElement('p')
            productPrice.textContent = `${product.price}`

            productcard.appendChild(productImage)
            productcard.appendChild(productName)
            productcard.appendChild(productPrice)

            productContainer.appendChild(productcard)
        })
    }
    catch(error){
        console.log(error);
    }
}

dispayProduct()