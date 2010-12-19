/*
 * [KC] Pixelate Position
 * By Kevin Cao(http://kevincao.com)
 * 2005.6.19
 */

var dom = fl.getDocumentDOM();
var sel = dom.selection;
if(dom.library.itemExists("KC_temp_mc")) {
	dom.library.deleteItem("KC_temp_mc");
}
for( i=0; i<sel.length; i++) {
	dom.selectNone();
	var item = sel[i];
	dom.selection = [item];
	if(dom.selection.length > 0) {
		dom.convertToSymbol("movie clip", "KC_temp_mc", "top left");
		//dom.setTransformationPoint({x:0, y:0});
		var mItem = dom.selection[0];
		var mat = mItem.matrix;
		mat.tx = Math.round(mat.tx);
		mat.ty = Math.round(mat.ty);
		mItem.matrix = mat;
		dom.breakApart();
		dom.library.deleteItem("KC_temp_mc");
	}
}
dom.selection = sel;