import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    if (!isFormValid()) {
        iziToast.warning({
            title: "Warning",
            message: "Please fill in all fields.",
            timeout: 3000,
            position: "topRight"
        });
        return;
    }

    const delay = Number(document.querySelector("input[name=\"delay\"]").value);
    const stateValue = document.querySelector("input[name=\"state\"]:checked").value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stateValue === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then((value) => {
            iziToast.success({
                title: "Success",
                message: `✅ Fulfilled promise in ${delay} ms`,
                timeout: 3000,
                position: "topRight"
            });
        })
        .catch((err) => {
            iziToast.error({
                title: "Error",
                message: `❌ Rejected promise in ${delay} ms`,
                timeout: 3000,
                position: "topRight"
            });
        });

    document.querySelector("input[name=\"delay\"]").value = "";
    document.querySelector("input[name=\"state\"]:checked").checked = false;
}

function isFormValid() {
    const delayInput = document.querySelector("input[name=\"delay\"]");
    const stateInput = document.querySelector("input[name=\"state\"]:checked");
    return !isNaN(parseInt(delayInput.value)) && stateInput !== null;
}