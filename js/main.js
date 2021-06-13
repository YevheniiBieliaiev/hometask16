
var myCarousel = document.querySelector('#carousel-custom')
var carousel = new bootstrap.Carousel(myCarousel, {
   interval: false
})

var scroll = new SmoothScroll('a[href*="#"]', {
   speed: 1000
});
