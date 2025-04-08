function toggleMenu() {
  // document is the webpage and queryselector
  // tries to find elements matching the parameters
  // in this case finding the menu and icon elements in the html
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  // since the function is called when clicked, it toggles them to open
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const liveDemo = document.querySelector(".live-demo-container");
const tetrisDemo = document.querySelector(".tetris-demo-container");
// tetrisDemo.classList.add("open");
var demoLive = false;
var tetrisLive = false;
var meleeLive = false;
const meleeDemo = document.querySelector(".melee-demo-container");

function toggleTetrisDemo() {
  // if the demo's not live, turn it on with the tetris one specifically
  if (demoLive == false) {
    liveDemo.classList.add("open");
    tetrisDemo.classList.add("open");
    tetrisLive = true;
    demoLive = true;
  } else {
    // if the tetris demo button has been clicked when tetris live is open, close it
    if (tetrisLive == true) {
      liveDemo.classList.remove("open");
      tetrisDemo.classList.remove("open");
      demoLive = false;
      tetrisLive = false;
    }
    // otherwise if the tetris demo button has been clicked when the demo is live AND the melee demo has been displayed, switch them
    else {
      tetrisLive = true;
      meleeLive = false;
      tetrisDemo.classList.add("open");
      meleeDemo.classList.remove("open");
    }
  }
}

function toggleMeleeDemo() {
  // if the demo's not live, turn it on with the melee one specifically
  if (demoLive == false) {
    liveDemo.classList.add("open");
    meleeDemo.classList.add("open");
    meleeLive = true;
    demoLive = true;
  } else {
    // if the melee demo button has been clicked when melee live is open, close it
    if (meleeLive == true) {
      liveDemo.classList.remove("open");
      meleeDemo.classList.remove("open");
      demoLive = false;
      meleeLive = false;
    }
    // otherwise if the melee demo button has been clicked when the demo is live AND the tetris demo has been displayed, switch them
    else {
      meleeLive = true;
      tetrisLive = false;
      meleeDemo.classList.add("open");
      tetrisDemo.classList.remove("open");
    }
  }
}
