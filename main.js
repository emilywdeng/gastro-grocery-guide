//initialize AOS animations
AOS.init({
    easing: 'ease-in-out-sine'
});

/* Mobile devices (below 768px) */
if (screen.width < 768) {
    //get html content hidden in div
    var localContent = $("#mob-content-local").html();
    var seasonalContent = $("#mob-content-seasonal").html();
    var lowfodmapContent = $("#mob-content-lowfodmap").html();
    var aboutContent = $("#mob-content-about").html();
    //append content after respective menu item
    $("#local").after(localContent);
    $("#seasonal").after(seasonalContent);
    $("#lowfodmap").after(lowfodmapContent);
    $("#about").after(aboutContent);

    $(document).ready(function(){
        //slide animations for viewing content on mobile menu
        $("#local").on('click', function(event) {
            $("#local-div").slideToggle();
        });
        $("#seasonal").on('click', function(event) {
            $("#seasonal-div").slideToggle();
        });
        $("#lowfodmap").on('click', function(event) {
            $("#lowfodmap-div").slideToggle();
        });
        $("#about").on('click', function(event) {
            $("#about-div").slideToggle();
        });
    });
} // End < 768


/* Small devices (tablets, 768px and up) */
if (screen.width > 767) {
    //get html content hidden in div
    var bottomContent = $("#sm-bottom-content").html();
    //append content after the menu
    $("#menu-bar-wrapper").after(bottomContent);

    //get height of menu bar
    var menuHeight = $("#menu-container").height();
    //workaround for jumpy menu bar
    //set height to menu wrapper div
    var newHeight = menuHeight;
    $("#height-menu-wrapper").height(newHeight);
    //get position of wrapper div
    var stickPosition = $("#height-menu-wrapper").offset().top;
        //stick menu bar after scroll
        $(window).scroll(function () {
            if ($(window).scrollTop() >= stickPosition) {
              $('#menu-container').addClass('menu-fixed');
          }
          if ($(window).scrollTop() < stickPosition) {
              $('#menu-container').removeClass('menu-fixed');
          }
      });

    //Add modal attributes to footer
    $("#about").attr("data-toggle","modal");
    $("#about").attr("data-target","#exampleModal");

    // READY
    $(document).ready(function(){
    //scroll to top when clicking "why eat"
    $("#why").on('click', function(event) {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      window.location.hash = "";
      return false;
    });

    // Add smooth scrolling to local
    $("#local").on('click', function(event) {
        //set location
        this.hash = $("#local-div");
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          var hashPosition = $(this.hash).offset().top;
          var scrollTo = hashPosition - menuHeight - 1;
          // Using jQuery's animate() method to add smooth page scroll
          $('html, body').animate({
            scrollTop: scrollTo}, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = "local";
        });
        } // End if
    });
    // Add smooth scrolling to seasonal
    $("#seasonal").on('click', function(event) {
        //set location
        this.hash = $("#seasonal-div");
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          var hashPosition = $(this.hash).offset().top;
          var scrollTo = hashPosition - menuHeight;
          // Using jQuery's animate() method to add smooth page scroll
          $('html, body').animate({
            scrollTop: scrollTo}, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash ="seasonal";
        });
        } // End if
    });
    // Add smooth scrolling to low fodmap
    $("#lowfodmap").on('click', function(event) {
        //set location
        this.hash = $("#lowfodmap-div");
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          var hashPosition = $(this.hash).offset().top;
          var scrollTo = hashPosition - menuHeight;
          // Using jQuery's animate() method to add smooth page scroll
          $('html, body').animate({
            scrollTop: scrollTo}, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = "low-fodmap";
        });
        } // End if
    });
}); //end ready

}// End 470px