(function ($) {
    'use strict';

    // PC/SP判定
    // リサイズイベント
    // スムーズスクロール
    // スクロールイベント

    var deviceFlag = 0; // 0 : PC ,  1 : SP
    deviceFlag = $('body').css('position') === 'relative' ? 1 : 0;
    var befDeviceFlag = deviceFlag;
    

    // リサイズイベント
    var timer = false;
    $(window).resize( function() {
        deviceFlag = $('body').css('position') === 'relative' ? 1 : 0;

        // → PC
        if ( befDeviceFlag !== 0 && deviceFlag === 0 ) {
            $('#menu-menu_jp').removeAttr('style');
            $('#menuBtn').removeClass('isOpen');
            $('body').removeAttr('style').removeClass('fixed');
        }
        // → SP
        if ( befDeviceFlag !== 1 && deviceFlag === 1 ) {
        }

        befDeviceFlag = deviceFlag;
    });

    //menu-menu_jp
    var scrollpos;
    $('#menuBtn').click( function(){
        if( $(this).hasClass('isOpen') ) {
            $('body').removeClass('fixed').css({'top': 0});
            window.scrollTo( 0 , scrollpos );
            $('#menu-menu_jp').slideToggle();
        } else {
            scrollpos = $(window).scrollTop();
            $('a[href^=#]').addClass("sb");
            $('body').addClass('fixed').css({'top': -scrollpos});
            $('#menu-menu_jp').slideToggle();
        }
        $(this).toggleClass('isOpen');
    });

    //スムーズスクロール
    // #で始まるアンカーをクリックした場合にスムーススクロール
    $('a[href^=#]').click(function() {
        if ($(this).attr('class') == "sb") {
            $('#menuBtn').click();
        }
        
        var speed = 500;
        // アンカーの値取得
        var href= $(this).attr('href');
        // 移動先を取得
        var target = $(href == '#' || href == '' ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top - 30;

        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    
    
    // イメージ処理
    $(".mohu").each(function() {
        $(this).bind("click",function(){
            $(this).removeClass("mohu");
        });
    });

})(jQuery);

function jump(objid) {
    var target_top = $("#"+objid).offset().top - 120;
    $("html,body").animate({scrollTop: target_top}, 800);  //带滑动效果的跳转
    $("html,body").scrollTop(target_top);
}