var ajax = new sack();
var countryCode1 ; 

function getCityList1(sel)
{
	countryCode1 = sel.options[sel.selectedIndex].value;
	//document.getElementById('dhtmlgoodies_city1').disabled = 0;
	document.getElementById('dhtmlgoodies_city1').disabled = 0;
	document.getElementById('dhtmlgoodies_city1').options.length = 0;	// Empty city select box
	document.getElementById('dhtmlgoodies_region1').options.length = 0;	// Empty city select box
	if(countryCode1.length>0)
	{
		ajax.requestFile = 'getCities.php?id_country='+countryCode1;	// Specifying which file to get
		ajax.onCompletion = createCities1;	// Specify function that will be executed after file has been found
		ajax.runAJAX();		// Execute AJAX function
		//document.getElementById('text').value=countryCode1;
	}
}

function createCities1()
{
	var obj = document.getElementById('dhtmlgoodies_city1');
	eval(ajax.response);	// Executing the response from Ajax as Javascript code	
}

function getRegionList1(sel)
{
	var regionCode1 = sel.options[sel.selectedIndex].value;
	document.getElementById('dhtmlgoodies_region1').disabled = 0;
	document.getElementById('dhtmlgoodies_region1').options.length = 0;	// Empty city select box
	
	if(regionCode1.length>0)
	{
		ajax.requestFile = 'getCities.php?id_region='+regionCode1+'&id_country='+countryCode1;	// Specifying which file to get
		ajax.onCompletion = createRegion1;	// Specify function that will be executed after file has been found
		ajax.runAJAX();		// Execute AJAX function
		//document.getElementById('text').value="NULL";
		//document.getElementById('text').value='id_region='+regionCode1+'&id_country='+countryCode1;
	}
	/* ROVIUSm */
	document.getElementById('district').innerHTML = '';
	/* ROVIUS */
}

function createRegion1()
{
	var obj = document.getElementById('dhtmlgoodies_region1');
	eval(ajax.response);	// Executing the response from Ajax as Javascript code	
}	
	
function getsubsectionList1(sel)
{
	var sectionCode1 = sel.options[sel.selectedIndex].value;
	document.getElementById('dhtmlgoodies_subsection1').disabled = 0;
	document.getElementById('dhtmlgoodies_subsection1').options.length = 0;	// Empty city select box
	if(sectionCode1.length>0 && sectionCode1!=0)
	{
		ajax.requestFile = 'getCities.php?id_section='+sectionCode1;	// Specifying which file to get
		ajax.onCompletion = createSubsection1;	// Specify function that will be executed after file has been found
		ajax.runAJAX();		// Execute AJAX function
		//document.getElementById('text').value="NULL";
		//document.getElementById('text').value='id_section='+sectionCode1;
	}
	/* ROVIUSm */
	document.getElementById('fields').innerHTML = '';
	/* ROVIUS */
}

function createSubsection1()
{
	var obj = document.getElementById('dhtmlgoodies_subsection1');
	document.getElementById('dhtmlgoodies_subsection1').options.enabled;
	eval(ajax.response);	// Executing the response from Ajax as Javascript code	
}	
