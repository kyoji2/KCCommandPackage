dom=fl.getDocumentDOM()
timeline=dom.getTimeline()
selectedLayers=timeline.getSelectedLayers()
if(selectedLayers.length > 0)
{
	selectedLayerIndex=selectedLayers[0]
	selectedLayer=timeline.layers[selectedLayerIndex]
	timeline.setSelectedLayers(selectedLayerIndex,true)
	timeline.copyFrames()
	newLayerIndex=timeline.addNewLayer(selectedLayer.name,selectedLayer.layerType,true)
	timeline.setSelectedLayers(newLayerIndex,true)
	timeline.pasteFrames()
}