let now = new Date();
let today = document.querySelector(".today");
let time = document.querySelector(".time");
let current = document.querySelector(".current");
let year = now.getFullYear();
let dates = now.getDate();
let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
let months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
let day = days[now.getDay()];
let month = months[now.getMonth()];
let minutes = now.getMinutes();
let hours = now.getHours();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}
today.innerHTML = `${dates} ${month} ${year}, ${day} `;
time.innerHTML = `${hours}:${minutes}`;

function showDate(date) {
  let newDate = document.querySelector(".newDate");
  let newDateDay = document.querySelector(".newDateDay");
  let year = date.getFullYear();
  let dates = date.getDate();
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let minutes = date.getMinutes();
  let hours = date.getHours();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  newDate.innerHTML = `${dates} ${month} ${year} tarihinde günlerden:`;
  newDateDay.innerHTML = `${day}`;
}
function submitDate(event) {
  event.preventDefault();
  let inputDate = document.querySelector("#inputDate");
  let date = new Date(inputDate.value);
  showDate(date);
}
// function submitDate2(event) {
//   event.preventDefault();
//   let cal = document.querySelector("#cal");
//   let date = new Date(cal.value);
//   // console.log(date.getDate());
//   showDate(date);
// }
let form = document.querySelector("form");
// form.addEventListener("submit", submitDate2);
form.addEventListener("submit", submitDate);
