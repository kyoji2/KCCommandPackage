/*
 * [KC] Quick Empty MC
 * Modified By Kevin Cao(http://kevincao.com)
 * 2005.6.19
 */

// -- variables
var curr_doc = fl.getDocumentDOM ();
var curr_lib = curr_doc.library;
var instname = "holder_mc";

// -- crea un clip de pella a la biblioteca
curr_lib.addNewItem ("movie clip", instname);

// -- cambia el nombre de Layer 'Capa 1' por 'holder_mc'
fl.getDocumentDOM ().getTimeline ().setLayerProperty ('name', 'holder_mc');

// -- clip al escenario
curr_lib.addItemToDocument ({x : 0, y : 0}, instname);

// -- nombre de instancia
curr_doc.selection[0].name = instname;