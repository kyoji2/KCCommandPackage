/*
 * [KC] Random Ease
 * By Kevin Cao(http://kevincao.com)
 * 2009.2.19
 */
function randomEase() {
	var timeline = fl.getDocumentDOM().getTimeline();
	var selectedFrames = timeline.getSelectedFrames();
	var numFrames = selectedFrames.length;
	var flag = 0;
	if (numFrames > 0) {
		var interfaceInfo = fl.getDocumentDOM().xmlPanel(fl.configURI + 'Commands/kcxml/Random Ease.xml');
		if (interfaceInfo.dismiss == "accept") {
			if (interfaceInfo.ch_a == "true") {
				if (interfaceInfo.ch_b == "true") {
					flag = 3;
				} else {
					flag = 1;
				}
			} else {
				if (interfaceInfo.ch_b == "true") {
					flag = 2;
				} else {
					return;
				}
			}
			var n = parseInt(interfaceInfo.max);
			if (n) {
				var max = Math.min(Math.round(n), 100);
			} else {
				var max = 100;
			}
			n = parseInt(interfaceInfo.min);
			if (n) {
				var min = Math.max(Math.round(n), 0);
			} else {
				var min = 0;
			}
			var selectedFrames = timeline.getSelectedFrames();
			for (var f = 0; f < numFrames; f += 3) {
				cLayer = selectedFrames[f];
				startFrame = selectedFrames[f + 1];
				endFrame = selectedFrames[f + 2];
				timeline.setSelectedLayers(cLayer, true);
				timeline.setSelectedFrames(startFrame, endFrame, true);
				timeline.setFrameProperty("tweenEasing", getRandom(min, max, flag));
			}
		} else {
			alert("[KC] Random Ease : Nothing to operate on.");
		}
	}
}
function getRandom(minValue, maxValue, f) {
	var dif = maxValue - minValue;
	if (f == 1) {
		return (minValue + Math.round(Math.random() * dif)) * -1;
	} else if (f == 2) {
		return minValue + Math.round(Math.random() * dif);
	} else {
		return (minValue + Math.round(Math.random() * dif)) * ((Math.random() > 0.5) ? 1 : -1);
	}
}
randomEase();