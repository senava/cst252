/**
 * Author:  Stephanie Nava
 * Last edited:   04.05.2022
 * License:   Public Domain
 **/

 // special thanks to https://www.youtube.com/watch?v=jkaqJVtjb7I

 var animateButton = function(e) {

     e.preventDefault;
     //reset animation
     e.target.classList.remove('animate');

     e.target.classList.add('animate');
     setTimeout(function(){
       e.target.classList.remove('animate');
     },700);
   };

  // blue
   var bubblyButtons = document.getElementsByClassName("btn-bubbly");
   for (var i = 0; i < bubblyButtons.length; i++) {
     bubblyButtons[i].addEventListener('click', animateButton, false);
   }
