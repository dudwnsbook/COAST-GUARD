$(document).ready(function(){
	/** 변수정의 **/
	var isOn = false;			// left, right 버튼이 연속으로 눌리는 것을 방지하기 위함
	var direction = "left";	// 방향을 컨트롤
	var playOn = true;		// play, stop함수의 연속 실행을 방지하기 위함
	var bannerAuto;			// bannerAuto : setInterval의 함수 결과를 실행
	
	// var eleMargin = parseInt($(".giveBox .giveUl li").css("margin-right"));
	var eleWidth = $(".downSlideBox .downSlideUl li").width(); //width
    
	/** 함수 정의 **/
	function auto1(){
      
		playOn = true;
		bannerAuto = setInterval(function(){
			if(!isOn){
				if(direction == "left"){
					$(".conLeft").click();
				}else{
					$(".conRight").click();
				}
			}
		}, 1000);
	}


	function play(){
		if(!playOn){
			direction = "left";
			auto1();
		}
	}
	function stop(){

		if(playOn){
			playOn = false;
			// setInterval을 해지하기위한 명령
			clearInterval(bannerAuto);
		}
	}
	function left(){
		if(isOn){
			direction = "left";
			
			// 플레이 함수가 멈춰있는 경우에 자동 실행하도록 설정
			$(".downSlideBox .downSlideUl").stop().animate({left: eleWidth*-1},1000, "swing", function(){
				$(this).css({left:0});
				// first를 last로 설정 : .insertAfter()
				$(this).children("li:first").insertAfter($(this).children("li:last"));
				isOn = false;
			});
		}
	}
	function right(){
		if(isOn){
			direction = "right";
			
			// 플레이 함수가 멈춰있는 경우에 자동 실행하도록 설정
			// last를 first로 설정 : .insertBefore()
			$(".downSlideBox .downSlideUl li:last").insertBefore(".downSlideBox .downSlideUl li:first");
			$(".downSlideBox .downSlideUl").css({left: eleWidth*-1});
			$(".downSlideBox .downSlideUl").stop().animate({left: 0}, 1000, "swing", function(){
				$(this).css({left:0});
				isOn = false;
			});
		}
	}


	/** 버튼 클릭시 이벤트 호출 **/
	// 왼쪽이벤트
	$(".conLeft").click(function(){
		if(!isOn){
			isOn = true;
			left();
		}
		return false;
	});

	// 오른쪽이벤트
	$(".conRight").click(function(){
		if(!isOn){
			isOn = true;
			right();
		}
		return false;
	});


	auto1();
});