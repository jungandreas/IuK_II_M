"use strict";

self.addEventListener('fetch', function(event) {
	if(/\.jpg$|.png$/.test(event.request.url)) {
		var supportWebp = false;
		if (event.request.headers.has('accept')) {
			supportWebp=event.request.headers
			.get('accept')
			.includes('webp');
		}
		if (supportWebp) {
			var req = event.request.clone();

			var returnUrl = req.url.substr(0, req.url.lastIndexOf(".")) + ".webp";

			event.respondWith(
				fetch(returnUrl, {
				mode: 'no-cors'})
			);
		}
	}

});