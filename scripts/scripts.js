$(document).ready(function(){

	var isMouseDown = false;

	$('body').mousedown(function(){
		isMouseDown = true;
	})
	.mouseup(function(){
		isMouseDown = false;
	});

	var setSize = function(size){
		for(x=0; x < size * size; x+=1){
			$('#pad').append("<div class = 'px' > </div>");
		};

		$('.px').css({'width': (500/size) + 'px'});
		$('.px').css({'height': (500/size) + 'px'});
		$('.px').addClass('none');
		
	};

	var askSize = function(){
		size = 1000
		while (size > 50){
			size = prompt("How many squares per side would you like? (2-50)");
			if (size <= 50 && size >= 2){
				var truesize = size;
			}
			else {
				size = 1000;
			};
		}
		
	};

	var boardRefresh = function(){
		$('#pad').empty();
	};

	var checker = function(){		
		$('.px').mouseenter(
			function(){
				if (isMouseDown) {
					$(this).fadeOut(function(){
						col = $('input:radio[name=color]:checked').val();
						if (col === 'rand' ){
								$(this).removeClass('black red green blue grey white none rand');
								$(this).css("background-color", '');
								var hue = 'rgb(' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ')';
		    					$(this).addClass('rand').css('background-color', hue).fadeIn();
		    			}
		    			else {
		    					$(this).css("background-color", '');
		    					$(this).removeClass('black red green blue grey white none rand').addClass(col).fadeIn(1);
		    			};
		    					
					});
				};
			});
	};

	$('#button').click(function(){
			askSize();
			boardRefresh();
			setSize(size);
			checker();
		});	

	$('input:radio[name=bg]').change(function(){
			var col2 = $('input:radio[name=bg]:checked').val();
			$('.none').removeClass('red blue green black white grey rand').addClass(col2);
		});
	
	setSize(20);
	checker();
 
});





