const table = document.getElementById("cart-table");

// Add a click event listener to the table to handle clicks on the "Remove" links
table.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-row")) {
    // Get the index of the row to be removed
    const row = event.target.parentElement.parentElement;
    const rowIndex = Array.from(row.parentNode.children).indexOf(row);

    // Remove the product from the cart and update the cart total
    removeProduct(rowIndex);

    // Remove the row from the table
    row.remove();

    // Update the cart total after removing the product
    updateCartTotal();
  }
});

function removeProduct(index) {
    // Get the cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Remove the product at the specified index
    cart.splice(index, 1);
  
    // Store the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Clear the entire cart from localStorage (optional)
    localStorage.removeItem('cart');
  }
  

        // Function to update subtotal
        function updateSubtotal(inputElement) {
            const row = inputElement.closest('tr');
            const priceCell = row.querySelector('td:nth-child(4)');
            const subtotalCell = row.querySelector('td:nth-child(6)');
            const quantity = inputElement.value;
            const price = parseFloat(priceCell.textContent.replace('₹', ''));
            const subtotal = quantity * price;
            subtotalCell.textContent = `₹${subtotal.toFixed(2)}`;
            updateCartTotal();
        }

        function updateCartTotal() {
            const subtotalCells = document.querySelectorAll('#cart-table tbody tr td:nth-child(6)');
            let cartTotal = 0;
            subtotalCells.forEach(cell => {
                const subtotal = parseFloat(cell.textContent.replace('₹', ''));
                if (!isNaN(subtotal)) {
                    cartTotal += subtotal;
                }
            });
            const cartTotalCell = document.querySelector('#cart-total');
            cartTotalCell.textContent = `₹${cartTotal.toFixed(2)}`;
            const cartGrandTotalCell = document.querySelector('#cart-grand-total');
            cartGrandTotalCell.textContent = `₹${cartTotal.toFixed(2)}`;
        }

        // Calculate and display the initial cart total on page load
        window.onload = () => {
            populateCartTable();
            updateCartTotal();
        };


        function applyCoupon() {
            const couponCode = document.getElementById("coupon-code").value;
            const cartTotalCell = document.querySelector('#cart-total');
            const cartGrandTotalCell = document.querySelector('#cart-grand-total');
        
            // Get the current cart total
            const currentCartTotal = parseFloat(cartTotalCell.textContent.replace('₹', ''));
        
            if (couponCode === "DISCOUNT5") {
                // Calculate the discount amount (5% of the current total)
                const discountAmount = 0.05 * currentCartTotal;
        
                // Calculate the new cart total after applying the discount
                const newCartTotal = currentCartTotal - discountAmount;
        
                // Update the discount and cart total cells
                const discountCell = document.querySelector('#discount');
                discountCell.textContent = `₹${discountAmount.toFixed(2)}`;
                cartGrandTotalCell.textContent = `₹${newCartTotal.toFixed(2)}`;
            } else {
                // Remove the discount if the coupon code is not "DISCOUNT5"
                const discountCell = document.querySelector('#discount');
                discountCell.textContent = `₹0.00`;
                cartGrandTotalCell.textContent = `₹${currentCartTotal.toFixed(2)}`;
        
                // You can also display a message indicating that the coupon was removed.
                alert("Invalid Coupon");
            }
        }
        
// // Function to populate the cart table from localStorage data
// function populateCartTable() {
//     const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
//     const cartTable = document.getElementById("cart-table").querySelector("tbody");

//     cartData.forEach(item => {
//         const newRow = document.createElement("tr");
//         newRow.innerHTML = `
//             <td><a href="#" class="remove-row">Remove</a></td>
//             <td><img src="img/${item.productName}/${item.productName}.jpg" alt=""></td>
//             <td>${item.productName}</td>
//             <td>₹${item.price.toFixed(2)}</td>
//             <td><input type="number" value="${item.quantity}" onchange="updateSubtotal(this)"></td>
//             <td>₹${(item.price * item.quantity).toFixed(2)}</td>
//         `;
//         cartTable.appendChild(newRow);
//     });

//     // Update the cart total
//     updateCartTotal();
// }

// // // Call populateCartTable when the cart page loads
// // window.addEventListener('load', populateCartTable);

        