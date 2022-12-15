const btnCancel=document.getElementById("btnCancel");
const btnCancel2=document.getElementById("btnCancel2");
const cancel=document.getElementById("removeFromList");

btnCancel.addEventListener('onClick',()=>show(cancel,0.8));
btnCancel2.addEventListener('onClick',()=>show(cancel,0.8));

btnCancel.onclick=()=>{
  show(cancel,1);
  setTimeout(()=>{
    hide(cancel);
  },5000);
}

btnCancel2.onclick=()=>{
  show(cancel,1);
  setTimeout(()=>{
    hide(cancel);
  },5000);
}
