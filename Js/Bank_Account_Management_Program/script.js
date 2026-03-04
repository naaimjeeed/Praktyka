class BankAccount{
    constructor(){
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount){
        if(amount > 0){
            this.transactions.push({type:'deposit', amount: amount});
            this.balance += amount;
            return `Successfully deposited $${amount}. New balance: $${this.balance}`;
        }else if(amount <= 0){
            return `Deposit amount must be greater than zero.`;
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.transactions.push({type: 'withdraw', amount: amount});
            this.balance -= amount;
             return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
        }else if(amount <= 0 || amount > this.balance){
            return `Insufficient balance or invalid amount.`;
        }
    }

    checkBalance(){
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits(){
        let deposits = [];
        for(let t of this.transactions){ 
            if(t.type === "deposit"){
                deposits.push(t.amount.toString());
            }
        }
        return `Deposits: ${deposits.join(",")}`;
    }

    listAllWithdrawals(){
        let withdrawals = [];
        for(let t of this.transactions){ 
            if(t.type === "withdraw"){
                withdrawals.push(t.amount.toString());
            }
        }
        return `Withdrawals: ${withdrawals.join(",")}`;
    }


}

const myAccount = new BankAccount();
myAccount.deposit(10);
myAccount.deposit(35);
myAccount.deposit(90);
myAccount.deposit(100);
myAccount.withdraw(150);
myAccount.withdraw(20);
myAccount.withdraw(50);
myAccount.deposit(145);
myAccount.checkBalance();
