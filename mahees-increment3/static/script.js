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

// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Banana found!");
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

// function findBananaForEach(arr) {
//     arr.forEach(function(item) {
//         if (item === "Banana") {
//             alert("Banana found!");
//         }
//     });
// }

// findBananaForEach(L1);
// findBananaForEach(L2);

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