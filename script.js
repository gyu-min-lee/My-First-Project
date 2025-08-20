const card = document.querySelector(".card");

card.addEventListener("click", ()=> {
    card.querySelector(".card-inner").classList.toggle("is-flipped");
});
    