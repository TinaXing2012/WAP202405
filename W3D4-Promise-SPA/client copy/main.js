window.onload = function () {
    loadProducts();
}

function loadProducts() {
    let html = `
    <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
    `
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
            html += `
            </tbody>
            </table>
            `
            document.getElementById('products').innerHTML = html;
        })
}