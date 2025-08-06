function syncWidth() {
    var $b0 = $('.b0');
    var $overlay = $('.b0-overlay');
    if ($b0.length && $overlay.length) {
        var width = $b0.outerWidth(); // padding 포함한 너비
        $overlay.css('width', width + 'px');
    }
}

// 페이지 로드 후
$(document).ready(function () {
    syncWidth();
});

// 윈도우 리사이즈 시에도 실행
$(window).on('resize', function () {
    syncWidth();
});