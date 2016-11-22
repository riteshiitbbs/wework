Tracker.autorun(function() {
  var current = Router.current();

  Tracker.afterFlush(function() {
    $('.content-inner').scrollTop(0);
    $(window).scrollTop(0);
  });

  $(function () {
    var count = $("#slider > img").length
    var slider = 1
    var speed=500
    var fadeSpeed = 300
    var loop
    start()
    $("#1").fadeIn(fadeSpeed);
    $('#slider').hover(stop,start)

    function start(){
        loop = setInterval(next, speed)
    }
    function stop(){
        clearInterval(loop)
    }
    function right() {
        stop()
        next()
        start()
        return false
    }

    function left() {
        stop()
        prev()
        start()
        return false
    }

    function prev() {
        slider--
        if (slider < 1) {
            slider = count
        }

        $("#slider > img").fadeOut(fadeSpeed)
        $("#" + slider).fadeIn(fadeSpeed)
    }

    function next() {
        slider++
        if (slider > count) {
            slider = 1
        }

        $("#slider > img").fadeOut(fadeSpeed)
        $("#" + slider).fadeIn(fadeSpeed)
    }
});
});
