function signups() {
    const nam = document.getElementById('name').value.trim();
    const ema = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value.trim();

    if (nam === "" || ema === "" || pass === "") {
        alert("Enter the requirements first");
        return;
    }

    let storages = JSON.parse(localStorage.getItem("userinfo")) || [];

    let existsemail = storages.some(mail => mail.email === ema);
    if (existsemail) {
        alert("Already registered, go to login");
        reset();
        return;
    }

    storages.push({ name: nam, email: ema, password: pass });
    localStorage.setItem("userinfo", JSON.stringify(storages));

    alert("Successfully registered");
    reset();
}

function reset() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}
//code for the login page

function logins(){
    let gtinput=document.getElementById("getinput").value;
    let gtpassword=document.getElementById("getpassword").value;
    let resetting=document.getElementById("reeeeset").value;

    if(gtinput.trim()==="" || gtpassword.trim()===""){
        alert("enter the email and password first");
        return;
    }

    let getthedata=JSON.parse(localStorage.getItem("userinfo"))
    
    let findinginfo=getthedata.find((data)=>data.email===gtinput && data.password ===gtpassword);
    if(findinginfo){
        alert("logined successfully ")
    }else{
        alert("invalid passwrod or email")
    }
}

function alwasyresets(){
    document.getElementById("getinput").value=""
    document.getElementById("getpassword").value=""
    document.getElementById("reeeeset").value=""


}