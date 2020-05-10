function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = function() {
    return this.balance;
  },
  //This function should receive a `value` parameter and assign it to the `balance` property of `MiniBank`.
  this.setBalance = function(value) {
    this.balance = value;
  },
  //Write an `updateStatement` function that takes in a number and pushes it to the `statement` array.
  this.updateStatement = function(value) {
    this.statement.push(value);
  },
  // Write a `getStatement` function that returns the `statement` property.
  this.getStatement = function () {
    return this.statement.slice(0);
  },
  //Write a `printStatement` function that prints each element in the `statement` array on its own line.
  this.printStatement = function() {
    var statement = this.getStatement();
    for (var i = 0; i < statement.length; i++) {
      console.log(`${i + 1}. ${statement[i]}`);
    }
  },
  
  this.deposit = function(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number!");
    }
    var newBalance = this.getBalance() + value;
    this.setBalance(newBalance);
    this.updateStatement(newBalance);
    console.log(`Deposited ${value}!`)
  },
  this.withdraw = function(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number");
    }
    var newBalance = this.getBalance() - value;
    if (newBalance < 0) {
      throw new Error("Insufficient funds for this transaction");
    }
    this.setBalance(newBalance);
    this.updateStatement(-value);
    console.log(`Withdrew ${value}!`);
  },
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  };
}


var bank = new MiniBank(0);
bank.printBalance();

bank.deposit(85);
bank.printBalance();

bank.withdraw(20);
bank.printBalance();

bank.printStatement();
