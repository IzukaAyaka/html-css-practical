$(function(){

  $('.carousel').slick({
    autoplay: true,
    fade: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    arrows: false,
    speed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  $('a').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
    });
  });

  $('a').on('mouseout',function(){
    $(this).animate({
      opacity: 1.0,
    });
  });

  // TOPに戻る(https://www.webopixel.net/javascript/538.html)
  var topBtn = $('.pagetop');	
  topBtn.hide();
  
  $(window).scroll(function () {
    if ($(this).scrollTop()> 300) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  // ページ内リンクの遷移をスムーズに(https://qiita.com/y-temp4/items/8db4a99c437e57ef59da)
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  // スクロールしたらsectionがフェードイン(https://www.gipservice.com/blog/0930/)
  $(window).scroll(function (){
    $(".section").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
      $(this).addClass("fadeIn");
        } else {
        $(this).removeClass("fadeIn");
      }
    });
  });

  // 画像クリックでモーダル起動(https://bobu.work/create_modal/)
  $('.content').each(function(){
    $(this).on('click',function(){
      var target=$(this).data('target');
      var modal=document.getElementById(target);
      console.log(modal)
      $(modal).fadeIn();
      return false
    });
  });

  $('.modal_close').on('click',function(){
    $('.modal').fadeOut();
    return false;
  })

});
