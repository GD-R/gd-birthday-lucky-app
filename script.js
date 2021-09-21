const userDob = document.querySelector("#dob");
const userNo = document.querySelector("#lucky_number");
const button = document.querySelector("#check_number");
const msg = document.querySelector("#message");

function clickAction() {
    if(userDob.value && userNo.value){
        let total = calculateSum(userDob.value);
        if(total % userNo.value === 0){
            errorMessage(`${userNo.value} Is A Lucky Number`) ;
        }
        else {
            errorMessage(`${userNo.value} Is Not Lucky Number`) ;
        }
    }
    else {
        errorMessage("Please Enter Both The Fields")
    }
}

function errorMessage(errMsg) {
    msg.innerHTML = errMsg;
}

function calculateSum(userDate) {
    let sum = 0;
    userDate = Number(userDate.replaceAll("-", ""));
    while(userDate > 0) {
        sum = sum + userDate % 10;
        userDate = parseInt(userDate / 10);
    }
    return sum;
}

button.addEventListener("click", clickAction);

