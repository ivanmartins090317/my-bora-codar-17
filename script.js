const months = [
  "jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function render() {
  let output = "";
  const thisMonth = months[new Date().getMonth()];

  for (let month of months) {
    const active = thisMonth === month ? "active" : "";
    output += `<div id="month"class="${active}">${month}</div>`;
  }
  return output;
}

app.querySelector("main").innerHTML = render();

let yearCurrent = app.querySelector("header span");
yearCurrent.innerHTML = new Date().getFullYear();

const decrementYear = app.querySelector("header #left");
left.addEventListener("click", () => yearCurrent.innerHTML--);

const incrementYear = app.querySelector("header #right");
right.addEventListener("click", () => yearCurrent.innerHTML++);

const mesApp = document.querySelector("main");
mesApp.addEventListener(
  "click",
  () => (document.querySelector("#appDay").style.display = "block")
);
