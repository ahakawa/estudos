const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener("click", function() {
        const cursoId = card.getAttribute("id")
        modalOverlay.classList.add('maximize');
        modalOverlay.querySelector("iframe").src = `https://www.rocketseat.com.br/${cursoId}`;
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.contains('maximize')
    modalOverlay.classList.remove('maximize')    
})