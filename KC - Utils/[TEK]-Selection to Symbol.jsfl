var dom=fl.getDocumentDOM();
var lib=dom.library;
var tl=dom.getTimeline();

lib.addNewItem("movie clip","test");
tl.copyFrames();
var

 items=lib.items;
 
 for(var i=0;i<items.length;i++){
	 if(items[i].name=="test"){
		// lib.editItem("test");
		 break;
	 }
 }
 
 var itemindex=lib.findItemIndex("test");
 var item=lib.items[itemindex];
 var itemtl=item.timeline;
 itemtl.setSelectedFrames(0,1);
 itemtl.pasteFrames();
 
 //WORKING//
 
 
