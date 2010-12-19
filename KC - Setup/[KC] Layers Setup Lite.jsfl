/*
 * [KC] Layers Steup Lite
 * By Kevin Cao(http://kevincao.com)
 * Original Code By Steven Grosvenor :: Phireworx (2004)
 * 2009.2.19
 */

dom = fl.getDocumentDOM();
timeline = dom.getTimeline();
layerInfo = new Array();

layerInfo  = ["labels","actions"]
for(i=0; i<layerInfo.length;i++)
{
	if(timeline.findLayerIndex(layerInfo[i])){
		break;
	}else{
		timeline.addNewLayer(layerInfo[i],'normal');
	}
}
