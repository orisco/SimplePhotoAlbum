// selecting elements

const addBtn = document.querySelector(".addBtn");
const resetBtn = document.querySelector(".resetBtn");
const album = document.querySelector(".album");
let URL = document.querySelector(".url");
let title = document.querySelector(".title");
let description = document.querySelector(".description");

// onclick event create a bootstrap card with custom details

addBtn.addEventListener("click", function () {
  if (URL.value == "" || title.value == "" || description.value == "") {
    alert("something is missing...");
  } else {
    const imgCard = document.createElement("div");
    imgCard.setAttribute("class", "card");
    imgCard.setAttribute("style", "width: 18rem");
    album.append(imgCard);

    const img = document.createElement("img");
    img.setAttribute("src", URL.value);
    img.setAttribute("class", "card-img-top");
    imgCard.append(img);

    const close = document.createElement("p");
    close.setAttribute("class", "close");
    close.innerText = "X";
    close.style.display = "none";
    imgCard.append(close);

    const innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "card-body");
    imgCard.append(innerDiv);

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = title.value;
    innerDiv.append(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.setAttribute("class", "card-text");
    cardDescription.innerHTML =
      description.value + "<br><span>Change description</span>";
    innerDiv.append(cardDescription);

    reset();

    // hover on card to display a close button

    imgCard.addEventListener("mouseenter", function () {
      close.style.display = "inline";
    });
    imgCard.addEventListener("mouseleave", function () {
      close.style.display = "none";
    });

    // change img description

    cardDescription.addEventListener("click", function () {
      const descInput = document.createElement("input");
      descInput.setAttribute("type", "text");
      descInput.setAttribute("placeholder", "change description");
      innerDiv.append(descInput);

      const subInput = document.createElement("button");
      subInput.setAttribute("type", "submit");
      subInput.setAttribute("class", "btn btn-dark");
      subInput.innerText = "Submit";
      innerDiv.append(subInput);

      subInput.addEventListener("click", function () {
        cardDescription.innerHTML =
          descInput.value + "<br><span>Change description</span>";
        descInput.style.display = "none";
        subInput.style.display = "none";
      });
    });

    // a click on close button removes the card
    close.addEventListener("click", function () {
      close.parentNode.parentNode.removeChild(imgCard);
    });
  }
});

// reset function
function reset() {
  description.value = "";
  URL.value = "";
  title.value = "";
}

// a click on reset removes all cards
resetBtn.addEventListener("click", function () {
  album.innerHTML = "";
});
