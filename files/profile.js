/*
 * Профиль пользователя
 */
function Request_region(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_region;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}
function Refresh_region()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('id_region_profile').innerHTML = b;
        document.getElementById('id_city_profile').innerHTML = "<option disabled=disabled selected>Не важно</option>";
    }

}
function Request_city(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_city;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}
function Refresh_city()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('id_city_profile').innerHTML = b;
    }

}
function Request_test_login(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_test_login;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}
function Request_test_email(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_test_email;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}
function Request_test_name(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_test_name;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}
function Request_test_phone(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_test_phone;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}
function Request_test_icq(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_test_icq;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}
function Request_test_home_page(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_test_home_page;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}
function Request_test_old_pass(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_test_old_pass;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}
function Request_test_new_con_pass(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_test_new_con_pass;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}
function Request_change(query)
{
    req.open('post', './moduls/profile.php' , true );
    req.onreadystatechange = Refresh_change;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(query);
}

function Refresh_test_login()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('test_login').innerHTML = b;
    }

}
function Refresh_test_email()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('test_email').innerHTML = b;
    }

}
function Refresh_test_name()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('test_name').innerHTML = b;
    }

}
function Refresh_test_phone()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('test_phone').innerHTML = b;
    }

}
function Refresh_test_icq()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('test_icq').innerHTML = b;
    }

}
function Refresh_test_home_page()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('test_home_page').innerHTML = b;
    }

}
function Refresh_test_old_pass()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('test_old_pass').innerHTML = b;
    }

}
function Refresh_test_new_con_pass()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('test_new_con_pass').innerHTML = b;
    }

}
function Refresh_change()
{
    var a = req.readyState;

    if( a == 4 )
    {
        var b = req.responseText;
        document.getElementById('change').innerHTML = b;
    }

}

function Pusk_ukraine()
{
    var query;

    query ='id_country='+ge('id_country').value;

    Request_region(query);
}
function Getregion()
{
    var query;

    query ='id_region='+encodeURIComponent(ge('id_region_profile').value);

    Request_city(query);
}
function test_login()
{
    var query;

    query ='test_login='+encodeURIComponent(ge('login').value)+'&old_login='+encodeURIComponent(ge('old_login').value);

    Request_test_login(query);
}
function test_email()
{
    var query;

    query ='test_email='+encodeURIComponent(ge('email').value)+'&old_email='+encodeURIComponent(ge('old_email').value);

    Request_test_email(query);
}
function test_name()
{
    var query;

    query ='test_name='+encodeURIComponent(ge('name').value);

    Request_test_name(query);
}
function test_phone()
{
    var query;

    query ='test_phone='+encodeURIComponent(ge('phone').value);

    Request_test_phone(query);
}
function test_icq()
{
    var query;

    query ='test_icq='+encodeURIComponent(ge('icq').value);

    Request_test_icq(query);
}
function test_home_page()
{
    var query;

    query ='test_home_page='+encodeURIComponent(ge('home_page').value);

    Request_test_home_page(query);
}
function test_old_pass()
{
    var query;

    query ='test_old_pass='+encodeURIComponent(ge('old_password').value)+'&test_old_login='+encodeURIComponent(ge('old_login').value);

    Request_test_old_pass(query);
}
function test_new_con_pass()
{
    var query;

    query ='test_new_pass='+encodeURIComponent(ge('new_password').value)+'&test_new_con_pass='+encodeURIComponent(ge('new_con_password').value);

    Request_test_new_con_pass(query);
}


function change()
{
    var user_id = encodeURIComponent(ge('user_id').value);
    var login_error = encodeURIComponent(ge('error_login').value);
    var login = encodeURIComponent(ge('login').value);
    var email_error = encodeURIComponent(ge('error_email').value);
    var email = encodeURIComponent(ge('email').value);
    var name_error = encodeURIComponent(ge('error_name').value);
    var name = encodeURIComponent(ge('name').value);
    var country = encodeURIComponent(ge('id_country').value);
    var region = encodeURIComponent(ge('id_region_profile').value);
    var city = encodeURIComponent(ge('id_city_profile').value);
    var age = encodeURIComponent(ge('age').value);
    var sex = encodeURIComponent(ge('sex').value);
    var phone_error = encodeURIComponent(ge('error_phone').value);
    var phone = encodeURIComponent(ge('phone').value);
    var icq_error = encodeURIComponent(ge('error_icq').value);
    var icq = encodeURIComponent(ge('icq').value);
    var home_page_error = encodeURIComponent(ge('error_home_page').value);
    var home_page = encodeURIComponent(ge('home_page').value);
    var old_pass_error = encodeURIComponent(ge('error_old_pass').value);
    var new_con_pass_error = encodeURIComponent(ge('error_new_con_pass').value);
    var new_con_pass = encodeURIComponent(ge('new_con_password').value);

    checkNewPass ('new_password');

    var query;
    query ='change='+user_id+
           '&login_error='+login_error+
           '&login='+login+
           '&email_error='+email_error+
           '&email='+email+
           '&name_error='+name_error+
           '&name='+name+
           '&country='+country+
           '&region='+region+
           '&city='+city+
           '&age='+age+
           '&sex='+sex+
           '&phone_error='+phone_error+
           '&phone='+phone+
           '&icq_error='+icq_error+
           '&icq='+icq+
           '&home_page_error='+home_page_error+
           '&home_page='+home_page+
           '&old_pass_error='+old_pass_error+
           '&new_con_pass_error='+new_con_pass_error+
           '&new_con_pass='+new_con_pass;

    Request_change(query);
}

function checkNewPass (id)
{
    var exp = /[А-Яа-я]+/i;
    var value = document.getElementById(id).value;

    if (exp.test(value))
    {
        ge('test_new_password').innerHTML = '<div><div style="z-index: 1; position: relative; top: 15px; background-image: url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>\n\
                                          <div style="position: relative; left: 8px; background-color: #f2f3f7; width: 170px; border: 1px solid #e6e8ed; color: #666666; padding: 2px; font-size: 12px;">Введены недопустимые символы.\n\
                                          </div></div>';
        return false;
    }
    else
        ge('test_new_password').innerHTML = '';
}