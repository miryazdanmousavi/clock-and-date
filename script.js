//digital clock
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const daytime = document.querySelector("#daytime");

function setTimer() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let time = hour < 12 ? "AM" : "PM";

  hour = hour == 0 ? 12 : hour;
  hour = hour > 12 ? hour - 12 : hour;

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
  daytime.innerHTML = time;
}

setInterval(setTimer, 1000);

// analog Quartz clock
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);

// numeric-date
const numericDate = document.getElementById("numeric-date");

function getNumericDates() {
  let date = new Date().toLocaleDateString();
  numericDate.innerHTML = date;
}

getNumericDates();

// description
function dateDescription() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let today = new Date();
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  let date = curWeekDay + " , " + curDay + " " + curMonth + " " + curYear;

  document.getElementById("description").innerHTML = date;
}

dateDescription();