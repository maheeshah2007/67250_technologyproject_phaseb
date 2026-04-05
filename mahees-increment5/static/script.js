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

function addYear() {
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.innerHTML = "© " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}
ActiveNav();

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

function submitTickets() {
    alert("Redirecting to payment system.");
}

function toggleNav() {
    var navLinks = document.querySelectorAll('.nav_bar a:not(.cta)');
    navLinks.forEach(function(link) {
        link.classList.toggle("responsive");
    });
}

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