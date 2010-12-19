/*
 * [KC] Bake Animation
 * By Kevin Cao(http://kevincao.com)
 * Original Code By Ibis Fernandez
 * 2005.6.19
 */
_doc = fl.getDocumentDOM();
_tl = _doc.getTimeline();
tF = _tl.frameCount;

_tl.currentLayer = 0;
_tl.currentFrame = 0;
_tl.addNewLayer("Baked");
_tl.selectAllFrames();
_tl.convertToKeyframes();
_tl.setFrameProperty('tweenType', 'none');

for (var i = 0; i<tF; i++) {
	_tl.currentFrame = i;
	_doc.selectAll();
	_doc.clipCut();
	_tl.currentLayer = 0;
	_doc.clipPaste(true);
	_doc.selectNone();
}
for(var j = _tl.layerCount; j > 0; j--) {
	_tl.deleteLayer(j);
}