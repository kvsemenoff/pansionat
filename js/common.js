

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
      autoplaySpeed: 5000
    });

 });


