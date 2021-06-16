// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // Get DOM elements
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // get value from DOM elements
  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  // Get DOM Element subtotal
  const subtotal = product.querySelector('.subtotal span');

  const subtotalValue = priceValue * quantityValue;

  subtotal.innerHTML = subtotalValue;

  return subtotalValue;
  // ... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const allProducts = document.getElementsByClassName('product');
  const allProducts = document.querySelectorAll('.product');
  console.log(allProducts);

  const productsArray = [...allProducts];

  // let total = 0;


  // productsArray.forEach((product) => {
  //   total += updateSubtotal(product);
  // });

  const total = productsArray.reduce((acc, product) => { 
    return acc += updateSubtotal(product);
  }, 0);

  // for (let i = 0; i < allProducts.length; i += 1) {
  //   total += updateSubtotal(allProducts[i]);
  // }

  // const totalElement = document.getElementById('total-value');
  // const totalValue = totalElement.getElementsByTagName('span');
  // console.log(totalValue);
  // totalValue[0].innerHTML = total;

  document.querySelector('#total-value span').innerHTML = total;


  // end of test

  // ITERATION 2
  // ... your code goes here

  // ITERATION 3
  // ... your code goes here
}

// ITERATION 4

function removeProduct(event) {

  const row = event.target.parentNode.parentNode;

  const parent = row.parentNode;

  parent.removeChild(row);

  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  console.log(event.target);
  const newProduct = document.querySelector('.create-product');

  const newProductName = newProduct.querySelector('input');
  const newProductPrice = newProduct.querySelector("input[type='number']");

  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
          <td class="name">
            <span>${newProductName.value}</span>
          </td>
          <td class="price">$<span>${newProductPrice.valueAsNumber.toFixed(2)}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;
  const parent = document.querySelector('#cart tbody');

  // parent.innerHTML += `
  // <tr class="product">
  //   <td class="name">
  //     <span>${newProductName.value}</span>
  //   </td>
  //   <td class="price">$<span>${newProductPrice.valueAsNumber.toFixed(2)}</span></td>
  //   <td class="quantity">
  //     <input type="number" value="0" min="0" placeholder="Quantity" />
  //   </td>
  //   <td class="subtotal">$<span>0</span></td>
  //   <td class="action">
  //     <button class="btn btn-remove">Remove</button>
  //   </td>
  // </tr>
  // `;


  parent.appendChild(newRow);

  const removeButton = newRow.querySelector('.btn-remove');

  removeButton.addEventListener('click', removeProduct);

  // clean fields

  newProductName.value = '';
  newProductPrice.value = 0;

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName('btn-remove');

  for (let removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct);
  }

  const addButton = document.getElementById('create');
  addButton.addEventListener('click', createProduct);

  // ... your code goes here
});
