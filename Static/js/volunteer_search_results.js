if (localStorage.getItem('events')) {
  const events = JSON.parse(localStorage.getItem('events'));
  const Head_Cell = document.querySelector(".Head_Cell");
  for (let i = 0; i < events.length; i++) {
    const event = events[i];

    const eventStartTime = event.BeginningTime.split(':');
    let startDate = new Date(event.StartDate);
    startDate.setHours(eventStartTime[0]);
    startDate.setMinutes(eventStartTime[1]);

    const eventEndTime = event.EndTime.split(":");
    let endDate = new Date(event.EndDate);
    endDate.setHours(eventEndTime[0]);
    endDate.setMinutes(eventEndTime[1]);

    Head_Cell.innerHTML += `
    <span class="Cell_Info_lightBlue">${event.EventName}</span>
    <span class="Cell_Info_lightBlue">${event.InitiatorName} - ${event.PhoneUser}</span>
    <span class="Cell_Info_lightBlue">${event.Purpose}</span>
    <span class="Cell_Info_lightBlue">${event.Location}</span>
    <span class="Cell_Info_lightBlue">${startDate.toLocaleString()}</span>
    <span class="Cell_Info_lightBlue">${endDate.toLocaleString()}</span>
    <span class="Cell_Info_lightBlue">${event.RequiredEquipment}</span>
    <span class="Cell_Info_lightBlue">${event.Notes}</span>
    <span class="Cell_Info_lightBlue"><button onclick="select('${event.EventNumber}')">תרשמו אותי!</button></span>
    `;
  }
}

function select(id) {
  const loggedInUserDetails = localStorage.getItem('loggedInUserDetails');
  const events = localStorage.getItem('events');

  if (loggedInUserDetails && events) {
    const user = JSON.parse(loggedInUserDetails);
    const event = JSON.parse(events).find(e => e.EventNumber == id);

    fetch(`/volunteeringRegistration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            VolunteerReg: user.Name,
            AssociationReg: event.InitiatorName,
            DateVol: event.StartDate.split('T')[0],
            HourVol: event.BeginningTime,
        }),
    })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                if (response.status !== 201) {
                    alert(
                        "error occured while creating new volunteeringRegistration record"
                    );
                } else {
                    location.href = "events_status.html";
                }
            } else {
                alert(
                    "error occured while creating new volunteeringRegistration record"
                );
            }
        })
        .catch((e) => {
            console.log(e);
            alert("A server error occurred");
        });
  }
}