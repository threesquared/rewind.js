(function( $ ) {
 
    $.fn.pullUp = function(options) {

        var settings = $.extend({
            audio: "rewind.mp3",
        }, options );

        var audio = new Audio(settings.audio);
        audio.setAttribute('preload', 'true');

        this.click(function(e) {

            e.preventDefault();

            audio.play();
            
            $("html, body").animate({
                scrollTop: 0
            }, audio.duration * 1000, function() {
                audio.pause();
                audio.currentTime = 0;
            });

        });
 
        return this;
 
    };
 
}( jQuery ));