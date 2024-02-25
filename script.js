const btnSix = document.getElementsByClassName('btn-primary')
 
for (const btn of btnSix) {
   btn.addEventListener('click', function (event) {
       
       const name = event.target.parentNode.parentNode.childNodes[1].innerText;
       const work = event.target.parentNode.parentNode.childNodes[3].innerText;
       const price = event.target.parentNode.parentNode.childNodes[5].innerText;
       
       if (getConvertedNumber('select')+1 > 4 || getConvertedNumber('girl') < 0 ) {
           alert ('Sorry boss')
           return
       }

       event.target.setAttribute('disabled', false);
       event.target.parentNode.parentNode.parentNode.style.background = '#1DD100'

       const budget = getConvertedNumber('budget');
       document.getElementById('budget').innerText = budget - parseInt(price);

       const girlCount = getConvertedNumber('girl');
       document.getElementById('girl').innerText = girlCount - 1;

       const select = getConvertedNumber('select');
       document.getElementById('select').innerText = select + 1;


       const appentTag = document.getElementById('book-seat-info');
       const div = document.createElement('tr');
       const p1 = document.createElement('th');
       const p2 = document.createElement('th');
       const p3 = document.createElement('th');

       p1.innerText = name
       p2.innerText = work
       p3.innerText = price

       appentTag.appendChild(p1);
       appentTag.appendChild(p2);
       appentTag.appendChild(p3);

       appentTag.appendChild(div);

       updateTotalCost(price)
       updateGrandCost()

   });
}

const updateGrandCost = (status) =>{
   const totalCost = getConvertedNumber('total-price');
   if (status == undefined) {
       document.getElementById('grand-total').innerText = totalCost;
   }else{
       const cuponCode = document.getElementById('coupon-input').value;
       if (cuponCode == 'RAFA24') {
           const discounted = totalCost * 0.20;
           document.getElementById('grand-total').innerText = totalCost - discounted;
       }else{
           alert('please enter valid coupon code')
       }
   }
}


const updateTotalCost = value =>{
   const totalCost = getConvertedNumber('total-price') //joto gula price aibo sob sritng ar jonyo eita kora lagche.
   document.getElementById('total-price').innerText = totalCost + parseInt(value);
}



const getConvertedNumber = id =>{
   const price = document.getElementById(id).innerText;
   const convertPrice = parseInt(price);
   return convertPrice;
}

document.getElementById('inputField'),addEventListener('keyup', function (event) {
   const text = event.target.value;
   console.log(text);
   const button = this.document.getElementById('open-next');
   if (text === '01') {
       button.removeAttribute('disabled')
   }
})




document.getElementById("inputField").addEventListener("keyup", function () {
   var inputText = this.value.trim();
   var enableButton = document.getElementById("enableButton");
 
   if (inputText !== " ") {
     enableButton.removeAttribute("disabled");
 
   } else {
     enableButton.setAttribute("disabled", "disabled");
   }
 });  