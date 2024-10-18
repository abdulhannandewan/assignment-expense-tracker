const Expense = ({ amountType, amount }) => {
  const color = "text-red-600";
  return (
    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
      <dt className="text-base leading-7 text-gray-600">{amountType}</dt>
      <dd
        className={`order-first text-xl font-semibold tracking-tight ${
          amount < 0 ? color : "text-gray-700"
        } sm:text-3xl`}
      >
        BDT {amount}
      </dd>
    </div>
  );
};

export default Expense;
