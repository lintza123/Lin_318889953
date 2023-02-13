function search(event) {
    event.preventDefault();
    const StartTime = document.querySelector("input[name='StartTime']")?.value;

    fetch(`/showTableComEvent`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                if (!response.data) {
                    alert("error occured while searching volunteering");
                } else {
                    const events = [];
                    for (let i = 0; i < response.data.length; i++) {
                        const event = response.data[i];
                        const eventStartTime = event.BeginningTime.split(':');
                        let eventStartDate = new Date(event.StartDate);
                        eventStartDate.setHours(eventStartTime[0]);
                        eventStartDate.setMinutes(eventStartTime[1]);

                        if (compareDates(eventStartDate, new Date()) !== -1) {
                            //the event date has passed already
                            continue;
                        }
                        if (!!StartTime && compareDates(new Date(), new Date(StartTime)) !== 1) {
                            //user selected a date & time in the past
                            continue;
                        }
                        if (!!StartTime && compareDates(eventStartDate, new Date(StartTime)) !== -1) {
                            //user selected a date & time that passed the event date & time
                            continue;
                        }
                        else {
                            events.push(event);
                        }
                    }

                    localStorage.setItem('events', JSON.stringify(events));
                    location.href = "volunteer_search_results.html";
                }
            } else {
                alert("error occured while searching volunteering");
            }
        })
        .catch((e) => {
            console.log(e);
            alert("A server error occurred");
        });
}

const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();

    if (date1 < date2) {
        return 1;
    } else if (date1 > date2) {
        return -1;
    } else {
        return 0;
    }
};