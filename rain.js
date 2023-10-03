// JavaScript code for the raindrop animation
const raindropsContainer = document.querySelector(".rain");

function createRaindrop() {
  const raindrop = document.createElement("div");
  raindrop.className = "raindrop";
  raindrop.style.left = `${Math.random() * 100}%`;
  raindropsContainer.appendChild(raindrop);

  const animationDuration = Math.random() * 2 + 1;
  raindrop.style.animation = `fall ${animationDuration}s linear infinite`;

  raindrop.addEventListener("animationiteration", () => {
    raindrop.remove();
  });
}

setInterval(createRaindrop, 5); // Adjust the interval to control raindrop frequency

// JavaScript code to control the rain sound (optional)
const rainSound = document.getElementById("rainSound");
