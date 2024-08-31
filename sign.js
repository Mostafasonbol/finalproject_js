let regUerName = document.getElementById('exampleInputText1');
let regUerEmail = document.getElementById('exampleInputEmail1');
let regUerPssword = document.getElementById('exampleInputPassword1');
let regButton = document.getElementById('btmsign');
let registerForm = document.getElementById('sign_up');
let messsage = document.getElementById("message");
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let userName = regUerName.value;
    let userEmail = regUerEmail.value;
    let userPassword = regUerPssword.value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.filter((user) => {
        if (user.userName == userName || user.userEmail == userEmail) {
            console.log('user EXIT');

        }
        return;
    })
    if (!userName || !userEmail || !userPassword) {
        messsage.innerText="Please fill in the form"
        messsage.classList.add("alert-warning");
        return;
    }


    const existingUsers = users.filter(user => user.userName === userName || user.userEmail === userEmail);

    if (existingUsers.length > 0) {
        messsage.innerText = "user already exit";
        messsage.classList.add("alert-danger");

    } else {

        users.push({ userName: userName, userEmail: userEmail, userPassword: userPassword });

        localStorage.setItem("users", JSON.stringify(users));

        messsage.innerText = "user added successfully";
        messsage.classList.add("alert-success");
        regUerName.value = "";
        regUerEmail.value = "";
        regUerPssword.value = "";

        setTimeout(() => {
            window.location.href = "log_in.html";
        }, 1000);
    }

});