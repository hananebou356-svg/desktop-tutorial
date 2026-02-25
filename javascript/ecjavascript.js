
      const form = document.getElementById("userForm");
 const usersList = document.getElementById("usersList");
let users = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const names = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value.trim();
    const successMsg = document.getElementById("successMsg");
    const usersList = document.getElementById("usersList")

    document.querySelectorAll(".error").forEach(el => el.textContent = "") ;

    let hasError = false;

    if (names === "") {
        document.getElementById("nameError").textContent = "Nom invalide";
        hasError = true;
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Email invalide";
        hasError = true;
    }

    if (password.length < 4) {
        document.getElementById("passwordError").textContent = "Mot de passe invalide";
        hasError = true;
    }

    if (age === "" || isNaN(age) || age < 10) {
        document.getElementById("ageError").textContent = "Âge invalide";
        hasError = true;
    }

    if (phone === "" || isNaN(phone) || phone.length !== 10) {
        document.getElementById("phoneError").textContent = "Téléphone invalide";
        hasError = true;
    }

    if (hasError) return;

    const user = {
        name: names,
        email: email,
        password: password,
        phone: phone,
        age: Number(age),
    };

    users.push(user);
    console.log(users);

    successMsg.textContent = "Créé avec succès";

    const div = document.createElement("div");
    div.innerHTML = `${user.name} <br> ${user.email} <br> ${user.phone} <br> ${user.age}`;
    usersList.appendChild(div);

    form.reset();
});





