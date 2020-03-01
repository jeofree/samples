
function buttonOver(buttonObj) {
	buttonObj.className = "menuButtonHover";
}

function buttonOut(buttonObj) {
	buttonObj.className = "menuButton";
}

function syncTOC(href) {
	var currentContentPageHref = "";
	if (href) {
		currentContentPageHref = href;
	} else {
		currentContentPageHref = parent.ContentFrame.location.href;
		var hashIndex = currentContentPageHref.indexOf('#');
		if (hashIndex != -1 && hashIndex == currentContentPageHref.lastIndexOf('#')) {
			currentContentPageHref = currentContentPageHref.substring(0, hashIndex);
		}
	}
	parent.NavFrame.selectTopic(currentContentPageHref);
}
