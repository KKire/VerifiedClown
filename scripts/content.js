setInterval(function () {
	const verifiedBadges = document.querySelectorAll("svg.r-1cvl2hr[aria-label='Verified account']");
	if (verifiedBadges) {
		verifiedBadges.forEach(e => e.replaceWith("🤡"));
	}
}, 2000);
