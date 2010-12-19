/*
 * [KC] Add Stop Frames
 * By Kevin Cao(http://kevincao.com)
 * 2005.6.19
 */
var dom=fl.getDocumentDOM()
var timeline=dom.getTimeline()
var selections=timeline.getSelectedFrames()
var numSelections=selections.length
for(s=0;s<numSelections;s+=3)
{
	cLayer=selections[s]
	startFrame=selections[s+1]
	endFrame=selections[s+2]
	timeline.setSelectedFrames([cLayer,startFrame,endFrame],true);
	timeline.convertToKeyframes();
	for(f=startFrame;f<endFrame;++f)
	{
		timeline.layers[cLayer].frames[f].actionScript="stop();";
	}
}