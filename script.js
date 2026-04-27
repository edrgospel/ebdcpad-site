  const menu = document.querySelector("#menu");
  const links = menu.querySelectorAll("a");
  const line = menu.querySelector(".menu-line");

  function moveLine(link){
    line.style.width = link.offsetWidth + "px";
    line.style.left = link.offsetLeft + "px";
  }

  const active = menu.querySelector(".active");
  moveLine(active);

  links.forEach(link => {
    link.addEventListener("mouseenter", () => moveLine(link));

    link.addEventListener("click", () => {
      links.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
      moveLine(link);
    });
  });

  menu.addEventListener("mouseleave", () => {
    const current = menu.querySelector(".active");
    moveLine(current);
  });

  window.addEventListener("resize", () => {
    const current = menu.querySelector(".active");
    moveLine(current);
  });

    const menuToggle = document.querySelector("#menuToggle");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  if(menu.classList.contains("active")){
    menuToggle.textContent = "✕";
  }else{
    menuToggle.textContent = "☰";
  }
});

document.querySelectorAll("*").forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log("Elemento vazando:", el);
    el.style.outline = "3px solid red";
  }
});
