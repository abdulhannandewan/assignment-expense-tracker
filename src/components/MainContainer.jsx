import { useState } from "react";
import ExpenseDetailsContainer from "./ExpenseDetailsContainer";
import ExpenseTracker from "./ExpenseTracker";

const MainContainer = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const handleSave = (expenseData) => {
    // console.log(expenseData);
    if (expenseData.expenseDetails == "Expense") {
      setExpenses([...expenses, expenseData]);
    } else if (expenseData.expenseDetails == "Income") {
      setIncomes([...incomes, expenseData]);
    }
  };
  // console.log(incomes);
  // console.log(expenses);
  const handleEdit = (data) => {
    console.log(data);
  };

  const totalIncome =
    incomes.length > 0
      ? incomes
          .map((income) => +income.amount)
          .reduce((prev, next) => prev + next)
      : 0;
  // console.log(totalIncome);
  const totalExpense =
    expenses.length > 0
      ? expenses
          .map((expense) => +expense.amount)
          .reduce((prev, next) => prev + next)
      : 0;
  // console.log(totalExpense);
  const totalBalance = totalIncome - totalExpense;
  // console.log(typeof totalBalance);

  return (
    <div className="relative mx-auto mt-10 w-full max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExpenseTracker onSave={handleSave} />
        <ExpenseDetailsContainer
          totalBalance={totalBalance}
          totalExpense={totalExpense}
          totalIncome={totalIncome}
          incomesList={incomes}
          expenseList={expenses}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default MainContainer;
