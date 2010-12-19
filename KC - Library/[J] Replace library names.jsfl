function replaceNames()
{
	var selItems = fl.getDocumentDOM().library.getSelectedItems();

	if(!selItems.length)
	{
		alert("You must select library items");
		return;
	}
	
	// init ui
	var xui = fl.getDocumentDOM().xmlPanel(fl.configURI + "Commands/KC - Library/xml/ReplaseInLibrary.xml");
	
//	for(var v in xui)
//	{
//		fl.trace(v + " = " + xui[v])
//	}
//	
//	find = 888
//	replace = 88
//	regexp = true
//	ignorecase = false
//	allname = false
//	dismiss = accept
	
	if(xui.dismiss != "accept")
	{
		return;
	}
	
	var g = "g"
	
	if(xui.ignorecase == "true")
	{
		g = "gi";
	}
	
	var exp = xui.find;
	
	if(xui.regexp == "true")
	{
		exp = new RegExp(exp, g);
	}
	
	if(xui.allname == "true")
	{
		exp = /^.+/gi;
	}
	
	var rep = xui.replace;
	
	var newNames = new Array();
	var counters = new Object();
	var counters_real = new Object();
	
	for (var i=0;i<selItems.length;i++)
	{
		newNames[i] = selItems[i].name.split("/").pop().replace(exp, rep, g);
		
		if(!counters[newNames[i]])
		{
			counters[newNames[i]] = 1;
			counters_real[newNames[i]] = 1;
			
		}else{

			counters[newNames[i]]++;
		}
	}
	
	var prefix = "";
	
	for (var i=0;i<selItems.length;i++)
	{
		if(counters[newNames[i]] == 1)
		{
			selItems[i].name = newNames[i];
		
		}else{
			
			selItems[i].name = newNames[i] + 
			("0000000" + counters_real[newNames[i]]++)
			.substr((counters[newNames[i]].toString().length * -1 - 2));
		}
	}
}

replaceNames();