/*
	以屏幕宽750px和html字体100px为标准
*/
(function () {
	var docEl = document.documentElement;
	var viewport = document.querySelector('meta[name=viewport]');
	var dpr = window.devicePixelRatio;
	var clientWidth;

	dpr = Math.floor(dpr);

	calculateFont();
	window.addEventListener('resize', calculateFont, false);
	function calculateFont() {
		viewport.content = 'width=device-width,initial-scale=1 ,user-scalable=no'
		clientWidth = docEl.clientWidth;
		docEl.style.fontSize = clientWidth / 750 * 100 * dpr+ 'px';
		viewport.content = 'width=device-width,initial-scale='+ 1/dpr +',user-scalable=no'
	}
})();