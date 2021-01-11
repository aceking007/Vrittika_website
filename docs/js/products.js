const buttonRighteg = document.getElementById('slideRight-eg');
const buttonLefteg = document.getElementById('slideLeft-eg');

buttonRighteg.onclick = function () {
  document.getElementById('scroller-eg').scrollLeft += 500;
};
buttonLefteg.onclick = function () {
  document.getElementById('scroller-eg').scrollLeft -= 500;
};

const buttonRightew = document.getElementById('slideRight-ew');
const buttonLeftew = document.getElementById('slideLeft-ew');

buttonRightew.onclick = function () {
  document.getElementById('scroller-ew').scrollLeft += 500;
};
buttonLeftew.onclick = function () {
  document.getElementById('scroller-ew').scrollLeft -= 500;
};
