import { useState } from "react";
import Categories from "./Categories";

const ExpenseTracker = ({ onSave }) => {
  const incomeCategories = [
    "Select Option",
    "Salary",
    "Outsourcing",
    "Bond",
    "Dividend",
  ];
  const expenseCategories = [
    "Select Option",
    "Education",
    "Food",
    "Health",
    "Bill",
    "Insurance",
    "Tax",
    "Transport",
    "Telephone",
  ];
  const [isActive, setIsActive] = useState(true);
  // const category = isActive ? "Education" : "Salary";
  const [expenseData, setExpenseData] = useState({
    category: "",
    amount: 0,
    date: "",
    expenseDetails: "",
  });
  const handleChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    const expenseDetails = isActive ? "Expense" : "Income";
    setExpenseData({
      ...expenseData,
      [name]: value,
      expenseDetails,
    });
  };
  return (
    // {/*Submission Form*/}
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>
      <form>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            onClick={() => setIsActive(true)}
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              isActive ? "active" : ""
            }`}
          >
            Expense
          </div>
          <div
            onClick={() => setIsActive(false)}
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              isActive ? "" : "active"
            }`}
          >
            Income
          </div>
        </div>

        {/* Note */}
        {/* Income Categories - Salary, Outsourcing, Bond, Dividend */}
        {isActive ? (
          <Categories
            expenseType={expenseCategories}
            handleChange={handleChange}
          />
        ) : (
          <Categories
            expenseType={incomeCategories}
            handleChange={handleChange}
          />
        )}

        <div className="mt-3">
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="amount"
              id="amount"
              value={expenseData.amount}
              onChange={handleChange}
              autoComplete="off"
              placeholder="12931"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="date"
              id="date"
              value={expenseData.date}
              onChange={handleChange}
              autoComplete="off"
              placeholder="12931"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onSave(expenseData);
          }}
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ExpenseTracker;
