/*
 * [KC] Compact Folder
 * By Kevin Cao(http://kevincao.com)
 * 2006.5.16
 */
var folderURI = fl.browseForFolderURL("Select a folder to compact.");
if(folderURI) {
	var fileMask = "*.fla";
	var list = FLfile.listFolder(folderURI + "/" + fileMask, "files");
	if (list) {
		for(var i = 0; i < list.length; i++) {
			fl.openDocument(folderURI + "/" + list[i]);
			if(fl.getDocumentDOM().saveAndCompact()) {
				fl.getDocumentDOM().close();
			} else {
				fl.trace("[KC] Compact Folder : FOUND ERROR IN" + list[i]);
			}
		}
		alert("Compact Folder : Compact Done!");
	}
}