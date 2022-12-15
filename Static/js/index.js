const regForm=document.querySelector('.regForm');
const userName=document.querySelector('#indexValidUser');
const password=document.querySelector('#indexValidPass');
const msgReg=document.querySelector('.msgForUser');

const onSubmitReg = (e) =>{
  e.preventDefault();
}
regForm.addEventListener('submit',onSubmitReg);

const msgSubmitVol = (e)=> {
  e.preventDefault();
  if (userName.value === "" || password.value === "") {
    msgReg.innerHTML = "יש למלא את כלל השדות המסומנים בכוכבית";
    msgReg.classList.add('error');
    setTimeout(() => {
      msgReg.innerHTML = "";
      msgReg.classList.remove('error');
    }, 5000);
  }else if(!userExists(userName.value)){
    msgReg.innerHTML = "הפרטים שהוזנו אינם תקינים";
    msgReg.classList.remove('error');
  }else if(!userMatchesPassword(userName.value, password.value)){
    msgReg.innerHTML = "שם המשתמש והסיסמה אינם תואמים";
    msgReg.classList.remove('error');
  }else {
    msgReg.innerHTML = "כל השדות מולאו בהצלחה, ברוך הבא לאתר!";
    msgReg.classList.add('successes');

    localStorage.setItem("loggedInUser", "vol");

    location.href = "volunteers_home_screen.html";
  }
}

regForm.addEventListener('submit',msgSubmitVol);

const msgSubmitAso = (e)=> {
  e.preventDefault();
  if (userName.value === "" || password.value === "") {
    msgReg.innerHTML = "יש למלא את כלל השדות המסומנים בכוכבית";
    msgReg.classList.add('error');
    setTimeout(() => {
      msgReg.innerHTML = "";
      msgReg.classList.remove('error');
    }, 5000);
  }else if(!userAsoExists(userName.value)){
    msgReg.innerHTML = "הפרטים שהוזנו אינם תקינים";
    msgReg.classList.remove('error');
  }else if(!userMatchesPasswordAso(userName.value, password.value)){
    msgReg.innerHTML = "שם המשתמש והסיסמה אינם תואמים";
    msgReg.classList.remove('error');
  }else {
    msgReg.innerHTML = "כל השדות מולאו בהצלחה, ברוך הבא לאתר!";
    msgReg.classList.add('successes');

    localStorage.setItem("loggedInUser", "aso");

    location.href="aso_portal.html"
  }
}

regForm.addEventListener('submit',msgSubmitAso);

