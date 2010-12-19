/*
 * [KC] Shuffle
 * By Kevin Cao(http://kevincao.com)
 * 2008.2.19
 */

var dom = fl.getDocumentDOM();
var sel = dom.selection;

if(sel.length > 0) {
	var interfaceInfo = dom.xmlPanel(fl.configURI + 'Commands/kcxml/Shuffle.xml');
	if(interfaceInfo.dismiss == "accept"){
		for( i=0; i<sel.length; i++) {
			dom.selectNone();
			var item = sel[i];
			dom.selection = [item];
			if(dom.selection.length > 0) {
				var tp = dom.getTransformationPoint();
				// temporarily set the transformation point to 0,0
				dom.setTransformationPoint({x:0, y:0});
				if(interfaceInfo.ch_x == "true") {
					dom.moveSelectionBy({x:getRandom(parseInt(interfaceInfo.x_min), parseInt(interfaceInfo.x_max))-item.left, y:0});
				}
				if(interfaceInfo.ch_y == "true") {
					dom.moveSelectionBy({x:0, y:getRandom(parseInt(interfaceInfo.x_min), parseInt(interfaceInfo.x_max))-item.top});
				}
				// restore the oringinal
				dom.setTransformationPoint({x:tp.x, y:tp.y});
				if(interfaceInfo.ch_s == "true") {
					var temp_s = getRandom(parseInt(interfaceInfo.s_min), parseInt(interfaceInfo.s_max))/100;
					dom.scaleSelection(temp_s, temp_s);
				} else {
					if(interfaceInfo.ch_xs == "true") {
						dom.scaleSelection(getRandom(parseInt(interfaceInfo.xs_min), parseInt(interfaceInfo.xs_max))/100, 1);
					}
					if(interfaceInfo.ch_ys == "true") {
						dom.scaleSelection(1, getRandom(parseInt(interfaceInfo.ys_min), parseInt(interfaceInfo.ys_max))/100);
					}
				}
				if(interfaceInfo.ch_rt == "true") {
					dom.rotateSelection(getRandom(parseInt(interfaceInfo.rt_min), parseInt(interfaceInfo.rt_max)));
				}
				if(item.elementType == "instance") {
					if(interfaceInfo.ch_al == "true") {
						dom.setInstanceAlpha(getRandom(parseInt(interfaceInfo.al_min), parseInt(interfaceInfo.al_max)));
					}
					if(interfaceInfo.ch_br == "true") {
						dom.setInstanceBrightness(getRandom(parseInt(interfaceInfo.br_min), parseInt(interfaceInfo.br_max)));
					}
				}
			}
		}
		if((interfaceInfo.ch_al == "true") && (interfaceInfo.ch_br == "true")) {
			fl.trace("Shuffle : Only one extra effect can be applied to the instance , \"_alpha\" is ignored.");
		}
	}
} else {
	alert("Shuffle : Nothing to operate on.");
}
dom.selection = sel;
function getRandom(a, b) {
	return (a+Math.floor(Math.random()*(b-a+1)));
}