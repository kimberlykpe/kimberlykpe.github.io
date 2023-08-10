function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value, 
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID ="service_l7zdo0p";
    const templateID = "template_a0oj9tg";

    emailjs.send(serviceID, templateID, params)
    .then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value ="";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Successfully sent!")
    })
    .catch((err) => console.log(err));
}




