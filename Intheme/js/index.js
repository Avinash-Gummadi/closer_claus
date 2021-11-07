$(document).ready(function () {

    $(window).on("scroll", a);
    a();

    function a() {
        $(".JourneyHeaderAnimation.animate").each(function () {
            if (s(this))
                $(this).removeClass("animate").addClass("animated").css({ "visibility": "visible", "animation-name": "JourneyHeaderAnimation" });
        });
        $(".Journey section:not(.visible)").each(function () {
            if (s(this)) {
                $(this).addClass("visible");
            }
        })

        $(".Journey .vertical-line").height($(".Journey section.visible").length * 640);
    }

    function s(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return elemTop + 200 < docViewBottom;
    }
})