function swapImage(thisDom){
	var im = $(thisDom).find('.scrapbook-img').css('background-image');
	var im_length = im.length;
	var im = im.substring(5,im_length-2);
	console.log(im);

	$('#myModal img').attr('src', im)	
}
