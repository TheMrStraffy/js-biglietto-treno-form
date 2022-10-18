


// function ticketDetails(){
//   let userName = document.querySelector('#userName').value;
//   console.log(userName);
//   let userAge = parseInt(document.querySelector('#userAge').value);
//   console.log(userAge);
//   let kmRequired = parseInt(document.querySelector('#kmRequired').value);
//   console.log(kmRequired);
// }
const checkResult = document.querySelector('.checkResult');
let calculateForm = document.getElementById('calculateForm');
const discount65 = 0.4;
const discount18 = 0.2;
const kmPerEuro = 0.21;

calculateForm.addEventListener('click', function(){
  checkResult.classList.remove('d-none');

  let userName = document.querySelector('#userName').value;
  let userAge = parseInt(document.querySelector('#userAge').value);
  let kmRequired = parseInt(document.querySelector('#kmRequired').value);
  let discountShown;

  if((isNaN(userAge) || (isNaN(kmRequired) || (userName === undefined) || (userAge && kmRequired) === 0))){
    alert("Inserire Valori validi");
  };

  let ticketPrice = kmRequired * kmPerEuro;
  if(userAge < 18){
    discountShown = ticketPrice * discount18;
    ticketPrice = ticketPrice - ticketPrice * discount18;
  } else if (userAge > 65){
    discountShown = ticketPrice * discount65;
    ticketPrice = ticketPrice - ticketPrice * discount65;
  } else{
    const hideBoxDiscount = document.getElementById('resultDiscount');
    hideBoxDiscount.classList.add('d-none');
  }

  let resultName = document.getElementById('resultName').innerHTML=`
  Name:  ${userName}
  `;
  let resultAge = document.getElementById('resultAge').innerHTML=`
  Age:  ${userAge}
  `;
  let resultKmRequired = document.getElementById('resultKmRequired').innerHTML=`
  Kilometers Requested: ${kmRequired} Km
  `;
  let resultPrice = document.getElementById('resultPrice').innerHTML=`
  Price of your ticket: ${ticketPrice.toFixed(2)} &euro;
  `;
  let resultDiscount = document.getElementById('resultDiscount').innerHTML=`
  Discount: ${discountShown.toFixed(2)} &euro;
  `;

  
  })
