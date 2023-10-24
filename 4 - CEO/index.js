window.addEventListener('load',()=>{
    const htmlProducts = document.getElementById('list-products')
    const htmlOffers = document.getElementById('list-offers')
    
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
            SetCategories(categories)
            const offers = data.offers
            SetOffers(offers)
            
    });


    function SetCategories(categories){
        let responseCategory = ``
        categories.forEach((category)=>{
            responseCategory += `
                <div class="category">
                    <h2>${category.name}</h2>
                    <div class="products">
                    `
                responseCategory += SetProducts(category.value)
            responseCategory+=`</div></div>`
        })
        htmlProducts.innerHTML = responseCategory
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

    function SetOffers(offers){
        let resultOffers = `<div class="category">
            <h2>Ofertas Especiais</h2>
            <div  class="products">`
        resultOffers += SetProducts(offers)
        resultOffers+=`</div></div>`
        htmlOffers.innerHTML = resultOffers
    }
})


