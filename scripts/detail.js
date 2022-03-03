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

// ______________________________________________Price Calculation functionality

for(let i =0 ; i<4 ; i++){
    document.querySelectorAll("#form input")[i].addEventListener("change", calculateprice)
}

function calculateprice() {
    document.querySelector("#checkOutDate").setAttribute("min", document.querySelector("#checkInDate").value);
    var noOfguest = document.querySelector("#noOfGuest").value

    
    var d1 = new Date(document.querySelector("#checkInDate").value);   
    var d2 = new Date(document.querySelector("#checkOutDate").value);   

    var diff = d2.getTime() - d1.getTime();   

    var daydiff = diff / (1000 * 60 * 60 * 24);   


    var price = daydiff * noOfguest * 1000;


    document.querySelector("#price").value = price;
}