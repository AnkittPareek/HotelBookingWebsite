var loggedIn = false;

// ______________________________________________Login and Logout functionality

document.querySelector("#loginModalBtn").addEventListener("click", function(){
    login();
})

document.querySelector("#headerLoginBtn").addEventListener("click", function(){
    if(document.querySelector("#headerLoginBtn").innerText==="LOGIN"){
        document.querySelector("#headerLoginBtn").dataset.toggle = "modal";
    }
    logout();
})

function login(){
    localStorage.setItem('username', document.querySelector("#username").value);
    localStorage.setItem('password', document.querySelector("#password").value);
    if(document.querySelector("#headerLoginBtn").innerText==="LOGIN" && localStorage.getItem('username')==="admin" && localStorage.getItem('password')==="admin"){
        document.querySelector("#headerLoginBtn").innerText="LOGOUT";
        alert("successfully LoggedIn");
        document.querySelector("#loginModalClose").click();
        document.querySelector("#headerLoginBtn").dataset.toggle = "modal hide";
        loggedIn = true;
        payNowBtn();
    }
}
function logout(){
        localStorage.clear();
        document.querySelector("#headerLoginBtn").textContent="LOGIN";
        loggedIn = false;
        payNowBtn();
}


// ______________________________________________Pay Now Button functionality

function payNowBtn(){
    if(loggedIn===true){
        document.querySelector("#payBtn Button").removeAttribute("disabled");
    }
    else if(loggedIn===false){
        document.querySelector("#payBtn Button").setAttribute("disabled", 0);
    }
}