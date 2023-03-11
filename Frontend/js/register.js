const LoginForm = document.querySelector("#Login");
const SignupForm = document.querySelector("#Signup");

LoginForm.style.display = "none";
document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    LoginForm.style.display = "flex";
    SignupForm.style.display = "none";
});
document.querySelector("#linkSignup").addEventListener("click", e => {
    e.preventDefault();
     SignupForm.style.display = "flex";
     LoginForm.style.display = "none";

});
let signup_btn = document.getElementById('btn_signup');
let signin_btn = document.getElementById('btn_login');
signup_btn.addEventListener('click', signup);
signin_btn.addEventListener('click', signin);


function signup() {

    let name = document.getElementById('name_signup').value;
    let email = document.getElementById('email_signup').value;
    let password = document.getElementById('password_signup').value;
    let date = document.getElementById('date_signup').value;
    let type = document.getElementById('type_signup').value;
    let data = new FormData();
    
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('dob', date);
    data.append('type', type);
    if(validateText(date)){
    if(validateText(name)){
    if(isValidEmail(email)){
    if(isValidPassword(password)){
    axios.post('http://localhost/Hospital-project/Backend/signup.php', data)
    .then((result) => {
    console.log(result);
    if (result.data.status== "success") {
      alert("Signed up successfully!");
    if(type==1){
        window.location.href = "./html/admin.html";
    }else if(type==2){
         window.location.href = "./html/employee.html";
    } else if(type==3){
         window.location.href = "./html/patient.html";
    }
    } else {
      alert("Email Already exists!");
    }
  })
  .catch((err) => {
    console.error(err);
  });
        }else alert("password is not valid");
      }else alert("email is not valid");
    }else alert("name is empty")
}else alert("date is empty")     
}; 

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);}

    function isValidPassword(password) {
      const passRegex = /^(?=.*[!@#$%^&*()_+\-\=[\]{};':"\\|,.<>/?])(?=.*\d)(?=.*[A-Z]).{8,}$/;
      return passRegex.test(password);}
    function validateText(text) {
    if (text.trim().length === 0) {
      return false;
        }
       else return true;
}

function signin() {

    let email = document.getElementById('email_signin').value;
    let password = document.getElementById('password_signin').value;
    let type = document.getElementById('type_signup').value;
    console.log(isValidEmail(email));
    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    axios.post('http://localhost/Hospital-project/Backend/login.php', data).then(function (res) {
        console.log(res.data)
        
    if (res.data.response== "logged in") {
       
    if(type==1){
        window.location.href = "./html/admin.html";
    }
    else if(type==2){
         window.location.href = "./html/employee.html";
    } else if(type==3){
         window.location.href = "./html/patient.html";
    }

    }else {
      alert("Make sure login information is correct");
    }
    

    }).catch(function (err) {
        console.log(err);
    })

}