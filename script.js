function toggleMenu(){
    // document is the webpage and queryselector 
    // tries to find elements matching the parameters
    // in this case finding the menu and icon elements in the html
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    // since the function is called when clicked, it toggles them to open
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}