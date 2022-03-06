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


// ______________________________________________ Getting city from the Url

const url = window.location.search;
const urlParams = new URLSearchParams(url);
const city = urlParams.get("city");
console.log(city);

const data = null;

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var jsonData = JSON.parse(this.responseText);

    populateListView(jsonData.data);
  }
};

xhr.open(
  "GET",
  `https://travel-advisor.p.rapidapi.com/locations/search?query=${city}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`,
  true
);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "3f53e646ccmsh47991b16859c58bp192276jsn70605e23962d");

xhr.send(data);

let populateListView = (data) => {
  let name, img, address, locationId, rating;
  let hotel = "";
  const populateArrays = (item) => {
    if (item.result_type == "lodging") {
      name = item.result_object.name;
      img = item.result_object.photo.images.large.url;
      address = item.result_object.address;
      locationId = item.result_object.location_id;
      rating = item.result_object.rating;

      hotel = hotel +
        
      `
        <div class="hotelDivs ">
            <a href="detail.html?id=${locationId}">  
            <img class="hotelImage" src="${item.result_object.photo.images.large.url}" alt="${name}">
            </a>
            <div class="description">
            <a href="detail.html?id=${locationId}">  <h3>${name}</h3> </a>
            <a href="detail.html?id=${locationId}">  <p>${rating}<i class="fa-solid fa-star rating"></i></p> </a>
            <a href="detail.html?id=${locationId}">  <p>${address}</p> </a>
            </div> 
        </div>
      `;
    }
  };

  data.forEach(populateArrays);

  let listView = document.getElementById("listView");
  listView.innerHTML = hotel;
};
