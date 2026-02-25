// نختار العناصر
let titre = document.getElementById("titre");
let bouton = document.getElementById("btn");
let body = document.body;

// نسمعو للزر منين يتضغط
bouton.addEventListener("click", function() {
  // نبدلو الكلاس ديال body
  body.classList.toggle("dark");

  // نبدلو النص على حسب الوضع
  if (body.classList.contains("dark")) {
    titre.textContent = "الوضع الليلي 🌙";
    bouton.textContent = "ارجع للوضع العادي ☀️";
  } else {
    titre.textContent = "الوضع العادي ☀️";
    bouton.textContent = "بدل للوضع الليلي 🌙";
  }
});
