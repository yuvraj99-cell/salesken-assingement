const signupbtn=document.querySelector('.signupbtn');
const loginbtn=document.querySelector('.loginbtn');
const movebtn=document.querySelector('.movebtn');
const signup=document.querySelector('.signup');
const login=document.querySelector('.login');


loginbtn.addEventListener('click',()=>{
    movebtn.classList.add('rightbtn');
    login.classList.add('loginForm');
    signup.classList.remove('signupForm');
    movebtn.innerHTML="Login";
})
signupbtn.addEventListener('click',()=>{
    movebtn.classList.remove('rightbtn');
    login.classList.remove('loginForm');
    signup.classList.add('signupForm');
    movebtn.innerHTML="SignUp";
})


document.querySelector('.submitbtn').addEventListener('click',SignUp)

let UserArr=localStorage.getItem('SignUp')|| [];

function SignUp(){

    let email=document.getElementById('email').value;
    let firstName=document.getElementById('first-name').value;
    let lastName=document.getElementById('last-name').value;
    let password=document.getElementById('Password').value;
    
    
    let userObj= {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
    }

    UserArr.push(userObj);
    alert('Sign Up Success');
    localStorage.setItem("SignUp", JSON.stringify(userObj));
    
}














