import Expense from "./Expense";
import ExpenseList from "./ExpenseList";

const ExpenseDetailsContainer = ({
  totalBalance,
  totalIncome,
  totalExpense,
  incomesList,
  expenseList,
  handleEdit
}) => {
  // console.log(totalBalance);

  return (
    <div className="lg:col-span-2">
      {/* Total Balance Stat */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
            <Expense amount={totalBalance} amountType={"Balance"} />
            <Expense amount={totalIncome} amountType={"Total Income"} />
            <Expense amount={totalExpense} amountType={"Total Expense"} />
          </dl>
        </div>
      </div>
      {/* end */}
      {/* list down */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <ExpenseList handleEdit={handleEdit} lists={incomesList} listTitle={"Income"} />
        <ExpenseList handleEdit={handleEdit} lists={expenseList} listTitle={"Expense"} />
      </div>
    </div>
  );
};

export default ExpenseDetailsContainer;
