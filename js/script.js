/* <div class="item">
<h2>ProductName</h2>
<div class="disc">
    <p>Description</p>
    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae fugiat maiores atque? Sit accusamus id in minima voluptatum quia, aut, laboriosam, sint fugiat repellat labore ducimus perferendis voluptates odio.</h3>
</div>
</div> */

const div = document.querySelector('.container')

const BASE_URL = `https://fakestoreapi.com/products`

const fetchProducts = async function (url) {
    await fetch(url)
    .then(res => {
        if (!res.ok) {
            throw new Error(`status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        console.dir(data)
        data.map(item => {
            div.insertAdjacentHTML("beforebegin", `
                <div class="item">
                    <h2>${item.title}</h2>
                    <div class="disc">
                        <p>Description</p>
                        <h4>${item.description}</h4>
                    </div>
                    <img src="${item.image}" alt="">
                </div> 
`)
        })
    })
}

fetchProducts(BASE_URL)