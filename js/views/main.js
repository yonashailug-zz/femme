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

            $('.slick-dots li').on('click', function(e) {

                e.preventDefault();

                $current = $('.slider__slide.slide-loaded li.animated.active').removeClass('animated active').next();

                if ($current.length) {
                    $current.addClass('animated active');
                } else {
                    $('.slider__slide.slide-loaded li:first').addClass('animated active');
                }

            });
        }
        startSlick();
        $("body").addClass('loaded');
    }, 10)


}
$(document).ready(main);
