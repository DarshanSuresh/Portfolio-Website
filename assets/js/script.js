$( document ).ready(function() {

// code for sticky navigation at top of page
var mn = $('.main-nav');
  
$(window).scroll(function() {
  if( $(this).scrollTop() > 150 ) {
    mn.addClass("main-nav-scrolled");
  } else {
    mn.removeClass('main-nav-scrolled');
  }
});
  
//code for changing thumbnails to view as list of all artists page
  
$('#thumb-to-list').on('click', function() {
  if ($(this).text() == "View As List") {
    $(this).html('View As Thumbnails');
    $('.artist-thumbs').fadeOut();
  } else {
    $(this).html('View As List');
    $('.artist-thumbs').fadeIn();
  }
});
  
// IMAGE GALLERY ON EACH ARTIST PAGE CODE
  
//Variables for image gallery
  
var images = [];
var imageIndex =0;
var $mainImage = $(".large-image img");
var $thumbnails =$(".thumbnails img");
var imageCount = $thumbnails.length;
  
//load array
  
for(var i=0; i<imageCount; i= i+1) {
  
  images.push({
    source : $($thumbnails[i]).attr("src"),
    picHeight : $($thumbnails[i]).attr("height"),
    picWidth : $($thumbnails[i]).attr("width"),
  });
  
}
  
// function that allows you to show image
  
function showImage(index) {
  $($mainImage).attr("src",images[index].source);
  
  if(Math.round((images[index].picHeight / images[index].picWidth) *100) > 82 && Math.round((images[index].picHeight / images[index].picWidth) *100) <= 100) {
    
    $mainImage.height(450);
    $mainImage.width((images[index].picWidth / images[index].picHeight) * 450);
  
  } else if(Math.round((images[index].picHeight / images[index].picWidth) *100) > 100) {
    
    $mainImage.height(450);
    $mainImage.width((images[index].picWidth / images[index].picHeight) * 450);
    
  
  } else if(Math.round((images[index].picHeight / images[index].picWidth) *100) < 82) {
    var newHeight = (images[index].picHeight / images[index].picWidth) * 550;
    $mainImage.width(550);
    $mainImage.height(newHeight);
  }
  
};

function showLightBox(index) {
  $("#imageWrap img").attr("src",images[index].source);
  
  if(Math.round((images[index].picHeight / images[index].picWidth) *100) > 82 && Math.round((images[index].picHeight / images[index].picWidth) *100) <= 100) {
    
    $("#imageWrap img").height(600);
    $("#imageWrap img").width((images[index].picWidth / images[index].picHeight) * 600);
  
  } else if(Math.round((images[index].picHeight / images[index].picWidth) *100) > 100) {
    
    $("#imageWrap img").height(600);
    $("#imageWrap img").width((images[index].picWidth / images[index].picHeight) * 600);
    
  
  } else if(Math.round((images[index].picHeight / images[index].picWidth) *100) < 82) {
    var newHeight = (images[index].picHeight / images[index].picWidth) * 850;
    $("#imageWrap img").width(850);
    $("#imageWrap img").height(newHeight);
  }
  
};
  
// function that finds each images index in the array 
  
function findImageIndex(imageSource) {

  for(var i=0; i <images.length; i = i+1) {
    if(images[i].source === imageSource) {
    
      return i
      
    }
  }
}
  
// shows image when clicking on thumbnails
  
$(".thumbnails img").click(function(){

  imageIndex = findImageIndex($(this).attr("src"));
  
  showImage(imageIndex);
});
  
//show first image 

showImage(imageIndex);
  
// when clicking arrows it moves to next image
  
$(".left-container img").click(function() {
  
  if(imageIndex === 0) {
    
    imageIndex= images.length - 1;
    
  } else {
    
    imageIndex -=1;
    
  }
  
  showImage(imageIndex);

});
  
$(".right-container img").click(function() {
  
  if(imageIndex === images.length - 1) {
    
    imageIndex = 0;
    
  } else {
    
    imageIndex +=1;
    
  }
  
  showImage(imageIndex);

});
  
// Click on the large image to reveal lightbox

var $overlay = $('<div id="overlay"></div>');
var $imageWrap = $('<div id="imageWrap"></div>');
var $img = $('<img>');
var $leftArrow = $('<div class="leftArrow"></div>');
var $rightArrow = $('<div class="rightArrow"></div>');
var $cross = $('<div class="cross"></div>')
var $crossing = $('<p class="crossing">menu</p>')
  
  
$("body").append($overlay);
$overlay.append($imageWrap);
$imageWrap.append($leftArrow);
$imageWrap.append($rightArrow);
$imageWrap.append($cross);
$cross.append($crossing);
$imageWrap.append($img);
  
$(".large-image img").click(function() {
  var $scrollPos = $(window).scrollTop() + "px";
  $overlay.css("top", $scrollPos);
  $('body').css("overflow","hidden");
  
  imageIndex = findImageIndex($(this).attr("src"));
  showLightBox(imageIndex);
  
  $overlay.fadeIn(500);
});
  
$(".leftArrow").click(function() {
  
  if(imageIndex === 0) {
    
    imageIndex= images.length - 1;
    
  } else {
    
    imageIndex -=1;
    
  }
  
  showLightBox(imageIndex);

});
  
$(".rightArrow").click(function() {
  
  if(imageIndex === images.length - 1) {
    
    imageIndex = 0;
    
  } else {
    
    imageIndex +=1;
    
  }
  
  showLightBox(imageIndex);

});
$cross.click(function(){
  //Hide the overlay
  $('body').css("overflow","visible");
  $overlay.fadeOut(500);
});
  
  


// variables for image gallery
/*var images = [];
var imageIndex = 0;
var $mainImage = $(".large-image img");
var $mainCaption = $(".large-image p");
var $thumbnails = $(".thumbnails img");
var imageCount = $thumbnails.length;*/
  
  
//loading the array of images
/*for(var i = 0; i < imageCount; i += 1) {
  images.push({
    //source: $thumbnails[i].src, 
    source: $($thumbnails[i]).attr('src'),
    caption: $thumbnails[i].alt,
    artistName: $thumbnails[i].name,
    picHeight: $($thumbnails[i]).attr('height'),
    picWidth: $($thumbnails[i]).attr('width')
  });
}*/
  

  
//function that will show image in the large image div
/*function showImage(index) {
  $($mainImage).attr('src', images[index].source);// this is where the errow is showing
  $mainCaption.text(images[index].caption);
  $mainImage.attr({name: images[index].artistName});*/
  
  
  /*if(Number(images[index].picHeight) >= Number(images[index].picWidth)) {
    $mainImage.height(450);
    $mainImage.width((images[index].picWidth / images[index].picHeight) * 450);
  } else {
    var newHeight = (images[index].picHeight / images[index].picWidth) * 550;
    $mainImage.width(550);
    $mainImage.height(newHeight);
  };*/
  
  
  /*if(Math.round((images[index].picHeight /  images[index].picWidth) * 100) > 82 && Math.round((images[index].picHeight /  images[index].picWidth) * 100) <= 100){
    //height 450
    $mainImage.height(450);
    $mainImage.width((images[index].picWidth / images[index].picHeight) * 450);
  } else if(Math.round((images[index].picHeight /  images[index].picWidth) * 100) > 100){
    //height 450
    $mainImage.height(450);
    $mainImage.width((images[index].picWidth / images[index].picHeight) * 450);
  }else if(Math.round((images[index].picHeight /  images[index].picWidth) * 100) < 82){
    //width 550
    var newHeight = (images[index].picHeight / images[index].picWidth) * 550;
    $mainImage.width(550);
    $mainImage.height(newHeight);
  }
}*/
  
/*function lightBoxImage(index) {
  $('.overlay img').attr('src', images[index].source);// this is where the errow is showing*/
  
  
 /* if(Math.round((images[index].picHeight /  images[index].picWidth) * 100) > 82 && Math.round((images[index].picHeight /  images[index].picWidth) * 100) <= 100){
    //height 450
    $('.overlay img').height(600);
    $('.overlay img').width((images[index].picWidth / images[index].picHeight) * 600);
  } else if(Math.round((images[index].picHeight /  images[index].picWidth) * 100) > 100){
    //height 450
    $('.overlay img').height(600);
    $('.overlay img').width((images[index].picWidth / images[index].picHeight) * 600);
  }else if(Math.round((images[index].picHeight /  images[index].picWidth) * 100) < 82){
    //width 550
    var newHeight = (images[index].picHeight / images[index].picWidth) * 700;
    $('.overlay img').width(700);
    $('.overlay img').height(newHeight);
  }
}*/


//function to find each images index in the array   
/*function findImageIndex(imageSource) {
  for(var i = 0; i < images.length; i += 1) {
    if (images[i].source === imageSource) {
      return i;
    }
  }
  return -1;
}*/
  

// Show initial image. 
/*
showImage(imageIndex);
  
// allows you to click on thumbnail and bigger image is shown in larg-image div
$(".thumbnails img").click(function() {
    imageIndex = findImageIndex($(this).attr("src"));
    showImage(imageIndex);
});

//Moves to next image when clicking left or right arrows
$(".left-container img").click(function() {
  if (imageIndex === 0) {
    imageIndex = images.length -1;
  }
  else {
    imageIndex -= 1;
  }

  showImage(imageIndex);
});
*/

// Handle right arrow click.
/*$(".right-container img").click(function() {
  if (imageIndex === images.length -1) {
    imageIndex = 0;
  }
  else {
    imageIndex += 1;
  }

  showImage(imageIndex);
});*/
  
  
  
  
// lightbox for image gallery
  
/*var $overlay = $('<div class="overlay"></div>')
var $imageWrap = $('<div class="imageWrap"></div>')
var $leftArrow = $('<div class="lefty"></div>')
var $rightArrow = $('<div class="righty"></div>')
var $image = $('<img>')
var $cross = $('<div class="cross"></div>')
var $crossing = $('<p class="crossing">menu</p>')

$cross.append($crossing);
$imageWrap.append($cross);
$imageWrap.append($leftArrow);
$imageWrap.append($rightArrow);
$imageWrap.append($image);
$overlay.append($imageWrap);
$('body').append($overlay);

$('.large-image img').click(function() {
  
  imageIndex = findImageIndex($(this).attr("src"));
  lightBoxImage(imageIndex);
  
  $scrollPos = $(window).scrollTop() + "px";
  $overlay.css("top", $scrollPos);
    
  $('body').css("overflow","hidden");
  $overlay.fadeIn(500);
});
  
$(".lefty").click(function() {
  if (imageIndex === 0) {
    imageIndex = images.length -1;
  }
  else {
    imageIndex -= 1;
  }

  lightBoxImage(imageIndex);
});*/

// Handle right arrow click.
/*$(".righty").click(function() {
  if (imageIndex === images.length -1) {
    imageIndex = 0;
  }
  else {
    imageIndex += 1;
  }

  lightBoxImage(imageIndex);
});*/
  
  

  
//When overlay is clicked
/*$cross.click(function(){
  //Hide the overlay
  $('body').css("overflow","visible");
  $overlay.fadeOut(500);
});*/

/*var $overlay = $('<div class="overlay"></div>');
var $overlayWrapper = $('<div class="overlayWrapper"></div>');
var $image   = $('<img>')
var $cross = $('<div class="cross"></div>')
var $crossing = $('<p class="crossing">menu</p>')
var $leftArrow = $('<div class="lefty"></div>')
var $rightArrow = $('<div class="righty"></div>')

$cross.append($crossing);
$overlayWrapper.append($cross);
$overlayWrapper.append($leftArrow);
$overlayWrapper.append($rightArrow);
$overlayWrapper.append($image);
$overlay.append($overlayWrapper);
$('body').append($overlay);


  
$('.large-image img').click(function() {
  var largewidth = $(this).width();
  var largeheight = $(this).height();
  var imageLocation = $(this).attr("src");
  if($(this).width() >= $(this).height()) {
    $('.overlayWrapper img').height(($(this).height()/$(this).width()) * 700); 
    $('.overlayWrapper img').width(700);
    $('.overlayWrapper img').css('margin-top','3%');
  } else {
    $('.overlayWrapper img').width(($(this).width()/$(this).height()) * 600); 
    $('.overlayWrapper img').height(600);
    $('.overlayWrapper img').css('margin-top','5%');
  }
  $scrollPos = $(window).scrollTop() + "px";
  $overlay.css("top", $scrollPos);
  $image.attr('src',imageLocation);
  
  $('body').css("overflow","hidden");
  $overlay.fadeIn(500);
});//end click image  
  
//When overlay is clicked
$cross.click(function(){
  //Hide the overlay
  $('body').css("overflow","visible");
  $overlay.fadeOut(500);
});*/
  

  


  

  

  

  
});// end ready*/
  
