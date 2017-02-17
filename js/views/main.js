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
            console.log(img);
            $(this).css({ 'background-image': 'url(' + img + ')' });
            $(this).find('img').css({
                'display': 'none'
            });
            // console.log(img);
        });
        $("body").addClass('loaded');
        $(window).on("scroll", function(event) {

            var len = $(window).scrollTop();
            if (len > 30) {
                $("body").addClass('scrolled');
            }

        });
    }, 500);


}
$(document).ready(main);
