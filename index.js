const ad = document.getElementById("ad");
const sirname = document.getElementById("sirname");
const sirket = document.getElementById("sirketadi");
const salary = document.getElementById("salary");
const frontend = document.getElementById("frontend");
const backend = document.getElementById("backend");
const remote = document.getElementById("remote");
const ofis = document.getElementById("ofis");
const button = document.getElementById("button");
const ul = document.getElementById("ul");
button.addEventListener("click", function () {
  const fullName = document.createElement("li");
  fullName.textContent = ad.value + " " + sirname.value;
  ul.appendChild(fullName);
  const Sirket = document.createElement("li");
  Sirket.textContent = sirket.value;
  ul.appendChild(Sirket);
  const Salary = document.createElement("li");
  Salary.textContent = salary.value;
  ul.appendChild(Salary);
  const Frontend = document.createElement("li");
  if (frontend.checked) {
    Frontend.textContent = frontend.value;
    ul.appendChild(Frontend);
  } else {
    Frontend.textContent = backend.value;
    ul.appendChild(Frontend);
  }
});
