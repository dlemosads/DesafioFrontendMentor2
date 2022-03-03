let btn1 = document.querySelector('#titulo1');
let btn2 = document.querySelector('#titulo2');
let btn3 = document.querySelector('#titulo3');
let btn4 = document.querySelector('#titulo4');
let btn5 = document.querySelector('#titulo5');
let imge1 = document.getElementById("img1");
let imge2 = document.getElementById("img2");
let imge3 = document.getElementById("img3");
let imge4 = document.getElementById("img4");
let imge5 = document.getElementById("img5");
let graus = 0;

btn1.addEventListener('click', function(){
  if (graus === 0){
    graus = 180;
    imge1.style.transform = 'rotate(' + graus + 'deg)';
  } else {
    graus = 0;
    imge1.style.transform = 'rotate(' + graus + 'deg)';
  }
});

btn2.addEventListener('click', function(){
  if (graus === 0){
    graus = 180;
    imge2.style.transform = 'rotate(' + graus + 'deg)';
  } else {
    graus = 0;
    imge2.style.transform = 'rotate(' + graus + 'deg)';
  }
});

btn3.addEventListener('click', function(){
  if (graus === 0){
    graus = 180;
    imge3.style.transform = 'rotate(' + graus + 'deg)';
  } else {
    graus = 0;
    imge3.style.transform = 'rotate(' + graus + 'deg)';
  }
});

btn4.addEventListener('click', function(){
  if (graus === 0){
    graus = 180;
    imge4.style.transform = 'rotate(' + graus + 'deg)';
  } else {
    graus = 0;
    imge4.style.transform = 'rotate(' + graus + 'deg)';
  }
});

btn5.addEventListener('click', function(){
  if (graus === 0){
    graus = 180;
    imge5.style.transform = 'rotate(' + graus + 'deg)';
  } else {
    graus = 0;
    imge5.style.transform = 'rotate(' + graus + 'deg)';
  }
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
