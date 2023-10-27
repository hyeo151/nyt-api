"use client";

import { useState } from "react";
import { fetchData, startTimer } from "./utils/uitility";
import SearchForm from "./components/SearchForm";
import Articles from "./components/Articles";

const Page = () => {
  const [query, setQuery] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState();
  const [pagination, setPagination] = useState(0);
  const [nextTimer, setNextTimer] = useState(false);

  let articles = null;
  let metaData = null;
  if (data) {
    articles = data["docs"];
    metaData = data["meta"];
  }

  async function handleFormSubmit(e: any, val: any) {
    e.preventDefault();
    setNextTimer(true);
    let newPagination = pagination;
    if (val) {
      newPagination = pagination + val;
      setPagination(newPagination);
    }
    const fetchedData = await fetchData(
      query,
      newPagination,
      startDate,
      endDate
    );
    console.log(fetchedData);
    setData(fetchedData);
    try {
      const timeUp = await startTimer();
      console.log("timeup");
      setNextTimer(false);
    } catch {}
  }

  return (
    <main className="max-w-7xl mx-auto py-8 bg-slate-200 px-9">
      <h1 className="font-bold text-3xl text-center mb-5">
        NY Times article search {pagination}
      </h1>
      <div className="flex justify-between gap-10">
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleQuery={(e) => {
            setQuery(e.target.value);
          }}
          handleStartDate={(e) => {
            setStartDate(e.target.value);
          }}
          handleEndDate={(e) => {
            setEndDate(e.target.value);
          }}
          nextTimer={nextTimer}
        />
        <div className="flex-1">
          {metaData && <p>hits: {metaData.hits}</p>}
          <nav className="flex justify-between mb-2">
            <button
              className="px-3 py-1 bg-slate-300 disabled:text-red-600 disabled:border-red-600 disabled:border-[1px]"
              disabled={nextTimer}
              onClick={(e) => handleFormSubmit(e, -1)}
            >
              {metaData && metaData.offset} Prev
            </button>
            <button
              className="px-3 py-1 bg-slate-300 disabled:text-red-600 disabled:border-red-600 disabled:border-[1px]"
              disabled={nextTimer}
              onClick={(e) => handleFormSubmit(e, +1)}
            >
              {metaData && metaData.offset + 10} Next
            </button>
          </nav>
          {articles && <Articles articles={articles} />}
          <nav className="flex justify-between mb-2 mt-4">
            <button
              className="px-3 py-1 bg-slate-300 disabled:text-red-600 disabled:border-red-600 disabled:border-[1px]"
              disabled={nextTimer}
              onClick={(e) => handleFormSubmit(e, -1)}
            >
              {metaData && metaData.offset} Prev
            </button>
            <button
              className="px-3 py-1 bg-slate-300 disabled:text-red-600 disabled:border-red-600 disabled:border-[1px]"
              disabled={nextTimer}
              onClick={(e) => handleFormSubmit(e, +1)}
            >
              {metaData && metaData.offset + 10} Next
            </button>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Page;
