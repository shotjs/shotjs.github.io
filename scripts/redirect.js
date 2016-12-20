
// Redirect
// ––––––––––––––––––––––––––––––––––––––––––––––––––

;(() => {

	'use strict';

	if (window.location.port === '3000') return;

	const url = 'https://github.com/shotjs/shot';

	setTimeout(() => {
		window.location = url;
	}, 2000);

})();
