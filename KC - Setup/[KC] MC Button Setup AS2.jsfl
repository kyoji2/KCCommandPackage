//
//This creates the buttons states and actionscript for button movieclips
//Created by James Booth
//Do whatever you want with it.
//Modified By Kevin Cao(http://kevincao.com).
//

fl.getDocumentDOM().getTimeline().insertFrames(59);

fl.getDocumentDOM().getTimeline().addNewLayer("labels");

fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);

fl.getDocumentDOM().getTimeline().setSelectedFrames([]);
fl.getDocumentDOM().getTimeline().insertKeyframe(1);
fl.getDocumentDOM().getTimeline().setFrameProperty('name', 'Normal');
fl.getDocumentDOM().getTimeline().insertKeyframe(10);
fl.getDocumentDOM().getTimeline().setFrameProperty('name', 'RollOver');
fl.getDocumentDOM().getTimeline().insertKeyframe(20);
fl.getDocumentDOM().getTimeline().setFrameProperty('name', 'RollOut');
fl.getDocumentDOM().getTimeline().insertKeyframe(30);
fl.getDocumentDOM().getTimeline().setFrameProperty('name', 'Press');
fl.getDocumentDOM().getTimeline().insertKeyframe(40);
fl.getDocumentDOM().getTimeline().setFrameProperty('name', 'Active');
fl.getDocumentDOM().getTimeline().insertKeyframe(50);
fl.getDocumentDOM().getTimeline().setFrameProperty('name', 'Disabled');

var layerIndex = fl.getDocumentDOM().getTimeline().addNewLayer("actions");
fl.getDocumentDOM().getTimeline().layers[layerIndex].frames[0].actionScript = "onRollOver = onDragOver = function(){\n\tgotoAndPlay(\"RollOver\");\n};\nonRollOut = onDragOut = function(){\n\tgotoAndPlay(\"RollOut\");\n};";
fl.getDocumentDOM().getTimeline().insertKeyframe(1);
fl.getDocumentDOM().getTimeline().layers[layerIndex].frames[1].actionScript = "stop();";
fl.getDocumentDOM().getTimeline().insertKeyframe(19);
fl.getDocumentDOM().getTimeline().layers[layerIndex].frames[19].actionScript = "stop();";
fl.getDocumentDOM().getTimeline().insertKeyframe(29);
fl.getDocumentDOM().getTimeline().layers[layerIndex].frames[29].actionScript = "stop();";

fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);

// Select the first frame of Layer 1
fl.getDocumentDOM().getTimeline().setSelectedFrames([layerIndex + 2, 0, 1]);
