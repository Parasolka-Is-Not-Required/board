function getForm(form)
{
    form.action = './adduserdb.php';
    form.method = 'post';
}

function testLoginAddUser(login_user)
{
    var result;

    if (login_user == 0)
        ge('result_user_login').innerHTML = '<a href="#" onClick="testLoginAddUser(ge(\'login_user\').value); return false;" class="link_blue_underline">Проверить</a>';
    else
    {
        var query;

        query = 'login_user=' + login_user;

        req.open('post', './moduls/test_adduser.php', true);
        req.onreadystatechange = function refresh()
        {
            var a = req.readyState;

            if (a == 4)
            {
                var b = req.responseText;
                switch (b)
                {
                    case '0001':
                        result = '<span style="color: red;">Слишком короткий</span>';
                        break;
                    case '0002':
                        result = '<span style="color: red;">Слишком длинный</span>';
                        break;
                    case '0003':
                        result = '<span style="color: red;">Лишние символы</span>';
                        break;
                    case '0004':
                        result = '<span style="color: red;">Занят</span>';
                        break;
                    case '1000':
                        result = '<span style="color: green;">Свободный</span>';
                        break;
                    default:
                        result = '<span style="color: red;">Занят</span>';
                        break;
                }

                ge('result_user_login').innerHTML = result;
            }
            else
            {
                ge('result_user_login').innerHTML = '<span style="color: grey;">Загрузка...</span>';
            }
        };
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        req.send(query);
    }
}

function testPasswdAddUser(passwd_user, iteration_passwd)
{
    /*
     * Проверяем, совпал ли пароль
     */
    if (passwd_user != '')
    {
        if (passwd_user != iteration_passwd)
            ge('result_user_passwd').innerHTML = '<span style="color: red;">Не совпал</span>';
        else
            ge('result_user_passwd').innerHTML = '';
    }
    else
        ge('result_user_passwd').innerHTML = '<span style="color: red;">Введите пароль</span>';

}

function testEmailAddUser(email_user)
{
    var email_reg = /^[a-z0-9]([a-z0-9._-]*|[a-z0-9])@[a-z0-9_.-]+\.[a-z]{2,6}$/;
    if (email_reg.test(email_user) === false)
        ge('result_user_email').innerHTML = '<img alt="" src="./graphics/help.png" style="cursor: help;" border="0" title="Ваш e-mail будет скрыт от просмотра пользователей" align="left" vspace="0">&nbsp;<span style="color: red;">Не верен</span>';
    else
        ge('result_user_email').innerHTML = '<img alt="" src="./graphics/help.png" style="cursor: help;" border="0" title="Ваш e-mail будет скрыт от просмотра пользователей" align="left" vspace="0">';
}

function getRegion(id_country)
{
    if (id_country != 14)
    {
        ge('id_region').disabled = true;
        ge('id_city').disabled = true;
    }
    else
    {
        ge('id_region').disabled = false;
        ge('id_city').disabled = false;
    }
}

function getCity(id_region)
{
    var query;

    query = 'id_region=' + id_region + '&login_user=2222';

    req.open('post', './moduls/test_adduser.php', true);
    req.onreadystatechange = function refresh()
    {
        var a = req.readyState;

        if (a == 4)
        {
            var b = req.responseText;
            var b = req.responseText;
            var d = b.split('|@|');
            var region_value = d[0].split('|,|');
            var region_id = d[1].split(',');

            var region = document.getElementById('id_city');
            region.innerHTML = '';


            for (var i = 0; i < region_id.length; i++)
            {
                addOption(region, region_value[i], region_id[i], false);
            }
        }
    };
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function testKeyAddUser(keystring)
{

    var query;

    query = 'testkey=1&keystring=' + keystring;
    req.open('post', './moduls/test_captcha.php', true);
    req.onreadystatechange = function refresh()
    {
        var a = req.readyState;

        if (a == 4)
        {
            var b = req.responseText;

            if (b == '0101')
                ge('result_keystring').innerHTML = '<span style="color: green;">Верно</span>';
            else
                ge('result_keystring').innerHTML = '<span style="color: red;">Не верно</span>';
        }
//	        else
//	        	ge('result_keystring').innerHTML = '<span style="color: grey;">Проверка...</span>';
    };
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);

}

