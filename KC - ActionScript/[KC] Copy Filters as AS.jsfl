/*
[KC] Copy Filters as AS
modified by Kevin Cao

[Slav] Filters2AS2
Author : Slavomir Durej
©2007 www.durej.com
*/
fl.outputPanel.clear();

var dom 		= fl.getDocumentDOM();
var selValid 	= true;

var validSelection = checkForValidSelection();

var dropShadowCounter 	= 1;
var blurCounter 		= 1;
var glowCounter 		= 1;
var bevelCounter 		= 1;
var gradBevelCounter 	= 1;
var gradGlowCounter 	= 1;
var adjustColCounter 	= 1;

if (validSelection)
{
	filters2script();
}

function filters2script()
{
	var filters_arr 	= dom.getFilters();

	var outputStr = "";
	//var outputStr = "import flash.filters.*;\n";

	//var clipName = (dom.selection[0].name=="") ? "mc" : dom.selection[0].name;
	//outputStr+="private var "+clipName+"			:MovieClip";

	var filterNames_arr = [];

	for (var i=0; i<filters_arr.length; i++)
	{
		var filt = filters_arr[i];
		var name = filt.name;

		switch (name)
		{
			case "dropShadowFilter":
				outputStr+=convertDropShadowToScript(filt);
				filterNames_arr.push("dropShadow"+dropShadowCounter);
				dropShadowCounter++;
				break;

			case "blurFilter":
				outputStr+=convertBlurToScript(filt);
				filterNames_arr.push("blur"+blurCounter);
				blurCounter++;
				break;

			case "glowFilter":
				outputStr+=convertGlowToScript(filt);
				filterNames_arr.push("glow"+glowCounter);
				glowCounter++;
				break;

			case "bevelFilter":
				outputStr+=convertBevelToScript(filt);
				filterNames_arr.push("bevel"+bevelCounter);
				bevelCounter++;
				break;

			case "gradientGlowFilter":
				outputStr+=convertGradientGlowToScript(filt);
				filterNames_arr.push("gradientGlow"+gradGlowCounter);
				break;

			case "gradientBevelFilter":
				outputStr+=convertGradientBevelToScript(filt);
				filterNames_arr.push("gradientBevel"+gradBevelCounter);
				break;

			case "adjustColorFilter" :
				outputStr+=adjustColorToScript(filt);
				filterNames_arr.push("coloMatrix"+adjustColCounter);
				break;
		}
	}
	//outputStr+="\n"+clipName+".filters = [";
	//for (var i=0; i<filterNames_arr.length; i++)
	//{
	//	var divider = (i==filterNames_arr.length-1) ? "" : ",";
	//	outputStr+=filterNames_arr[i]+divider;
	//}
	//outputStr+="];";
	
	// remove first \n
	outputStr = outputStr.slice(1);
	
	fl.clipCopyString(outputStr);
	trace(outputStr);
}


function adjustColorToScript(filterObj)
{
	var filtStr = "\nvar mat:com.gskinner.geom.ColorMatrix = new com.gskinner.geom.ColorMatrix();";
	filtStr+="\nmat.adjustColor("+filterObj.brightness+","+filterObj.contrast+","+filterObj.saturation+","+filterObj.hue+");";
	filtStr+="\nvar coloMatrix"+adjustColCounter+":ColorMatrixFilter = new ColorMatrixFilter(mat);";
	return (filtStr);
}

function convertGradientBevelToScript(filterObj)
{
	var filtStr = "\nvar gradientBevel"+gradGlowCounter+":GradientBevelFilter = new GradientBevelFilter(";
	filtStr+=filterObj.distance+", ";								//distance
	filtStr+=Math.round(filterObj.angle)+", ";						//angle
	var color = filterObj.color; //color is being read as #RRGGBBAA format
	filtStr+="["+getColors(filterObj.colorArray)+"], ";						//colors array
	filtStr+="["+getAlphas(filterObj.colorArray)+"], ";						//alphas array
	filtStr+="["+filterObj.posArray+"], ";								//ratios array

	filtStr+=filterObj.blurX+", ";								//blur x
	filtStr+=filterObj.blurY+", ";								//blur y
	filtStr+=getStrength(filterObj.strength)+", ";						//strength
	filtStr+=getQuality(filterObj.quality)+", ";						//quality
	filtStr+="'"+filterObj.type+"', ";								//type
	filtStr+=filterObj.knockout;								//knockout

	filtStr+=");";
	return (filtStr);
}



function convertGradientGlowToScript(filterObj)
{
	var filtStr = "\nvar gradientGlow"+gradGlowCounter+":GradientGlowFilter = new GradientGlowFilter(";
	filtStr+=filterObj.distance+", ";								//distance
	filtStr+=Math.round(filterObj.angle)+", ";						//angle
	var color = filterObj.color; //color is being read as #RRGGBBAA format
	filtStr+="["+getColors(filterObj.colorArray)+"], ";						//colors array
	filtStr+="["+getAlphas(filterObj.colorArray)+"], ";						//alphas array
	filtStr+="["+filterObj.posArray+"], ";								//ratios array

	filtStr+=filterObj.blurX+", ";								//blur x
	filtStr+=filterObj.blurY+", ";								//blur y
	filtStr+=getStrength(filterObj.strength)+", ";						//strength
	filtStr+=getQuality(filterObj.quality)+", ";						//quality
	filtStr+="'"+filterObj.type+"', ";								//type
	filtStr+=filterObj.knockout;								//knockout

	filtStr+=");";
	return (filtStr);
}



