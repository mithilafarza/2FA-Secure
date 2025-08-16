let generatedOTP = "";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user && pass) {
   
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    alert("Your OTP is: " + generatedOTP); 


    document.getElementById("loginStep").classList.add("hidden");
    document.getElementById("otpStep").classList.remove("hidden");
  } else {
    alert("Please enter both username and password!");
  }
}

function verifyOTP() {
  const enteredOTP = document.getElementById("otp").value;

  if(enteredOTP === generatedOTP) {
    document.getElementById("otpStep").classList.add("hidden");
    document.getElementById("successStep").classList.remove("hidden");
  } else {
    alert("❌ Incorrect OTP. Try again!");
  }
}
