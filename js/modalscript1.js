

 // Automatically set the Date of Order when the modal is shown
 document.getElementById('aftersalesService').addEventListener('show.bs.modal', function () {
    const dateOfOrderInput = document.getElementById('dateR');
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: true 
    });
    dateOfOrderInput.value = formattedDate;
  });


document.addEventListener("DOMContentLoaded", function() {
    let poCode = document.getElementById("submittedPOCode").innerText;
    storePOCode(poCode);
});


document.getElementById('porequest').addEventListener('show.bs.modal', function () {
    const dateOfOrderInput = document.getElementById('date-of-order');
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: true 
    });
    dateOfOrderInput.value = formattedDate;
  });


  // Handle form submission
  document.getElementById('submitForm').addEventListener('click', function() {
    const form = document.getElementById('poForm');
    
    if (form.checkValidity()) {
      // Hide the Purchase Order Form modal
      $('#porequest').modal('hide');
      
      // Generate a unique request code
      const requestCode = 'PO' + Math.random().toString(36).substr(2, 9).toUpperCase();

      // Display the success message modal and show the generated request code
      document.getElementById('requestCode').innerText = requestCode;

      // Show the Success Message modal
      $('#successModal').modal('show');
    } else {
      form.reportValidity(); // Trigger HTML5 validation
    }
  });





  $(document).ready(function () {
    // When clicking on the "Ethnic" span, show the modal
    $("#quotationRequest").on("click", function () {
        $("#porequestModal").modal("show");
    });

    // When clicking the "Request Quote" button, show the modal
    $("#requestButton").on("click", function () {
        $("#porequestModal").modal("show");
    });
});





let cart = [];

    function addToCart(name, image) {
        cart.push({ name, image });
        updateCartCount();
    }

    function updateCartCount() {
        document.getElementById('cart-count').innerText = cart.length;
    }

    function viewCart() {
        let cartList = document.getElementById('cart-items');
        cartList.innerHTML = cart.length > 0 ? '' : '<li class="list-group-item text-center">Your cart is empty</li>';
        
        cart.forEach((item, index) => {
            cartList.innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <img src="${item.image}" alt="${item.name}" width="50">
                    ${item.name}
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
                </li>`;
        });

        new bootstrap.Modal(document.getElementById('cartModal')).show();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartCount();
        viewCart();
    }