const myPassword = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMsg = document.querySelector("#error-msg");

function checkPw() {
    if (myPassword.value === confirmPassword.value) {
        myPassword.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
        errorMsg.textContent = ""

    } else {
        myPassword.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        errorMsg.textContent = "* Passwords do not match"
    }
}

myPassword.addEventListener("keyup", checkPw);
confirmPassword.addEventListener("keyup", checkPw);