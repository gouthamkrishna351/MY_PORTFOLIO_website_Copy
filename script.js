function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// Text to be typed
var text = "Goutham Krishna.";

// Typing animation function
function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
    document.getElementById("typed-text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 100);
  }
  else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 1000);
  }
}

// Start the typing animation
document.addEventListener('DOMContentLoaded', function() {
  if (text) {
    typeWriter(text, 0, function() {});
  }
});



const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//---------------TextBox for projects info------------------

//text box 1
function toggleTextBox() {
  var overlay = document.getElementById("overlay");
  var textBox = document.getElementById("textbox");
  overlay.style.display = "block";
  textBox.style.display = "block";
  setTimeout(function() {
      overlay.classList.add("show");
      textBox.classList.add("show");
  }, 10);
}

function closeTextBox() {
  var overlay = document.getElementById("overlay");
  var textBox = document.getElementById("textbox");
  overlay.classList.remove("show");
  textBox.classList.remove("show");
  setTimeout(function() {
      overlay.style.display = "none";
      textBox.style.display = "none";
  }, 300);
}


// text box 2

function toggleTextBox2() {
  var overlay = document.getElementById("overlay");
  var textBox = document.getElementById("textbox2");
  overlay.style.display = "block";
  textBox.style.display = "block";
  setTimeout(function() {
      overlay.classList.add("show");
      textBox.classList.add("show");
  }, 10);
}

function closeTextBox2() {
  var overlay = document.getElementById("overlay");
  var textBox = document.getElementById("textbox2");
  overlay.classList.remove("show");
  textBox.classList.remove("show");
  setTimeout(function() {
      overlay.style.display = "none";
      textBox.style.display = "none";
  }, 300);
}

//text box 3

function toggleTextBox3() {
  var overlay = document.getElementById("overlay");
  var textBox = document.getElementById("textbox3");
  overlay.style.display = "block";
  textBox.style.display = "block";
  setTimeout(function() {
      overlay.classList.add("show");
      textBox.classList.add("show");
  }, 10);
}

function closeTextBox3() {
  var overlay = document.getElementById("overlay");
  var textBox = document.getElementById("textbox3");
  overlay.classList.remove("show");
  textBox.classList.remove("show");
  setTimeout(function() {
      overlay.style.display = "none";
      textBox.style.display = "none";
  }, 300);
}

