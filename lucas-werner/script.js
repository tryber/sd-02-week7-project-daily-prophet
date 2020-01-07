/* global $ */

function makeNewPosition() {
  const h = $(window).height() - 60;
  const w = $(window).width() - 60;
  const nh = Math.floor(Math.random() * h);
  const nw = Math.floor(Math.random() * w);
  return [nh, nw];
}
function animateDiv() {
  const newq = makeNewPosition();
  $('.pomo').animate({ top: newq[0], left: newq[1] }, function () {
    animateDiv();
  });
}
$('.pomo').click(function () {
  window.open('https://www.youtube.com/watch?v=inSjePhFe2o');
});
$(document).ready(function () {
  animateDiv();
});
// vassoura voadora
const nimbus = document.getElementById('nimbus2000');
function voar() {
  nimbus.className = 'voa';
}
nimbus.addEventListener('click', voar);
