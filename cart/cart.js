// Get modal and close button elements
var modal = document.getElementById("cartModal");
var closeBtn = document.getElementById("closeModal");

// Open the modal when the cart link is clicked
document.querySelector(".cart a").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent navigating to cart.html
    modal.style.display = "block"; // Show modal
});

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
