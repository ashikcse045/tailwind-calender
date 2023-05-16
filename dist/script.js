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
  // console.log(currentMonth);
  const dayNum = currentMonth.day;
  const start = currentMonth.start;
  const krishnaAkadoshi = currentMonth.krishnaAkadoshi;
  const sukloakadoshi = currentMonth.sukloAkadoshi;

  const omabossa = currentMonth.omabossa;
  const purnima = currentMonth.purnima;

  let index = 0;
  let currentCell = 0;

  for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");
    tr.className = "text-center";
    for (let j = 0; j < 7; j++) {
      // console.log(j);
      if (currentCell >= start && index < dayNum) {
        const td = document.createElement("td");

        if (krishnaAkadoshi.includes(index + 1)) {
          // td.innerHTML = dates[index];
          const span = document.createElement("span");
          span.className =
            "material-symbols-outlined fill-icon text-gray-950 dark:text-gray-400";
          span.innerText = "clear_night";
          const p = document.createElement("p");
          p.className = "text-xs";
          p.innerText = `${dates[index]} কৃষ্ণ একাদশী`;

          td.append(span, p);
        } else if (sukloakadoshi.includes(index + 1)) {
          // td.innerHTML = dates[index];
          const span = document.createElement("span");
          span.className =
            "material-symbols-outlined fill-icon text-yellow-400";
          span.innerText = "clear_night";
          const p = document.createElement("p");
          p.className = "text-xs";
          p.innerText = `${dates[index]} শুক্ল একাদশী`;

          td.append(span, p);
        } else if (purnima == index + 1) {
          // td.innerHTML = dates[index];
          const span = document.createElement("span");
          span.className =
            "material-symbols-outlined fill-icon text-yellow-400";
          span.innerText = "circle";
          const p = document.createElement("p");
          p.className = "text-xs";
          p.innerText = `${dates[index]} পূর্ণিমা`;

          td.append(span, p);
        } else if (omabossa == index + 1) {
          // td.innerHTML = dates[index];
          const span = document.createElement("span");
          span.className =
            "material-symbols-outlined fill-icon text-gray-950 dark:text-gray-400";
          span.innerText = "circle";
          const p = document.createElement("p");
          p.className = "text-xs";
          p.innerText = `${dates[index]} অমাবস্যা`;

          td.append(span, p);
        } else {
          td.innerHTML = dates[index];
        }

        td.className =
          "w-[14.28%] py-3 border border-gray-200 dark:border-gray-700";
        tr.appendChild(td);
        index++;
      } else {
        const td = document.createElement("td");
        td.innerHTML = "";
        td.className =
          "w-[14.28%] py-3 border border-gray-200 dark:border-gray-700";
        tr.appendChild(td);
        currentCell++;
      }
    }
    table.appendChild(tr);
  }
}
fetchData();
