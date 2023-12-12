<script>
    $(function() {
        var moveLeft = 20;
        var moveDown = 10;
        $('a#trigger').hover(function(e) {
            $('div#purpose').show();
        }, function() {
            $('div#purpose').hide();
        });
        $('a#trigger').mousemove(function(e) {
        $("div#purpose").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
        });
    });
</script>
