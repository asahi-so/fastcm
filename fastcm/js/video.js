var player;
var number;
var videoDetail = false;
jQuery(document).ready(function($){
	
	$(document).on("click",".close", function(){
		$("html").css({"overflow-y":"scroll"});
		player.unload();
		$(".hide").fadeOut();
		$("#videoClose").hide()
		$("#videoDetail").hide();
		$("body").css({"overflow-y":"scroll"});
		$('#videoIframe').remove();
		$("#infoWindow").hide();
		$("#videoback").hide();
		
		return false;
	});
	$(document).on("click","#videoback", function(){
		$("html").css({"overflow-y":"scroll"});
		$v = $('#videoIframe'),
		$v.reoveClass("VI_small");
		$v.addClass("VI_big");
		$("#infoWindow").hide();
		$(this).hide();
		$("#videoDetail").show();
		
		
		
		videoDetail = false;
		return false;
	});
	
	$(document).on("click",".arrow", function(){
		
		if( $(this).attr("id") == "arrow_left" ){
			number--;
			if(number == -1){
				number = count-1;
			}
		}
		else if( $(this).attr("id") == "arrow_right" ){
			number++;
			if(number == count){
				number = 0;
			}
		}
		
		var uri = v_row[number]*1;
		player.unload();
		videoInsert(number,uri,videoDetail);
		
		if(videoDetail == true){
			vDetaile();
		}
		return false;
	});
	
	
	$(document).on("click","#videoDetail", function(){
			vDetaile();
		return false;
	});
	$(document).on("click",".viImage", function(){
		$("html").css({"overflow-y":"hidden"});
		number = $(this).data("n");
		var uri = $(this).data("uri");
		
		videoInsert(number,uri);
		return false;
	});
	
	function vDetaile(){
		
		videoDetail = true;
		$v = $('#videoIframe'),
		$v.removeClass("VI_big");
		$v.addClass("VI_small");
		$("#infoWindow").show();
		$("#videoDetail").hide();
		$("#videoback").show();
	}
				/*
				 * クライアント名   client_name
				 * 案件名  yobi_1  title
				 * 費用レンジ  budget
				 * 動画の種類   movie_type
				 * 背景課題・目的  background
				 */
					
	function videoInsert(number,uri,videoDetail){
		
		if(!videoDetail){
			videoDetail = false;
		}
		
		$('#videoIframe').remove();
		var arrow = '<a href="#" id="arrow_left" class="arrow"><img src="common/l.png"/></a><a href="#" id="arrow_right" class="arrow"><img src="common/r.png"/></a>';
		if(count < 2) arrow = "";
		$('#videoWindow').prepend('<div id="videoIframe" class="hide VI_big">'+arrow+'</div>');
		$('body,html').animate({scrollTop: 0},0);
		$("body").css({"overflow-y":"hidden"});
		
		//動画詳細を小窓にセット
		var video_datas = v_data[uri];
		if(video_datas["client_name"]){
			$("#client_name").html(video_datas["client_name"]+" 様");
		}
		
		$("#yobi_1").html(video_datas["yobi_1"]);
		$("#title").html(video_datas["title"]);
		$("#budget_text").html(video_datas["budget"]);
		$("#movie_type").html(video_datas["movie_type"]);
		$("#background").html(video_datas["background"]);
		
		$("#moveDetail").attr("href","./"+uri);
		

		var videos = new Object();
				videos = uri;
		var options = {
			id: videos,
			byline: false,
			portrait: false,
			title: false
		};
		player = new Vimeo.Player($('#videoIframe'), options);
		player.play();
		$(".hide").fadeIn();//videoClose
			if(videoDetail == false){
				$("#videoClose").show();
				$("#videoDetail").show();
//				setTimeout(function(){
//					$("#videoClose").show(); $("#videoDetail").show();
//				},3000);
//				setTimeout(function(){
//					$("#videoClose").show(); $("#videoDetail").show();
//				},6000);
			}else{
				$("#videoClose").show();
				$("#videoback").show();
			}
		return false;
	}
	
	
	
});