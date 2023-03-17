var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

$(function() {
  $("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  $('input[value="Узнать подробнее"], input[value="Принять участие в розыгрыше"], .kmacb-popup-btn').click(function() {
    $('.eeee, .fadepopup').css('display', 'none');
  });
});

function spin() {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('super-rotation');
    setTimeout(function() {
      resultWrapper.style.display = "block";
    }, 8000);
    setTimeout(function() {
      $('.spin-wrapper').slideUp();
      $('.order_block').slideDown();
      start_timer();
    }, 10000);
    wheel.classList.add('rotated');
  }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function(e){
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();

  var top = $('#roulette').offset().top;
  $('body,html').animate({scrollTop: top}, 800);
});

var time = 600;
var intr;
function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time-1;
  var mins = Math.floor(time/60);
  var secs = time - mins*60;
  if( mins == 0 && secs == 0 ) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0"+secs;
  $("#min").html("0"+mins);
  $("#sec").html(secs);
}