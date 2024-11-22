class Account{
    #balance = 0
    deposit(amount){
        this.#balance += amount;
    }
    withdraw(amount){
        if( amount > this.#balance){
            console.log("Insufficient balance");
            return;
        }
        this.#balance -= amount;
    }
    getBalance = function(){
        return this.#balance;
    }
}

const account = new Account();
account.deposit(100);
account.withdraw(50);
// account.#balance = 200;
console.log(account.getBalance());