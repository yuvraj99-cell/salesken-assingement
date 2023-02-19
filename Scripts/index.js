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







document.getElementById('signup').addEventListener('click',SignUp)
document.getElementById('login').addEventListener('click',loginvalidate)

let UserArr=JSON.parse(localStorage.getItem("SignUp"))|| [];

function SignUp(){
    let email=document.getElementById('email').value;
    let firstName=document.getElementById('first-name').value;
    let lastName=document.getElementById('last-name').value;
    let password=document.getElementById('Password').value;
   
    let marker = 0; 
    UserArr.map(function (el) {
      if (el.Email == email && el.Email != "") {
        marker = 1; 
      }
    });
    if (marker == 0) {
      if (firstName == "" || email == "" || password == "") {
        alert("Please enter details");
      } else {
    
    
    let userObj= {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
       
    }

    UserArr.push(userObj);
    console.log(userObj);
    localStorage.setItem("SignUp", JSON.stringify(UserArr));
   
    alert('Sign Up Success');
}
    }
    else {
        alert("Account alredy exist"); 
      }
    };

    
    
    


function loginvalidate(){
    let email=document.getElementById('loginemail').value;
    let password=document.getElementById('loginpass').value;
    let result = false;
  if (email == "" || password == "") {
    alert("Please enter correct details");
  } else {
    for (let i = 0; i < user.length; i++) {
      if (UserArr[i].Email == email && UserArr[i].password == password) {
        result = true;
      }
    }
    if (result == true) {
      alert("login sccessfull !");
      location = "Quiz-result.html";
    } else {
      alert("Wrong Credentials");
      
    } 
  }
}


















