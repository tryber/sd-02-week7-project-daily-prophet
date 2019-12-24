//pomo de ouro
$(document).ready(function(){
  animateDiv();
});

function makeNewPosition(){
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  return [nh,nw];
}
function animateDiv(){
  var newq = makeNewPosition();
  $('.pomo').animate({ top: newq[0], left: newq[1] }, function(){
    animateDiv();
  });
};
$( ".pomo" ).click(function() {
  window.open('https://www.youtube.com/watch?v=inSjePhFe2o');
});
// coruja

$(".coruja").click(function() {
  $('.transform').toggleClass('transform-active');
});
