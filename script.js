const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); // preventing form from submitting
    statusTxt.style.display = "block"

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST" , "messsage.php" , true); // sending post request to message.php file
    xhr.onload = ()=>{//once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response; //storing ajax response in response variable
            console.log(response);
        }

    }
    let formData = new FormData(form);//creating new formdata obj. This obj is used to send new form data
    xhr.send(formData)
}