const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button

function moveNoBtn() {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Mouse hover (desktop)
noBtn.addEventListener("mouseover", moveNoBtn);

// Touch (mobile)
noBtn.addEventListener("touchstart", (e) => {
  // Vibrate if supported
  if (window.navigator.vibrate) {
    window.navigator.vibrate(100);
  }
  moveNoBtn();
  e.preventDefault();
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  // Slide out animation before showing the next page as a slide-in overlay
  questionContainer.style.transition = "transform 0.7s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.7s";
  questionContainer.style.transform = "translateX(-120vw)";
  questionContainer.style.opacity = "0";
  setTimeout(() => {
    // Instead of opening a new tab, load the interactive heart page as an overlay from the new folder
    const iframe = document.createElement('iframe');
    iframe.src = "heart/interactive-heart-animation.html";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    iframe.style.zIndex = "9999";
    iframe.style.background = "transparent";
    iframe.style.transform = "translateX(120vw)";
    iframe.style.opacity = "0";
    iframe.style.transition = "transform 0.7s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.7s";
    document.body.appendChild(iframe);
    setTimeout(() => {
      iframe.style.transform = "translateX(0)";
      iframe.style.opacity = "1";
    }, 10);
  }, 700);
});
