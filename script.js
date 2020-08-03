const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

//Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_web_development_${color}.svg`;
  image2.src = `img/undraw_coding_${color}.svg`;
  image3.src = `img/undraw_mobile_development_${color}.svg`;
}

//Dark Mode Style
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

//Light Mode Style
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  image1.src = "img/undraw_web_development_light..svg";
  image2.src = "img/undraw_coding_light..svg";
  image3.src = "img/undraw_mobile_development_light..svg";
}

//Switch Theme Dynamically
function switchTheme(event) {
  console.log(event.target.checked);
  if (event.target.checked == true) {
    darkMode();
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    lightMode();
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute("data-theme", "light");
  }
}

//Event Listener
toggleSwitch.addEventListener("change", switchTheme);

//Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme)
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === 'dark'){
    toggleSwitch.checked = true;
    darkMode();
  }
}
