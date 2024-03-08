const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    

    const bodyMessage = `Full Name :${fullname.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br> Message:${message.value}<br>`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rumadev1981@gmail.com",
        Password : "1AB4EE1B56301BC81C85C205398172465AD3",
        To : 'rumadev1981@gmail.com',
        From : "rumadev1981@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
});