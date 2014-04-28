$(document).ready(function(){

    handleResize();
    $(window).on("resize", handleResize);

    function handleResize(){

        var headerHeight = $(document).width()*0.38;
        var projectHeight = $(".shot").height();

        $("#about").css({"marginTop": headerHeight+150+"px"});
        $(".btn-survey").css({"marginTop": headerHeight+30+"px"});
        $(".back.flip, .project").css({height: projectHeight});


        $(".logo").data("size", "big");
        $(window).scroll(function(){
            if ($(document).scrollTop() > 510) {
                if ($(".logo").data("size") == "big") {
                    $(".logo").data("size","small");
                    $(".logo").stop().animate({height:"30px"},400);
                    $(".navbar-right").animate({margin:"10px 0px 0px 0px"});
                }
            } else {
                if ($(".logo").data("size") == "small") {
                    $(".logo").data("size","big");
                    $(".logo").stop().animate({height:"58px"},100);
                    $(".navbar-right").animate({margin:"25px 0px 0px 0px"},100);
                }
            }
        });

        var $pot = $(".pot"),
            $cup = $(".cup"),
            $body = $(document.body),
            bodyHeight = $body.height();

        var potStart = $pot.offset().top - $pot.position().top,
            potEnd = $(".team").offset().top - $pot.height(),
            cupTop = $cup.offset().top;

        $(window).scroll(function () {
            var s = $(this).scrollTop(),
                d = $(document).height(),
                c = $(this).height();

            var scrollPercent = (s / (d - c));

            var position = (scrollPercent * (potEnd - potStart));

            var percent = $(document).scrollTop()/($(document).height()-$(window).height());

            $cup.css({
                "transform": "rotate(" + ($body.scrollTop() / bodyHeight * 600) + "deg)"
            });

            $(".spoon").css({
                "transform": "translateY(" + position*(0.5) + "px)"
            });

            var $btnSurvey = $(".btn-survey");
            if($(document).scrollTop() >= 10){

                if ($btnSurvey.hasClass("open")) {
                    $btnSurvey.removeClass("open");
                }
            }else{
                if (!$btnSurvey.hasClass("open")) {
                    $btnSurvey.addClass("open");
                }
            $(".btn-survey").hover(
                function(){
                    $(this).addClass("open");},
                function(){
                    $(this).removeClass("open");
                });
            }
        });

        $(".team").owlCarousel({
            navigation: true,
            slideSpeed: 100,
            paginationSpeed: 400,
            singleItem: true
        });

        $(".scroll").click(function(event){
            event.preventDefault();
            var dest=0;
            if($(this.hash).offset().top > $(document).height()-$(window).height()){
                dest=$(document).height()-$(window).height();
            }else{
                dest=$(this.hash).offset().top;
            }
            $("html,body").animate({scrollTop:dest+(-50)+"px"}, 500,"swing");
        });

        new WOW().init();
        $(".screenshots a").nivoLightbox();

        $(".project-container").hover(
            function(){
                $(this).addClass("active");},
            function(){
                $(this).removeClass("active");
        });

    }

    $(".contact-form").submit(function(){

    });

});
