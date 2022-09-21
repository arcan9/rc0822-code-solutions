/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var bankAccount = new Account(this.nextAccountNumber, holder);
    bankAccount.deposit(balance);
    this.accounts.push(bankAccount);
    this.nextAccountNumber++;
    return bankAccount.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }

  return null;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;

  if (this.accounts.length > 0) {
    for (var i = 0; i < this.accounts.length; i++) {
      var accountTotal = this.accounts[i].getBalance();
      grandTotal += accountTotal;
    }
  }
  return grandTotal;
};