function convertBevelToScript(filterObj)
{
	var filtStr = "\nvar bevel"+bevelCounter+":BevelFilter = new BevelFilter(";
	filtStr+=filterObj.distance+", ";								//distance
	filtStr+=Math.round(filterObj.angle)+", ";						//angle
	filtStr+=getColor(filterObj.highlightColor)+", ";					//highlightColor
	filtStr+=getAlpha(filterObj.highlightColor)+", ";					//highlightAlpha
	filtStr+=getColor(filterObj.shadowColor)+", ";						//shadowColor
	filtStr+=getAlpha(filterObj.shadowColor)+", ";						//shadowAlpha
	filtStr+=filterObj.blurX+", ";								//blur x
	filtStr+=filterObj.blurY+", ";								//blur y
	filtStr+=getStrength(filterObj.strength)+", ";						//strength
	filtStr+=getQuality(filterObj.quality)+", ";						//quality
	filtStr+="'"+filterObj.type+"', ";								//type
	filtStr+=filterObj.knockout;									//knockout
	filtStr+=");";
	return (filtStr);
}

function convertGlowToScript(filterObj)
{
	var filtStr = "\nvar glow"+glowCounter+":GlowFilter = new GlowFilter(";
	var color = filterObj.color; //color is being read as #RRGGBBAA format
	filtStr+=getColor(color)+", ";								//color
	filtStr+=getAlpha(color)+", ";								//alpha
	filtStr+=filterObj.blurX+", ";								//blur x
	filtStr+=filterObj.blurY+", ";								//blur y
	filtStr+=getStrength(filterObj.strength)+", ";						//strength
	filtStr+=getQuality(filterObj.quality)+", ";						//quality
	filtStr+=filterObj.inner+", ";								//inner
	filtStr+=filterObj.knockout;									//knockout
	filtStr+=");";
	return (filtStr);
}

function convertBlurToScript(filterObj)
{
	var filtStr = "\nvar blur"+blurCounter+":BlurFilter = new BlurFilter(";
	filtStr+=filterObj.blurX+", ";								//blur x
	filtStr+=filterObj.blurY+", ";								//blur y
	filtStr+=getQuality(filterObj.quality);							//quality
	filtStr+=");";
	return (filtStr);
}


function convertDropShadowToScript(filterObj)
{
	var filtStr = "\nvar dropShadow"+dropShadowCounter+":DropShadowFilter = new DropShadowFilter(";
	filtStr+=filterObj.distance+", ";								//distance
	filtStr+=Math.round(filterObj.angle)+", ";						//angle
	var color = filterObj.color; //color is being read as #RRGGBBAA format
	filtStr+=getColor(color)+", ";								//color
	filtStr+=getAlpha(color)+", ";								//alpha
	filtStr+=filterObj.blurX+", ";								//blur x
	filtStr+=filterObj.blurY+", ";								//blur y
	filtStr+=getStrength(filterObj.strength)+", ";						//strength
	filtStr+=getQuality(filterObj.quality)+", ";						//quality
	filtStr+=filterObj.inner+", ";								//inner
	filtStr+=filterObj.knockout+", ";								//knockout
	filtStr+=filterObj.hideObject;								//hideObject
	filtStr+=");";
	return (filtStr);
}


function checkForValidSelection ()
{
	var selection 	=  dom.selection;

	if (dom.selection == "")
	{
		selValid = false;
		alert("This script requires a selection");
	}

	else if (selection.length > 1)
	{
		selValid = false;
		alert("Please select only one movieclip");
	}

	else if (dom.getElementProperty("elementType") != "instance")
	{
		selValid = false;
		alert("Please select a movieclip instance");
	}
	else if (dom.selection[0].symbolType != "movie clip")
	{
		selValid = false;
		alert("Please select a movie clip instance");
	}


	return selValid;

}

function getStrength(val)
{
	return (val/100);
}

function getColor(val)
{
	var containsSingleQuote = (val.indexOf("'")==-1) ? false : true;
	if (containsSingleQuote)
	{
		return "0x"+val.substr(2,6);
	}
	else
	{
		return "0x"+val.substr(1,6);
	}
}

function getColors(val_arr)
{
	var cols_arr = new Array();
	for (var i=0; i<val_arr.length; i++)
	{
		var col = getColor(val_arr[i]);
		cols_arr.push(col);
	}
	return cols_arr;
}

function getAlphas(val_arr)
{
	var alphas_arr = new Array();
	for (var i=0; i<val_arr.length; i++)
	{
		var alpha = getAlpha(val_arr[i]);
		alphas_arr.push(alpha);
	}
	return alphas_arr;
}

function getAlpha(val)
{
	var containsSingleQuote = (val.indexOf("'")==-1) ? false : true;
	
	if (containsSingleQuote)
	{
		if (val.length == 9)
		{
	
			return 1;
		}
		else
		{
			var alphahexValue = val.substr(8,2);
			var alphaDex = parseInt(alphahexValue,16);
			var alpha = Math.round(alphaDex/2.55);
			return (alpha/100);
		}	
	}
	else
	{
		//Flash CS3 doesn't wrap the value in single quotes
		if (val.length == 7)
		{
	
			return 1;
		}
		else
		{
			var alphahexValue = val.substr(7,2);
			var alphaDex = parseInt(alphahexValue,16);
			var alpha = Math.round(alphaDex/2.55);
			return (alpha/100);
		}	
	}
}

function getQuality(val)
{
	var quality = 1;
	if (val=="medium")
	{
		quality = 2;
	}
	else if (val=="high")
	{
		quality = 3;
	}
	return quality
}

function trace (str)
{
	fl.trace(str);
}
/*
	for (var prop in filterObj)
	{
		trace(prop + "  ="+filterObj[prop]);
	}
*/
