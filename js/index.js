/**
 * Created by Administrator on 2016/8/17.
 */
$(function () {
    console.log('22');
    var i=0;
    $('.navbar-toggle').on('click', function () {
        console.log('1');
        i++;
        if(i%2){
            $(this).html('<span class="nav-close">&times;</span>')
            $('.navbar-bg .navbar-toggle:hover , .navbar-bg .navbar-toggle:focus').css('padding','0');
            $('.collapse').slideDown();
        }else{
            $('.collapse').slideUp();
            $(this).html('<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>');
            $('.navbar-bg .navbar-toggle:hover, .navbar-bg .navbar-toggle:focus').css('padding','17px');
        }
    });


    $('#news-dongtai .news-top a').on('click',function(){
        $('#news-dongtai .news-top a').removeClass('active');
        $(this).addClass('active');
    });

    $(".dropdown-toggle").on('click', function () {
        $('.navbar-toggle').css('margin','0')
    });
    $('#service-liucheng .news-top a').on('click', function () {
        $('#service-liucheng .news-top a').removeClass('active');
        $(this).addClass('active')
    })
    $('#about .news-top a').on('click', function () {
        $('#about .news-top a').removeClass('active');
        $(this).addClass('active');
    })
    $('#dingdang-dongtai .pagination > li > a').on('click', function () {
        $('#dingdang-dongtai .pagination > li > a').removeClass('active');
        $(this).addClass('active');
    })
});