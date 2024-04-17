const universe = document.querySelectorAll(".universe");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
    universe.forEach((universe) => {
      // add data-animated="true" to every `.scroller` on the page
      universe.setAttribute("data-animated", true);

