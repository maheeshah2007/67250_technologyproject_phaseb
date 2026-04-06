// script.js — MonoMuse Museum Website
// Author: Your Name
// External Libraries:
// - jQuery 4.0.0 — https://jquery.com/ (MIT License) — Read More/Less toggle
// - Leaflet 1.9.4 — https://leafletjs.com/ (BSD 2-Clause) — Interactive map
// - OpenStreetMap — https://www.openstreetmap.org/copyright (ODbL) — Map tiles

var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

// Time-based greeting — runs on page load, updates #greeting on index.html
var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var greetElement = document.getElementById("greeting");
    if (!greetElement) return;
    if (h < 5 || h >= 20) {
        greetElement.innerHTML = "Good night";
    } else if (h < 12) {
        greetElement.innerHTML = "Good morning";
    } else if (h < 18) {
        greetElement.innerHTML = "Good afternoon";
    } else {
        greetElement.innerHTML = "Good evening";
    }
}
greeting(hour);

// Dynamic footer year — called via onload="addYear()" on every page
function addYear() {
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.innerHTML = "© " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}

// Active navigation — highlights the current page link dynamically
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}
ActiveNav();

// Read More / Read Less toggle using jQuery 4.0.0 — https://jquery.com/
// Only runs on index.html where jQuery is loaded
if (typeof $ !== 'undefined') {
    $(document).ready(function () {
        $("#readMore").click(function () {
            $("#longIntro").show();
            $("#readLess").show();
            $("#readMore").hide();
        });
        $("#readLess").click(function () {
            $("#longIntro").hide();
            $("#readLess").hide();
            $("#readMore").show();
        });
    });
}

// Shows the hidden purchase form on buytickets.html and pre-fills the date
function showPurchaseForm(dateValue) {
    var form = document.getElementById("purchaseForm");
    if (form) {
        form.style.display = "block";
        var dateInput = document.getElementById("selectedDate");
        if (dateInput && dateValue) {
            dateInput.value = dateValue;
        }
        form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// Shows alert simulating payment redirect on buytickets.html
function submitTickets() {
    alert("Redirecting to payment system.");
}

// Hamburger nav toggle — adds/removes .responsive class on mobile
function toggleNav() {
    var navLinks = document.querySelectorAll('.nav_bar a:not(.cta)');
    navLinks.forEach(function(link) {
        link.classList.toggle("responsive");
    });
}

// Leaflet map — https://leafletjs.com/ (BSD 2-Clause)
// Map tiles by OpenStreetMap — https://www.openstreetmap.org/copyright (ODbL)
// Only runs on explore.html where #map exists
function initMap() {
    var mapEl = document.getElementById("map");
    if (!mapEl) return;
    var map = L.map('map').setView([40.4433, -79.9436], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([40.4433, -79.9436]).addTo(map)
        .bindPopup('MonoMuse Museum<br>Pittsburgh, PA')
        .openPopup();
}
initMap();

// Checkout price calculator — updates total in real time on checkout.html
function updatePrice() {
    var typeSelect = document.getElementById("ticketType");
    var qtyInput = document.getElementById("ticketQty");
    if (!typeSelect || !qtyInput) return;

    var price = parseFloat(typeSelect.value) || 0;
    var qty = parseInt(qtyInput.value) || 0;
    var total = price * qty;

    var totalEl = document.getElementById("totalPrice");
    var summaryTotal = document.getElementById("summaryTotal");
    var summaryType = document.getElementById("summaryType");
    var summaryQty = document.getElementById("summaryQty");
    var summaryDate = document.getElementById("summaryDate");
    var visitDate = document.getElementById("visitDate");

    if (totalEl) totalEl.innerText = "$" + total.toFixed(2);
    if (summaryTotal) summaryTotal.innerText = "$" + total.toFixed(2);
    if (summaryType) {
        var typeText = typeSelect.options[typeSelect.selectedIndex].text;
        summaryType.innerText = typeSelect.value ? typeText : "—";
    }
    if (summaryQty) summaryQty.innerText = qty > 0 ? qty : "—";
    if (summaryDate && visitDate) summaryDate.innerText = visitDate.value || "—";
}

// Attach price calculator listeners once DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    var typeSelect = document.getElementById("ticketType");
    var qtyInput = document.getElementById("ticketQty");
    var visitDate = document.getElementById("visitDate");
    if (typeSelect) typeSelect.addEventListener("change", updatePrice);
    if (qtyInput) qtyInput.addEventListener("input", updatePrice);
    if (visitDate) visitDate.addEventListener("change", updatePrice);
});

// Checkout form validation — validates all fields, saves to sessionStorage, redirects
function placeOrder() {
    var valid = true;

    var visitDate = document.getElementById("visitDate");
    var ticketType = document.getElementById("ticketType");
    var ticketQty = document.getElementById("ticketQty");
    var email = document.getElementById("email");
    var zipCode = document.getElementById("zipCode");

    // Clear all previous errors
    document.querySelectorAll(".error-msg").forEach(function(el) {
        el.style.display = "none";
    });
    document.querySelectorAll("input, select").forEach(function(el) {
        el.style.borderColor = "";
    });

    if (!visitDate.value) {
        document.getElementById("visitDateError").style.display = "block";
        visitDate.style.borderColor = "#e07070";
        valid = false;
    }

    if (!ticketType.value) {
        document.getElementById("ticketTypeError").style.display = "block";
        ticketType.style.borderColor = "#e07070";
        valid = false;
    }

    var qty = parseInt(ticketQty.value);
    if (!qty || qty < 1 || qty > 10) {
        document.getElementById("ticketQtyError").style.display = "block";
        ticketQty.style.borderColor = "#e07070";
        valid = false;
    }

    // Email format validation using regex
    var emailVal = email.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
        document.getElementById("emailError").style.display = "block";
        email.style.borderColor = "#e07070";
        valid = false;
    }

    // Zip code optional — must be exactly 5 digits if filled in
    var zip = zipCode.value.trim();
    if (zip !== "" && !/^\d{5}$/.test(zip)) {
        document.getElementById("zipCodeError").style.display = "block";
        zipCode.style.borderColor = "#e07070";
        valid = false;
    }

    if (!valid) return;

    // Save order details to sessionStorage for confirmation page
    var price = parseFloat(ticketType.value);
    var total = price * qty;
    var typeText = ticketType.options[ticketType.selectedIndex].text;

    sessionStorage.setItem("confType", typeText);
    sessionStorage.setItem("confQty", qty);
    sessionStorage.setItem("confDate", visitDate.value);
    sessionStorage.setItem("confEmail", emailVal);
    sessionStorage.setItem("confTotal", "$" + total.toFixed(2));

    window.location.href = "confirmation.html";
}

