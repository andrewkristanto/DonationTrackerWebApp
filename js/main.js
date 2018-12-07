function loadLogin(){
  console.log('swapping to login page');
  location.href = "./login.html";
};

function loadRegistration(){
  console.log('swapping to registration page');
  location.href = "./register.html";
};

function loadWelcome(){
  console.log('swapping to welcome page');
  location.href = "./welcome.html";
}

function loadMain(){
  console.log('swapping to main page');
  location.href = "./main.html";
}

function verify_login(){
  console.log('verfying login');
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (localStorage.getItem(username) == password) {
    console.log('login success');
    loadMain();
  } else {
    alert("Incorrect username or password.");
  }
}

function register(){
  console.log('registering');
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var password2 = document.getElementById('password2').value;
  var type = document.getElementById('type').value;
  if (localStorage.getItem(username) != null){
    alert("Username already exists.");
  } else if (username.length == 0) {
    alert("Username cannot be null.");
  } else if (password.length == 0) {
    alert("Password cannot be null.");
  } else if(password != password2) {
    alert("Passwords do not match.");
  } else {
    console.log('register success');
    localStorage.setItem(username, password);
    loadWelcome();
  }
}
