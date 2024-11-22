const account = {
    balance:0,
    deposit: function(amount){
        this.balance += amount;
    },
    withdraw: function(amount){
        if( amount > this.balance){
            console.log("Insufficient balance");
            return;
        }
        this.balance -= amount;
    },
    getBalance: function(){
        return this.balance;
    }
}

account.deposit(100);
account.withdraw(50);
account.balance = 200;
console.log(account.getBalance());