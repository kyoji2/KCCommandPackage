/**
	Selective Lock
	Steven Grosvenor :: Phireworx (2004)
*/

dom = fl.getDocumentDOM();
timeline = dom.getTimeline();
var currentLayer = fl.getDocumentDOM().getTimeline().currentLayer;
var allLayers = new Array();
allLayers = fl.getDocumentDOM().getTimeline().layers;
for(i=0;i<allLayers.length;i++){
	var lockStatus = fl.getDocumentDOM().getTimeline().layers[i].locked;
	if((!lockStatus) &&(currentLayer !==i) ){
			fl.getDocumentDOM().getTimeline().layers[i].locked = true
	}
}



