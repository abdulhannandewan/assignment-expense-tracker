import ExpenseListHeader from "./ExpenseListHeader";
import List from "./list";

const ExpenseList = ({ listTitle, lists,handleEdit }) => {
  // console.log(lists.length);

  return (
    <div className="border rounded-md relative">
      {/* Header */}
      <ExpenseListHeader listTitle={listTitle} />

      {/* Row  */}
      <div className="p-4 divide-y">
        {lists.map((list, i) => (
          <List handleEdit={handleEdit} key={i} list={list} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
