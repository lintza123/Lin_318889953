const loggedInUserDetails = localStorage.getItem("loggedInUserDetails");

if (loggedInUserDetails) {
    const user = JSON.parse(loggedInUserDetails);
    const Tbl_Cells2 = document.querySelector(".Tbl_Cells2");
    const Tbl_Cells3 = document.querySelector(".Tbl_Cells3");

    fetch(`/showTblVolReg`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                if (!response.data) {
                    alert("error occured");
                } else {
                    for (let i = 0; i < response.data.length; i++) {
                        const event = response.data[i];

                        if (event.VolunteerReg === user.Name) {
                            Tbl_Cells2.innerHTML += `
                            <span class="Cell_Info_lightBlue">${
                                event.AssociationReg
                            }</span>
                            <span class="Cell_Info_lightBlue">${new Date(event.DateVol).toLocaleString().split(',')[0]}</span>
                            <span class="Cell_Info_lightBlue">${
                                event.HourVol
                            }</span>
                            <span class="Cell_Info_lightBlue"><button onclick="decline('${
                                event.RegId
                            }')">בטל הרשמה!</button></span>
                            `;
                        }
                    }
                }
            } else {
                alert("error occured");
            }
        })
        .catch((e) => {
            console.log(e);
            alert("A server error occurred");
        });

    fetch(`/showTableComEvent`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                if (!response.data) {
                    alert("error occured");
                } else {
                    for (let i = 0; i < response.data.length; i++) {
                        const event = response.data[i];

                        const eventStartTime = event.BeginningTime.split(":");
                        let startDate = new Date(event.StartDate);
                        startDate.setHours(eventStartTime[0]);
                        startDate.setMinutes(eventStartTime[1]);

                        const eventEndTime = event.EndTime.split(":");
                        let endDate = new Date(event.EndDate);
                        endDate.setHours(eventEndTime[0]);
                        endDate.setMinutes(eventEndTime[1]);

                        if (event.InitiatorName === user.Name) {
                            Tbl_Cells3.innerHTML += `
                            <span class="Cell_Info_lightBlue">${
                                event.EventName
                            }</span>
                            <span class="Cell_Info_lightBlue">${
                                event.Location
                            }</span>
                            <span class="Cell_Info_lightBlue">${startDate.toLocaleString()}</span>
                            <span class="Cell_Info_lightBlue">${endDate.toLocaleString()}</span>
                            <span class="Cell_Info_lightBlue"><button onclick="remove('${
                                event.EventNumber
                            }')">מחק!</button></span>
                            `;
                        }
                    }
                }
            } else {
                alert("error occured");
            }
        })
        .catch((e) => {
            console.log(e);
            alert("A server error occurred");
        });
}

function remove(id) {
    fetch(`/removeEvent/${id}`, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                if (response.status !== 200) {
                    alert("error occured while removing communityEvent record");
                } else {
                    location.href = "events_status.html";
                }
            } else {
                alert("error occured while removing communityEvent record");
            }
        })
        .catch((e) => {
            console.log(e);
            alert("A server error occurred");
        });
}


function decline(id) {
    fetch(`/declineEvent/${id}`, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                if (response.status !== 200) {
                    alert("error occured while decline volunteeringRegistration record");
                } else {
                    location.href = "events_status.html";
                }
            } else {
                alert("error occured while decline volunteeringRegistration record");
            }
        })
        .catch((e) => {
            console.log(e);
            alert("A server error occurred");
        });
}
