const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const pricesArr = [];

function AddProduct() {
  if (inputBox.value === "") {
    alert("Va rog sa scrieti produsul!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    let numberInput = document.createElement("input");
    numberInput.setAttribute("type", "text");
    numberInput.setAttribute("class", "price");
    numberInput.innerHTML = "";

    numberInput.setAttribute("placeholder", "Pret");
    li.appendChild(numberInput);
    let ron = document.createElement("p");
    ron.setAttribute("class", "ron");
    ron.textContent = "Ron";
    li.appendChild(ron);

    numberInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();

const buttonNum = document.getElementById("message");
buttonNum.addEventListener("click", function () {
  document.body.style.background = 'url("images/shopping1.jpg")';
  document.body.style.backgroundSize = "cover";
  const numaraProduse = listContainer.getElementsByTagName("li").length;

  alert(`Numar de produse introduse in lista: ${numaraProduse}`);
});

const sortButton = document.getElementById("sort");

sortButton.addEventListener("click", function () {
  document.body.style.background = 'url("images/shopping4.jpg")';
  document.body.style.backgroundSize = "cover";
  const arrLi = Array.from(listContainer.getElementsByTagName("li"));
  const textContents = arrLi.map((li) =>
    li.textContent.substring(0, li.textContent.length - 4)
  );
  textContents.sort((a, b) => a.localeCompare(b));
  listContainer.innerHTML = "";
  textContents.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    let numberInput = document.createElement("input");
    numberInput.setAttribute("type", "text");
    numberInput.setAttribute("class", "price");
    numberInput.innerHTML = "";

    numberInput.setAttribute("placeholder", "Pret");
    li.appendChild(numberInput);
    let ron = document.createElement("p");
    ron.setAttribute("class", "ron");
    ron.textContent = "Ron";
    li.appendChild(ron);

    numberInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  });
  saveData();
});

function calculateAverage() {
  const priceInputs = document.querySelectorAll(".price");
  let total = 0;
  let count = 0;

  priceInputs.forEach(function (input) {
    const price = parseInt(input.value);
    if (!isNaN(price)) {
      total += price;
      count++;
    }
  });

  const average = count > 0 ? total / count : 0;

  document.body.style.background = 'url("images/shopping2.jpg")';
  document.body.style.backgroundSize = "cover";

  alert("Media preturilor: " + average.toFixed(2));
}

function calculateSum() {
  const priceInputs = document.querySelectorAll(".price");
  let total = 0;

  priceInputs.forEach(function (input) {
    const price = parseInt(input.value);
    if (!isNaN(price)) {
      total += price;
    }
  });

  document.body.style.background = 'url("images/shopping5.jpg")';
  document.body.style.backgroundSize = "cover";

  alert("Suma preturilor: " + total.toFixed(2));
}

const date = new Date();
const year = date.getFullYear();
const placeholderYear = document.querySelector(".year");
const textNode = document.createTextNode(year);
placeholderYear.appendChild(textNode);
