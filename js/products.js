$(function () {
    const sr = ScrollReveal({
        distance: '50px',  // Reduced for a smoother effect
        duration: 800,
        easing: 'ease-in-out',
        opacity: 0,
        reset: false // Set to true if you want animations to replay on scroll
    });

    function applyScrollReveal() {
        const isMobile = $(window).width() < 768;

        $('.timeline-content').each(function () {
            if (isMobile) {
                $(this).removeClass('js--fadeInLeft').addClass('js--fadeInRight');
            } else {
                $(this).removeClass('js--fadeInRight').addClass('js--fadeInLeft');
            }
        });

        sr.reveal('.js--fadeInLeft', { origin: 'left' });
        sr.reveal('.js--fadeInRight', { origin: 'right' });
    }

    applyScrollReveal();

    $(window).on('resize', function () {
        setTimeout(applyScrollReveal, 300); // Delay to ensure width change is recognized
    });
});
