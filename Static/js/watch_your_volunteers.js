const btn4=document.getElementById("btn4");
const saveChangeAso=document.getElementById("saveChangesAso");

btn4.addEventListener('onClick',()=>show(saveChangeAso,0.8));

btn4.onclick = () => {
  document.querySelectorAll(".editmode").forEach((element) => {
    if (element.children.length) {
      const inputValue = element.children[0].value;
      element.innerHTML = `
        <span>${inputValue}</span>
      `;
      element.classList.add("clickable");
      element.classList.remove("editmode");
    }
  });

  show(saveChangeAso,1);
  setTimeout(()=>{
    hide(saveChangeAso);
  },5000)
}

document.querySelectorAll(".Tbl_for_Users .Tbl_Cells .clickable")
  .forEach((element) => {
    element.addEventListener("click", function () {
      if (this.classList.contains("clickable")) {
        const currentValue = this.innerHTML;
        this.innerHTML = `
        <input type="text" value="${currentValue}">
      `;
        this.classList.remove("clickable");
        this.classList.add("editmode");
      }
    });
  });

function remove(id) {
  document.querySelectorAll(`.row-${id}`).forEach((elem) => elem.remove());
}

/*Data retrieval*/

let i = 0;
document.querySelectorAll(".Tbl_for_Users .Tbl_Cells .Name").forEach(elem => {
  if (volunteers[i]) elem.innerHTML = volunteers[i].Name;
  i++;
});
let x = 0;
document.querySelectorAll(".Tbl_for_Users .Tbl_Cells .Phone").forEach((elem) => {
  if (volunteers[x]) elem.innerHTML = volunteers[x].Phone;
  x++;
});
let j = 0;
document.querySelectorAll(".Tbl_for_Users .Tbl_Cells .Mail").forEach((elem) => {
  if (volunteers[j]) elem.innerHTML = volunteers[j].Mail;
  j++;
});

