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

const imgs = document.querySelectorAll(".img");
const imgPreview = document.querySelector(".img-preview");  
const closeImgBtn = document.querySelector(".close-preview");


function showBigImg(){
  imgPreview.style.display = "flex";
};

function closeBigImg(){
  imgPreview.style.display = "none";
};

imgs.forEach(img => {
  img.addEventListener("click", showBigImg)
});

closeImgBtn.addEventListener("click", closeBigImg);



///////////////////// Pokazanie nowej grafiki po kliknięciu w grafikę karuzeli. Otworzenie okna podglądu.






