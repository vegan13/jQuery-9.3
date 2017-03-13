$(function(){
    
    var carouselList = $("#carousel ul"),
        carouselLiItems = $("#carousel ul li"),
        ilosc = carouselLiItems.length;
    
    
        for (var i=1; i<=ilosc; i++) {

            if (i <= ilosc){
                
                carouselList.animate({'marginLeft': -500}, 1500, moveFirstSlide);
                
            } 
        }
    
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
    
    // Odświeżenie karuseli po kliknięcu na nią kursorem myszki
    
    $('#carousel').click(function() {
        location.reload();
    });

});