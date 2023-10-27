const SearchForm = ({
  handleFormSubmit,
  handleQuery,
  handleStartDate,
  handleEndDate,
  nextTimer,
}) => {
  return (
    <form
      className="space-y-4 bg-slate-300 py-7 px-4"
      onSubmit={handleFormSubmit}
    >
      <div>
        <p>Enter a SINGLE search term</p>
        <input
          type="text"
          className="border-[1px] border-black px-2 py-1"
          onChange={handleQuery}
        />
      </div>
      <div>
        <p>Enter a start date</p>
        <input
          type="date"
          className="border-[1px] border-black px-2 py-1"
          onChange={handleStartDate}
        />
      </div>
      <div>
        <p>Enter a start date</p>
        <input
          type="date"
          className="border-[1px] border-black px-2 py-1"
          onChange={handleEndDate}
        />
      </div>
      <button
        className="border-[1px] border-black px-2 disabled:text-red-600 disabled:border-red-600"
        disabled={nextTimer}
      >
        Submit Search
      </button>
    </form>
  );
};

export default SearchForm;
