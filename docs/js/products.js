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

const buttonRightnw = document.getElementById('slideRight-nw');
const buttonLeftnw = document.getElementById('slideLeft-nw');

buttonRightnw.onclick = function () {
  document.getElementById('scroller-nw').scrollLeft += 500;
};
buttonLeftnw.onclick = function () {
  document.getElementById('scroller-nw').scrollLeft -= 500;
};

const buttonRightng = document.getElementById('slideRight-ng');
const buttonLeftng = document.getElementById('slideLeft-ng');

buttonRightng.onclick = function () {
  document.getElementById('scroller-ng').scrollLeft += 500;
};
buttonLeftng.onclick = function () {
  document.getElementById('scroller-ng').scrollLeft -= 500;
};

// $(function () {
//   var $elem=$('#scroller-eg');
//
//   $elem.scroll(function (){
//     $('#scroller-eg').scroll( function() {
//         var $width = $('#scroller-eg').outerWidth()
//         var $scrollWidth = $('#scroller-eg').get(0).scrollWidth;
//         var $scrollLeft = $('#scroller-eg').scrollLeft();
//
//         if ($scrollWidth - $width === $scrollLeft){
//             $('#slideLeft-eg').removeClass('hidden');
//             $('#slideRight-eg').addClass('hidden');
//         }
//         if ($scrollLeft===0){
//             $('#slideRight-eg').removeClass('hidden');
//             $('#slideLeft-eg').addClass('hidden');
//         }
//     });
//   });
// });
