/*
 * [KC] Layers Setup
 * By Kevin Cao(http://kevincao.com)
 * 2009.2.19
 */
 
// New Layer
fl.getDocumentDOM().getTimeline().addNewLayer();

// Clear Frame Selection
fl.getDocumentDOM().getTimeline().setSelectedFrames([]);

// Layer Name: labels
fl.getDocumentDOM().getTimeline().setLayerProperty('name', 'comment');

// Lock Layers: true
fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);

// New Layer
fl.getDocumentDOM().getTimeline().addNewLayer();

// Clear Frame Selection
fl.getDocumentDOM().getTimeline().setSelectedFrames([]);

// Layer Name: labels
fl.getDocumentDOM().getTimeline().setLayerProperty('name', 'labels');

// Lock Layers: true
fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);


// New Layer
fl.getDocumentDOM().getTimeline().addNewLayer();

// Clear Frame Selection
fl.getDocumentDOM().getTimeline().setSelectedFrames([]);

// Layer Name: actionscript
fl.getDocumentDOM().getTimeline().setLayerProperty('name', 'actions');

// Lock Layers: true
fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);



// New Layer
fl.getDocumentDOM().getTimeline().addNewLayer();

// Clear Frame Selection
fl.getDocumentDOM().getTimeline().setSelectedFrames([]);

// Layer Name: update
fl.getDocumentDOM().getTimeline().setLayerProperty('name', 'last update');

var d = new Date();

// Add update date
fl.getDocumentDOM().getTimeline().setFrameProperty('name', '//' + d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate());

// Lock Layers: true
fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);


// New Layer
fl.getDocumentDOM().getTimeline().addNewLayer();

// Clear Frame Selection
fl.getDocumentDOM().getTimeline().setSelectedFrames([]);

// Layer Name: author
fl.getDocumentDOM().getTimeline().setLayerProperty('name', 'author');

// Lock Layers: true
fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);

// Add author comment
fl.getDocumentDOM().getTimeline().setFrameProperty('name', '//Kevin Cao');


// New Layer
fl.getDocumentDOM().getTimeline().addNewLayer();

// Clear Frame Selection
fl.getDocumentDOM().getTimeline().setSelectedFrames([]);

// Layer Name: copyright
fl.getDocumentDOM().getTimeline().setLayerProperty('name', 'copyright');

// Lock Layers: true
fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);

// Add copyright comment
fl.getDocumentDOM().getTimeline().setFrameProperty('name', '//Copyright http://kevincao.com');


// New Folder Layer
var layerIndex = fl.getDocumentDOM().getTimeline().addNewLayer('informations', 'folder');
// Lock Layers: true
fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);

var pLayer = fl.getDocumentDOM().getTimeline().layers[0];
fl.getDocumentDOM().getTimeline().layers[layerIndex + 1].parentLayer = pLayer;
fl.getDocumentDOM().getTimeline().layers[layerIndex + 2].parentLayer = pLayer;
fl.getDocumentDOM().getTimeline().layers[layerIndex + 3].parentLayer = pLayer;

// Insert Frames
fl.getDocumentDOM().getTimeline().insertFrames(34, true, 0);

// Select the first frame of Layer 1
fl.getDocumentDOM().getTimeline().setSelectedFrames([layerIndex + 7, 0, 1]);
