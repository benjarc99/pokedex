const d = document,
  w = window;

export default function scrollHeader() {
  const $navHeader = d.querySelector(".nav-header");

  $navHeader.classList.remove("scroll");

  d.addEventListener("scroll", () => {
    let y = w.scrollY;

    if (y === 0) {
      $navHeader.classList.remove("scroll");
    }
    if (y > 0) {
      $navHeader.classList.add("scroll");
    }
  });
}
