let baseUrl = "https://server-sers.herokuapp.com/api/v1/scar/login";
const form = document.getElementById("login");

var frontend_url = window.location.origin;

let password = document.getElementById("password");
let email = document.getElementById("email");
let loginBtn = document.getElementById("login");
let loader = document.getElementById("loader");
let error = document.getElementById("error");
async function postData(url = "", data = {}) {
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

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loader.style.display = "block"
  const data = {
    password: password.value,
    email: email.value,
  };
  postData(baseUrl, data).then((data) => {
    if (data?.success) {
        let tokenData = JSON.stringify(data?.data.token)
        localStorage.setItem("token",tokenData)
      document.location.href = `${frontend_url}/account.html`;
    } else {
    console.log(data?.message);
    error.innerHTML = data?.error
    loader.style.display = "none";
    }
    console.log(data); // JSON data parsed by `data.json()` call
  });
  console.log(data);
});
