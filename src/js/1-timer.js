import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datetimePicker = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("button[data-start]");
const timerFields = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]")
};

let userSelectedDate = null;
let timerInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate <= now) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
      userSelectedDate = selectedDate;
    }
  }
};

flatpickr(datetimePicker, options);

btnStart.disabled = true;

btnStart.addEventListener("click", startOfCountdown);

function startOfCountdown() {
  if (userSelectedDate) {
    btnStart.disabled = true;
    datetimePicker.disabled = true;

    timerInterval = setInterval(() => {
      const now = new Date();
      const timeDifference = userSelectedDate - now;

      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        enableDatePicker();
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      updateTimerDisplay(days, hours, minutes, seconds);
    }, 1000);
  }
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  timerFields.days.textContent = addLeadingZero(days);
  timerFields.hours.textContent = addLeadingZero(hours);
  timerFields.minutes.textContent = addLeadingZero(minutes);
  timerFields.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function enableDatePicker() {
  datetimePicker.disabled = false;
  btnStart.disabled = true;
}