/*Greet Msg*/
const today=new Date();
const hours = today.getHours();
let helloMsg;
if (hours < 12)
  helloMsg = 'בוקר טוב!';
else if (hours >= 12 && hours <= 17)
  helloMsg = 'צהריים טובים!';
else if (hours >= 17 && hours <= 24)
  helloMsg = 'ערב טוב!';

document.getElementById('greetMsg').innerHTML = helloMsg;
