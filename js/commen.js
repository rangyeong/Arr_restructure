
// #탑배너 닫기
$('.hd_top_close').click(function(){
    $('.hd_top').css('display', 'none');
});

// 문서 전체 스크롤 이벤트 시작
$(window).scroll(function(){
    let sct = $(window).scrollTop();

    // * 탑버튼
    if(sct > 300){
        $('.quick_top').stop().fadeIn();
    } else {
        $('.quick_top').stop().fadeOut();
    };
    
    $('.quick_top').click(function(){
        $('html, body').stop().animate({
            scrollTop : 0
        });
    });   
}); // 문서 전체 스크롤 이벤트 끝 


// * header_inner
$('.header_inner').mouseover(function(){
    $('.header_inner').addClass('wh');
 }).mouseout(function(){
    $('.header_inner').removeClass('wh');
 });
 
// * 헤더 - gnb
$('.h_gnb > ul > li').mouseover(function(){
    $('.depth2').stop().slideDown();
    $(this).addClass('active');
    $('.h_gnb > ul > li').addClass('ash');
 }).mouseout(function(){
    $('.depth2').stop().slideUp();
    $(this).removeClass('active');
    $('.h_gnb > ul > li').removeClass('ash');
 });

//  * 헤더 - gnb - a 밑줄
$('.depth2 a').mouseover(function(){
    $(this).stop().animate(p)

})
// * 헤더 - h_util, head_icon
$('.h_util a, .head_icon button').mouseover(function(){
    $(this).addClass('ash');
 }).mouseout(function(){
    $(this).removeClass('ash');
 });

// * 모바일 - gnb(아코디언)
$('.mo_gnb_inner > ul > li > a').click(function(e){
    e.preventDefault();
    let dis = $(this).siblings('.depth2').css('display');
    if(dis == 'none'){
        $('.mo_gnb_inner > ul > li > a').removeClass('active');
        $('.mo_gnb_inner .depth2').stop().slideUp();
        $('.mo_gnb_bt').removeClass('active');
        $(this).addClass('active');
        $(this).siblings('.depth2').slideDown();
        $(this).children('.mo_gnb_bt').addClass('active');
        moSideScroll();
        
    } else {
        $('.mo_gnb_inner > ul > li > a').removeClass('active');
        $(this).children('.mo_gnb_bt').removeClass('active');
        $('.mo_gnb_inner .depth2').stop().slideUp();
        $(this).children('.mo_gnb_bt').removeClass('active');
        moSideScroll();
    }
});



// * 모바일 사이드 열기
$('.hambergur a').click(function(e){
    e.preventDefault();
    $('#mo_side').stop().animate({left : 0});
    $('.mo_gnb_top').stop().animate({left : 0});
    $('.blind_scroll').stop().animate({left : '90%', marginLeft : -20});
    $('.mo_side_bg').stop().fadeIn();
    $('body').css({overflow : 'hidden'});
});

// * 모바일 사이드 닫기 
$('.mo_side_bg').click(function(){
    $(this).hide();
    $('#mo_side').stop().animate({left : '-100%'})
    $('.mo_gnb_top').stop().animate({left : '-100%'})
    $('.blind_scroll').stop().animate({left : '-100%'})
    $('body').css({overflow : 'visible'});
})

//  * 모바일 사이드 스크롤바
function moSideScroll(){
    let moSideH = $('#mo_side').height();
    let moSideInH = $('#mo_side_in').height();
    if(moSideH >= moSideInH){
        $('#mo_side').css('overflow-y', 'visible');
    } else {
        $('#mo_side').css('overflow-y', 'scroll');
    }
};
