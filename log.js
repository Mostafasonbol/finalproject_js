let loginForm = document.getElementById('login');
console.log(loginForm);

let message=document.getElementById("message");
loginForm.addEventListener('submit', (event) => {
    
    event.preventDefault();

    let userEmail = document.getElementById('exampleInputEmail1').value;
    let userPassword = document.getElementById('exampleInputPassword1').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let existUser = users.filter(user => user.userEmail === userEmail && user.userPassword === userPassword);

    if (!userEmail || !userPassword) {
        message.innerText = "Please fill in the form";
        message.classList.add("alert-warning");
        return;
    }
    
    if (existUser.length > 0) {
   
        message.innerText = "login successfully";
        message.classList.add("alert-success");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        message.classList.add("alert-danger");
        message.innerText = "check user name or password";
    }
})