$(function() {
    /* header 메뉴에서 페이지 내 해당 부분으로 이동하는 코드 */
    $("header a").click(function(e) {
       e.preventDefault(); //a 태그는 페이지를 이동하는 효과를 가지고 있다. 이 기능을 정지시킨다. 스크롤링 되는 이벤트를 만들때는 디폴트로 넣어준다.
       var $target = $(this.hash); // target 변수를 만들고 이동할 페이지의 절대좌표를 추적해준다.(header a 각 절대좌표)
       //console.log($target);
       $("html, body").animate({scrollTop: $target.offset().top}, "slow");
        //최상단을 기준으로 이동하고자 하는 부분까지의으로 이동하고자 하는 부분까지의 길이만큼 이동시킨다
    });



    /* body 태크 내 div 이미지 태그를 슬라이드 시키는 코드 */
    var $slider = $("#slider");
    var $slides = $slider.find(".slides");
    var $slide = $slides.find(".slide");
    
    var currentSlide = 1; //현재 이미지가 몇 번째 이미지인지 알려주기 위한 기준점 설정
    
    setInterval(function() {
        $slides.animate({"margin-left" : "-=" + 1024}, 1000, function() {
            currentSlide++;
            if(currentSlide === $slide.length) {
                currentSlide = 1;
                $slides.css("margin-left", 0);
            }
        })
        // 전체 px이 왼쪽으로 -1024씩 이동한다
    }, 3000)
});
