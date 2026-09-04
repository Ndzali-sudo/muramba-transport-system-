// Booking Form
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("fullName").value;
        const service = document.getElementById("service").value;

        alert(
            "Booking submitted successfully!\n\n" +
            "Customer: " + name + "\n" +
            "Service: " + service
        );

        bookingForm.reset();

    });
}


// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            "Thank you, " + name +
            "! Your message has been received."
        );

        contactForm.reset();

    });
}


// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Login submitted successfully!"
        );

    });
}


// Delivery Tracking
const trackingForm = document.getElementById("trackingForm");

if (trackingForm) {

    trackingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const deliveryId =
            document.getElementById("deliveryId").value;

        document.getElementById("displayDeliveryId")
            .textContent = deliveryId;

        document.getElementById("driverName")
            .textContent = "Assigned Driver";

        document.getElementById("deliveryStatus")
            .textContent = "In Transit";

        document.getElementById("estimatedDelivery")
            .textContent = "Pending Confirmation";

        alert(
            "Delivery information found for " +
            deliveryId
        );

    });
}
