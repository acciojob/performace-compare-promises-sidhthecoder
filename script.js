// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

// Measure the time taken to fetch data using Promise.all
const measurePromiseAll = async () => {
  const startTime = performance.now();
  const promises = apiUrls.map(fetchData);
  await Promise.all(promises);
  const endTime = performance.now();
  return endTime - startTime;
};

// Measure the time taken to fetch data using Promise.any
const measurePromiseAny = async () => {
  const startTime = performance.now();
  const promises = apiUrls.map(fetchData);
  await Promise.any(promises);
  const endTime = performance.now();
  return endTime - startTime;
};

// Call the functions and display the results
measurePromiseAll().then((time) => {
  document.getElementById('output-all').textContent = `${time} milliseconds`;
});

measurePromiseAny().then((time) => {
  document.getElementById('output-any').textContent = `${time} milliseconds`;
});
