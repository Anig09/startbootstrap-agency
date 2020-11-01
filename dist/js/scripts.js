/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
$(document).ready(function(){
        var itaImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Italien.gif";
        var engImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Grossbritanien.gif";
        var deuImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Deutschland.gif";
        var fraImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Frankreich.gif";

        var imgBtnSel = $('#imgBtnSel');
        var imgBtnIta = $('#imgBtnIta');
        var imgBtnEng = $('#imgBtnEng');
        var imgBtnDeu = $('#imgBtnDeu');
        var imgBtnFra = $('#imgBtnFra');

        var imgNavSel = $('#imgNavSel');
        var imgNavIta = $('#imgNavIta');
        var imgNavEng = $('#imgNavEng');
        var imgNavDeu = $('#imgNavDeu');
        var imgNavFra = $('#imgNavFra');

        var spanNavSel = $('#lanNavSel');
        var spanBtnSel = $('#lanBtnSel');

        imgBtnSel.attr("src",itaImgLink);
        imgBtnIta.attr("src",itaImgLink);
        imgBtnEng.attr("src",engImgLink);
        imgBtnDeu.attr("src",deuImgLink);
        imgBtnFra.attr("src",fraImgLink);

        imgNavSel.attr("src",itaImgLink);
        imgNavIta.attr("src",itaImgLink);
        imgNavEng.attr("src",engImgLink);
        imgNavDeu.attr("src",deuImgLink);
        imgNavFra.attr("src",fraImgLink);

        $( ".language" ).on( "click", function( event ) {
            var currentId = $(this).attr('id');

            if(currentId == "navIta") {
                imgNavSel.attr("src",itaImgLink);
                spanNavSel.text("ITA");
            } else if (currentId == "navEng") {
                imgNavSel.attr("src",engImgLink);
                spanNavSel.text("ENG");
            } else if (currentId == "navDeu") {
                imgNavSel.attr("src",deuImgLink);
                spanNavSel.text("DEU");
            } else if (currentId == "navFra") {
                imgNavSel.attr("src",fraImgLink);
                spanNavSel.text("FRA");
            }

            if(currentId == "btnIta") {
                imgBtnSel.attr("src",itaImgLink);
                spanBtnSel.text("ITA");
            } else if (currentId == "btnEng") {
                imgBtnSel.attr("src",engImgLink);
                spanBtnSel.text("ENG");
            } else if (currentId == "btnDeu") {
                imgBtnSel.attr("src",deuImgLink);
                spanBtnSel.text("DEU");
            } else if (currentId == "btnFra") {
                imgBtnSel.attr("src",fraImgLink);
                spanBtnSel.text("FRA");
            }
            
        });
});