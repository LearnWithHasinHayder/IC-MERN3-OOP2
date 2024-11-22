class Account {
    #balance = 0
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient balance");
            return;
        }
        this.#balance -= amount;
    }
    getBalance = () => {
        return this.#balance;
    }
}

const account = new Account(500);
account.deposit(100);
account.withdraw(50);
// account.#balance = 200;
console.log(account.getBalance());

//CRUD = Create, Read, Update, Delete