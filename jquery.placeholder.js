(function($) {
	"use strict";
	
	$.placeholder = function(options) {
		
		/* Set our default settings */
		var defaults = {
			selector: '.placeholder',
			focusClass: false,
			blurClass: false,
			errorClass: false,
			defaultClass: 'not-changed'
		};

		/* Merge the defaults with the user provided options */
		var options = $.extend({}, defaults, options);
		
		/* Add default class to all components */
		$(options.selector).addClass(options.defaultClass);
		
		/* Focus event */
		$(document).on('focusin', options.selector, function() {
			if (options.focusClass !== false) {
				$(this).addClass(options.focusClass).removeClass(options.defaultClass);
			}

			if (options.blurClass !== false) {
				$(this).removeClass(options.blurClass);
			}
			
			if ($.trim(this.value) == this.defaultValue || $.trim(this.value) == $(this).data('error')) {
				this.value = '';
			}
			
		/* Blur event */
		}).on('focusout', options.selector, function() {
			if (options.focusClass !== false) {
				$(this).removeClass(options.focusClass);
			}

			if (options.blurClass !== false) {
				$(this).addClass(options.blurClass);
			}

			if ($.trim(this.value) == '') {
				if ($(this).parents('form').hasClass('validated')) {
					this.value = $(this).data('error');
				}
				else {
					this.value = this.defaultValue;
				}
			
				$(this).removeClass(options.blurClass).addClass(options.defaultClass);
			}
			else {
				$(this).removeClass(options.errorClass);
			}
		});
	};
	
})(jQuery);
