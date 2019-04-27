class BankClass {
    constructor(type, money) {
        this.type = type;
        this.money = money;
        this.transactionHistory = null;
    }

    deposit(putMoney) {
        this.money += putMoney;
        this.transactionHistory = {
            despositedAmount: putMoney,
            balance: this.money 
        };
        console.log(this.transactionHistory);
    }
    
    withdraw(takeMoney) {
        this.money -= takeMoney;
        this.transactionHistory = {
            withdrawalAmount: takeMoney, 
            balance: this.money
        };
        console.log(this.transactionHistory);
    }

    showBalance() {
        console.log(this.money);
    }
}
const myAccount = new BankClass("checkings", 1000);
console.log(myAccount);
myAccount.deposit(100);
myAccount.withdraw(0);
myAccount.showBalance();