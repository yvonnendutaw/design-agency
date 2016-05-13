$(document).foundation()
    //menu style effects
    (function () {
			[].slice.call(document.querySelectorAll('.menu')).forEach(function (menu) {
            var menuItems = menu.querySelectorAll('.menu__link'),
                setCurrent = function (ev) {
                    ev.preventDefault();

                    var item = ev.target.parentNode; // li

                    // return if already current
                    if (classie.has(item, 'menu__item--current')) {
                        return false;
                    }
                    // remove current
                    classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
                    // set current
                    classie.add(item, 'menu__item--current');
                };

				[].slice.call(menuItems).forEach(function (el) {
                el.addEventListener('click', setCurrent);
            });
        });

			[].slice.call(document.querySelectorAll('.link-copy')).forEach(function (link) {
            link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
            new Clipboard(link);
            link.addEventListener('click', function () {
                classie.add(link, 'link-copy--animate');
                setTimeout(function () {
                    classie.remove(link, 'link-copy--animate');
                }, 300);
            });
        });
    })(window);


//shape hover effects
(function () {

    function init() {
        var speed = 330,
            easing = mina.backout;

					[].slice.call(document.querySelectorAll('#grid > a')).forEach(function (el) {
            var s = Snap(el.querySelector('svg')),
                path = s.select('path'),
                pathConfig = {
                    from: path.attr('d'),
                    to: el.getAttribute('data-path-hover')
                };

            el.addEventListener('mouseenter', function () {
                path.animate({
                    'path': pathConfig.to
                }, speed, easing);
            });

            el.addEventListener('mouseleave', function () {
                path.animate({
                    'path': pathConfig.from
                }, speed, easing);
            });
        });
    }

    init();

})();
