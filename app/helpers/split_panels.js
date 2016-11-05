(function() {
    $('#split-bar').mousedown(function (e) {
        var min = 300;
        var max = 3600;
        var mainmin = 200;
        
        e.preventDefault();
        $(document).mousemove(function (e) {
            e.preventDefault();
            var x = e.pageX - $('#side-panel').offset().left;
            if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) {  
            $('#side-panel').css("width", x);
            $('#editor-content').css("margin-left", x);
            }
        })
    });
    $(document).mouseup(function (e) {
        $(document).unbind('mousemove');
    });
})();