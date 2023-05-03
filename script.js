

const serviceSection = document.querySelector('.serviceClass');
const whyusSection = document.querySelector('#WhyChooseUs');
const home = document.querySelector('#body-header');


document.querySelector('.service-link').addEventListener('click', () => {
  serviceSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector('.Choose-link').addEventListener('click', () => {
  whyusSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector('.home-link').addEventListener('click', () => {
  home.scrollIntoView({ behavior: "smooth" });
});




// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}




const homeSection = document.querySelector('#body-header');

document.querySelector('#myBtn').addEventListener('click', () => {
  homeSection.scrollIntoView({ behavior: "smooth" }); 
});





































// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// var interval;


// for (var i = 0; i < navMenuAnchorTags.length; i++) {
//     navMenuAnchorTags[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         console.log(this.textContent);
//         var targetSection = document.getElementById(targetSectionID);
//         console.log(targetSection);
//         //    interval = setInterval(scrollVertically, 20, targetSection);

//         interval = setInterval(function () {
//             scrollVertically(targetSection);
//         }, 100);
//     });
// }


// function scrollVertically(targetSection) {
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     if (targetSectionCoordinates.top <= 0) {
//         clearInterval(interval);
//         return;
//     }
//     window.scrollBy(0, 50);
// }