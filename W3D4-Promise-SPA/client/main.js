window.onload = function () {
    loadProducts();
    document.getElementById('submitBtn').onclick = addNewProduct;
}

async function addNewProduct(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify({
            title,
            price,
            description
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });
    // location.reload();
    const product = await response.json();
    // console.log(result);
    document.getElementById('products-tbody').innerHTML += `
        <tr>
            <th scope="row">${product.id}</th>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
        </tr>
    `;
}


function loadProducts() {
    let html = '';
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                html += `
                <tr>
                <th scope="row">${product.id}</th>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
              </tr>
                `
            });
            document.getElementById('products-tbody').innerHTML = html;
        })
}