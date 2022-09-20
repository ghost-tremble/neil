let baseUrl = "https://server-sers.herokuapp.com/api/v1/scar/get-user";


var frontend_url = window.location.origin;

let password = document.getElementById("password");
let email = document.getElementById("email");
let username = document.getElementById("username")

async function getData(url,token) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "x-access-token" : `${token}`
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
 
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

window.addEventListener("load",(e) => {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
    
  getData(baseUrl,token).then((data) => {
    if (data?.success) {
    console.log(data)
     username.innerHTML = `${data?.data.firstname} ${data?.data.lastname}`
    } else {
      // alert(data?.error);
    }
    console.log(data); // JSON data parsed by `data.json()` call
  });

});
