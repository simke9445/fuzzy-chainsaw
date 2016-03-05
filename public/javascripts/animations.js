
// progress bar animation
$(document).ready(function() {
    $('.progress .progress-bar').progressbar({use_percentage: false, transition_delay: 900});
    // Instantiate a slider
    var mySlider = $("input.slider").slider();


    $(".fa-map-marker, .fa-undo").click(function(){
      $(this).closest(".card").toggleClass("flipped");
      return false;
    });

    $('#slide-submenu').on('click',function() {
        $(this).closest('.list-group').fadeOut('slide',function(){
            $('.mini-submenu').fadeIn();
        });

    });

    $('.mini-submenu').on('click',function(){
        $(this).next('.list-group').toggle('slide');
        $('.mini-submenu').hide();
    })

});






