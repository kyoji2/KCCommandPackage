/*
 * [KC] Spread
 * By Kevin Cao(http://kevincao.com)
 * 2009.2.19
 */
dom = fl.getDocumentDOM();
var interfaceInfo = dom.xmlPanel(fl.configURI + 'Commands/kcxml/Spread.xml');
if (interfaceInfo.dismiss == "accept") {
	var item = dom.selection[0];
	dom.selectNone();
	dom.selection = [item];
	if (dom.selection.length > 0) {
		spread();
	} else {
		alert("Spread : Nothing to operate on.");
	}
}
function spread() {
	var startLayer = dom.getTimeline().currentLayer;
	dom.clipCopy();
	var targetLayer = dom.getTimeline().addNewLayer("__Spread Artifacts", "normal", true);
	dom.getTimeline().setSelectedLayers(Math.floor(targetLayer), true);
	dom.clipPaste(true);
	if (item.elementType == "instance") {
		var startAlpha = dom.getElementProperty("colorAlphaPercent");
	}
	for (i = 0; i < Math.floor(interfaceInfo.steps); i++) {
		dom.duplicateSelection();
		dom.moveSelectionBy({x:Math.floor(interfaceInfo.spacing_x), y:Math.floor(interfaceInfo.spacing_y)}, false, false);
		var s = (100 - Math.floor(interfaceInfo.scale)) / 100;
		dom.scaleSelection(s, s, "");
		dom.rotateSelection(Math.floor(interfaceInfo.rotation), "");
		if (item.elementType == "instance") {
			dom.setInstanceAlpha(Math.floor(startAlpha) - Math.floor(interfaceInfo.alpha) * (i + 1));
		}
	}
	//Lock Original Layer and Hide Visibility
	//在当前层之上新增一层后本层的index值会发生改变
	dom.getTimeline().layers[Math.floor(startLayer) + 1].locked = true;
	dom.getTimeline().layers[Math.floor(startLayer) + 1].visible = false;
	if (item.elementType == "instance") {
		renameUnnamedMCs(item.name);
		var sname = item.name;
	} else {
		var sname = item.elementType + startLayer;
	}
	dom.getTimeline().layers[Math.floor(dom.getTimeline().findLayerIndex("__Spread Artifacts"))].name = "Spread - " + sname;
}
function renameUnnamedMCs(n) {
	var frameLoc = dom.getTimeline().layers[Math.floor(dom.getTimeline().findLayerIndex("__Spread Artifacts"))].frames[0];
	var elem = frameLoc.elements;
	for (var e = 0; e < elem.length; e++) {
		dom.selectNone();
		dom.selection = [elem[e]];
		dom.selection[0].name = n + "_" + e;
	}
}
function randomBetween(a, b) {
	return (a + Math.floor(Math.random() * (b - a + 1)));
}
