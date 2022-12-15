const btn6=document.getElementById("btn6");
const saveEvent=document.getElementById("saveChanges");

btn6.addEventListener('onClick',()=>show(saveEvent,0.8));

btn6.onclick=()=>{
  show(saveEvent,1);
  setTimeout(()=>{
    hide(saveEvent);
  },5000)
}

/*Data retrieval*/

let init = 0;
document.querySelectorAll(".Tbl_for_Reg .HeadCell_Reg .InitiatorName").forEach(elem => {
  if (communityEvent[init]) elem.innerHTML = communityEvent[init].InitiatorName;
  init++;
});

let eventName = 0;
document.querySelectorAll(".Tbl_for_Reg .HeadCell_Reg .EventName").forEach((elem) => {
  if (communityEvent[eventName]) elem.innerHTML = communityEvent[eventName].EventName;
  eventName++;
});

let purpose = 0;
document.querySelectorAll(".Tbl_for_Reg .HeadCell_Reg .Purpose").forEach((elem) => {
  if (communityEvent[purpose]) elem.innerHTML = communityEvent[purpose].Purpose;
  purpose++;
});

let locationEve = 0;
document.querySelectorAll(".Tbl_for_Reg .HeadCell_Reg .Location").forEach((elem) => {
  if (communityEvent[locationEve]) elem.innerHTML = communityEvent[locationEve].Location;
  locationEve++;
});

let dateTime = 0;
document.querySelectorAll(".Tbl_for_Reg .HeadCell_Reg .StartDate.BeginningTime").forEach((elem) => {
  if (communityEvent[dateTime]) elem.innerHTML = communityEvent[dateTime].StartDate+ [" "]+
    communityEvent[dateTime].BeginningTime;
  dateTime++;
});

let req = 0;
document.querySelectorAll(".Tbl_for_Reg .HeadCell_Reg .RequiredEquipment").forEach((elem) => {
  if (communityEvent[req]) elem.innerHTML = communityEvent[req].RequiredEquipment;
  req++;
});

let phoneContact = 0;
document.querySelectorAll(".Tbl_for_Reg .HeadCell_Reg .PhoneUser").forEach((elem) => {
  if (communityEvent[phoneContact]) elem.innerHTML = communityEvent[phoneContact].PhoneUser;
  phoneContact++;
});

let notes = 0;
document.querySelectorAll(".Tbl_for_Reg .HeadCell_Reg .Notes").forEach((elem) => {
  if (communityEvent[notes]) elem.innerHTML = communityEvent[notes].Notes;
  notes++;
});

