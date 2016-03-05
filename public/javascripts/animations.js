
// progress bar animation
$(document).ready(function() {
    $('.progress .progress-bar').progressbar({use_percentage: false, transition_delay: 900});
});

// Instantiate a slider
var mySlider = $("input.slider").slider();

// Call a method on the slider
var value = mySlider.slider('getValue');

// For non-getter methods, you can chain together commands
    mySlider
        .slider('setValue', 5)
        .slider('setValue', 7);

// card flip

$(".fa-automobile, .fa-undo").click(function(){
    $(this).closest(".card").toggleClass("flipped");
    return false;
});