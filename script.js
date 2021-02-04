function getData() {
  const baseURL = `https://randomuser.me/api/`;
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => showData(data.results[0]))
    .catch((err) => console.log(err));
}

getData();

function showData(dataList) {
  document.getElementById("profile_img").src = `${dataList.picture.large}`;
  document.getElementById("fullName").innerText = `${dataList.name.first} ${dataList.name.last}`;
  document.getElementById("gender").innerText = `${dataList.gender}`;
  document.getElementById("title").innerText = `${dataList.name.title}`;
  document.getElementById("age").innerText = `${dataList.dob.age}`;
  document.getElementById("birthday").innerText = `${dataList.dob.date}`;
  document.getElementById(
    "street"
  ).innerText = `${dataList.location.street.number} ${dataList.location.street.name}`;
  document.getElementById("city").innerText = `${dataList.location.city}`;
  document.getElementById("state").innerText = `${dataList.location.state}`;
  document.getElementById("postCode").innerText = `${dataList.location.postcode}`;
  document.getElementById("phone").innerText = `${dataList.phone}`;
  document.getElementById("cell").innerText = `${dataList.cell}`;
  document.getElementById("email").innerText = `${dataList.email}`;
}

document.getElementById("getDataBtn").addEventListener("click", getData);
