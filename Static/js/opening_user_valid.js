/*New User Form*/
const regForm=document.querySelector('.regForm');
const fullName=document.querySelector('.FullName');
const phoneNumber=document.querySelector('.PhoneNumber');
const mailUser=document.querySelector('.Mail');
const userName=document.querySelector('.UserName');
const password=document.querySelector('.Password');
const ageVol=document.querySelector('#Age');
const asoLocation=document.querySelector('#LocationAssociation');
const asoUrl=document.querySelector('#URLAso');
const descr=document.querySelector('.Description');
const asoDays=document.querySelector('#AssociationDays');
const asoHours=document.querySelector('#AssociationHours');
const msgReg=document.querySelector('.msgForUser');
const msgMail=document.querySelector('.msgMail');
const msgPhone=document.querySelector('.msgPhone');
const msgUser=document.querySelector('.msgUser');
const checkMsgUser=document.querySelector('.checkMsgUser');
const msgPass=document.querySelector('.msgPass');
const u=document.querySelector('#msgURL');
const fundDate=document.querySelector('#FoundationDate');
const msgFund=document.querySelector('#msgFund');

const onSubmitReg = (e) =>{
  e.preventDefault();
}
regForm.addEventListener('submit',onSubmitReg);

const msgRegSubmit = (e) => {
  e.preventDefault();
  if(fullName.value === "" || phoneNumber.value ===""|| mailUser.value ==="" ||asoLocation.value ===""||
    userName.value ==="" ||password.value ===""||asoUrl.value===""|| descr.value===""||asoHours.value===""||
    asoDays.value === "" || ageVol.value === "" || fundDate.value === "") {
    msgReg.innerHTML="יש למלא את כלל השדות המסומנים בכוכבית";
    msgReg.classList.add('error');
    setTimeout(()=>{
      msgReg.innerHTML="";
      msgReg.classList.remove('error')
    },5000);
  }else{
    msgReg.innerHTML="כל השדות מולאו בהצלחה, ברוך הבא לאתר!";
    msgReg.classList.add('successes');
  }
}
regForm.addEventListener('submit',msgRegSubmit);

const validMail = (e)=>{
  e.preventDefault();
  if (mailUser.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    msgMail.classList.add('successes');
  } else {
    msgMail.innerHTML="על המייל להכיל צירוף אותיות באנגלית ומספרים כך ש-XXXX@XXXX";
    msgMail.classList.add('error');
    setTimeout(()=>{
      msgMail.innerHTML="";
      msgMail.classList.remove('error')
    },5000);
  }
}
regForm.addEventListener('submit',validMail);


const validPhone = (e)=>{
  if(phoneNumber.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
    msgPhone.classList.add('successes');
  }else {
    msgPhone.innerHTML="מספר הטלפון שהוזן אינו תקין, עליך להזין מספרים בלבד בצורה הבאה: XXX-XXXXXXX";
    msgPhone.classList.add('error');
    setTimeout(()=>{
      msgPhone.innerHTML="";
      msgPhone.classList.remove('error')
    },5000);
  }
}
regForm.addEventListener('submit',validPhone);

const ValidPassword=(e)=>{
  if (password.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{8,}$/)){
    msgPass.classList.add('successes');
    return true;
  }else{
    msgPass.innerHTML="על הסיסמה להיות באורך של לפחות 8 תווים ויכולה להכיל אותיות באנגלית, מספרים ותוים מיוחדים";
    msgPass.classList.add('error');
    setTimeout(()=>{
      msgPass.innerHTML="";
      msgPass.classList.remove('error')
    },5000);
  }
  return false;
}
regForm.addEventListener('submit',ValidPassword);

const ValidUserName = (e) => {
  if(userName.value.match(/^[A-Za-z][A-Za-z0-9_]{4,8}$/)){
    msgUser.classList.add('successes');
  }else{
    msgUser.innerHTML="על שם המשתמש להיות בין 4-8 תווים ולהכיל אותיות באנגלית ומספרים בלבד";
    msgUser.classList.add('error');
    setTimeout(()=>{
      msgUser.innerHTML="";
      msgUser.classList.remove('error')
    },5000);
  }
}
regForm.addEventListener('submit',ValidUserName);

const checkLocalUser=(e)=>{
  if(!userExists(userName.value) && !userAsoExists(userName.value)){
    checkMsgUser.classList.add('successes');
  }else{
    checkMsgUser.innerHTML="שם המשתמש כבר קיים במערכת";
    checkMsgUser.classList.add('error');
    setTimeout(()=>{
      checkMsgUser.innerHTML="";
      checkMsgUser.classList.remove('error')
    },5000);
  }
}
regForm.addEventListener('submit',checkLocalUser);

const ValidURL= (e) => {
  if(asoUrl.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)){
    u.classList.add('successes');
  }else{
    u.innerHTML="כתובת האתר שהוזנה לא תקינה";
    u.classList.add('error');
    setTimeout(()=>{
      u.innerHTML="";
      u.classList.remove('error')
    },5000);
  }
}
if (asoUrl) {
  regForm.addEventListener('submit',ValidURL);
}

const checkFundDate=(e)=>{
  if(fundDate.value<= year){
    msgFund.classList.add('successes');
  }else{
    msgFund.innerHTML="תאריך ההקמה שהוזן אינו תקין";
    msgFund.classList.add('error');
    setTimeout(()=>{
      msgFund.innerHTML="";
      msgFund.classList.remove('error')
    },5000);
  }
}
if (fundDate) {
  regForm.addEventListener('submit',checkFundDate);
}
