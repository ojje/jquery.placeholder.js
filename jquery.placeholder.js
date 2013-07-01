(function($) {
	$.placeholder = function(options) {
		/* Set our default settings */
		var defaults = {
			selector: '.placeholder',
			focusClass: false,
			blurClass: false
		};

		/* Merge the defaults with the user provided options */
		var options = $.extend({}, defaults, options);

		/* Add a delegate event to the body to be able to bind to elements added later to the DOM */
		
		$(document).on('focusin', options.selector, function() {
			if (options.focusClass !== false) {
				$(this).addClass(options.focusClass);
			}

			if (options.blurClass !== false) {
				$(this).removeClass(options.blurClass);
			}

			if ($.trim(this.value) == this.defaultValue) {
				this.value = '';
			}
		}).on('focusout', options.selector, function() {
			if (options.focusClass !== false) {
				$(this).removeClass(options.focusClass);
			}

			if (options.blurClass !== false) {
				$(this).addClass(options.blurClass);
			}

			if ($.trim(this.value) == '') {
				this.value = this.defaultValue;
			}
		});
	};
	
})($);
