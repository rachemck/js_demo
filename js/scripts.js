console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfoText = document.getElementById('more-info');
var tooltip = document.getElementById('tooltip')
var arrowUp = document.getElementById('arrow-up')

burger.addEventListener('click', function(){
  console.log('button clicked');
  mobileNav.style.width = '50%';
  mobileNav.style.transition = '0.5s ease';
  mobileNav.style.color = 'red';
  content.style.filter= 'blur(4px)';
  //content.style.opacity = '.01';
});

closeBtn.addEventListener('click', function(){
  mobileNav.style.width = '0%';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '1';
  content.style.filter= 'blur(0px)';
});

moreInfoText.addEventListener('mouseenter', function(event){
  //code goes here
  tooltip.style.opacity = '1';
  arrowUp.style.opacity = '1';
  var x = event.clientX;     // Get the horizontal coordinate
  var y = event.clientY;     // Get the vertical coordinate
  console.log(y);
  tooltip.style.top = y + 'px';
  tooltip.style.right = x + 'px';
  arrowUp.style.top = y + 'px';
  arrowUp.style.right = x + 'px';
});

moreInfoText.addEventListener('mouseleave', function(event){
  //code goes here
  tooltip.style.opacity = '0';
  var x = event.clientX;     // Get the horizontal coordinate
  var y = event.clientY;     // Get the vertical coordinate
  console.log(y);
  tooltip.style.top = y + 'px';
  tooltip.style.right = x + 'px';
});
