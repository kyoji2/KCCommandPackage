/*
 * [KC] Sequence Layers
 * By Kevin Cao(http://kevincao.com)
 * 2009.2.19
 */
var dom = fl.getDocumentDOM ();
var timeline = dom.getTimeline ();
var selectedFrames = timeline.getSelectedFrames ();
var numFrames = selectedFrames.length;
if (numFrames > 0) {
	var interfaceInfo = dom.xmlPanel(fl.configURI + 'Commands/kcxml/Sequence Layers.xml');
	if(interfaceInfo.dismiss == "accept") {
		var frameIndex = 0;
		var selectedFrames = timeline.getSelectedFrames ();
		if(interfaceInfo.seq == "Top down") {
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
				
				timeline.setSelectedLayers (cLayer, true);
				timeline.setSelectedFrames (frameIndex, frameIndex + (maxFrame - minFrame) , true);
				frameIndex += (maxFrame - minFrame - interfaceInfo.overlap);
				if(frameIndex < 0) frameIndex = 0;
				timeline.pasteFrames ();
			}
		} else {
			for (var f = numFrames-1; f > 0; f-=3) {
				cLayer = selectedFrames [f - 2];
				startFrame = selectedFrames [f - 1];
				endFrame = selectedFrames [f];
				
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
				
				timeline.setSelectedLayers (cLayer, true);
				timeline.setSelectedFrames (frameIndex, frameIndex + (maxFrame - minFrame) , true);
				frameIndex += (maxFrame - minFrame - interfaceInfo.overlap);
				if(frameIndex < 0) frameIndex = 0;
				timeline.pasteFrames ();
			}
		}
	}
} else {
	alert("Sequence Layers : Nothing to operate on.");
}
