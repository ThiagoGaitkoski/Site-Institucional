$(function(){

    var delay = 3000;
    var curIndex = 0;
    var amt;

    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.autor').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.autor').css('width', sizeBoxSingle+'%');
        $('.scroll-wraper').css('width', sizeContainer+'%')

        for(var i = 0; i < amt; i++){
            if(i == 0)
                $('.slide').append('<span style="background-color: black;"></span>');
            else
                $('.slide').append('<span></span>');    
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt)
                curIndex = 0;
            goToSlider(curIndex);
        },delay)
    }

    function goToSlider(curIndex){
        var offSetX = $('.autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
        $('.slide span').css('background-color', 'grey');
        $('.slide span').eq(curIndex).css('background-color', 'black');
        $('.scroll').stop().animate({'scrollLeft':offSetX});
    }

    $(window).resize(function(){
        $('.scroll').stop().animate({'scrollLeft':0}); 
    })

})