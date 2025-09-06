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










})