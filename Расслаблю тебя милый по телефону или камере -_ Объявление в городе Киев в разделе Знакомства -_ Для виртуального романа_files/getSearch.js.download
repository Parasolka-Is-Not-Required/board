/**
 * GetSearch
 */
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///
///		Функции отдачи информации
///
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
function addOption (oListbox, text, value, isDefaultSelected, isSelected)
{
  var oOption = document.createElement("option");
  oOption.appendChild(document.createTextNode(text));
  oOption.setAttribute("value", value);
  if (isDefaultSelected) oOption.defaultSelected = true;
  else if (isSelected) oOption.selected = true;
  oListbox.appendChild(oOption);
}

function RefGetCity() 
{
    var a = req.readyState;  
  
    if( a == 4 ) 
    { 
        var b = req.responseText;
        var d = b.split('|@|');
        var city_value = d[0].split('|,|');
        var city_id = d[1].split(',');
        
        var city = document.getElementById('id_city');
        city.innerHTML = '';
        
        
        for (var i = 0; i < city_id.length; i ++)
        {
        		addOption (city, city_value[i], city_id[i], false);
        }
    } 
}
function RefGetSub() 
{
    var a = req.readyState;  
  
    if( a == 4 ) 
    { 
    	var b = req.responseText;
        var d = b.split('|@|');
        var subsection_value = d[0].split('|,|');
        var subsection_id = d[1].split(',');
        
        var subsection = document.getElementById('id_subsection');
        subsection.innerHTML = '';
        
        
        for (var i = 0; i < subsection_id.length; i ++)
        {
        		addOption (subsection, subsection_value[i], subsection_id[i], false);
        } 
        document.getElementById('filter').innerHTML = '';
        //document.getElementById('id_subsection').innerHTML = b; 
    } 
}

function RefGetFilter()
{
	var a = req.readyState;  
	  
    if( a == 4 ) 
    { 
        var b = req.responseText; 
        document.getElementById('filter').innerHTML = b; 
    } 
}


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///
///		Функции приёма информации
///
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


function GetCity() 
{  
    var query;  

    query ='id_region='+encodeURIComponent(ge('id_region').value); 

    req.open('post', './moduls/get_search.php' , true ); 
    req.onreadystatechange = RefGetCity; 
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"); 
    req.send(query); 
}

function GetSubsection() 
{  
    var query;

    query ='id_section='+encodeURIComponent(ge('id_section').value); 

    req.open('post', './moduls/get_search.php' , true ); 
    req.onreadystatechange = RefGetSub; 
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"); 
    req.send(query); 
}

function GetFilter ()
{
	var query;  

    query ='id_subsection='+encodeURIComponent(ge('id_subsection').value); 

    req.open('post', './moduls/get_search.php' , true ); 
    req.onreadystatechange = RefGetFilter; 
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"); 
    req.send(query); 
}