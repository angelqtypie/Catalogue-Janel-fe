fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const productListContainer = document.getElementById('product-list');

        data.forEach(product => {
            const cardItem = document.createElement('div');
            cardItem.classList.add('card');

            let clickCount = 0; 

            cardItem.innerHTML = `
            
            
            <h1 class="card-title">${product.name}</h1>
            <a class="card-text">baho na shorts. </a>
            <a href="#" class=" btn btn-primary"> product.price</a>
          </div>
        </div
        <div class="card" style="w-100">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body">
                <div class="details">
                    <p></p>
                    <h2>${product.price}</h2>
                    <button class="addToCartBtn">Add to Cart</button>
                    <button class="cancelBtn">Cancel</button>
                    <p>Quantity: <span class="clickCount">${clickCount}</span></p>
                </div>

               
 
            `;

            const addToCartButton = cardItem.querySelector('.addToCartBtn');
            const cancelBtn = cardItem.querySelector('.cancelBtn');
            const clickCountElement = cardItem.querySelector('.clickCount');

            addToCartButton.addEventListener('click', () => {
                clickCount++;
                clickCountElement.textContent = clickCount;
            });

            cancelBtn.addEventListener('click', () => {
                clickCount = 0;
                clickCountElement.textContent = clickCount;
            });

            productListContainer.appendChild(cardItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);

function addToCart(productName) {
  let clickCount = parseInt(document.getElementById(`clickCount${productName}`).innerText);
  clickCount++;
  document.getElementById(`clickCount${productName}`).innerText = clickCount;
}    });