AOS.init();
    AOS.refresh(); // initialize AOS animations
    $(document).ready(function(){
        $("body,html").animate({
            scrollTop: 10
        }, 1000);
        $("body,html").animate({
            scrollTop: 0
        }, 1);
    });