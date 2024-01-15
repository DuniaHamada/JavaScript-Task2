
var dollar = 0.27;  
var dinar = 0.19;  
var nis = 1;  
var convert ='';

var registerForm = document.querySelector(".registerForm");

registerForm.onsubmit = function (event) {
  event.preventDefault();

  var amount = document.querySelector(".text").value;
  var selecte = document.querySelector(".exchange").value;
  console.log(selecte);
  
  
  if (selecte === "dollar") {
     convert = amount * dollar;
  } else if (selecte === "dinar") {
         convert =   amount * dinar;
  } else {
      convert =  amount * nis;
  }

  document.querySelector(".result").innerHTML = convert;
};
