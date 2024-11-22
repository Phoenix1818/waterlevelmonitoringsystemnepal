// Initialize counts
let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;
let wishlistCount = localStorage.getItem('wishlistCount') ? parseInt(localStorage.getItem('wishlistCount')) : 0;

// Get button and count elements
const likeBtn = document.getElementById('likeBtn');
const wishlistBtn = document.getElementById('wishlistBtn');
const likeCountDisplay = document.getElementById('likeCount');
const wishlistCountDisplay = document.getElementById('wishlistCount');

// Display the current counts from local storage
likeCountDisplay.textContent = likeCount;
wishlistCountDisplay.textContent = wishlistCount;

// Check if the user has already liked or added to wishlist
const liked = localStorage.getItem('liked') === 'true';
const wishlisted = localStorage.getItem('wishlisted') === 'true';

// Disable the buttons if the user has already clicked on them
if (liked) {
    likeBtn.disabled = true;
    likeBtn.textContent = "You Liked this";
}

if (wishlisted) {
    wishlistBtn.disabled = true;
    wishlistBtn.textContent = "Added to Wishlist";
}

// Add event listener to the "Like" button
likeBtn.addEventListener('click', () => {
    if (!liked) {
        likeCount++; // Increment the like count
        likeCountDisplay.textContent = likeCount; // Update the displayed count
        localStorage.setItem('likeCount', likeCount); // Save like count to local storage
        localStorage.setItem('liked', 'true'); // Mark as liked in local storage

        // Disable the button and update text
        likeBtn.disabled = true;
        likeBtn.textContent = "You Liked this";
    }
});

// Add event listener to the "Wishlist" button
wishlistBtn.addEventListener('click', () => {
    if (!wishlisted) {
        wishlistCount++; // Increment the wishlist count
        wishlistCountDisplay.textContent = wishlistCount; // Update the displayed count
        localStorage.setItem('wishlistCount', wishlistCount); // Save wishlist count to local storage
        localStorage.setItem('wishlisted', 'true'); // Mark as wishlisted in local storage

        // Disable the button and update text
        wishlistBtn.disabled = true;
        wishlistBtn.textContent = "Added to Wishlist";
    }
});
 // Redirect to thank-you.html
// Handle form submission and display a success message
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block'; // Display the success message

    // Optionally, you can reset the form fields
    const preorderForm = document.getElementById('preorderForm');
    preorderForm.reset();
}

