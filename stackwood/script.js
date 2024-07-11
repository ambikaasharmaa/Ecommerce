document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var payment = document.getElementById('payment').value;

    if (name.trim() === '' || email.trim() === '' || address.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Additional validation logic can be added here

    // If all validations pass, submit the form
    this.submit();
});
