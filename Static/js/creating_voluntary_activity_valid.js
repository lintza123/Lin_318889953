const submitButton=document.querySelector('.submit-button');
submitButton.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log('submit');
});

submitButton.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log(e);
  console.log(e.target);
  console.log(e.target.classList);
});

/*Create Event Form*/
const eventForm=document.querySelector('#EventForm');
const eventTitle=document.querySelector('#EventTitle');
const eventStartDate=document.querySelector('#StartDate');
const eventEndDate=document.querySelector('#EndDate');
const eventLocation=document.querySelector('#Location');
const eventStartTime=document.querySelector('#StartTime');
const eventEndTime=document.querySelector('#EndTime');
const phoneUser=document.querySelector('.PhoneNumber');
const msg = document.querySelector('.msg');
const msgPhone=document.querySelector('.msgPhone');
const minVol=document.querySelector('#MinVol');
const maxVol=document.querySelector('#MaxVol');
const volMsg=document.querySelector('#volMsg');
const timeMsg=document.querySelector('#timeMsg')

const onSubmit = (e) =>{
  e.preventDefault();
  console.log(eventTitle);
  console.log(eventTitle.value);
}
eventForm.addEventListener('submit',onSubmit);

const msgSubmit = (e)=>{
  e.preventDefault();
  if(eventTitle.value === "" || eventStartDate.value ===""|| eventEndDate.value ==="" ||eventLocation.value ===""||
    eventStartTime.value ==="" ||eventEndTime.value ===""||phoneUser.value==="" ){
    msg.innerHTML="יש למלא את כלל השדות המסומנים בכוכבית";
    msg.classList.add('error');
    setTimeout(()=>{
      msg.innerHTML="";
      msg.classList.remove('error');
    },60000);
  }else{
    msg.innerHTML="כל השדות מולאו בהצלחה, האירוע נוסף למערכת";
    msg.classList.add('successes');
  }
}
eventForm.addEventListener('submit',msgSubmit);

const phoneCheck = ()=>{
  if(phoneUser.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
    msgPhone.classList.add('successes');
  }else {
    msgPhone.innerHTML="מספר הטלפון שהוזן אינו תקין, עליך להזין מספרים בלבד בצורה הבאה: XXX-XXXXXXX";
    msgPhone.classList.add('error');
    setTimeout(()=>{
      msgPhone.innerHTML="";
      msgPhone.classList.remove('error');
    },5000);
  }
}
eventForm.addEventListener('submit',phoneCheck);

const volSumCheck=(e)=>{
  if(minVol.value<=maxVol.value){
    volMsg.classList.add('successes');
  }else{
    volMsg.innerHTML="על כמות המתנדבים המנימלית להיות קטנה או שווה לכמות המתנדבים המקסימלית";
    volMsg.classList.add('error');
    setTimeout(()=>{
      volMsg.innerHTML="";
      volMsg.classList.remove('error');
    },5000);
  }
}
eventForm.addEventListener('submit',volSumCheck);

const checkDateTime=(e)=>{
  if(eventStartDate.value<=eventEndDate.value && eventStartTime.value<eventEndTime.value
    && eventStartTime.value>=year && eventEndDate.value>=year){
    timeMsg.classList.add('successes');
  }else{
    timeMsg.innerHTML="התאריכים או השעות שהוזנו איתם תקינים";
    timeMsg.classList.add('error');
    setTimeout(()=>{
      timeMsg.innerHTML="";
      timeMsg.classList.remove('error');
    },5000);
  }
}
eventForm.addEventListener('submit',checkDateTime);
