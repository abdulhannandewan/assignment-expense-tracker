const Categories = ({ expenseType, handleChange }) => {
  return (
    <div className="mt-3">
      <label
        htmlFor="category"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Category
      </label>
      <div className="mt-2">
        <select
          id="category"
          name="category"
          // value={}
          onChange={handleChange}
          autoComplete="category-name"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
        >
          {expenseType.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Categories;
