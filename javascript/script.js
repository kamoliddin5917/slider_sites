const box = document.querySelector(".box");
const card = document.querySelector(".card");
const cardChild = document.querySelector(".card__child");
const cardBody = document.querySelectorAll(".card__body");
const width = window.getComputedStyle(card).width;
const newOl = document.createElement("ol");
const dots = [];
const colors = [
  "#E44D26",
  "#1B73BA",
  "#F06292",
  "#7110EF",
  "#FCDB24",
  "#61DAFB",
];

let pixel = 0;
var i = 0;

newOl.classList.add("btns");
card.appendChild(newOl);

cardChild.style.width = cardBody.length * 100 + "%";

cardBody.forEach((item, i) => {
  item.style.width = width;

  const newLi = document.createElement("li");
  newLi.classList.add("btns__list");
  newLi.dataset.id = i;

  dots.push(newLi);

  newOl.append(newLi);
});
newOl.style.height = dots.length * 50 + "px";

dots.forEach((dot) => {
  dot.style.width = "10px";
  dot.style.height = "50px";
  dot.style.cursor = "pointer";

  dot.addEventListener("click", (event) => {
    const datasetId = event.target.dataset.id;
    i = Number(datasetId);
    console.log(datasetId);
    pixel = +width.slice(0, width.length - 2) * datasetId;

    cardChild.style.transform = `translateX(-${pixel}px)`;

    dots.forEach((dot) => {
      dot.style.background = "transparent";
    });
    dots[datasetId].style.background = "red";

    box.style.background = colors[datasetId];

    cardBody.forEach((item) => {
      item.classList.add("card__body-scale");
    });

    const clearClass = setTimeout(() => {
      cardBody.forEach((item) => {
        item.classList.remove("card__body-scale");
      });
    }, 600);
  });
});

var interval = setInterval(function () {
  if (i < dots.length - 1) {
    i += 1;
  } else {
    i = 0;
  }
  console.log(i);
  pixel = +width.slice(0, width.length - 2) * i;

  cardChild.style.transform = `translateX(-${pixel}px)`;

  dots.forEach((dot) => {
    dot.style.background = "transparent";
  });
  dots[i].style.background = "red";

  box.style.background = colors[i];
}, 3000);
