const testimonial = document.getElementById('testimonials');
let i = 0;
const testi = [];
const time = 4000;

testi[0] = '<p>Need a detailed breakdown of where all that time went? Estimate issues to understand the challenges. Optional time tracking with Harvest allows you to accurately invoice your customers.';
testi[1] = 'During the project I did realize that javascript was not my strong suit so I started looking for supplemental materials.';
testi[2] = 'I know that was probably a lot but that was my journey and experience in going and getting into the field. I’m still not done because as I grow and develop';

function slider(){
  testimonial.innerHTML = testi[i];
  if(i < testi.length - 1) {
    i ++;
  } else {
    i = 0;
  }
  setTimeout('slider()', time);
}
window.onload = slider;
/*
// filterBtn
function filterSelection(c) {
  var filterbtns, i;
  filterbtns = document.getElementsByClassName("filterBtn");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < filterbtns.length; i++) {
    removeClass(filterbtns[i], "show");
    if (filterbtns[i].className.indexOf(c) > -1) addClass(filterbtns[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("filterBtns");
var btns = btnContainer.getElementsByClassName("filterBtn");
for (var j = 0; j < btns.length; j++) {
  btns[j].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
filterBtns.addEventListener('click', filterSelection('original artwork', 'commissions', 'paintings'));
*/
//Filter buttons
(function() {
  var $imgs = $('.masonry img');
  var $buttons = $('#filterBtns');
  var tagged = {};


$imgs.each(function() {
  var img = this;
  var tags = $(this).data('tags');


if (tags) {
  tags.split(',').forEach(function(tagName) {
    if(tagged[tagName] == null) {
      tagged[tagName] = [];
    }
    tagged[tagName].push(img);
  });
}
});
//Buttons go here
  $('<button/>',{
    text: "Show All",
    class: 'active',
    click: function () {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');
      $imgs.show()
    }
  }).appendTo($buttons);
  $.each(tagged, function(tagName){
    $('<button/>', {
      text: tagName + ' (' + tagged[tagName].length + ')',
      click: function () {
        $(this)
          .addClass('active .filterBtns')
          .siblings()
          .removeClass('active');
          $imgs
          .hide()
          .filter(tagged[tagName])
          .show();
        }
  }).appendTo($buttons);
  })
}());

// Responsive menu
var toggleBtn = document.getElementById('burger');
var closeBtn = document.getElementById('closebtn');
var overlay = document.getElementById('menuOverlay');

function open(){
  overlay.style.height = '100%';
  console.log('it works');
}

function close(){
  overlay.style.height = '0%';
}

toggleBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);
