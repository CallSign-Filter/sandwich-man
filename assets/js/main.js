/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	//Show top experience
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons0 = document.querySelectorAll('.toggle-content0');
        var fullTextWrappers0 = document.querySelectorAll('.fulltext0');
        var fullText0;
        var toggleButtonText0;


        [].forEach.call(fullTextWrappers0, function(fullTextWrapper) {
            // hide all full text on load
            fullTextWrapper.setAttribute('hidden', true);
        });

        [].forEach.call(toggleButtons0, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext');
                toggleButtonText0 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText0.innerText = 'Full Story';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText0.innerText = 'Hide';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }

    //Show 'Software experience'
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons1 = document.querySelectorAll('.toggle-content1');
        var fullTextWrappers1 = document.querySelectorAll('.fulltext1');
        var fullText1;
        var toggleButtonText1;


        [].forEach.call(fullTextWrappers1, function(fullTextWrapper) {
            // hide all full text on load
            fullTextWrapper.setAttribute('hidden', false);
        });

        [].forEach.call(toggleButtons1, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext1');
                toggleButtonText1 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText1.innerText = 'Breakfast Menu';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText1.innerText = 'Hide';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }


// cut the mustard
    //Show 'Military Experience'
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons2 = document.querySelectorAll('.toggle-content2');
        var fullTextWrappers2 = document.querySelectorAll('.fulltext2');
        var fullText2;
        var toggleButtonText2;


        [].forEach.call(fullTextWrappers2, function(fullTextWrapper2) {
            // hide all full text on load
            fullTextWrapper2.setAttribute('hidden', true);
        });

        [].forEach.call(toggleButtons2, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext2');
                toggleButtonText2 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText2.innerText = 'Sandwiches';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText2.innerText = 'Hide';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }

    //show 'Other Experience'
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons3 = document.querySelectorAll('.toggle-content3');
        var fullTextWrappers3 = document.querySelectorAll('.fulltext3');
        var fullText3;
        var toggleButtonText3;


        [].forEach.call(fullTextWrappers3, function(fullTextWrapper3) {
            // hide all full text on load
            fullTextWrapper3.setAttribute('hidden', true);
        });

        [].forEach.call(toggleButtons3, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext3');
                toggleButtonText3 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText3.innerText = 'Burgers';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText3.innerText = 'Hide';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }

    //show 'Masters Courses'
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons4 = document.querySelectorAll('.toggle-content4');
        var fullTextWrappers4 = document.querySelectorAll('.fulltext4');
        var fullText4;
        var toggleButtonText4;


        [].forEach.call(fullTextWrappers4, function(fullTextWrapper4) {
            // hide all full text on load
            fullTextWrapper4.setAttribute('hidden', true);
        });

        [].forEach.call(toggleButtons4, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext4');
                toggleButtonText4 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText4.innerText = 'Salads';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText4.innerText = 'Hide';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }

    //show 'Bachelor Courses'
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons5 = document.querySelectorAll('.toggle-content5');
        var fullTextWrappers5 = document.querySelectorAll('.fulltext5');
        var fullText5;
        var toggleButtonText5;


        [].forEach.call(fullTextWrappers5, function(fullTextWrapper5) {
            // hide all full text on load
            fullTextWrapper5.setAttribute('hidden', true);
        });

        [].forEach.call(toggleButtons5, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext5');
                toggleButtonText5 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText5.innerText = 'Mexican';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText5.innerText = 'Hide';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }
})(jQuery);