/*
 * [KC] Wiggle - select any object on the stage then run this command
 * By Kevin Cao(http://kevincao.com)
 * 2009.2.19
 */
var dom = fl.getDocumentDOM();
var elem = dom.selection;
if(elem.length > 0) {
	var interfaceInfo = dom.xmlPanel(fl.configURI + 'Commands/kcxml/Wiggle.xml');
	if(interfaceInfo.dismiss == "accept"){
		for(var i=0;i < elem.length;i++){
			dom.selectNone();	
			dom.selection = [elem[i]];
			if(dom.selection.length > 0) {
				var moveX = moveY = 0;
				if(interfaceInfo.ch_x == "true") {
					moveX = wiggleRandom(Math.floor(interfaceInfo.minValue),Math.floor(interfaceInfo.maxValue));
				}
				if(interfaceInfo.ch_y == "true") {
					moveY = wiggleRandom(Math.floor(interfaceInfo.minValue),Math.floor(interfaceInfo.maxValue));
				}
				dom.moveSelectionBy({x:moveX, y:moveY});
			}
		}
	}
	// reselect
	dom.selection = elem;
} else {
	alert("Wiggle : Nothing to operate on.");
}
function wiggleRandom(a, b) {
	return (a+Math.floor(Math.random()*(b-a+1)))*((Math.random()>.5)?(-1):1);
}