/*New User Form*/
const regForm = document.querySelector(".regForm");
const fullName = document.querySelector(".FullName");
const phoneNumber = document.querySelector(".PhoneNumber");
const mailUser = document.querySelector(".Mail");
const userName = document.querySelector(".UserName");
const password = document.querySelector(".Password");
const ageVol = document.querySelector("#Age");
const genderVol = document.querySelector("#Gender");
const asoLocation = document.querySelector("#LocationAssociation");
const asoUrl = document.querySelector("#URLAso");
const descr = document.querySelector(".Description");
const asoActiveVol = document.querySelector("#ActiveVol");
const asoDays = document.querySelector("#AssociationDays");
const asoHours = document.querySelector("#AssociationHours");
const asoType = document.querySelector("#Type");
const asoFundDate = document.querySelector("#FoundationDate");
const msgReg = document.querySelector(".msgForUser");
const msgMail = document.querySelector(".msgMail");
const msgPhone = document.querySelector(".msgPhone");
const msgUser = document.querySelector(".msgUser");
const checkMsgUser = document.querySelector(".checkMsgUser");
const msgPass = document.querySelector(".msgPass");
const u = document.querySelector("#msgURL");
const msgFund = document.querySelector("#msgFund");

regForm.addEventListener("submit", submit);

function submit(e) {
    e.preventDefault();
    if (
        msgRegSubmit() &&
        validMail() &&
        validPhone() &&
        validPhone() &&
        ValidPassword() &&
        ValidUserName() &&
        ValidURL() &&
        checkFundDate()
    ) {
        fetch(`/signUp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: asoUrl
                ? JSON.stringify({
                      type: "aso",
                      UserName: userName.value,
                      Name: fullName.value,
                      Password: password.value,
                      Mail: mailUser.value,
                      Phone: phoneNumber.value,
                      Description: descr.value,
                      Type: asoType.value,
                      LocationAssociation: asoLocation.value,
                      FoundationDate: asoFundDate.value,
                      ActiveVol: asoActiveVol.value,
                      URLAso: asoUrl.value,
                      AssociationDays: asoDays.value,
                      AssociationHours: asoHours.value,
                  })
                : JSON.stringify({
                      type: "vol",
                      UserName: userName.value,
                      Name: fullName.value,
                      Password: password.value,
                      Mail: mailUser.value,
                      Phone: phoneNumber.value,
                      Description: descr.value,
                      Age: ageVol.value,
                      Gender: genderVol.value,
                  }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response) {
                    if (response.status !== 201) {
                        alert("error occured while creating new user record");
                    } else {
                        location.href = "index.html";
                    }
                } else {
                    alert("error occured while creating new user record");
                }
            })
            .catch((e) => {
                console.log(e);
                alert("A server error occurred");
            });
    }
}

const msgRegSubmit = () => {
    if (asoUrl) {
        if (
            fullName.value === "" ||
            phoneNumber.value === "" ||
            mailUser.value === "" ||
            userName.value === "" ||
            password.value === "" ||
            descr.value === "" ||
            asoActiveVol.value === "" ||
            asoLocation.value === "" ||
            asoUrl.value === "" ||
            asoHours.value === "" ||
            asoDays.value === "" ||
            asoFundDate.value === ""
        ) {
            msgReg.innerHTML = "יש למלא את כלל השדות המסומנים בכוכבית";
            msgReg.classList.add("error");
            setTimeout(() => {
                msgReg.innerHTML = "";
                msgReg.classList.remove("error");
            }, 5000);
            return false;
        } else {
            msgReg.innerHTML = "כל השדות מולאו בהצלחה, ברוך הבא לאתר!";
            msgReg.classList.add("successes");
        }
    } else {
        if (
            fullName.value === "" ||
            phoneNumber.value === "" ||
            mailUser.value === "" ||
            userName.value === "" ||
            password.value === "" ||
            descr.value === "" ||
            ageVol.value === "" ||
            genderVol.value === ""
        ) {
            msgReg.innerHTML = "יש למלא את כלל השדות המסומנים בכוכבית";
            msgReg.classList.add("error");
            setTimeout(() => {
                msgReg.innerHTML = "";
                msgReg.classList.remove("error");
            }, 5000);
            return false;
        } else {
            msgReg.innerHTML = "כל השדות מולאו בהצלחה, ברוך הבא לאתר!";
            msgReg.classList.add("successes");
        }
    }

    return true;
};

const validMail = () => {
    if (
        mailUser.value.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
    ) {
        msgMail.classList.add("successes");
    } else {
        msgMail.innerHTML =
            "על המייל להכיל צירוף אותיות באנגלית ומספרים כך ש-XXXX@XXXX";
        msgMail.classList.add("error");
        setTimeout(() => {
            msgMail.innerHTML = "";
            msgMail.classList.remove("error");
        }, 5000);
        return false;
    }
    return true;
};

const validPhone = () => {
    if (
        phoneNumber.value.match(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        )
    ) {
        msgPhone.classList.add("successes");
    } else {
        msgPhone.innerHTML =
            "מספר הטלפון שהוזן אינו תקין, עליך להזין מספרים בלבד בצורה הבאה: XXX-XXXXXXX";
        msgPhone.classList.add("error");
        setTimeout(() => {
            msgPhone.innerHTML = "";
            msgPhone.classList.remove("error");
        }, 5000);
        return false;
    }
    return true;
};

const ValidPassword = () => {
    if (password.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{8,}$/)) {
        msgPass.classList.add("successes");
    } else {
        msgPass.innerHTML =
            "על הסיסמה להיות באורך של לפחות 8 תווים ויכולה להכיל אותיות באנגלית, מספרים ותוים מיוחדים";
        msgPass.classList.add("error");
        setTimeout(() => {
            msgPass.innerHTML = "";
            msgPass.classList.remove("error");
        }, 5000);
        return false;
    }
    return true;
};

const ValidUserName = () => {
    if (userName.value.match(/^[A-Za-z][A-Za-z0-9_]{4,10}$/)) {
        msgUser.classList.add("successes");
    } else {
        msgUser.innerHTML =
            "על שם המשתמש להיות בין 4-10 תווים ולהכיל אותיות באנגלית ומספרים בלבד";
        msgUser.classList.add("error");
        setTimeout(() => {
            msgUser.innerHTML = "";
            msgUser.classList.remove("error");
        }, 5000);
        return false;
    }
    return true;
};

const ValidURL = () => {
    if (!asoUrl) return true;
    if (
        asoUrl.value.match(
            /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
        )
    ) {
        u.classList.add("successes");
    } else {
        u.innerHTML = "כתובת האתר שהוזנה לא תקינה";
        u.classList.add("error");
        setTimeout(() => {
            u.innerHTML = "";
            u.classList.remove("error");
        }, 5000);
        return false;
    }
    return true;
};

const checkFundDate = () => {
    if (!asoUrl) return true;
    if (new Date().getTime() - new Date(asoFundDate.value).getTime() >= 0) {
        msgFund.classList.add("successes");
        return true;
    } else {
        msgFund.innerHTML = "תאריך ההקמה שהוזן אינו תקין";
        msgFund.classList.add("error");
        setTimeout(() => {
            msgFund.innerHTML = "";
            msgFund.classList.remove("error");
        }, 5000);
        return false;
    }
};
