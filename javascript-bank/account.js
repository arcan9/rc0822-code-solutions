/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var funds = 0;
  for (var i = 0; i < this.transactions.length; i++) {

    if (this.transactions[i].type === 'deposit') {
      funds += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      funds -= this.transactions[i].amount;
    }
  }
  return funds;
};
