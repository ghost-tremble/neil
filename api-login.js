let baseUrl = "https://server-sers.herokuapp.com/api/v1/scar/login";
const form = document.getElementById("login");

var frontend_url = window.location.origin;

let password = document.getElementById("password");
let email = document.getElementById("email");



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

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
    }
    console.log(data); // JSON data parsed by `data.json()` call
  });
  console.log(data);
});
