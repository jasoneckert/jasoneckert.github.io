/*!
 * Carousel plugin for jQuery
 * author: Matt Lee
 */

/* FILE HAS BEEN MODIFIED - DO NOT REPLACE */
/* FILE HAS BEEN MODIFIED - DO NOT REPLACE */
/* FILE HAS BEEN MODIFIED - DO NOT REPLACE */
/* FILE HAS BEEN MODIFIED - DO NOT REPLACE */
/* FILE HAS BEEN MODIFIED - DO NOT REPLACE */
/* FILE HAS BEEN MODIFIED - DO NOT REPLACE */

(function ($) {
    $.carousel = {
        defaults: {
            cssClass: 'carousel',
            transition: {
                time: 5000,
                duration: 1000,
                easing: 'easeInOutExpo'
            }
        }
    };

    var carouselize = function (item, opts) {
        var $item = $(item);
        var index = 0;
        var count = $item.children().length;
        $item
            .wrap('<div class="' + opts.cssClass + '">')
            .after('<div class="arrow-right"/>' +
                   '<div class="arrow-left"/>');
        var $carousel = $item.parent();
        var $left = $carousel.find('.arrow-left');
        var $right = $carousel.find('.arrow-right');
        var width = $carousel.width();
        var overlap = Math.max(0, width - parseInt($('body').css('min-width')) - 150);
        var height = 0;
        $item.children().each(function (i, c) { height = Math.max(height, $(c).height()); });
        $item
            .css({ position: 'absolute', width: width * count })
            .wrap('<div>')
            .parent()
                .css({ overflow: 'hidden', position: 'relative', width: width, height: height })
            .end()
            .children()
                .css({ float: 'left', width: width - overlap, display: 'block', margin: 0 });

        $left.click(function () {
            scrollTo(index - 1);
            return false;
        });
        $right.click(function () {
            scrollTo(index + 1);
            return false;
        });

        var interval;
        var autoScroll = true;

        var startTimer = function () {
            stopTimer();
            if (autoScroll) {
                interval = false; 
				/* setInterval(function () { */
                    /*scrollTo(index + 1); */
                /* }, opts.transition.time); */
            }
        };

        var stopTimer = function () {
            if (interval) {
                clearInterval(interval);
                interval = false;
			/* interval = null; */
            }
        };

        var scrollTo = function (i) {
            index = i % count;
            if (index < 0) {
                index = count + index;
            }
            $item.animate({ left: -width * index + overlap * index }, opts.transition.duration, opts.transition.easing);
            $item.trigger('scrollTo', [index]);
        };

        var blobWidth = 14;
        var $blobs = $('<div class="blobswrapper"><div class="blobs" /></div>')
            .appendTo($carousel)
            .find('.blobs')
                .css({ margin: '0 auto', width: blobWidth * count });

        for (var i = 0; i < count; i++) {
            (function (i) {
                var i = i;
                var $blob = $('<a href="#" class="blobs" id="blob' + i + '"/>')
                    .appendTo($blobs)
                    .css({ float: 'left', opacity: 0.5 })
                    .click(function () {
                        startTimer();
                        scrollTo(i);
                        return false;
                    });
                $item.bind('scrollTo', function (e, index) {
                    $blob.animate({ opacity: index === i ? 1 : 0.5 }, opts.transition.duration, opts.transition.easing);
                });
            })(i);
        }

        $item.hover(stopTimer, startTimer);

        $item.data('carousel', {
            start: function () {
                autoScroll = true;
                startTimer();
            },
            stop: function () {
                autoScroll = false;
                stopTimer();
            }
        });

        scrollTo(0);
        startTimer();
    };

    $.fn.carousel = function (opts) {
        if (typeof opts === 'string') {
            return this.each(function () {
                var carouselData = $(this).data('carousel');
                if (opts in carouselData && $.isFunction(carouselData[opts])) {
                    carouselData[opts]();
                }
            });
        }
        var opts = opts || {};
        var newOpts = $.extend({}, $.carousel.defaults, opts);
        newOpts.transition = $.extend({}, $.carousel.defaults.transition, opts.transition);
        return this.each(function () {
            var timeDataAttr = $(this).attr('data-time')
            if (timeDataAttr) {
                newOpts.transition.time = timeDataAttr;
            }
            carouselize(this, newOpts);
        });
    };
})(jQuery);
