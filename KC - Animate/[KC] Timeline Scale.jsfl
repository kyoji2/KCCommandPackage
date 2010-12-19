/*
 * [KC] Timeline Scale
 * By Kevin Cao(http://kevincao.com)
 * Original Code By www.SeibsProgrammLaden.de
 * 2009.2.19
 */

var cErr = new Array ();
cErr ['DE1'] = "Bitte eine Zahl eingeben (1,2,3,4,..)!";
cErr ['EN1'] = "Please give me a number (1,2,3,4,..)!";
//
var cPop = new Array ();
cPop [0] = "Timeline skalieren:";
cPop [1] = "scale the timeline:";
cPop [2] = "alle Frames:";
cPop [3] = "all frames:";
//
var vURI, vDom, vTimeLine, vLanguage, vErr, vIsKey, vIsDel;
var vPanel, vPanelPop1, vPanelPop2, vPanelScale, vPanelDelete, vPanelFromNr, vPanelToNr;
var vLayerNr, vLayerAkt;
var vFrameAnz, vFrameNr, vFrameLastKeyNr, vFrameInsNr;
//
vDom = fl.getDocumentDOM ();
vURI = fl.configURI;
vLanguage = 'EN';
/*
if (vURI.indexOf("de/Confi") || vURI.indexOf("de\Confi") || vURI.indexOf("de:Confi"))
{	vLanguage='DE';
}
*/
vPanel = vDom.xmlPanel (vURI + 'Commands/kcxml/Timeline Scale.xml');
if (vPanel.dismiss == 'accept')
{
	vErr = 0;
	vPanelPop1 = ((vPanel.ID_pop1 == cPop [0]) || (vPanel.ID_pop1 == cPop [1]));
	vPanelPop2 = ((vPanel.ID_pop2 == cPop [2]) || (vPanel.ID_pop2 == cPop [3]));
	if (vPanelPop1)
	{
		vPanelScale = Math.abs (parseInt (vPanel.ID_scale - 1));
		if (isNaN (vPanelScale))
		{
			vErr = 1;
		}	
	} 
	else
	{
		vPanelDelete = Math.abs (parseInt (vPanel.ID_delete));
		if (isNaN (vPanelDelete))
		{
			vErr = 1;
		}	
	}
	if (vErr)
	{
		alert (cErr [vLanguage + 1]);
	} 
	else
	{
		vTimeLine = vDom.getTimeline ();
		if (vPanelPop2)
		{
			vPanelFromNr = 0;
			vPanelToNr = 9999999;
		} 
		else
		{
			vPanelFromNr = Math.abs (parseInt (vPanel.ID_from - 1));
			vPanelToNr = Math.abs (parseInt (vPanel.ID_to - 1));
		}
		if (vPanelPop1)
		{
			//	insert
			for (vLayerNr = 0; vLayerNr < vTimeLine.layerCount; vLayerNr ++)
			{
				vLayerAkt = vTimeLine.layers [vLayerNr];
				vFrameAnz = vLayerAkt.frameCount;
				vTimeLine.currentLayer = vLayerNr;
				for (vFrameNr = vFrameAnz - 1; vFrameNr >= 0; vFrameNr --)
				{
					if ((vFrameNr >= vPanelFromNr) && (vFrameNr <= vPanelToNr))
					{
						vAktFrame = vLayerAkt.frames [vFrameNr];
						vFrameLastKeyNr = ((vAktFrame.startFrame + vAktFrame.duration - 1) == vFrameNr);
						vFrameInsNr = vFrameNr;
						if (vFrameNr == vFrameAnz - 1)
						{
							if (vAktFrame.tweenType != "none")
							{
								vFrameInsNr -= vFrameLastKeyNr;
							}	
						} 
						else if (vLayerAkt.frames [vFrameNr + 1].tweenType != vAktFrame.tweenType)
						{
							vFrameInsNr -= vFrameLastKeyNr;
						}
						vTimeLine.insertFrames (vPanelScale, false, vFrameInsNr);
					}	
				}	
			}	
		} 
		else
		{
			//	delete
			vFrameAnz = 0;
			vIsDel = 0;
			for (vLayerNr = 0; vLayerNr < vTimeLine.layerCount; vLayerNr ++)
			{
				vLayerAkt = vTimeLine.layers [vLayerNr];
				if (vFrameAnz < vLayerAkt.frameCount)
				{
					vFrameAnz = vLayerAkt.frameCount;
				}	
			}
			for (vFrameNr = vFrameAnz; vFrameNr >= 0; vFrameNr --)
			{
				if ((vFrameNr >= vPanelFromNr) && (vFrameNr <= vPanelToNr))
				{
					vIsKey = false;
					for (vLayerNr = 0; vLayerNr < vTimeLine.layerCount; vLayerNr ++)
					{
						vLayerAkt = vTimeLine.layers [vLayerNr];
						if (vFrameNr < vLayerAkt.frameCount)
						{
							if (vFrameNr == vLayerAkt.frames [vFrameNr].startFrame)
							{
								vIsKey = true;
							}	
						}	
					}
					if ( ! vIsKey)
					{
						vIsDel += vPanelDelete;
						for (vLayerNr = 0; vLayerNr < vTimeLine.layerCount; vLayerNr ++)
						{
							vLayerAkt = vTimeLine.layers [vLayerNr];
							if (vFrameNr <= vLayerAkt.frameCount)
							{
								if (vIsDel >= 100)
								{
									vTimeLine.currentLayer = vLayerNr;
									vTimeLine.removeFrames (vFrameNr);
								}	
							}	
						}
						if (vIsDel >= 100)
						{
							vIsDel = 0;
						}	
					}	
				}	
			}
		}	
	}	
}
