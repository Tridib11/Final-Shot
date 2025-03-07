class BankAccount {
  #balance;
  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  getBalance() {
    console.log(`${this.accountHolder} has ${this.#balance}`);
  }

  setBalance(addedMoney) {
    this.#balance += addedMoney;
  }
}

let Rohan = new BankAccount("Rohan", 20000);
Rohan.getBalance();

Rohan.setBalance(1000);
Rohan.getBalance();
