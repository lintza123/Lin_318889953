const btn1 = document.getElementById("saveBTN1");
const makeTheWorldBetter=document.getElementById("makeTheWorldBetter");
const approveChanges=document.getElementById("approveChanges");

btn1.addEventListener('mouseover',() => show(makeTheWorldBetter, 0.8));
btn1.addEventListener("mouseleave", ()=>hide(makeTheWorldBetter));

btn1.onclick=()=> {
  show(approveChanges,1);
  setTimeout(()=>{
    hide(approveChanges);
  },5000)
}
