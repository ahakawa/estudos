const user = {
  name: "Maria",
  transactions: [],
  balance: 0,
};

function createTransaction(transaction) {
  user.transactions.push(transaction);
}

createTransaction({ type: "credit", value: 150.5 });

function getHigherTransactionByType(type) {
  let typeTransaction = [];

  for (let transaction of user.transactions) {
    if (transaction.type == type) {
      typeTransaction.push(transaction);
    }
  }

  let transactionsOrdened = typeTransaction.sort(function (a, b) {
    return b.value - a.value;
  });
  let higherTransaction = transactionsOrdened[0];
}

getHigherTransactionByType("credit");

function getAverageTransactionValue() {
  let sum = 0;

  for (let i = 0; i < user.transactions.length; i++) {
    sum += user.transactions[i].value;
  }

  let average = (sum / user.transactions.length).toFixed(2);
}

getAverageTransactionValue();

function getTransactionsCount() {
  let credit = 0;
  let debit = 0;

  for (let transaction of user.transactions) {
    if (transaction.type == "credit") {
      credit = credit + 1;
    } else {
      debit = debit + 1;
    }
  }
}

getTransactionsCount();
