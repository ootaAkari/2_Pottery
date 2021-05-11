$(function () {
    // ここにjQueryを記述
    
    // ハンバーガーメニュー
    $('#btn').on('click', function () {
        $('#btn__top').toggleClass('click-top');
        $('#btn__bottom').toggleClass('click-bottom');
        $('#header__wrapper').toggleClass('click-header');
    });

    // スムーススクロール
    $('#gnav').on('click', '.gnav__link', function() {
        const target = $(this).attr('href');
        const scrollTarget =  $(target).offset().top;
        $('html, body').animate({scrollTop: (scrollTarget - 200)}, 1000);
        $('#btn__top').removeClass('click-top');
        $('#btn__bottom').removeClass('click-bottom');
        $('#header__wrapper').removeClass('click-header');
    });

    // plan内menu モーダルウィンドウ
    $('#modal__container').on('click', '.menu__list', function () {
        const modal = $(this).data('modal');
        $(modal).fadeIn(function () {
            $(this).on('click', function (e) {
                e.stopPropagation();
                $(this).fadeOut();
            });
        });
    });
    // --------------
});