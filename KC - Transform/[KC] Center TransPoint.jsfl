/*
 * [KC] Center TransPoint
 * By Kevin Cao(http://kevincao.com)
 * 2005.7.3
 */
var dom = fl.getDocumentDOM();

/*
var sel = dom.selection;
for(i=0; i<sel.length; i++) {
	dom.selectNone();
	var item = sel[i];
	var x = item.matrix.tx;
	var y = item.matrix.ty;
	dom.group();
	var tp = dom.getTransformationPoint();
	x = tp.x - x;
	y = tp.y - y;
	dom.unGroup();
	dom.selectNone();
	dom.selection = [item];
	dom.setTransformationPoint({x:x, y:y});
}
dom.selection = sel;
*/

var item = dom.selection[0];
var x = item.matrix.tx;
var y = item.matrix.ty;
dom.group();
var tp = dom.getTransformationPoint();
x = tp.x - x;
y = tp.y - y;
dom.unGroup();
dom.selectNone();
dom.selection = [item];
dom.setTransformationPoint({x:x, y:y});