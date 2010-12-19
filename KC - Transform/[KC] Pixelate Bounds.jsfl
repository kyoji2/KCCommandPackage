/*
 * [KC] Pixelate Position
 * By Kevin Cao(http://kevincao.com)
 * 2005.7.3
 */

var dom = fl.getDocumentDOM();
var sel = dom.selection;
for( i=0; i<sel.length; i++) {
	dom.selectNone();
	var item = sel[i];
	dom.selection = [item];
	if(dom.selection.length > 0) {
		var tp = dom.getTransformationPoint();
		// temporarily set the transformation point to 0,0
		dom.setTransformationPoint({x:0, y:0});
		var l = Math.round(item.left);
		var t = Math.round(item.top);
		var w = Math.round(item.width);
		var h = Math.round(item.height);
		dom.setSelectionBounds({left:l, top:t, right:l+w,bottom:t+h});
		// restore the oringinal
		dom.setTransformationPoint({x:tp.x, y:tp.y});
	}
}

dom.selection = sel;