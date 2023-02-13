const loggedInUserDetails = localStorage.getItem("loggedInUserDetails");

/*Create Event Form*/
const eventForm = document.querySelector("#EventForm");
const eventTitle = document.querySelector("#EventTitle");
const goalEvent = document.querySelector("#goalEvent");
const eventStartDate = document.querySelector("#StartDate");
const eventEndDate = document.querySelector("#EndDate");
const eventLocation = document.querySelector("#Location");
const eventStartTime = document.querySelector("#StartTime");
const eventEndTime = document.querySelector("#EndTime");
const phoneUser = document.querySelector(".PhoneNumber");
const msg = document.querySelector(".msg");
const msgPhone = document.querySelector(".msgPhone");
const minVol = document.querySelector("#MinVol");
const maxVol = document.querySelector("#MaxVol");
const volMsg = document.querySelector("#volMsg");
const timeMsg = document.querySelector("#timeMsg");
const requiredEquip = document.querySelector("#RequiredEquip");
const notes = document.querySelector("#Notes");

const msgSubmit = () => {
    if (
        eventTitle.value === "" ||
        eventStartDate.value === "" ||
        eventEndDate.value === "" ||
        eventLocation.value === "" ||
        eventStartTime.value === "" ||
        eventEndTime.value === "" ||
        phoneUser.value === ""
    ) {
        msg.innerHTML = "יש למלא את כלל השדות המסומנים בכוכבית";
        msg.classList.add("error");
        setTimeout(() => {
            msg.innerHTML = "";
            msg.classList.remove("error");
        }, 60000);
        return false;
    } else {
        msg.innerHTML = "כל השדות מולאו בהצלחה, האירוע נוסף למערכת";
        msg.classList.add("successes");
        return true;
    }
};

const phoneCheck = () => {
    if (
        phoneUser.value.match(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        )
    ) {
        msgPhone.classList.add("successes");
        return true;
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
};

const volSumCheck = () => {
    if (minVol.value <= maxVol.value) {
        volMsg.classList.add("successes");
        return true;
    } else {
        volMsg.innerHTML =
            "על כמות המתנדבים המנימלית להיות קטנה או שווה לכמות המתנדבים המקסימלית";
        volMsg.classList.add("error");
        setTimeout(() => {
            volMsg.innerHTML = "";
            volMsg.classList.remove("error");
        }, 5000);
        return false;
    }
};

const checkDateTime = () => {
    if (eventStartDate.value <= eventEndDate.value) {
        timeMsg.classList.add("successes");
        return true;
    } else {
        timeMsg.innerHTML = "התאריכים או השעות שהוזנו איתם תקינים";
        timeMsg.classList.add("error");
        setTimeout(() => {
            timeMsg.innerHTML = "";
            timeMsg.classList.remove("error");
        }, 5000);
        return false;
    }
};

function createEvent() {
    if (checkDateTime() && volSumCheck() && phoneCheck() && msgSubmit()) {
        if (loggedInUserDetails) {
            const user = JSON.parse(loggedInUserDetails);

            fetch(`/newCommunityEvent`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    EventName: eventTitle.value,
                    Purpose: goalEvent.value,
                    InitiatorName: user.Name,
                    StartDate: eventStartDate.value,
                    EndDate: eventEndDate.value,
                    BeginningTime: eventStartTime.value,
                    EndTime: eventEndTime.value,
                    Location: eventLocation.value,
                    MinimumVolunteers: minVol.value,
                    MaximumVolunteers: maxVol.value,
                    RequiredEquipment: requiredEquip.value,
                    Notes: notes.value,
                    PhoneUser: phoneUser.value,
                }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response) {
                        if (response.status !== 201) {
                            alert(
                                "error occured while creating new communityEvent record"
                            );
                        } else {
                            location.href = "http://localhost:3000/events_status";
                        }
                    } else {
                        alert(
                            "error occured while creating new communityEvent record"
                        );
                    }
                })
                .catch((e) => {
                    console.log(e);
                    alert("A server error occurred");
                });
        }
    }
}

document.querySelector(".post-btn").addEventListener("click", createEvent);