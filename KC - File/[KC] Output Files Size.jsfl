/*
 * [KC] Output Files Size
 * By Kevin Cao(http://kevincao.com)
 * 2010.1.6
 */
var folderURI = fl.browseForFolderURL("Select a folder");
if(folderURI) {
	var fileMask = "*.swf";
	var list = FLfile.listFolder(folderURI + "/" + fileMask, "files");
	if (list) {
		for(var i = 0; i < list.length; i++) {
			fl.trace(i + "	" + list[i] + "	:	" + FLfile.getSize(folderURI + "/" + list[i]));
		}
	}
}