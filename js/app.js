// I start with Define Global Variables which bring elements from html

const navBar = document.getElementById("navbar__list");
const sectionGet = document.querySelectorAll("section");
// scroll to the top button
let mybutton = document.getElementById("topBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

sectionGet.forEach((element) => {
  let varLi = document.createElement("li");
  let varAnc = document.createElement("a");
  let VarDataNav = element.getAttribute("data-nav");
  let varNode = document.createTextNode(VarDataNav);
  let sectionId = element.getAttribute("id");
  navBar.appendChild(varLi);
  varLi.appendChild(varAnc);
  varAnc.appendChild(varNode);
  varAnc.setAttribute("href", `#${sectionId}`);
  varAnc.classList.add("menu__link");
  varAnc.addEventListener("click", smooF);
});

// I used .getBoundingClientRect() to specify when to show the section shaid
function highlights(secShaid) {
  const viewRect = secShaid.getBoundingClientRect();
  return (
    viewRect.top >= -250 &&
    viewRect.left >= 0 &&
    viewRect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    viewRect.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}
// connecting the navigation bar with the sections while scrolling
function ScrollF() {
  let scrolVar = document.querySelectorAll(".menu__link");
  for (let x = 0; x < sectionGet.length; x++) {
    if (highlights(sectionGet[x])) {
      scrolVar[x].classList.add("link__active");
      sectionGet[x].classList.add("your-active-class");
    } else {
      scrolVar[x].classList.remove("link__active");
      sectionGet[x].classList.remove("your-active-class");
    }
  }
}
// give my pag smooth scroll using javascript
function smooF(eventLi) {
  const secName = document.querySelector(eventLi.target.hash);
  eventLi.preventDefault();
  secName.scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("scroll", ScrollF);
