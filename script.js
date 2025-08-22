const card = document.querySelector(".card");

card.querySelector(".card-inner").addEventListener("click", ()=> {
    card.querySelector(".card-inner").classList.toggle("is-flipped");
});
    