/*
 Forty by HTML5 UP
 html5up.net | @ajlkn
 Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 */

(function ($) {



    $(function () {

        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#wrapper'),
            $header = $('#header'),
            $banner = $('#banner');


        // Scrolly.
        $('.scrolly').scrolly({
            offset: function () {
                return $header.height() - 2;
            }
        });



        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0
            && $header.hasClass('alt')) {

            $window.on('resize', function () {
                $window.trigger('scroll');
            });

            $window.on('load', function () {

                $banner.scrollex({
                    bottom: $header.height() + 10,
                    terminate: function () {
                        $header.removeClass('alt');
                    },
                    enter: function () {
                        $header.addClass('alt');
                    },
                    leave: function () {
                        $header.removeClass('alt');
                        $header.addClass('reveal');
                    }
                });

                window.setTimeout(function () {
                    $window.triggerHandler('scroll');
                }, 100);

            });

        }

        // // Banner.
        // $banner.each(function () {
        //
        //     var $this = $(this),
        //         $image = $this.find('.image'), $img = $image.find('img');
        //
        //     // Parallax.
        //     $this._parallax(0.275);
        //
        //     // Image.
        //     if ($image.length > 0) {
        //
        //         // Set image.
        //         //$this.css('background-image', 'url(' + $img.attr('src') + ')');
        //
        //         // Hide original.
        //         //$image.hide();
        //
        //     }
        //
        // });

        // Menu.
        var $menu = $('#menu'),
            $menuInner;

        $menu.wrapInner('<div class="inner"></div>');
        $menuInner = $menu.children('.inner');
        $menu._locked = false;

        $menu._lock = function () {

            if ($menu._locked)
                return false;

            $menu._locked = true;

            window.setTimeout(function () {
                $menu._locked = false;
            }, 350);

            return true;

        };

        $menu._show = function () {

            if ($menu._lock())
                $body.addClass('is-menu-visible');

        };

        $menu._hide = function () {

            if ($menu._lock())
                $body.removeClass('is-menu-visible');

        };

        $menu._toggle = function () {

            if ($menu._lock())
                $body.toggleClass('is-menu-visible');

        };

        $menuInner
            .on('click', function (event) {
                event.stopPropagation();
            })
            .on('click', 'a', function (event) {


                var href = $(this).attr('href');

                event.preventDefault();
                event.stopPropagation();

                // Hide.
                $menu._hide();

                // Redirect.
                window.setTimeout(function () {
                    window.location.href = href;
                }, 250);

            });
        $menu
            .appendTo($body)
            .on('click', function (event) {
                event.stopPropagation();
                event.preventDefault();

                $body.removeClass('is-menu-visible');

            })
            .append('<a class="close" href="#menu">Close</a>');

        $body
            .on('click', 'a[href="#menu"]', function (event) {

                event.stopPropagation();
                event.preventDefault();

                // Toggle.
                $menu._toggle();

            })
            .on('click', function (event) {

                // Hide.
                $menu._hide();

            })
            .on('keydown', function (event) {

                // Hide on escape.
                if (event.keyCode == 27)
                    $menu._hide();

            });

    });

})(jQuery);
