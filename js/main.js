function swapImage(thisDom){
	var listimages = $('.scrapbook-img');
	var images = [];
	for (i=0; i<listimages.length; i++){
		var im = $(listimages[i]).css('background-image').split('/');
		im = im[im.length-1];
		im = im.substring(0, im.length-2);
		images.push(im);
	}

	var im = $(thisDom).find('.scrapbook-img').css('background-image');
	var im_length = im.length;
	var im = im.substring(5,im_length-2);

	$('#myModal img').attr('src', im);
	$('#myModal').focus();
	$('#modalimage').show();
	$('#modalxcountryvideo').hide();
}


function gotoNextImage(){
	var listimages = $('.scrapbook-img');
	var images = [];
	for (i=0; i<listimages.length; i++){
		var im = $(listimages[i]).css('background-image').split('/');
		im = im[im.length-1];
		im = im.substring(0, im.length-2);
		images.push(im);
	}

	var im = $('.modal-dialog').find('.modal-body img').attr('src').split('/');
	im = im[im.length-1];

	var currentIndex = images.indexOf(im);
	if (currentIndex == 9){
		$('#modalxcountryvideo').show();
		$('#modalimage').hide();
	}
	if (currentIndex == 10){
		$('#modalxcountryvideo').hide();
		$('#modalimage').show();
	}
	if (currentIndex < images.length-1){
		$('#myModal img').attr('src', './img/scrapbook/' + images[currentIndex+1]);	
	}
}

function gotoPrevImage(){
	var listimages = $('.scrapbook-img');
	var images = [];
	for (i=0; i<listimages.length; i++){
		var im = $(listimages[i]).css('background-image').split('/');
		im = im[im.length-1];
		im = im.substring(0, im.length-2);
		images.push(im);
	}

	var im = $('.modal-dialog').find('.modal-body img').attr('src').split('/');
	im = im[im.length-1];

	var currentIndex = images.indexOf(im);
	if (currentIndex == 11){
		$('#modalxcountryvideo').show();
		$('#modalimage').hide();
	}
	if (currentIndex == 10){
		$('#modalxcountryvideo').hide();
		$('#modalimage').show();
	}
	if (currentIndex >0){
		$('#myModal img').attr('src', './img/scrapbook/' + images[currentIndex-1]);
	}
}