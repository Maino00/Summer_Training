var userName = document.getElementById('Name');
var userAge = document.getElementById('Age');
var nameError = document.getElementById("nameErrors");
var ageError = document.getElementById("ageErrors");
var register = document.getElementById('register');

    userName.addEventListener("focusout",()=>{
        if (userName.value.length<5) {
            nameError.innerHTML="Name length must be more than 5 symbols";
        }
        else{
            nameError.innerHTML=""
        }
    });


    userAge.addEventListener("focusout",()=>{
        if (userAge.value<18) {
            ageError.innerHTML = "Age must be more than 18";
        }
        else{
            ageError.innerHTML = ""
        }
    });

    function validate(){
            let checkbox=document.querySelectorAll('input[type="checkbox"]');
            let marked_checkboxes = [];
            let text=document.getElementById("checked");
            text.innerHTML=" ";
            checkbox.forEach((check_box) => { 
                if(check_box.checked){
                    marked_checkboxes.push(check_box);
                }
            });
            if (marked_checkboxes.length>=2){
                text.innerHTML +="Thank you for choosing the options";
            }
            else{
                text.innerHTML += "Must select a minimum of 2 options to proceed";
            }
}