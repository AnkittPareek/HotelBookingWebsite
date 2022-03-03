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
    }
}
function logout(){
        localStorage.clear();
        document.querySelector("#headerLoginBtn").textContent="LOGIN";
}
