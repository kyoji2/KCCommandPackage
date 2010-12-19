/*
 * [KC] Random In-Point
 * By Kevin Cao(http://kevincao.com)
 * 2005.7.1
 */
var dom = fl.getDocumentDOM ();
var timeline = dom.getTimeline ();
var selectedFrames = timeline.getSelectedFrames ();
var numFrames = selectedFrames.length;
if (numFrames > 0) {
	var interfaceInfo = dom.xmlPanel(fl.configURI + 'Commands/kcxml/Random In-Point.xml');
	if(interfaceInfo.dismiss == "accept") {
		if(interfaceInfo.ch_a == "true" || interfaceInfo.ch_b == "true") {
			var flag = 1;
			if(interfaceInfo.ch_a == "true" && interfaceInfo.ch_b == "true") {
				flag = 2;
			} else if(interfaceInfo.ch_a == "true") {
				flag = 0;
			}
			var selectedFrames = timeline.getSelectedFrames ();

			for (var f = 0; f < numFrames; f+=3) {
				cLayer = selectedFrames [f];
				startFrame = selectedFrames [f + 1];
				endFrame = selectedFrames [f + 2];
				
				timeline.setSelectedLayers (cLayer, true);
				timeline.setSelectedFrames (startFrame, endFrame, true);
				timeline.cutFrames ();
				
				if (startFrame > endFrame) {
					maxFrame = startFrame;
					minFrame = endFrame;
				} else {
					maxFrame = endFrame;
					minFrame = startFrame;
				}
				
				var frameIndex = minFrame + getRandom(parseInt(interfaceInfo.range), flag);
				if(frameIndex < 0) frameIndex = 0;

				timeline.setSelectedLayers (cLayer, true);
				timeline.setSelectedFrames (frameIndex, frameIndex + (maxFrame - minFrame), true);

				timeline.pasteFrames ();
				
				
				// Delete Empty KeyFrames
				var layer = timeline.layers[cLayer];
				var keyFrames = getKeyFrameIndexes(layer);
				keyFrames.shift();
				numKeyframes=keyFrames.length;
				for(var i = 0; i < numKeyframes; ++i) {
					var cFrame = layer.frames[keyFrames[i]];
					if(cFrame.labelType == "none" && cFrame.actionScript == "" && cFrame.soundName == "" && cFrame.elements.length == 0) {
						previousFrame = layer.frames[keyFrames[i]-1];
						if(previousFrame.soundName == "" && previousFrame.elements.length == 0) {
							timeline.clearKeyframes(keyFrames[i]);
						}
					}
				}
				
			}
		}
	}
} else {
	alert("[KC] Random In-Point : Nothing to operate on.");
}

function getRandom(b, f) {
	if(f == 0) {
		return Math.floor(Math.random()*(b+1));
	} else if(f == 1) {
		return Math.floor(Math.random()*(b+1)) * -1;
	} else {
		return (Math.floor(Math.random()*(b+1))) * ((Math.random() > 0.5) ? 1 : -1);
	}
}

function getKeyFrameIndexes(layer) {
	var frames = layer.frames;
	var numFrames = frames.length;
	var indexes=[];
	for(var f=0; f<numFrames; ++f) {
		cFrame=frames[f];
		indexes.push(f);
		if(cFrame.duration>1) {
			f+=cFrame.duration-1;
		}
	}
	return indexes;
}
