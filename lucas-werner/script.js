// pomo de ouro
let $ = ''
$(document).ready(function(){
  animateDiv();
});

function makeNewPosition(){
  var h = $(window).height() - 60;
  var w = $(window).width() - 60;
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
//vassoura voadora
const nimbus = document.getElementById('nimbus2000');
function voar() {
  nimbus.className = 'voa';
}
nimbus.addEventListener('click', voar);

