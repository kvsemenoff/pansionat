

$(document).ready(function(){

    $('.az-select').each(function(){
        var select = $(this);    
        var option = select.find('select option');
        var str = '<div class="az-options">';
        select.find('option').each(function(){
            str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
        });
        str+= '</div>';
        select.html(select.html() + str);

        select.find('select').mousedown(function(){
            return false;
        });
        select.mouseup(function(){
            select.find('select').focus();
        });
        select.find('.az-options div[data-val]').click(function(){
            select.find('select').val($(this).attr('data-val'));
        });
        select.find('select').focusout(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
    });

    $(".az-select").click(function(){
        $(this).find('.az-options').slideToggle(0);
        $(this).toggleClass('az-select-focus');
    });

    // -----подключение якоря------
    $("#menu").on('click','a', function(event){
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
    })
     $("#mini-menu").on('click','a', function(event){
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
    })

    // -----подключение якоря для footer ------
    $("#up").on('click','a', function(event){
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
    })

    // ========= мини-меню аккордеон =======

      $('.mini-menu').slideUp(0);
      $('.nav-btn').click(function(){
          if (!$(this).hasClass('mini-active')){
              $('.mini-menu').slideDown(400)
              $(this).addClass('mini-active');
          } else {
              $(this).removeClass('mini-active');
              $('.mini-menu').slideUp(400)
          }
      });

    // ========= меню аккордеон =======

    $('.sub-sidebar').slideUp(0);
    $('.sidebar__li').click(function(){
        if (!$(this).hasClass('active')){
            $('.sidebar__li').removeClass('active');
            $('.sub-sidebar').slideUp(400)
            $(this).addClass('active');
            $('.active > .sub-sidebar').slideDown(400)
        } else {
            $(this).removeClass('active');
            $('.sub-sidebar').slideUp(400)
        }
    });

    // ========= частые вопросы - аккордеон =======

    $('.faq__sub').slideUp(0);
    $('.faq__active > .faq__sub').slideDown(0);
    $('.faq__li').click(function(){
      if (!$(this).hasClass('faq__active')){
          $('.faq__li').removeClass('faq__active');
          $('.faq__sub').slideUp(400);
          $(this).addClass('faq__active');
          $('.faq__active > .faq__sub').slideDown(400)
      } else {
          $(this).removeClass('faq__active');
          $('.faq__sub').slideUp(400)
      }
    });

    // ======== слайдер фото =====
    $('.slider-one').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      // autoplay: true,
      autoplaySpeed: 5000
    });

    $('.slider-three').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
      // autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });

 });


