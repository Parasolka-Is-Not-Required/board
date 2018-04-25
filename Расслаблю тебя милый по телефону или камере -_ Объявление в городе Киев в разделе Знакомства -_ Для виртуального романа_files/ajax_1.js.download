var ajax = new sack();
var countryCode;

function Districts()
{
    /* ROVIUSm */
    var xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Извините. Но ваш браузер не поддерживает AJAX.");
                return false;
            }
        }
    }
    var res = document.getElementById('district');

    var sel = document.getElementById('dhtmlgoodies_region1');
    sel = sel.options[ sel.selectedIndex ].value;

    xmlHttp.onreadystatechange = function ()
    {
        switch (xmlHttp.readyState)
        {
            case 0:
                res.innerHTML = 'Ошибка на сервере.';
                break;
            case 4:
                res.innerHTML = xmlHttp.responseText;
                break;
            case 1:
                res.innerHTML = 'Подождите, идет загрузка...';
                break;
            default:
                ;
                break;
        }
    }

    var url = 'getCities.php?district=' + sel;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
    /* ROVIUS */
}

function SubFields()
{
    /* ROVIUSm */
    var xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Извините. Но ваш браузер не поддерживает AJAX.");
                return false;
            }
        }
    }
    var res = document.getElementById('fields');

    var sel = document.getElementById('dhtmlgoodies_subsection1');
    sel = sel.options[ sel.selectedIndex ].value;

    xmlHttp.onreadystatechange = function ()
    {
        switch (xmlHttp.readyState)
        {
            case 0:
                res.innerHTML = 'Ошибка на сервере.';
                break;
            case 4:
                res.innerHTML = xmlHttp.responseText;
                break;
            case 1:
                res.innerHTML = 'Подождите, идет загрузка...';
                break;
            default:
                ;
                break;
        }
    }

    var url = 'getCities.php?fields=' + sel;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
    /* ROVIUS */
}

function SearchSub(el)
{
    /* ROVIUSs */
    var xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Извините. Но ваш браузер не поддерживает AJAX.");
                return false;
            }
        }
    }

    var res = document.getElementById('suboptions');
    //res.innerHTML = 'Подождите, идет загрузка дополнительных элементов поиска.';

    xmlHttp.onreadystatechange = function ()
    {
        switch (xmlHttp.readyState)
        {
            case 0:
                res.innerHTML = 'Ошибка на сервере.';
                break;
            case 4:
                res.innerHTML = xmlHttp.responseText;
                break;
            case 1:
                res.innerHTML = 'Подождите, идет загрузка дополнительных элементов поиска.';
                break;
            default:
                ;
                break;
        }
    }
    var url = 'getCities.php?sub=' + el.value;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
    /* ROVIUS */
}

function getCityList(sel)
{
    countryCode = sel.options[sel.selectedIndex].value;
    document.getElementById('dhtmlgoodies_city').options.length = 0;	// Empty city select box
    document.getElementById('dhtmlgoodies_region').options.length = 0;	// Empty city select box
    if (countryCode.length > 0)
    {
        ajax.requestFile = 'getCities.php?id_country=' + countryCode;	// Specifying which file to get
        ajax.onCompletion = createCities;	// Specify function that will be executed after file has been found
        ajax.runAJAX();		// Execute AJAX function
        document.getElementById('text').value = countryCode;
    }
}

function createCities()
{
    var obj = document.getElementById('dhtmlgoodies_city');
    eval(ajax.response);	// Executing the response from Ajax as Javascript code	
}

function getRegionList(sel)
{
    var regionCode = sel.options[sel.selectedIndex].value;
    document.getElementById('dhtmlgoodies_region').options.length = 0;	// Empty city select box
    if (regionCode.length > 0)
    {
        ajax.requestFile = 'getCities.php?id_region=' + regionCode + '&id_country=' + countryCode;	// Specifying which file to get
        ajax.onCompletion = createRegion;	// Specify function that will be executed after file has been found
        ajax.runAJAX();		// Execute AJAX function
        //document.getElementById('text').value="NULL";
        //document.getElementById('text').value='id_region='+regionCode+'&id_country='+countryCode;
    }
}

function createRegion()
{
    var obj = document.getElementById('dhtmlgoodies_region');
    eval(ajax.response);	// Executing the response from Ajax as Javascript code	
}

function getsubsectionList(sel)
{
    var sectionCode = sel.options[sel.selectedIndex].value;
    document.getElementById('dhtmlgoodies_subsection').disabled;
    document.getElementById('dhtmlgoodies_subsection').options.length = 0;	// Empty city select box
    if (sectionCode.length > 0)
    {
        ajax.requestFile = 'getCities.php?id_section=' + sectionCode;	// Specifying which file to get
        ajax.onCompletion = createSubsection;	// Specify function that will be executed after file has been found
        ajax.runAJAX();		// Execute AJAX function
        //document.getElementById('text').value="NULL";
        //document.getElementById('text').value='id_section='+sectionCode;
    }
}

function createSubsection()
{
    var obj = document.getElementById('dhtmlgoodies_subsection');
    document.getElementById('dhtmlgoodies_subsection').options.enabled;
    eval(ajax.response);	// Executing the response from Ajax as Javascript code	
}
