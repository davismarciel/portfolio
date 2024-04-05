const cards = document.querySelectorAll(".c-hero-flex__item");
const desc = document.querySelectorAll(".description");

// Returns a node list, so we need to iterate this list in order to use it.
cards.forEach((card, index) => {
  card.addEventListener('mouseover', () => {
    if (desc[index]) {
      desc[index].style.display = 'flex';
      desc[index].style.fontSize = '16px';
    }
  });

  card.addEventListener('mouseleave', () => {
    if (desc[index]) {
      desc[index].style.display = 'none';
    }
  });
});
