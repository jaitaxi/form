const userinfo= (e) => {
    e.preventDefault();

    let username=document.querySelector("#user").value
    let password=document.querySelector("#password").value
    let number=document.querySelector("#number").value
    let mail=document.querySelector("#mail").value
    var userRegex=/^[a-zA-Z\-]+$/;
    var Regexpassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    


    console.log(username,password,number,mail);

    if(userRegex.test(username)==false){
        alert("Username is not valid it should contain uppercase and lowercase !")
    }
    else{
        alert("valid username")
    }

    if(Regexpassword.test(password)==false){
        alert('Password is not valid! It should be 8-30 characters long, contain at least one digit, one lowercase letter,one uppercase letter and one speacial character.');

    }
    else{
        alert("valid password")
    }
}


















document.querySelector("form").addEventListener("submit",userinfo)