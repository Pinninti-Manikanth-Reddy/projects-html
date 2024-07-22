document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to all 'Book Now' buttons
    const bookNowButtons = document.querySelectorAll('.button');
    bookNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            showBookingForm(this);
        });
    });

    // Function to show booking form
    function showBookingForm(button) {
        const packageTitle = button.closest('figure') ? button.closest('figure').querySelector('figcaption').innerText : 'Holiday';
        const bookingFormHtml = `
            <div id="booking-form-container">
                <div id="booking-form">
                    <h2>Book ${packageTitle}</h2>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"><br>
                    <label for="phone">Phone:</label>
                    <input type="text" id="phone" name="phone"><br>
                    <button id="submit-booking">Submit</button>
                    <button id="cancel-booking">Cancel</button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', bookingFormHtml);
        
        document.getElementById('submit-booking').addEventListener('click', submitBooking);
        document.getElementById('cancel-booking').addEventListener('click', cancelBooking);
    }

    // Function to handle booking submission
    function submitBooking() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        if (name && email && phone) {
            alert(Booking confirmed for ${name}.\nEmail: ${email}\nPhone: ${phone});
            removeBookingForm();
        } else {
            alert('Please fill out all fields.');
        }
    }

    // Function to handle booking cancellation
    function cancelBooking() {
        removeBookingForm();
    }

    // Function to remove booking form
    function removeBookingForm() {
        const bookingFormContainer = document.getElementById('booking-form-container');
        if (bookingFormContainer) {
            bookingFormContainer.remove();
        }
    }

    // Add navigation functionality
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});