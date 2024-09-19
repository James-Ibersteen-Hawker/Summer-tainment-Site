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
