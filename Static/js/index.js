const regForm = document.querySelector(".regForm");
const userName = document.querySelector("#indexValidUser");
const password = document.querySelector("#indexValidPass");
const msgReg = document.querySelector(".msgForUser");

const login = (e) => {
    e.preventDefault();
    if (userName.value === "" || password.value === "") {
        msgReg.innerHTML = "יש למלא את כלל השדות המסומנים בכוכבית";
        msgReg.classList.add("error");
        setTimeout(() => {
            msgReg.innerHTML = "";
            msgReg.classList.remove("error");
        }, 5000);
    } else {
        msgReg.innerHTML = "כל השדות מולאו בהצלחה, ברוך הבא לאתר!";
        msgReg.classList.add("successes");

        fetch(`/signIn`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: userName.value,
                password: password.value,
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response) {
                    if (response.status !== 200) {
                        alert(
                            "No user was found for the given username & password!"
                        );
                    } else if (response.type === "aso") {
                        localStorage.setItem("loggedInUser", "aso");
                        localStorage.setItem(
                            "loggedInUserDetails",
                            JSON.stringify(response.response)
                        );
                        location.href = "aso_portal.html";
                    } else if (response.type === "vol") {
                        localStorage.setItem("loggedInUser", "vol");
                        localStorage.setItem(
                            "loggedInUserDetails",
                            JSON.stringify(response.response)
                        );
                        location.href = "volunteers_home_screen.html";
                    }
                } else {
                    alert(
                        "No user was found for the given username & password!"
                    );
                }
            })
            .catch((e) => {
                console.log(e);
                alert("A server error occurred");
            });
    }
};

regForm.addEventListener("submit", login);
