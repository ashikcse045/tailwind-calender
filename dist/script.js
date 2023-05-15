const displayMonth = document.querySelector("#current_month");
const table = document.querySelector("#tableBody");

const dates = [
  "১",
  "২",
  "৩",
  "৪",
  "৫",
  "৬",
  "৭",
  "৮",
  "৯",
  "১০",
  "১১",
  "১২",
  "১৩",
  "১৪",
  "১৫",
  "১৬",
  "১৭",
  "১৮",
  "১৯",
  "২০",
  "২১",
  "২২",
  "২৩",
  "২৪",
  "২৫",
  "২৬",
  "২৭",
  "২৮",
  "২৯",
  "৩০",
  "৩১",
  "৩২",
];

async function fetchData() {
  const response = await fetch("./data/data.json");
  const data = await response.json();
  const months = data.month;
  const textNode = document.createTextNode(`${months[1].name} ১৪৩০`);
  displayMonth.appendChild(textNode);

  const currentMonth = months[1];
  const dayNum = currentMonth.day;
  const start = currentMonth.start;
  let index = 0;
  let currentCell = 0;

  for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");
    tr.className = 'text-center';
    for (let j = 0; j < 7; j++) {
      // console.log(j);
      if (currentCell >= start && index < dayNum) {
        const td = document.createElement("td");
        td.innerHTML = dates[index];
        td.className = 'w-[14.28%] py-3 border border-gray-200 dark:border-gray-700';
        tr.appendChild(td);
        index++;
      }
      else {
        const td = document.createElement("td");
        td.innerHTML = '';
        td.className = 'w-[14.28%] py-3 border border-gray-200 dark:border-gray-700';
        tr.appendChild(td);
        currentCell++;
      }
    }
    table.appendChild(tr);
  }
}
fetchData();
