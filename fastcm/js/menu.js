$(document).ready(function(){
    //スムーズスクロール
    $('.antlink').click(function()
    {
        var speed = 800;
        // アンカーの値取得
        var href= $(this).attr('href').replace(homeurl, "");
        // 移動先を取得
        var target = $(href == '#' || href == '' ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;

        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
  $(".top_new").click(function(){
    var id = $(this).attr("id"); 
    if (id == "menu01_btn") {
        if($("#menu01").is(':visible')) {
            $(this).removeClass("more_close").addClass("more_open");
        }
        else {
            $(this).removeClass("more_open").addClass("more_close");
        }
        $("#menu01").fadeToggle();
    }

    if (id == "menu02_btn") {
        if($("#menu02").is(':visible')) {
            $(this).removeClass("more_close").addClass("more_open");
        }
        else {
            $(this).removeClass("more_open").addClass("more_close");
        }
        $("#menu02").fadeToggle();
    }
    if (id == "menu03_btn") {
        if($("#menu03").is(':visible')) {
            $(this).removeClass("more_close").addClass("more_open");
        }
        else {
            $(this).removeClass("more_open").addClass("more_close");
        }
        $("#menu03").fadeToggle();
    }
    
    
  });

  $("a.antlink").click(function() {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });



  
});