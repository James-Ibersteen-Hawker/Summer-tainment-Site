//sidebar
function sidebar(param) {
  let sidebar = document.getElementById("sidebar");
  let cover = document.getElementById("darken");
  if (param == 1) {
    sidebar.classList.add("sidebar-open");
    cover.classList.add("covering");
    setTimeout(() => {
      sidebar.classList.remove("sidebar-open");
      sidebar.setAttribute("style", "left: 0;");
      cover.classList.remove("covering");
      cover.setAttribute("style", "opacity: 1; display: block;");
    }, 500);
  } else {
    sidebar.classList.add("sidebar-close");
    cover.classList.add("leaving");
    setTimeout(() => {
      sidebar.classList.remove("sidebar-close");
      sidebar.setAttribute("style", "left: calc(var(--bar-width) * -1);");
      cover.classList.remove("leaving");
      cover.setAttribute("style", "opacity: 0;");
    }, 500);
  }
}

//back to top button
window.addEventListener("scroll", scrolled);

function scrolled() {
  show_button();
  footer();
}

function show_button() {
  let button = document.getElementsByClassName("to_top")[0];
  if (scrollY >= 100) {
    button.classList.add("fade_in_button");
    button.classList.remove("fade_out_button");
  } else if (scrollY < 100) {
    button.classList.add("fade_out_button");
    button.classList.remove("fade_in_button");
  }
}

function footer() {
  let footer = document.getElementsByClassName("footer_container")[0];
  if (scrollY >= 50) {
    footer.classList.remove("footerd_inverse");
    footer.classList.add("footerd");
  } else {
    footer.classList.remove("footerd");
    footer.classList.add("footerd_inverse");
  }
}
