var main = function() {

    setTimeout(function() {
        function startSlick() {
            $('.slider').slick({
                dots: true,
                fade: true,
                infinite: true,
                speed: 900,
                adaptiveHeight: true,
                autoplay: false,
                autoplaySpeed: 10000,
                arrows: false,
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });

            $('.slick-dots').on('click', 'li', function(e) {

                e.preventDefault();

                $(this).closest('.slick-dots').fadeOut().fadeIn();

                $current = $('.slider__slide.slide-loaded li.animated.active').removeClass('animated active').next();

                if ($current.length) {
                    $current.addClass('animated active');
                } else {
                    $('.slider__slide.slide-loaded li:first').addClass('animated active');
                }

            });
        }
        startSlick();
        $(".slider li .slider__hero").each(function() {
            // $(this);

            var img = $(this).find('img').attr("src");
            $(this).css({ 'background-image': 'url(' + img + ')' });
            $(this).find('img').css({
                'display': 'none'
            });
            // console.log(img);
        });
        $(".main-post .post__details").each(function() {
            // $(this);

            var img = $(this).find('img').attr("src");
            $(this).find('img').css({
                'display': 'none'
            });
            $(this).css({ 'background-image': 'url(' + img + ')' });
            // console.log(img);
        });
        $("body.main").addClass('loaded');

        // var scrll = $("*[data-scroll]").offset().top;

        var $navHeight = $(".main .nav").offset().top;

        $(window).on("scroll", function(event) {

            $("[data-scroll]").each(function() {

                if ($(this).offset().top <= $(window).scrollTop() + 500) {
                    $(this).parent().addClass('scrolled');
                }

            });

            if ($navHeight <= $(window).scrollTop()) {
                $(".main .nav").addClass('fixed');
                $(".main .nav").addClass('scrolled');
            } else {
                $(".main .nav").removeClass('fixed');
            }

            // if (len > 30) {
            //     $("body").addClass('scrolled');
            // }
            // if (len > 650) {
            //     $(".nav").addClass('fixed');
            // } else {
            //     $(".nav").removeClass('fixed');
            // }

        });

        $(".scroll-down").on('click', function() {

            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {

                    $('html,body').animate({ scrollTop: target.offset().top - 50 }, 700);
                    return false;
                }
            }
        });

    }, 500);


}
$(document).ready(main);
