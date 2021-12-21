const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInput();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
    document.querySelector("#email").style.border = "1px solid hsl(0, 100%, 63%)";
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
    document.querySelector("#email").style.border = "1px solid hsl(0, 36%, 70%)";

};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInput = () => {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setError(email, "Please enter a valid email");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Looks like this is not an email");
    } else {
        setSuccess(email);
    }
}