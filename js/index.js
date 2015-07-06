$(function() {
	$('.item-link').on('click', function(ev) {
		var link = $(this),
			parent = link.parent(),
			parentSiblings = parent.siblings(),
			clickOffsetX = ev.offsetX,
			clickOffsetY = ev.offsetY,
			ripple = parent.find('.effect');

		if (ripple.length == 0) {
			ripple = $('<i class="effect"></i>');

			parent.prepend(ripple);
		}

		parent.removeClass('active');

		parentSiblings.removeClass('active');

		var diameter = Math.max(parent.height(), parent.width());

		ripple.css({
			height: diameter,
			width: diameter,
			top: clickOffsetY - diameter / 2,
			left: clickOffsetX - diameter / 2
		});

		parent.addClass('active');
	});

	var cardsFrame = $('.cards'),
		cards = $('.cards .card');

	cardsFrame.on('click', '.card', function(ev) {
		var card = $(this),
			sectionBody = cardsFrame.parents('.section-body'),
			bubblewrap = sectionBody.find('.bubblewrap'),
			bubble = bubblewrap.find('.bubble'),
			clickY = ev.pageY,
			clickX = ev.pageX,
			diameter = Math.max(sectionBody.height(), sectionBody.width());

		cards.each(function(i) {
			(function(counter, el) {
				var c = $(el),
					time = (300 / cards.length) * counter;

				setTimeout(function() {
					c.addClass('shrink');
				}, time);
			})(i, this);
		});

		bubble.css({
			width: diameter,
			height: diameter,
			top: clickY - sectionBody.offset().top - (diameter / 2),
			left: clickX - sectionBody.offset().left - (diameter / 2)
		});

		bubblewrap.addClass('active');
	});
});