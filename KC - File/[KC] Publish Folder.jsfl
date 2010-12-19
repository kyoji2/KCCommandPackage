/*
 * [KC] Publish Folder
 * By Kevin Cao(http://kevincao.com)
 * 2006.5.16
 */
var folderURI = fl.browseForFolderURL("Select a folder to publish.");
if(folderURI) {
	var fileMask = "*.fla";
	var list = FLfile.listFolder(folderURI + "/" + fileMask, "files");
	if (list) {
		for(var i = 0; i < list.length; i++) {
			fl.openDocument(folderURI + "/" + list[i]);
			fl.getDocumentDOM().publish();
			fl.getDocumentDOM().close();
		}
		alert("Publish Folder : Publish Done!");
	}
}