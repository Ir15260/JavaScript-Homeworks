function atmWithdrawal() {
    const accountBalance = 1000; // Hardcoded account balance
    let requestedAmount = prompt("Enter the amount to withdraw:");

   
    requestedAmount = parseInt(requestedAmount, 10);

   
    if (!requestedAmount) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    if (requestedAmount > accountBalance) {
        console.log("Not enough money.");
    } else {
        const remainingBalance = accountBalance - requestedAmount;
        console.log(`Amount withdrawn: ${requestedAmount}. Money left on account: ${remainingBalance}`);
    }
}

// Call the function to activate the ATM withdrawal
atmWithdrawal();
