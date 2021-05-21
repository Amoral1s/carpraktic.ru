jQuery(document).ready(function ($) {
  
  const feedWrap = document.querySelector('.feed-wrap'),
        feedWrapItem = document.querySelectorAll('.feed-wrap-item');

  if (feedWrap) {
    feedWrapItem.forEach((elem) => {
      const text = elem.querySelector('.feed-wrap-item-right-text');


      if (text.scrollHeight > 155) {
        text.classList.add('text-hide');
        const div = document.createElement('div');

        div.classList.add('moar-text');
        div.textContent = 'читать весь отзыв';

        text.parentElement.insertBefore(div, text.nextSibling);

        div.addEventListener('click', () => {
          text.classList.remove('text-hide');
          div.remove();
          text.style.height = 'auto';
        });

      }
      

    });
  }

  $('.about-wrap-sert img').on('click', function() {
    $('.overlay').fadeIn(200);
    $('.popup-img').fadeIn(200);
    $('.popup-img img').attr('src', $(this).attr('src'));
  });
  $('.call-popup').on('click', function() {
    $('.overlay').fadeIn(200);
    $('.popup-callback').fadeIn(200);
  });
  $('.callback-service').on('click', function() {
    $('.popup-service').fadeOut(200);
    $('.popup-callback').fadeIn(200);
  });
  $('.price-text span').on('click', function() {
    $('.popup-service').fadeIn(200);
    $('.overlay').fadeIn(200);
  });
  

  $('.call-prices-one').on('click', function() {
    $('.popup-prices-one').fadeIn(200);
    $('.overlay').fadeIn(200);
  });
  $('.call-prices-two').on('click', function() {
    $('.popup-prices-two').fadeIn(200);
    $('.overlay').fadeIn(200);
  });
  $('.call-prices-three').on('click', function() {
    $('.popup-prices-three').fadeIn(200);
    $('.overlay').fadeIn(200);
  });

  
  $('.popup-img').on('click', function() {
    $('.overlay').fadeOut(200);
    $('.popup').fadeOut(200);
  });
  $('.overlay').on('click', function() {
    $('.overlay').fadeOut(200);
    $('.popup').fadeOut(200);
  });
  $('.close').on('click', function() {
    $('.overlay').fadeOut(200);
    $('.popup').fadeOut(200);
  });

  // Плавный переход по якорям
  $(".click").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 110;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);

    if ($(window).width() < 768) {
      $('.burger').removeClass('burger-active');
      $('.header-wrap-menu').slideUp(100);
    }
    return false;
  });
  //

  //Действие при кролле
  $(window).scroll(function() { 
    if ($(window).scrollTop() > 200) {
      $('.header').addClass('header-active');
      $('.up').fadeIn(100);
    } else {
      $('.header').removeClass('header-active');
      $('.up').fadeOut(100);
    }
  });

  //cf7
  jQuery(".wpcf7").on('wpcf7mailsent', function(event){
    //alert('GOOD');
    jQuery('#thx').fadeIn(200);
    //Скрытие поп окна автоматически, через 5,5 секнд
    jQuery('.overlay').fadeIn(300);

    setTimeout(function(){
      jQuery('.overlay').fadeOut(300);
      jQuery('.popup').fadeOut(300);
      jQuery('#thx').fadeOut(200);
    },2500);  //3500 = 3,5 секунды
    
    setTimeout(function(){jQuery('.popup').fadeOut(300);},2700); 
    setTimeout(function(){jQuery('#calc').fadeOut(300);},2700); 
    
    setTimeout(function(){jQuery('.overlay').fadeOut(300);},2700);
  });

  jQuery(".wpcf7").on('wpcf7invalid', function(event){
    alert('Заполните поля правильно и повторите попытку!');
  });
  jQuery(".wpcf7").on('wpcf7mailfailed', function(event){
    alert('Ошибка при отправке! Попробуйте отправить заявку еще раз!');
  });

  $('.burger').on('click', function() {
    $(this).toggleClass('burger-active');
    $('.header-wrap-menu').slideToggle(200);
  });

  $('.see-slider').slick({
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1500,
    useCSS: false,
    pauseOnHover: false
  });

});