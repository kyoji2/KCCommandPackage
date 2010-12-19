/*
 * [KC] Scale and Rotate
 * By Kevin Cao(http://kevincao.com)
 * 2005.6.19
 */
var dom = fl.getDocumentDOM();
var sel = dom.selection;

if(sel.length > 0) {
	var interfaceInfo = dom.xmlPanel(fl.configURI + 'Commands/kcxml/Scale and Rotate.xml');
	if(interfaceInfo.dismiss == "accept"){
		for( i=0; i<sel.length; i++) {
			dom.selectNone();
			var item = sel[i];
			dom.selection = [item];
			if(dom.selection.length > 0) {
				dom.scaleSelection(parseInt(interfaceInfo.sx)/100, parseInt(interfaceInfo.sy)/100);
				dom.rotateSelection(parseInt(interfaceInfo.rt));
			}
		}
	}
}
dom.selection = sel;
