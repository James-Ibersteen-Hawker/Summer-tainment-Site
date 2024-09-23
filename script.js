window.onload = function startUp() {
  sectionHeight();
};

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

let bottomReached = false;

function footer() {
  let footer = document.getElementsByClassName("pre-footer")[0];
  if (
    window.innerHeight + Math.round(window.scrollY) >=
    document.body.offsetHeight
  ) {
    footer.classList.remove("footFadeOut");
    footer.classList.add("footFadeIn");
    bottomReached = true;
  } else {
    if (bottomReached == true) {
      footer.classList.remove("footFadeIn");
      footer.classList.add("footFadeOut");
    } else {
      footer.classList.remove("footFadeIn");
    }
  }
}

//section height

window.addEventListener("resize", onResize);

function onResize() {
  sectionHeight();
}

function sectionHeight() {
  if (window.innerWidth >= 992) {
    let fullHeightElem = document.getElementsByClassName("img-col")[0];
    let fullHeight = fullHeightElem.offsetHeight;
    let halves = [
      document.getElementsByClassName("half-height")[0],
      document.getElementsByClassName("half-height")[1],
    ];
    for (let i = 0; i < halves.length; i++) {
      halves[i].setAttribute(
        "style",
        `height: ${fullHeight / 2}px; background: #e5ffea;`
      );
    }
  } else {
    let halves = [
      document.getElementsByClassName("half-height")[0],
      document.getElementsByClassName("half-height")[1],
    ];
    for (let i = 0; i < halves.length; i++) {
      halves[i].setAttribute("style", `background: #e5ffea;`);
    }
  }
}