// Loads order data from sessionStorage and displays it on confirmation.html
function loadConfirmation() {
    var fields = ["confType", "confQty", "confDate", "confEmail", "confTotal"];
    fields.forEach(function(key) {
        var el = document.getElementById(key);
        if (el) el.innerText = sessionStorage.getItem(key) || "—";
    });
}

// Slideshow — initialized on exhibitions.html
// currentSlide tracks which slide is visible
var currentSlide = 0;

function initSlideshow() {
    var slides = document.querySelectorAll(".slide");
    var dotsContainer = document.getElementById("slideDots");
    if (!slides.length) return;

    // Hide all slides first, then show only the first one
    slides.forEach(function(slide, i) {
        slide.style.display = "none";
    });
    slides[0].style.display = "block";

    // Build dot indicators
    if (dotsContainer) {
        dotsContainer.innerHTML = "";
        slides.forEach(function(_, i) {
            var dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active-dot");
            dot.onclick = function() { goToSlide(i); };
            dotsContainer.appendChild(dot);
        });
    }
}

function goToSlide(n) {
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot");
    if (!slides.length) return;

    // Hide current slide
    slides[currentSlide].style.display = "none";
    if (dots.length) dots[currentSlide].classList.remove("active-dot");

    // Calculate new index with wrapping
    currentSlide = (n + slides.length) % slides.length;

    // Show new slide
    slides[currentSlide].style.display = "block";
    if (dots.length) dots[currentSlide].classList.add("active-dot");
}

function changeSlide(direction) {
    goToSlide(currentSlide + direction);
}

// Run slideshow init when DOM is ready
document.addEventListener("DOMContentLoaded", initSlideshow);