export function fetchData(
  query: any,
  pagination: any,
  startDate: any,
  endDate: any
) {
  const base = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  const key = "D69gKN73kLOZdGdBf8duwmZCkA5wnShB";

  let url = base + `?api-key=${key}&sort=newest`;
  if (query) {
    url += `&q=${query}`;
  }

  url += `&page=${pagination}`;
  if (startDate) {
    url = `${url}&begin_date=${startDate}`;
  }

  if (endDate) {
    url = `${url}&end_date=${endDate}`;
  }
  console.log(url);
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => data.response);
  return data;
}

export function startTimer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 12000);
  });
}
