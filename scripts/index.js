
// _________________________________________________Disabling Logo clicking on header 

document.querySelector("#logoAnchor").style.pointerEvents = "none";



// ______________________________________________Login and Logout functionality

var loginState = false;

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
    localStorage.setItem('loginState', 'true');
}
function logout(){
        localStorage.clear();
        document.querySelector("#headerLoginBtn").textContent="LOGIN";
}


// _________________________________________________View More Button Functionality

document.querySelector("#cityDiv2").style.display = "none";

document.querySelector("#viewMore").addEventListener("click", viewMore)

function viewMore(){
    if(document.querySelector("#viewMore").innerText === "View More"){
        document.querySelector("#cityDiv2").style.display = "flex";
        document.querySelector("#viewMore").innerText = "View Less";
    }
    else{
        document.querySelector("#cityDiv2").style.display = "none";
        document.querySelector("#viewMore").innerText = "View More";
    }
    }