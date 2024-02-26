// *본문1 슬라이드 이미지
$('.topBn_wrap').slick({
    prevArrow : '.ms_btn .ms_prev',
    nextArrow : '.ms_btn .ms_next',
    dots : true,
    appendDots : '.ms_btn .ms_pager',
    customPaging : function(slider, i){
        return `<span class="current">${i + 1}</span> / ${slider.slideCount}`
    },
    autoplay : true,
    autoplaySpeed : 2000
 });
 
 $('.ms_btn .ms_pause').click(function(){
    $(this).hide();
    $('.ms_btn .ms_play').show();
    $('.topBn_img').slick('slickPause');
 });
 
 $('.ms_btn .ms_play').click(function(){
    $(this).hide();
    $('.ms_btn .ms_pause').show();
    $('.topBn_img').slick('slickPlay');
 });
 