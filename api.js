let baseUrl = "https://server-sers.herokuapp.com/api/v1/scar/signup";
const form = document.getElementById("formSign");

var frontend_url = window.location.origin;

let firstname =  document.getElementById("FName");
let lastname=document.getElementById("LName");
let password= document.getElementById("newpassword");
let email = document.getElementById("email");
let signUpBtn = document.getElementById("login");
let loader = document.getElementById("loader");
let error = document.getElementById("error");

console.log(frontend_url)

async function postData(url='', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}



signUpBtn.addEventListener("click",(e)=>{
    loader.style.display = "block";
    e.preventDefault()
    const data = {
    firstname:firstname.value,lastname:lastname.value,password:password.value,email:email.value
}
postData(baseUrl,data).then((data) => {
    if(data?.success){
        document.location.href = `${frontend_url}/login.html`;
    }
    else {
          error.innerHTML = data?.error;
          loader.style.display = "none";
    }
  console.log(data); // JSON data parsed by `data.json()` call
});
    console.log(data)})