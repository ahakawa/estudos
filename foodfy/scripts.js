let modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    const cardId = card.getAttribute("id");
    const description = card.querySelector(".card_content p").innerHTML;
    const cardInfo = card.querySelector(".card_info p").innerHTML;

    console.log(description, "desc");

    modalOverlay.classList.add("active");
    modalOverlay.querySelector(".modal-img img").src = `./assets/${cardId}.png`;
    modalOverlay.querySelector(".modal-content p").innerHTML = description;
    modalOverlay.querySelector(".modal-info p").innerHTML = cardInfo;
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});
