///////////////////// Kręcenie się karuzeli w prawo
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
///////////////////// Kręcenie się karuzeli w prawo
///////////////////// Pokazanie nowej grafiki po kliknięciu w grafikę karuzeli. Otworzenie okna podglądu.

// 1. On click div display:block div z grafiką id1BIG
// div ma być absolute,display none, z-index 1, top 0, left 0, 
// grafika w div wyśrodkowana
// w prawym górnym rogu x do zamknięcia okna
// 2. on click x, display: none;

const img = document.querySelector(".img");
const imgPreview = document.querySelector(".xxx");

img.addEventListener("click", showBigImg);

function showBigImg(){
    imgPreview.style.display = "block";
}


///////////////////// Pokazanie nowej grafiki po kliknięciu w grafikę karuzeli. Otworzenie okna podglądu.