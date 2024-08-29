fetch('https://fakestoreapi.com/products').then((data) => {
    return data.json();
}).then((arrData) => {
    let singleData = "";
    arrData.map((values) => {
        singleData += `<div class="card">
            <p class="title">${values.title}</p>
            <img src=${values.image} alt="">
            <p class="category">${values.category}</p>
            <p class="description">${values.description}</p>
            <p class="price">${values.price}</p>
        </div>`;
    })
    // console.log(singleData);
    document.getElementById('cards').innerHTML = singleData;
}).catch((err) => {
    console.error(err);
});