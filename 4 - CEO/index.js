window.addEventListener('load',()=>{
    const htmlProducts = document.getElementById('list-products')
    
    fetch('data.json')
    .then(response => response.json())
        .then(data => 
        {
            const categories = Object.keys(data.categories)
                .map((key)=>{
                    return {
                        name: key, 
                        value: data.categories[key]
                    }})
            const responseCategory = SetCategories(categories)

            htmlProducts.innerHTML = responseCategory
            const htmlOffers = document.getElementById('list-offers')
            const offers = data.offers
            console.log(offers)
            let resultOffers = `<div class="products">`
            resultOffers += SetProducts(offers)
            resultOffers+=`</div>`
            htmlOffers.innerHTML = resultOffers
    });


    function SetCategories(categories){
        let responseCategory = ``
        categories.forEach((category)=>{
            responseCategory += `
                <div class="category">
                    <h1>${category.name}</h1>
                    <div class="products">
                    `
                responseCategory += SetProducts(category.value)
            responseCategory+=`</div></div>`
        })
        return responseCategory
    }
    
    function SetProducts(products){
        let responseProduct = ``
        products.forEach((product)=>{
            responseProduct += `
                        <article class="product card-img">
                            <figure >
                                <img class="card-cover" src="./assets/${product.id}.PNG" alt="${product.name}">
                                <span class="title">${product.name}</span>
                                <figcaption>${product.description}</figcaption>
                            </figure>`
                if(product.discountPercentage > 0){
                    responseProduct+=`
                            <div class="discount">
                                ${product.discountPercentage}%
                            </div>
                            <div class="price">
                                <span>R$ ${(product.price *(1-product.discountPercentage/100)).toFixed(2)}</span>
                                <span>R$ ${product.price}</span>
                            </div>
                        </article>`
                            
                }else{
                    responseProduct+=`
                            <div class="price">
                                <span>R$ ${(product.price *(1-product.discountPercentage/100)).toFixed(2)}</span>
                            </div>
                        </article>`
                }
        })
        return responseProduct;
    }
})


