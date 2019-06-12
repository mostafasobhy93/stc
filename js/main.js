$(document).ready(function () {
    'use strict';
    
////// window scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 150) {
            $('header').addClass('fixed-header');
        } else {
            $('header').removeClass('fixed-header');
        }
    });
    
    
//// video play/pause
    $('.video-section .video-play').click(function () {
        $(this).fadeOut();
        $('.video-section .video-container video').get(0).play();
    });
    $('.video-section .video-container video').click(function () {
        $(this).get(0).pause();
        $('.video-section .video-play').fadeIn();
    });
    
    
//// clients slider
    $('.clients-section .clients-slider .slider-container .slides').slick({
        slidesToShow: 5,
        nextArrow: '.clients-section .slider-controller button.next',
        prevArrow: '.clients-section .slider-controller button.prev',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
            
        ]
    });
    
////// sidebar 
    $('.sidebar .sidebar-btn').click(function () {
        $(this).parent('.sidebar').toggleClass('is-visible');
        if ($(this).parent('.sidebar').hasClass('is-visible')) {
            $(this).parent('.sidebar').animate({
                left: 0
            }, 500);
        } else {
            $(this).parent('.sidebar').animate({
                left: '-240px'
            }, 500);
        }
    });
    

///// sign up show/hide content
    $('.sign-page.sign-up .sign-content .sign-icon .user-type').click(function () {
        $('.sign-page.sign-up .sign-content .sign-form').fadeOut();
        $('#' + $(this).data('id')).fadeIn();
    });
    
    
//// dist slider
    $('.dist-page .dist-content .dist-slider .slides').slick({
        slidesToShow: 1,
        nextArrow: '.dist-page .dist-content .dist-slider .slider-controller button.next',
        prevArrow: '.dist-page .dist-content .dist-slider .slider-controller button.prev',
        autoplay: true,
        autoplaySpeed: 3000
    });

    
    
//////// this code to know if there is div which make horizontal scroll    
//    var docWidth = document.documentElement.offsetWidth;
//
//    [].forEach.call(
//        document.querySelectorAll('*'),
//        function(el) {
//        if (el.offsetWidth > docWidth) {
//          console.log(el);
//        }
//        }
//    );
});