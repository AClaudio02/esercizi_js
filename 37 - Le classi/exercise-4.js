class BankAccount {
  constructor(avaibleCredit) {
    this.avaibleCredit = avaibleCredit;
  }
  deposit(value) {
    return this.avaibleCredit += value;
  }
  withdraw(value) {
    return this.avaibleCredit -= value;
  }
  view() {
    console.log(bankAccount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
