const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
const monthDays = [31, leapDayCalc, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const submitBtn = document.querySelector(".submit--btn");
const form = document.querySelector(".birthday-form");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const resultYears = document.querySelector(".result--years");
const resultMonths = document.querySelector(".result--months");
const resultDays = document.querySelector(".result--days");

let ageYears;
let ageMonths;
let ageDays;

function leapDayCalc(year) {
  year % 4 === 0 ? 29 : 28;
}

const calcAge = function (day, month, year) {
  ageYears = currentYear - year;
  ageMonths = currentMonth - month;
  ageDays = currentDay - day;

  if (ageMonths < 0) {
    ageMonths += 12;
    ageYears--;
  }
  if (ageDays < 0) {
    if (ageMonths !== 0) {
      ageMonths--;
    } else {
      ageMonths = 11;
    }
    leapDayCalc(month);
    ageDays += monthDays[month - 1];
  }

  return [ageDays, ageMonths, ageYears];
};

const displayAge = function (arr) {
  resultDays.textContent = arr[0];
  resultMonths.textContent = arr[1];
  resultYears.textContent = arr[2];
};

form.addEventListener("submit", function (e) {
  displayAge(calcAge(dayInput.value, monthInput.value, yearInput.value));
});
