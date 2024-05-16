// fetch('http://localhost:3000/products')
//     .then(response => response.json())
//     .then(data => console.log(data));

// async function foo() {
//     try{
//         const response = await fetch('http://localhost:3000/products');
//         // console.log(response);
//         const result = await response.json();
//         console.log(result);
//     }catch(e){
//         console.log('Whoops!!!');
//     }

// }
// foo();

fetch('http://localhost:3000/products', {
    method: 'POST',
    body: JSON.stringify({
        "title": "ASD",
        "price": 3000,
        "description": "Good course!"
    }),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => response.json())
    .then(data => console.log(data));