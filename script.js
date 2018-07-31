var container = $('#container');

window.onload = function (){
$('.btn[data-target]')
    .on('click', function() {
        var btn = $(this),
            angle = 0;

        switch (btn.attr('data-target')) {
            case 'login':
                angle = 0;
                break;
            case 'agbs':
                angle = 90;
                break;
            case 'info':
                angle = 180;
                break;
            case 'register':
                angle = -90;
                break;
        }

        container
            .css('transform', 'translate3d(0, 0, -200px) rotate3d(0, 1, 0, ' + angle + 'deg)');
    });

$('.btn[data-action]')
    .on('click', function() {
        var btn = $(this);
    
        if (btn.attr('data-action') === 'login') {
            container
                .css('animation', 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both');
            
            setTimeout(function () {
                container.css('animation', '');
            }, 820);
        }
    });
}