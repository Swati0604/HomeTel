//First page JavaScript
//First Page datepicker 
//first calender datepicker

$(document).ready(function(){
	$("#date").datepicker({
		dateFormat: "dd-mm-yy",
		minDate: '0',

	});
});

//second calender for datepicker
$(document).ready(function(){
	$("#date1").datepicker({
		dateFormat: "dd-mm-yy",
		minDate: '1M',
		maxDate: '12M',
	});
})

//Owl Crousel

$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsive:{
        0:{
            items:1,
            autoplay: true
        },
        600:{
            items:2,
            autoplay: true
        },
        1000:{
            items:3,

        }
    }
});


//counterUp
jQuery(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
});