function tipsFrom(mode)
{
    var result;

    if (mode != 100)
    {
        switch (mode)
        {
            case 1:
                result = '<div style="float: left; z-index: 20; position: absolute; margin-left: 0px; margin-top: 23px;"><div style="z-index: 1; bottom: 10px; margin-bottom: -10px; position: relative; background-image: url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                        '<div style="position: relative; bottom: 12px; margin-bottom: -12px; left: 8px; background-color: #f2f3f7; width: 160px; border: 1px solid #e6e8ed; color: black; padding: 2px; font-size: 12px;">' +
                        'Разрешённые символы:<br>"a-z", "A-Z", "0-9", "_". <br>Более 3-x символов, но не превышать 30-и.' +
                        '</div></div>';
                ge('login_tips').innerHTML = result;
                ge('result_user_login').innerHTML = '<a href="#" onClick="testLoginAddUser(ge(\'login_user\').value); return false;" class="link_blue_underline">Проверить</a>';
                break;
            case 2:
                result = '<div style="float: left; z-index: 20; position: absolute; margin-left: 0px; margin-top: 2px;"><div style="z-index: 1; bottom: 10px; margin-bottom: -10px; position: relative; background-image: url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                        '<div style="position: relative; bottom: 12px; margin-bottom: -12px; left: 8px; background-color: #f2f3f7; width: 160px; border: 1px solid #e6e8ed; color: black; padding: 2px; font-size: 12px;">' +
                        'Разрешённые символы:<br>"a-z", "A-Z", "0-9", "_". <br>Более 4-x символов, но не превышать 32-х.' +
                        '</div></div>';
                ge('password_tips').innerHTML = result;
                break;
            case 3:
                result = '<div style="float: left; z-index: 20; position: absolute; margin-left: 0px; margin-top: 11px;"><div style="z-index: 1; bottom: 10px; margin-bottom: -10px; position: relative; background-image: url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                        '<div style="position: relative; bottom: 12px; margin-bottom: -12px; left: 8px; background-color: #f2f3f7; width: 160px; border: 1px solid #e6e8ed; color: black; padding: 2px; font-size: 12px;">' +
                        'Должен совпасть с полем "Пароль".' +
                        '</div></div>';
                ge('iteration_password_tips').innerHTML = result;
                break;
            case 4:
                result = '<div style="float: left; z-index: 20; position: absolute; margin-left: 0px; margin-top: 2px;"><div style="z-index: 1; bottom: 10px; margin-bottom: -10px; position: relative; background-image: url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                        '<div style="position: relative; bottom: 12px; margin-bottom: -12px; left: 8px; background-color: #f2f3f7; width: 160px; border: 1px solid #e6e8ed; color: black; padding: 2px; font-size: 12px;">' +
                        'Ваш e-mail будет скрыт от просмотра.' +
                        '</div></div>';
                ge('email_tips').innerHTML = result;
                break;
            case 5:
                result = '<div style="float: left; z-index: 20; position: absolute; margin-left: 0px; margin-top: 10px;"><div style="z-index: 1; bottom: 10px; margin-bottom: -10px; position: relative; background-image: url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                        '<div style="position: relative; bottom: 12px; margin-bottom: -12px; left: 8px; background-color: #f2f3f7; width: 160px; border: 1px solid #e6e8ed; color: black; padding: 2px; font-size: 12px;">' +
                        'Разрешённые символы:<br>"а-я", "А-Я", " ".' +
                        '</div></div>';
                ge('fio_tips').innerHTML = result;
                break;
            case 6:
                result = '<div style="float: left; z-index: 20; position: absolute; margin-left: 0px; margin-top: 2px;"><div style="z-index: 1; bottom: 10px; margin-bottom: -10px; position: relative; background-image: url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                        '<div style="position: relative; bottom: 12px; margin-bottom: -12px; left: 8px; background-color: #f2f3f7; width: 160px; border: 1px solid #e6e8ed; color: black; padding: 2px; font-size: 12px;">' +
                        'Разрешённые символы:<br>"0-9", "-", "+", " ".' +
                        '</div></div>';
                ge('phone_tips').innerHTML = result;
                break;
            case 7:
                result = '<div style="float: left; z-index: 20; position: absolute; margin-left: 0px; margin-top: 2px;"><div style="z-index: 1; bottom: 10px; margin-bottom: -10px; position: relative; background-image: url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                        '<div style="position: relative; bottom: 12px; margin-bottom: -12px; left: 8px; background-color: #f2f3f7; width: 160px; border: 1px solid #e6e8ed; color: black; padding: 2px; font-size: 12px;">' +
                        'Разрешённые символы:<br>"0-9", "-", " ".' +
                        '</div></div>';
                ge('icq_tips').innerHTML = result;
                break;
            case 8:
                result = '<div style="float: left; z-index: 20; position: absolute; margin-left: 0px; margin-top: 2px;"><div style="z-index: 1; bottom: 10px; margin-bottom: -10px; position: relative; background-image: url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                        '<div style="position: relative; bottom: 12px; margin-bottom: -12px; left: 8px; background-color: #f2f3f7; width: 160px; border: 1px solid #e6e8ed; color: black; padding: 2px; font-size: 12px;">' +
                        'Вставьте ссылку на Вашу домашнюю страницу' +
                        '</div></div>';
                ge('home_page_tips').innerHTML = result;
                break;
        }
    }
    else
    {
        ge('login_tips').innerHTML = '';
        ge('password_tips').innerHTML = '';
        ge('iteration_password_tips').innerHTML = '';
        ge('email_tips').innerHTML = '';
        ge('fio_tips').innerHTML = '';
        ge('phone_tips').innerHTML = '';
        ge('icq_tips').innerHTML = '';
        ge('home_page_tips').innerHTML = '';
    }

}


