/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded',function(){
    // let button = document.querySelectorAll('.btn')[1];
    let form = document.querySelector('form');
    let message = document.querySelector('.message');
    let emailInput = document.getElementById('email');


    function isValidEmail(email){
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    }


    form.addEventListener("submit", function(event){
        event.preventDefault();
        
        let email = emailInput.value.trim();
        
        if (email == ''){
            message.innerHTML = `<b><p>Please enter a valid email address</p></b>`;
        }
        else if (isValidEmail(email)){
            message.innerHTML = `<b><p>Thank you! Your email address ${email} has been added to our mailing list!</p></b>`;
        }else{
            message.innerHTML = `<b><p>Please enter a valid email address</p></b>`;
        }  
    });

});
