//bank deposite and withdraw
//Deposite Section...
document.getElementById('deposite-button').addEventListener('click', function () {
    //data collect from deposite input field..
    const depositeInputField = document.getElementById('deposite-input');
    const newDepositeText = depositeInputField.value;
    const newDepositeAmount = parseFloat(newDepositeText);

    //data collected from deposite text field...
    const depositeTextField = document.getElementById('deposite-total');
    const previousDepositeText = depositeTextField.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

    //total deposited..
    const depositeUpdate = previousDepositeAmount + newDepositeAmount;
    depositeTextField.innerText = depositeUpdate;

    //data collected from balance text field...
    const balanceTextField = document.getElementById('total-balance');
    const balanceText = balanceTextField.innerText;
    const previousBalanceAmount = parseFloat(balanceText);

    //total balanced...
    const balanceUpdate = previousBalanceAmount + newDepositeAmount;
    balanceTextField.innerText = balanceUpdate;

    //clearing the deposit field
    depositeInputField.value = '';
})

//Withdraw Section...
document.getElementById('withdraw-button').addEventListener('click', function () {
    //data collected from withdraw input field..
    const withdrawInputField = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    //data collected from withdraw text field..
    const withdrawTextField = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTextField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    //total withdrawal..
    const withdrawUpdate = previousWithdrawAmount + newWithdrawAmount;
    withdrawTextField.innerText = withdrawUpdate;

    //data collected from balance text field...
    const balanceTextField = document.getElementById('total-balance');
    const balanceText = balanceTextField.innerText;
    const previousBalanceAmount = parseFloat(balanceText);

    //total balanced..
    const balanceUpdate = previousBalanceAmount - newWithdrawAmount;
    balanceTextField.innerText = balanceUpdate;

    //clearing the withdraw field
    withdrawInputField.value = '';
})