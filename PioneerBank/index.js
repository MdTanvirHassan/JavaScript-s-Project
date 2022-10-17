//login event handeler
const trArea= document.getElementById("transaction-area").style.display= "none";
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
loginArea.style.display= "none";
const transactionArea = document.getElementById("transaction-area");
transactionArea.style.display= "block";
transactionArea.style.backgroundColor= "";

function updateSpanText(id,addNumber) {
            const currentAmount= document.getElementById(id).innerText;
           const currentNumber = parseFloat(currentAmount); 
           const totalAmount = addNumber + currentNumber;
           document.getElementById(id).innerText = totalAmount;
           
        }

//Deposit event handler
    const depositBtn = document.getElementById("addDeposit");
     depositBtn.addEventListener("click",function(){
        const depositAmount= document.getElementById("depositAmount").value;
        const depositNumber = parseFloat(depositAmount);
        if (depositNumber<0) {
            alert("Enter valid Deposit.");
            document.getElementById("depositAmount").value="";
            document.getElementById("depositAmount").value="";
        }
        else{
            updateSpanText("currentDeposit",depositNumber );
            updateSpanText("currentBalance",depositNumber );
    
            document.getElementById("depositAmount").value="";
        }
       

       
        /*const currentDeposit = document.getElementById("currentDeposit").innerText;
        const currentDepositNumber = parseFloat(currentDeposit); 
        const totalDeposit = depositNumber + currentDepositNumber;
        document.getElementById("currentDeposit").innerText = totalDeposit;
        document.getElementById("depositAmount").value="";

        //TotalBalance
        const currentBalance= document.getElementById("currentBalance").innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const TotalBalance= currentBalanceNumber + totalDeposit;
        document.getElementById("currentBalance").innerText=TotalBalance;*/


    });


    //Withdraw event handler

    const WithdrawBtn = document.getElementById("addWithdraw");
    WithdrawBtn.addEventListener("click",function(){
        const withdrawAmount= document.getElementById("withdrawAmount").value;
        const withdrawAmountNumber = parseFloat(withdrawAmount);
        if (withdrawAmountNumber<0) {
            alert("Enter valid Withdraw.");
        }
        else{
            updateSpanText("currentWithdraw",withdrawAmountNumber);
            updateSpanText("currentBalance",-1*withdrawAmountNumber);
            document.getElementById("withdrawAmount").value="";
        }

       
        /*const currentWithdraw= document.getElementById("currentWithdraw").innerText;
        const currentWithdrawNumber = parseFloat(currentWithdraw);
        const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;
        document.getElementById("currentWithdraw").innerText= totalWithdraw;
        document.getElementById("withdrawAmount").value="";*

        //TotalBalance
     const currentBalance= document.getElementById("currentBalance").innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const TotalBalance= currentBalanceNumber - totalWithdraw;
        document.getElementById("currentBalance").innerText=TotalBalance;*/
        
    });

   

});