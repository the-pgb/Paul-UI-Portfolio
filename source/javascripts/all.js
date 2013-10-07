//= require_tree .  

/* Returns opacity to 1 when back button used to navigate. Fixes page transition */
$(window).unload(function () {
    $('.animate-fade-out').css("opacity", "1");
});


$('.unveil').unveil(800);

/* Function to animate leaving a page */

$("body").css("display", "none");
$("body").fadeIn(500); 

$.fn.leavePage = function() {   
    
    this.click(function(event){

        // Don't go to the next page yet.
        event.preventDefault();
        linkLocation = this.href;
        
        // Fade out this page first.
        $('body').fadeOut(500, function(){
            
            // Then go to the next page.
            window.location = linkLocation;
        }); 
    });             
};


/* Call the leavePage function upon link clicks with the "transition" class */
$('.transition').leavePage();

/* Waypoints scroll functions */

$.waypoints('refresh');


$('.about-bg').waypoint(function(direction) {
  	$('.about__pixels').addClass('animate');
}, { offset: 400 });

$('.contact').waypoint(function(direction) {
  	$('.contact__icon').addClass('animate');
}, { offset: 300 });


$('.work__item').waypoint(function(direction) {
    $(this).children('.featured__content').addClass('animate');
}, { offset: 200 });

$('.intro-bg').waypoint(function(direction) {
    $('.index .fixed-header').addClass('animate');
});

$('.project-page__contact').waypoint(function(direction) {
    $('.contact__email').addClass('animate');
}, { offset: 'bottom-in-view' });

$('.code-base').click(function() {
    $('.code').toggleClass('slide-animate');
});

$('.arrow').hover(function() {
    $(this).siblings('.arrow__job-title').toggleClass('animate');
});



var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 1500, function () {
        window.location.hash = href;
    });
    return false;
});

/* Highlight nav items based on scroll location */

$(function() {
    $('section')
    .waypoint(function(direction) {
        $('a[href="#' + this.id + '"]').toggleClass('active', direction === 'down');
    }, {
        //continuous: false,
        offset: 0
    })
    .waypoint(function(direction) {
        $('a[href="#' + this.id + '"]').toggleClass('active', direction === 'up');
    }, {
        //continuous: false,
        offset: function() {
            return -$(this).height();
        }
    });
}); 

/* Work item hover transitions */

$('.work__item--secondary').hover(function() {
    $(this).children('a').children('.thumb-caption').toggleClass('visible');
    $(this).children('a').children('img').toggleClass('fade-back');
});

