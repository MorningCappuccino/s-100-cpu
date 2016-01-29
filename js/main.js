$(function() {

// -------------------------------
// Tooltips and popovers
//--------------------------------
$('[data-toggle="tip"]').tooltip({
	template: '<div class="tooltip CUSTOM-CLASS"><div class="tooltip-arrow"></div><div class="tooltip-inner" style="background: blue">11111hello world</div></div>'
});

$('[data-toggle="tooltip-reload"]').tooltip({delay: {show: "500"}});

$('[data-toggle="popover"]').popover({
	html: true,
	placement: 'auto',
	content: function() {
		return $('.popover-time-sync').html();
	}
});

// $('.glyphicon-refresh').click(function(e){
// 	var i = 40;
// 	setInterval(function(){
// 		var btn = e.target;
// 		i += 3;
// 		$( btn ).css('transform','rotate('+i+'deg)');
// 	}, 10);
// })

// -------------------------------
// Animation
//--------------------------------

//onload
$('.glyphicon-refresh').addClass('animated rotateIn');

//in Class
var reloading, //bad way
		icon, msg;

function refreshMsg(){
	msg.find('p').html('Controller is reloading. Please wait <a href="#" class="alert-second">10</a> sec.');
	msg.css({
		'background': "#f89406",
		'border-color': '#e96506'
	});
}

function reloadDone(){

	clearInterval(reloading);
	icon.removeClass('rotating');

	msg.animate(
	{
		backgroundColor: '#62c462',
		borderTopColor: '#62bd4f',
		borderLeftColor: '#62bd4f',
		borderRightColor: '#62bd4f',
		borderBottomColor: '#62bd4f'
	},
	{
		duration: 300,
		progress: function(animation, progress){
			progress > 0.5 ? msg.find('p').text('Success') : 0;
		},
		complete: function(){
			setTimeout(function(){msg.slideUp(400)}, 2000)
			setTimeout(function(){refreshMsg()}, 3000)
		}
	}

	);
}

function reloadingTime(time){
	$('.alert-second').html(time);
		reloading = setInterval(function(){
			$('.alert-second').html(time--);

			if (time == 0) reloadDone();
		}, 1000);
}

$('.glyphicon-refresh').click(function(){
	icon = $(this),
	msg = $('.alert-warning');
	icon.removeClass('animated rotateIn');
	icon.addClass('rotating');
	msg.slideDown(400);

	reloadingTime(5);

});

$('.glyphicon-menu-down').click(function(icon){

if ($('.extended-body').css('display') == 'block') {
	// $(this).animate({
	// 	'borderSpacing': '-180',
	// }, {
	// 	step: function(now,fx){
	// 		console.log(now);
	// 		$(this).css('transform','rotate('+now+'deg) translate(0,'+now/10+'%)');
	// 	}
	// },  100);
	$(this).removeClass('out');
	$(this).addClass('in');


	$('.extended-body').slideUp(100);
} else {
	$(this).removeClass('in');
	$(this).addClass('out');
	$('.extended-body').slideDown(300);
}



})


});