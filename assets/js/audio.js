    $(".audio-button").each(function () {
        $(".audio-button").click(function () {
            $(".audio-button").toggleClass('fa-play').toggleClass('fa-pause');
            var BGmusic = document.getElementById("audio");
            if (BGmusic.paused)
                BGmusic.play();
            else
                BGmusic.pause();
        });
        $(".volume-button").click(function () {
            $(".volume-button").toggleClass('fa-volume-off').toggleClass('fa-volume-up');
            $("video").prop('muted', !$("video").prop('muted'));
        });
    });