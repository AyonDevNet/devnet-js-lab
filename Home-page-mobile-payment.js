document.getElementById("addMoney").addEventListener('click' , function(event){

            event.preventDefault();
            // console.log("done")

            
          const inputMoney =document.getElementById('amountMoney').value
            const PinAddress = document.getElementById('inputPassword').value
            
            // console.log(EmailAddress,PinAddress)


            // password verification 

            const pinAlphabet = /^[0-9]+$/;
              

            if (!pinAlphabet.test(PinAddress)){
         
               alert('Make sure you are putting righ input')

            }
        
            else
            {
       
            
                const mainBalance = document.getElementById("AddBalance").innerText
                //  console.log(mainBalance)


                const AddValue = parseFloat(mainBalance);
                const inputTaka= parseFloat(inputMoney);

                 const totalBalance = AddValue + inputTaka
                console.log(totalBalance)
                const mainBalance2 = document.getElementById("AddBalance").innerText=totalBalance
                console.log(mainBalance2)
                




            }










});
// add money section wrap page section


document.getElementById("card").addEventListener("click", function() {
    const content = document.getElementById("moneyForm");
        content.classList.toggle("hidden"); // show
  });

  // cashout section wrap page section
document.getElementById("cashout-section").addEventListener("click", function() {
    const CashOutContent = document.getElementById("CashoutForm");

    CashOutContent.classList.toggle("hidden");


  });



// transfer section in here  wrap page section

document.getElementById("transferCard").addEventListener('click', function(){


 const tranferTaka = document.getElementById('Transfer-Money')

 tranferTaka.classList.toggle('hidden');


});










// logout section 


document.getElementById("log-out-panel").addEventListener('click' , function (){

  window.location.href="./mobile-payment.html"




})








// cashout button

document.getElementById("cashoutBtn").addEventListener('click' , function(){

 const PinAddress = document.getElementById('inputPassword').value
            
            // console.log(EmailAddress,PinAddress)


            // password verification 

            const pinAlphabet = /^[0-9]+$/;
              

            if (!pinAlphabet.test(PinAddress)){
         
               alert('Make sure you are putting righ input')

            }
        
            else {

      // upper digit number

      const mainBalance = document.getElementById("AddBalance").innerText

      const cashSend = document.getElementById('cashOutMoney').value

      const parMainBalance = parseFloat(mainBalance)
      const parCashsend = parseFloat(cashSend)


      const totalCashout = parMainBalance - parCashsend

             const mainBalance3 = document.getElementById("AddBalance").innerText = totalCashout
             console.log(mainBalance3)

            }


});




// transfer money to taka 

document.getElementById("transferTaka").addEventListener('click' , function(){

const PinAddress = document.getElementById('inputPassword').value
            
            // console.log(EmailAddress,PinAddress)


            // password verification 

            const pinAlphabet = /^[0-9]+$/;
              

            if (!pinAlphabet.test(PinAddress)){
         
               alert('Make sure you are putting righ input')

            }
        
            else {



// upper digit number

      const mainBalance4 = document.getElementById("AddBalance").innerText
     const cashamountsended = document.getElementById('tranferAmount').value

     const parsAmountTransfer = parseFloat(mainBalance4)
     const parsAmounsended = parseFloat(cashamountsended)

     
      const totaltransferAmount = parsAmountTransfer - parsAmounsended

             const mainBalance5 = document.getElementById("AddBalance").innerText = totaltransferAmount
             console.log(mainBalance5)

     alert("sUCCESSFULLY TRANSFERED")



            }



})