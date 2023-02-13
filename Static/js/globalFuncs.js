/*For make sure the user insert a current val where needed*/
let currDate= new Date();
let year = currDate.getFullYear();

/*Show and Hide Functions*/

const show = (e, opacity) => {
  e.style.visibility="visible";
  e.style.transition="1s";
  e.style.opacity= opacity;
  e.style.pointerEvents="visible";
}

const hide=(e)=>{
  e.style.visibility="hidden";
  e.style.transition="1s";
  e.style.opacity="0";
  e.style.pointerEvents="none";
}

const elements = document.querySelectorAll(".returnHomePage, .goToPortal");
if (elements.length > 0) {
  elements.forEach(element => {
    element.addEventListener("click", function () {
      const loggedInUser = localStorage.getItem("loggedInUser");
      console.log(loggedInUser);
      if (loggedInUser && loggedInUser === "vol") {
        if (this.classList.contains("goToPortal")) {
          window.location = "vol_portal.html";
        }
        else {
          window.location = "volunteers_home_screen.html";
        }
      } else if (loggedInUser && loggedInUser === "aso") {
        window.location = "aso_portal.html";
      }
    });
  })
}

function logout() {
  localStorage.clear();
  window.location = 'index.html';
}