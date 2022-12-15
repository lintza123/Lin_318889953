const btn2=document.getElementById("btn2");
const saveChange=document.getElementById("saveChanges");

btn2.addEventListener('onClick',()=>show(saveChange,0.8));

btn2.onclick = () => {
  document.querySelectorAll(".editmode").forEach(element => {
    if (element.children.length) {
      const inputValue = element.children[0].value;
      element.innerHTML = `
          <span>${inputValue}</span>
        `;

      element.classList.add("clickable");
      element.classList.remove("editmode");
    }
  });

  show(saveChange,1);
  setTimeout(()=>{
    hide(saveChange);
  },5000);
}

document.querySelectorAll(".Tbl_for_Users .Tbl_Cells .clickable").forEach(element => {
  element.addEventListener('click', function () {
    if (this.classList.contains('clickable')) {
      const currentValue = this.innerHTML;
      this.innerHTML = `
        <input type="text" value="${currentValue}">
      `;
      this.classList.remove('clickable');
      this.classList.add('editmode');
    }
  });
});

function remove(id) {
  document.querySelectorAll(`.row-${id}`).forEach(elem => elem.remove());
}

/*Data retrieval*/

let i = 0;
document.querySelectorAll(".Tbl_for_Users .Tbl_Cells .Name").forEach((elem) => {
  if (associations[i]) elem.innerHTML = associations[i].Name;
  i++;
});
let x = 0;
document
  .querySelectorAll(".Tbl_for_Users .Tbl_Cells .Phone")
  .forEach((elem) => {
    if (associations[x]) elem.innerHTML = associations[x].Phone;
    x++;
  });
let j = 0;
document.querySelectorAll(".Tbl_for_Users .Tbl_Cells .Mail").forEach((elem) => {
  if (associations[j]) elem.innerHTML = associations[j].Mail;
  j++;
});

