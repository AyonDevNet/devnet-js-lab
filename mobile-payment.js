// button section 

document.getElementById("login-button").addEventListener('click' , function(event){

       event.preventDefault();
       console.log("click")


    // input section called 
   
    const inputsEmail = document.getElementById('Email-input').value;
    const inputPasswd = document.getElementById('password-input').value;

    console.log(inputsEmail);
    console.log(inputPasswd)



    // Login information authentication information

     // Regex: email can be letters + numbers only
    const emailRegex = /^[A-Za-z0-9]+$/;
    // Regex: password must be numbers only
    const passwordRegex = /^[0-9]+$/;


    if (!emailRegex.test(inputsEmail)) {
         
         alert("Make sure you email is right")
    } else if (!passwordRegex.test(inputPasswd)){

        alert("Make sure you pin is right")
    }

    else {
        alert("✅ Validation passed!");
        window.location.href="./Home-page-mobile-payment.html"
       
      
    }

})
