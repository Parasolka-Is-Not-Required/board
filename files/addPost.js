/**
 * Файл для обработки на модулях добавление объявлений
 */

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///
///		Функции отдачи информации
///
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
function RefGetRegionPost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        var b = req.responseText;
        var d = b.split('|@|');
        var region_value = d[0].split('|,|');
        var region_id = d[1].split(',');

        var region = document.getElementById('id_region_post');
        region.innerHTML = '';


        for (var i = 0; i < region_id.length; i++)
        {
            addOption(region, region_value[i], region_id[i], false);
        }
        upCaptcha();
    }
}

function RefGetSectionPost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        document.getElementById('id_section_post').innerHTML = b;
        getRegPost();
    }
}

function RefGetCityPost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        var d = b.split('|@|');
        var city_value = d[0].split('|,|');
        var city_id = d[1].split(',');

        var city = document.getElementById('id_city_post');
        city.innerHTML = '';


        for (var i = 0; i < city_id.length; i++)
        {
            addOption(city, city_value[i], city_id[i], false);
        }
        GetDistrict();
        testAddPost();
    }
}

function RefGetDistrictPost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        var d = b.split('|@|');
        var dstr_value = d[0].split('|,|');
        var dstr_id = d[1].split(',');

        var dstr = document.getElementById('id_district_post');
        dstr.innerHTML = '';


        for (var i = 0; i < dstr_id.length; i++)
        {
            addOption(dstr, dstr_value[i], dstr_id[i], false);
        }
        testAddPost();
    }
}

function RefGetSubPost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        var d = b.split('|@|');
        var subsection_value = d[0].split('|,|');
        var subsection_id = d[1].split(',');

        var subsection = document.getElementById('id_subsection_post');
        subsection.innerHTML = '';


        for (var i = 0; i < subsection_id.length; i++)
        {
            addOption(subsection, subsection_value[i], subsection_id[i], false);
        }
        document.getElementById('filter_post').innerHTML = '';
        testAddPost();
    }
}

function RefGetFilterPost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        document.getElementById('filter_post').innerHTML = b;
        testAddPost();
    }
}

function RefreshAddPost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        //alert(b);
        if (b == 115)
        {
            getMyPost(1);
            alert('Объявление успешно опубликовано!');
            setTimeout(addNewPost, 1000);
        }
        else if (b == 114)
        {
            getMyPost(1);
            alert('Объявление успешно добавлено! Для того чтобы объявление появилось в ТОП пройдите на страницу баланса и оплатите заявку.');
            setTimeout(addNewPost, 1000);
        }
        else if (b == 116)
        {
            alert('Объявление успешно добавлено! Вам на почту отправлено письмо для активации и редактирования поданного объявления.');
            setTimeout(addNewPost, 1000);
        }
        else if (b == 113)
        {
            getMyPost(1);
            alert('Объявление успешно добавлено! Для того, чтобы объявление начало отображаться другим пользователям, пройдите на страницу баланса и оплатите заявку.');
            setTimeout(addNewPost, 1000);
        }
        else if (b == 112)
        {
            getMyPost(1);
            alert('Объявление успешно добавлено, заявка в ТОП сохранена! Для того, чтобы объявление начало отображаться другим пользователям и в ТОП, пройдите на страницу баланса и оплатите заявку.');
            setTimeout(addNewPost, 1000);
        }
        else
        {
            alert(b);
        }
    }
    else
    {
//        if(ge('send_add_post') != null)
//            ge('send_add_post').disabled = true;

        return document.location.replace('#new_post');
    }

    loaderShadow('busy');
}

function RefreshAddPostNoUser()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;

        if (b == 115)
        {
            getMyPost(1);
            alert('Объявление успешно опубликовано!');
            ge('result_region').innerHTML = '';
            ge('id_city_post').innerHTML = '<option value="">Не важно</option>';
            ge('result_city').innerHTML = '';
            ge('id_district_post').innerHTML = '<option value="">Не важно</option>';
            ge('result_district').innerHTML = '';
            ge('result_section').innerHTML = '';
            ge('id_subsection_post').innerHTML = '<option value="">Не важно</option>';
            ge('result_subsection').innerHTML = '';
            ge('filter_post').innerHTML = '';
            ge('name_post').value = '';
            ge('result_name').innerHTML = '';
            ge('text_post').value = '';
            ge('result_text').innerHTML = '';
            ge('email_post').value = '';
            ge('result_email').innerHTML = '';
            ge('keystring').value = '';
            ge('result_keystring').innerHTML = '';
        }
        else if (b == 114)
        {
            getMyPost(1);
            alert('Объявление успешно добавлено! Для того чтобы объявление появилось в ТОП пройдите на страницу баланса и оплатите заявку.');
        }
        else if (b == 116)
        {
            alert('Объявление успешно опубликовано! Вам на почту отправлено письмо для активации и редактирования поданного объявления.');
            ge('result_region').innerHTML = '';
            ge('id_city_post').innerHTML = '<option value="">Не важно</option>';
            ge('result_city').innerHTML = '';
            ge('id_district_post').innerHTML = '<option value="">Не важно</option>';
            ge('result_district').innerHTML = '';
            ge('result_section').innerHTML = '';
            ge('id_subsection_post').innerHTML = '<option value="">Не важно</option>';
            ge('result_subsection').innerHTML = '';
            ge('filter_post').innerHTML = '';
            ge('name_post').value = '';
            ge('result_name').innerHTML = '';
            ge('text_post').value = '';
            ge('result_text').innerHTML = '';
            ge('email_post').value = '';
            ge('result_email').innerHTML = '';
            ge('keystring').value = '';
            ge('result_keystring').innerHTML = '';

//            if(ge('send_add_post') != null)
//                ge('send_add_post').disabled = false;

            addNewPostNoUser();
        }
        else
        {
            alert(b);
        }
    }
    else
    {
//        if(ge('send_add_post') != null)
//            ge('send_add_post').disabled = true;

        return document.location.replace('#new_post');
    }

    loaderShadow('busy');
}

function RefreshUpdatePost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        var json = JSON.parse(b);
        var reg = /^[0-9]*$/;
        if (reg.test(json.id_post) === true)
        {
            changePost(json.id_post, json.modeset, json.trig);
            alert('Объявление успешно сохранено!');
        }
        else
        {
            ge('result_add_post').innerHTML = json.error;
        }
    }
    else
    {
        return document.location.replace('#change_post');
    }

    loaderShadow('busy');
}

function RefreshTestKaptcha()
{
    var a = req.readyState;
    var key;

    if (a == 4)
    {
        var b = req.responseText;
        switch (b)
        {
            case '0100':
                ge('result_keystring').innerHTML = '<div><div style="z-index: 1; position: relative; top: 15px; background-image:' +
                        ' url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                        '<div style="position: relative; left: 8px; background-color: #f2f3f7; width: 170px; border: 1px solid #e6e8ed;' +
                        ' color: red; padding: 2px; font-size: 12px;">' +
                        'Не верно введён текст с картинки.' +
                        '</div></div><input type="hidden" id="res_key" value="0">';

                break;
            case '0110':
                ge('result_keystring').innerHTML = '<div><div style="z-index: 1; position: relative; top: 15px; background-image:' +
                        ' url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                        '<div style="position: relative; left: 8px; background-color: #f2f3f7; width: 170px; border: 1px solid #e6e8ed;' +
                        ' color: red; padding: 2px; font-size: 12px;">' +
                        'Введите текст с картинки.' +
                        '</div></div><input type="hidden" id="res_key" value="0">';

                break;
            case '0101':
                ge('result_keystring').innerHTML = '<input type="hidden" id="res_key" value="1">';
                break;
        }
    }
}

function RefreshMyPost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        ge('my_post').innerHTML = b;

    }
}

function RefreshHowMyPost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        ge('how_post').innerHTML = b;
    }
}

function RefreshChangePost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        ge('change_post').innerHTML = b;
        getMyPost(0);
    }
}

function RefreshOption_post()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        var json = JSON.parse(b);
        var reg = /^[0-9]*$/;
        if (reg.test(json.id_post) === true)
        {
            changePost(json.id_post, json.modeset, json.trig);
            alert('Объявление успешно удалено из списка ТОП!');
        }
        else
        {
            ge('result_option_post').innerHTML = b;
            getMyPost(0);
        }
    }

}

function RefreshOption_application()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        myApplication();
    }
}

function RefreshMyApplication()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        ge('my_application').innerHTML = b;
    }
}

function RefreshDeletePost()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;

        alert(b);
        addNewPost();
    }
}

function RefreshSendApplication()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        if (b == 1001)
            myApplication();
        else
        {
            ge('result_application').innerHTML = b;
            setTimeout(myApplication, 10000);
        }
    }
}

function RefreshMyPayHistory()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        if (b == 'error 101')
            ge('result_history_payment').innerHTML = '<span style="color: red">Произошла ошибка. Обратитесь в технический отдел.</span>';
        else
            ge('result_history').innerHTML = b;

        return document.location.replace('#history_payment');
    }
}
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///
///		Функции приёма информации
///
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

function howMatch()
{
    var query;

    query = 'how_match=1';
    req.open('post', './moduls/my_post_ajax.php', true);
    req.onreadystatechange = RefreshHowMyPost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function getRegPost()
{
    var query;
    query = 'regions=1';
    req.open('post', './moduls/get_search.php', true);
    req.onreadystatechange = RefGetRegionPost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function GetSectionPost()
{
    var query;
    query = 'section=1';
    req.open('post', './moduls/get_search.php', true);
    req.onreadystatechange = RefGetSectionPost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function GetCityPost()
{

    var query;

    query = 'id_region=' + ge('id_region_post').value;
    req.open('post', './moduls/get_search.php', true);
    req.onreadystatechange = RefGetCityPost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function GetDistrict()
{
    var query;

    query = 'id_city=' + ge('id_city_post').value;
    req.open('post', './moduls/get_search.php', true);
    req.onreadystatechange = RefGetDistrictPost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function GetSub()
{
    var query;

    query = 'id_section=' + ge('id_section_post').value;
    req.open('post', './moduls/get_search.php', true);
    req.onreadystatechange = RefGetSubPost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function GetFilterPost()
{
    var query;

    query = 'id_sub_filter=' + ge('id_subsection_post').value;
    req.open('post', './moduls/get_search.php', true);
    req.onreadystatechange = RefGetFilterPost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function test_num_filter(id_input)
{
    var reg = /^[0-9,]*$/;
    var input = ge('fil_' + id_input);
    if (!reg.test(input.value) && input.value != '')
    {
        ge('fil_result_' + id_input).innerHTML = '<div><div style="z-index: 1;' +
                ' position: relative; top: 15px; background-image:' +
                ' url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat;' +
                ' width: 9px; height: 8px;"></div>' +
                '<div style="position: relative; left: 8px; background-color: #f2f3f7;' +
                ' width: 190px; border: 1px solid #e6e8ed; color: red; padding: 2px;' +
                ' font-size: 12px;">Разрешённые символы: (0-9)</div></div>';
    }
//input.value = input.value.replace(/[^\d,]/g, '');
}

function testAddPost(mode)
{
    var region = ge('id_region_post');
    var city = ge('id_city_post');
    var district = ge('id_district_post');
    var section = ge('id_section_post');
    var subsection = ge('id_subsection_post');
    var name = ge('name_post');
    var text = ge('text_post');
    var email = ge('email_post');
    for (var i = 0; ge('top_' + i) != null; i++)
    {
        if (ge('top_' + i).checked === true)
            var top = ge('top_' + i).value;
    }

    if (region.value == '')
    {
        if (ge('result_region').innerHTML != '&nbsp;&nbsp;' || mode == 1)
        {
            ge('result_region').innerHTML = '<div><div style="z-index: 1;' +
                    ' position: relative; top: 15px; background-image:' +
                    ' url(\'./graphics/err_left_border.png\'); background-repeat:' +
                    ' no-repeat; width: 9px; height: 8px;"></div>' +
                    '<div style="position: relative; left: 8px; background-color: #f2f3f7;' +
                    ' width: 150px; border: 1px solid #e6e8ed; color: red; padding: 2px;' +
                    ' font-size: 12px;">Выберите регион.</div></div>';
            return false;
        }
    }
    else
    {
        ge('result_region').innerHTML = '&nbsp;';
        ge('result_add_post').innerHTML = '';
    }

    if (city.value == '')
    {
        if (ge('result_city').innerHTML != '&nbsp;&nbsp;' || mode == 1)
        {
            ge('result_city').innerHTML = '<div><div style="z-index: 1;' +
                    ' position: relative; top: 15px; background-image:' +
                    ' url(\'./graphics/err_left_border.png\'); background-repeat:' +
                    ' no-repeat; width: 9px; height: 8px;"></div>' +
                    '<div style="position: relative; left: 8px; background-color: #f2f3f7;' +
                    ' width: 150px; border: 1px solid #e6e8ed; color: red; padding: 2px;' +
                    ' font-size: 12px;">Выберите город.</div></div>';
            return false;
        }
    }
    else
    {
        ge('result_city').innerHTML = '&nbsp;';
        ge('result_add_post').innerHTML = '';
    }

    if (district.value != '')
    {
        ge('result_district').innerHTML = '';
        ge('result_add_post').innerHTML = '';
    }
    else
    {
        ge('result_district').innerHTML = '&nbsp;';
    }

    if (section.value == '')
    {
        if (ge('result_section').innerHTML != '&nbsp;&nbsp;' || mode == 1)
        {
            ge('result_section').innerHTML = '<div><div style="z-index: 1;' +
                    ' position: relative; top: 15px; background-image:' +
                    ' url(\'./graphics/err_left_border.png\'); background-repeat:' +
                    ' no-repeat; width: 9px; height: 8px;"></div>' +
                    '<div style="position: relative; left: 8px; background-color: #f2f3f7;' +
                    ' width: 150px; border: 1px solid #e6e8ed; color: red; padding: 2px;' +
                    ' font-size: 12px;">Выберите категорию.</div></div>';
            return false;
        }
    }
    else
    {

        ge('result_section').innerHTML = '&nbsp;';
        ge('result_add_post').innerHTML = '';
    }

    if (subsection.value == '')
    {
        if (ge('result_subsection').innerHTML != '&nbsp;&nbsp;' || mode == 1)
        {
            ge('result_subsection').innerHTML = '<div><div style="z-index: 1;' +
                    ' position: relative; top: 15px; background-image:' +
                    ' url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat;' +
                    ' width: 9px; height: 8px;"></div>' +
                    '<div style="position: relative; left: 8px; background-color: #f2f3f7;' +
                    ' width: 170px; border: 1px solid #e6e8ed; color: red; padding: 2px;' +
                    ' font-size: 12px;">Выберите подкатегорию.</div></div>';
            return false;
        }
    }
    else
    {
        ge('result_subsection').innerHTML = '&nbsp;';
        ge('result_add_post').innerHTML = '';
    }

    if (ge('fil_0') != null)
    {
        for (var i = 0; ge('fil_' + i) != null; i++)
        {
            if (ge('fil_' + i).value == '' || ge('fil_' + i).value <= 0)
            {
                if (ge('fil_result_' + i).innerHTML != '&nbsp;&nbsp;' || mode == 1)
                {
                    ge('fil_result_' + i).innerHTML = '<div><div style="z-index: 1;' +
                            ' position: relative; top: 15px; background-image:' +
                            ' url(\'./graphics/err_left_border.png\'); background-repeat: no-repeat;' +
                            ' width: 9px; height: 8px;"></div>' +
                            '<div style="position: relative; left: 8px; background-color: #f2f3f7;' +
                            ' width: 170px; border: 1px solid #e6e8ed; color: red; padding: 2px; font-size: 12px;">' +
                            'Заполните данное поле.' +
                            '</div></div>';
                    return false;
                }
            }
            else
            {
                ge('fil_result_' + i).innerHTML = '&nbsp;';
                //ge('result_add_post').innerHTML = '';
            }
        }
    }

    var name_reg = /^[a-z,A-Z,а-яёіїєґ,А-ЯЁІЇЄҐ,0-9,\-,\_,\.,\, ]+$/;

    if (name.value == '')
    {
        if (ge('result_name').innerHTML != '&nbsp;&nbsp;' || mode == 1)
        {
            ge('result_name').innerHTML = '<div>' +
                    '<div style="position: relative; left: 0px; background-color: #f2f3f7;' +
                    ' width: 150px; border: 1px solid #e6e8ed; color: red; padding: 2px;' +
                    ' font-size: 12px;">Введите заголовок объявления.</div>' +
                    '<div style="z-index: 1; position: relative; top: -25px; left: 155px;' +
                    ' background-image: url(\'./graphics/err_right_border.png\');' +
                    ' background-repeat: no-repeat; width: 9px; height: 8px;"></div></div>';
            return false;
        }
    }
    else
    {
        if (name_reg.test(name.value) === false)
        {
            if (ge('result_name').innerHTML != '&nbsp;&nbsp;' || mode == 1)
            {
                ge('result_name').innerHTML = '<div>' +
                        '<div style="position: relative; left: 0px; background-color: #f2f3f7;' +
                        ' width: 170px; border: 1px solid #e6e8ed; color: red; padding: 2px;' +
                        ' font-size: 12px;">Разрешенные символы: (а-я, А-Я, a-z, A-Z, 0-9)' +
                        '</div><div style="z-index: 1; position: relative; top: -25px;' +
                        ' left: 175px; background-image: url(\'./graphics/err_right_border.png\');' +
                        ' background-repeat: no-repeat; width: 9px; height: 8px;"></div></div>';
                return false;
            }
        }
        else
        {
            ge('result_name').innerHTML = '&nbsp;';
            ge('result_add_post').innerHTML = '';
        }
    }

    var texts = text.value;

    var teg_br = /<[\/]?br[\s]*[\/]?>/g;
    if (teg_br.test(text.value) === true)
    {
        texts = texts.replace(teg_br, "[br]");
    }

    var text_reg = /^[^<>]+$/;

    if (texts == '')
    {
        if (ge('result_text').innerHTML != '&nbsp;&nbsp;' || mode == 1)
        {
            ge('result_text').innerHTML = '<div>' +
                    '<div style="position: relative; left: 0px; background-color: #f2f3f7;' +
                    ' width: 150px; border: 1px solid #e6e8ed; color: red; padding: 2px;' +
                    ' font-size: 12px;">Введите текст объявления.</div><div style="z-index: 1;' +
                    ' position: relative; top: -25px; left: 155px;' +
                    ' background-image: url(\'./graphics/err_right_border.png\');' +
                    ' background-repeat: no-repeat; width: 9px; height: 8px;"></div></div>';
            return false;
        }
    }
    else
    {
        if (text_reg.test(texts) === false)
        {
            if (ge('result_text').innerHTML != '&nbsp;&nbsp;' || mode == 1)
            {
                ge('result_text').innerHTML = '<div>' +
                        '<div style="position: relative; left: 0px; background-color: #f2f3f7; width: 150px; border: 1px solid #e6e8ed; color: red; padding: 2px; font-size: 12px;">' +
                        'Все html теги, кроме \'&lt;br&gt;\', \'&lt;/br&gt;\', \'&lt;br /&gt;\' запрещены.' +
                        '</div><div style="z-index: 1; position: relative; top: -15px; left: 155px; background-image: url(\'./graphics/err_right_border.png\'); background-repeat: no-repeat; width: 9px; height: 8px;"></div></div>';
                return false;
            }
        }
        else
        {
            ge('result_text').innerHTML = '&nbsp;';
            ge('result_add_post').innerHTML = '';
        }
    }

    texts = texts.replace(/([br])/, "<br />");

    var email_reg = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*|[a-zA-Z0-9])@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,6}$/;

    if (email.value == '')
    {
        if (ge('result_email').innerHTML != '&nbsp;&nbsp;' || mode == 1)
        {
            ge('result_email').innerHTML = '<div><div style="z-index: 1;' +
                    ' position: relative; top: 15px; background-image: url(\'./graphics/err_left_border.png\');' +
                    ' background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                    '<div style="position: relative; left: 8px; background-color: #f2f3f7;' +
                    ' width: 145px; border: 1px solid #e6e8ed; color: red; padding: 2px; font-size: 12px;">' +
                    'Введите ваш E-mail.' +
                    '</div></div>';
            return false;
        }
    }
    else
    {
        if (email_reg.test(email.value) === false)
        {
            ge('result_email').innerHTML = '<div><div style="z-index: 1;' +
                    ' position: relative; top: 15px; background-image: url(\'./graphics/err_left_border.png\');' +
                    ' background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                    '<div style="position: relative; left: 8px; background-color: #f2f3f7;' +
                    ' width: 145px; border: 1px solid #e6e8ed; color: red; padding: 2px; font-size: 12px;">' +
                    'Не верный E-mail.' +
                    '</div></div>';
            return false;
        }
        else
        {
            ge('result_email').innerHTML = '&nbsp;';
            ge('result_add_post').innerHTML = '';
        }
    }
    return true;
}

function checkRubric(rubtic_id, user)
{
    var city = document.getElementById('id_city_post').value;
    var rubtic = document.getElementById(rubtic_id).value;
    var query;
    query = 'rubric=' + rubtic + '&user=' + user + '&city=' + city;
    req.open('post', './moduls/check_rubric.php', false);
    req.onreadystatechange = RefreshCheckRubric;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function RefreshCheckRubric()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        var json = JSON.parse(b);
        if (json.result == true)
        {
            if (json.package.paid == true)
            {
                viewPopUp(json.package.title, json.package.description + '<hr />Стоимость размещения одного объявления в выбранной рубрике: ' + json.package.price + 'грн.');
                console.log(json.package.title);
            }
        }
    }
}

function viewPopUp(title, description)
{
    var popupshadow = document.createElement('div');
    popupshadow.id = 'shadow2';
    popupshadow.onclick = function () {
        popup.parentNode.removeChild(popup);
        popupshadow.parentNode.removeChild(popupshadow);
    }

    var popup = document.createElement('div');
    popup.className = 'popup';

    var table_tag = document.createElement('table');
    table_tag.className = 'table_tag';
    table_tag.cellPadding = '0';
    table_tag.cellSpacing = '0';
    popup.appendChild(table_tag);

    var tr1_tag = document.createElement('tr');
    table_tag.appendChild(tr1_tag);

    var pack_left_top = document.createElement('td');
    pack_left_top.className = 'pack_left_top';
    tr1_tag.appendChild(pack_left_top);

    var pack_center_top = document.createElement('td');
    pack_center_top.className = 'pack_center_top';
    tr1_tag.appendChild(pack_center_top);

    var pack_right_top = document.createElement('td');
    pack_right_top.className = 'pack_right_top';
    tr1_tag.appendChild(pack_right_top);

    var pack_close = document.createElement('div');
    pack_close.className = 'pack_close';
    pack_close.onclick = function () {
        popup.parentNode.removeChild(popup);
        popupshadow.parentNode.removeChild(popupshadow);
    }
    pack_right_top.appendChild(pack_close);

    var title_content = document.createElement('div');
    title_content.className = 'title_content';
    title_content.innerHTML = title;
    pack_center_top.appendChild(title_content);

    var tr2_tag = document.createElement('tr');
    table_tag.appendChild(tr2_tag);

    var pack_left_center = document.createElement('td');
    pack_left_center.className = 'pack_left_center';
    tr2_tag.appendChild(pack_left_center);

    var pack_content = document.createElement('td');
    pack_content.className = 'pack_content';
    tr2_tag.appendChild(pack_content);

    var pack_right_center = document.createElement('td');
    pack_right_center.className = 'pack_right_center';
    tr2_tag.appendChild(pack_right_center);

    var pack_line = document.createElement('hr');
    pack_line.className = 'pack_line';
    pack_content.appendChild(pack_line);

    var pack_description = document.createElement('div');
    pack_description.className = 'pack_description';
    pack_description.innerHTML = description;
    pack_content.appendChild(pack_description);

    var tr3_tag = document.createElement('tr');
    table_tag.appendChild(tr3_tag);

    var pack_left_bottom = document.createElement('td');
    pack_left_bottom.className = 'pack_left_bottom';
    tr3_tag.appendChild(pack_left_bottom);

    var pack_center_bottom = document.createElement('td');
    pack_center_bottom.className = 'pack_center_bottom';
    tr3_tag.appendChild(pack_center_bottom);

    var pack_right_bottom = document.createElement('td');
    pack_right_bottom.className = 'pack_right_bottom';
    tr3_tag.appendChild(pack_right_bottom);

    document.body.appendChild(popupshadow);
    document.body.appendChild(popup);
}

function testKeystring()
{

    var query;
    var keystring = ge('keystring');

    query = 'testkey=1&keystring=' + keystring.value;
    req.open('post', './moduls/test_captcha.php', true);
    req.onreadystatechange = RefreshTestKaptcha;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);

}

function addPost(mode)
{
    if (!$('#terms').is(':checked'))
    {
        ge('result_add_post').innerHTML = '<span style="color: red">Внимание! Вы не согласились с правилами использования сервиса.</span>';
        document.location.replace('#new_post');
        return false;
    }

    if (testAddPost(1) === false)
    {
        ge('result_add_post').innerHTML = '<span style="color: red">Внимание! Вы заполнили не все поля.</span>';
        document.location.replace('#new_post');
        return false;
    }
    else if (ge('res_key').value == '0')
    {
        ge('result_keystring').innerHTML = '<div><div style="z-index: 1;' +
                ' position: relative; top: 15px; background-image: url(\'./graphics/err_left_border.png\');' +
                ' background-repeat: no-repeat; width: 9px; height: 8px;"></div>' +
                '<div style="position: relative; left: 8px; background-color: #f2f3f7;' +
                ' width: 170px; border: 1px solid #e6e8ed; color: red; padding: 2px; font-size: 12px;">' +
                'Введите текст с картинки.' +
                '</div></div><input type="hidden" id="res_key" value="0">';
        return false;
    }
    var query;
    var id_user = ge('id_user');
    var region = ge('id_region_post');
    var city = ge('id_city_post');
    var district = ge('id_district_post');
    var section = ge('id_section_post');
    var subsection = ge('id_subsection_post');
    var filters = '';
    if (ge('fil_0') != null)
    {
        for (var i = 0; ge('fil_' + i) != null; i++)
        {
            if (ge('fil_' + i).value != 0 || ge('fil_' + i).value != '')
                filters += ge('fil_' + i).value + '|!|';
            else
                filters += '_|!|';
        }
    }
    filters += '&';
    var name = ge('name_post');
    var text = ge('text_post');
    var email = ge('email_post');

    for (var i = 0; ge('top_' + i) != null; i++)
    {
        if (ge('top_' + i).checked === true)
            var top = ge('top_' + i).value;
    }

    if (top == 1)
        var pack = ge('value_pack').value;
    else
        var pack = 0;

    var phones = '';
    var phones_list = $(".phone").serializeArray();
    for (var i = 0; i < phones_list.length; i ++)
    {
        if (phones_list[i].value !== '')
        {
            var delim = phones === '' ? '' : '|@|';
            phones += delim + phones_list[i].value;
        }
    }

    var keystring = ge('keystring');
    query = 'id_user=' + id_user.value +
            '&id_region=' + region.value +
            '&id_city=' + city.value +
            '&id_district=' + district.value +
            '&id_section=' + section.value +
            '&id_subsection=' + subsection.value +
            '&filters=' + filters +
            '&name=' + name.value +
            '&text=' + text.value +
            '&email=' + email.value +
            '&top=' + top +
            '&keystring=' + keystring.value +
            '&package=' + pack +
            '&terms=' + $('#terms').is(':checked') +
            '&phones=' + phones;

    loaderShadow('busy');

    if (mode == 1)
        var func = RefreshAddPostNoUser;
    else
        var func = RefreshAddPost;

    req.open('post', './moduls/add_post.php', true);
    req.onreadystatechange = func;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function getMyPost(mode)
{
    var query;
    var id_user = ge('id_user');
    if (mode == 1)
        GetSectionPost();

    query = 'my_post=1&id_user=' + id_user.value;
    req.open('post', './moduls/my_post_ajax.php', true);
    req.onreadystatechange = RefreshMyPost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function changePost(id_post, modeset, trig)
{
    var query;
    document.location.replace('#change_post');
    query = 'change_post=1&id_post=' + id_post + '&modeset=' + modeset + '&trig=' + trig;
    req.open('post', './moduls/change_post.php', true);
    req.onreadystatechange = RefreshChangePost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function updatePost(id_post, modeset, trig)
{

    if (testAddPost() === false)
        return false;
    else if (id_post != ge('id_post').value)
    {
        alert('Ошибка! Обратитесь в технический отдел.');
        return false;
    }

    var query;
    var id_user = ge('id_user');
    var id_post = ge('id_post');
    var region = ge('id_region_post');
    var city = ge('id_city_post');
    var district = ge('id_district_post');
    var section = ge('id_section_post');
    var subsection = ge('id_subsection_post');
    var filters = '';
    if (ge('fil_0') != null)
    {
        for (var i = 0; ge('fil_' + i) != null; i++)
        {
            if (ge('fil_' + i).value != 0 || ge('fil_' + i).value != '')
                filters += ge('fil_' + i).value + '|!|';
            else
                filters += '_|!|';
        }
    }
    filters += '&';
    var name = ge('name_post');
    var text = ge('text_post');
    var email = ge('email_post');
    if (ge('value_pack'))
        var top = ge('value_pack').value;
    else
        top = '';

    var phones = '';
    var phones_list = $(".phone").serializeArray();
    for (var i = 0; i < phones_list.length; i ++)
    {
        if (phones_list[i].value !== '')
        {
            var delim = phones === '' ? '' : '|@|';
            phones += delim + phones_list[i].value;
        }
    }

    query = 'id_user=' + id_user.value +
            '&id_post=' + id_post.value +
            '&id_region=' + region.value +
            '&id_city=' + city.value +
            '&id_district=' + district.value +
            '&id_section=' + section.value +
            '&id_subsection=' + subsection.value +
            '&filters=' + filters +
            '&name=' + name.value +
            '&text=' + text.value +
            '&email=' + email.value +
            '&top=' + top +
            '&modeset=' + modeset +
            '&trig=' + trig +
            '&phones=' + phones;

    loaderShadow('busy');

    req.open('post', './moduls/update_post.php', true);
    req.onreadystatechange = RefreshUpdatePost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function deleteIsTop(id_application, id_post, modeset, trig, mode)
{
    var query;

    if (mode == 0)
        var func = RefreshOption_post;
    else
        var func = RefreshOption_application;

    query = 'delete_top=1&id_application=' + id_application + '&id_post=' + id_post + '&modeset=' + modeset + '&trig=' + trig;
    req.open('post', './moduls/option_post.php', true);
    req.onreadystatechange = func;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function deletePost(id_post, modeset, trig)
{
    var query;

    query = 'delete_post=1&id_post=' + id_post + '&modeset=' + modeset + '&trig=' + trig;
    req.open('post', './moduls/option_post.php', true);
    req.onreadystatechange = RefreshDeletePost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function addNewPost()
{
    var query;
    var id_user = ge('id_user').value;

    query = 'new_post=1&id_user=' + id_user;
    req.open('post', './moduls/new_post_ajax.php', true);
    req.onreadystatechange = RefreshChangePost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function addNewPostNoUser()
{
    var query;

    query = 'new_post_no_user=1';
    req.open('post', './moduls/new_post_ajax_no_user.php', true);
    req.onreadystatechange = RefreshChangePost;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function myApplication()
{
    var query;
    var id_user = ge('id_user');

    query = 'application=1&id_user=' + id_user.value;
    req.open('post', './moduls/my_applicatiion_ajax.php', true);
    req.onreadystatechange = RefreshMyApplication;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function ApplicationUp(id_post, pack)
{
    var query;
    var id_user = ge('id_user');

    query = 'up_application=1&application_up=' + id_post +
            '&id_user=' + id_user.value +
            '&pack=' + pack;
    req.open('post', './moduls/application_up.php', true);
    req.onreadystatechange = function up()
    {
        var a = req.readyState;

        if (a == 4)
        {
            var b = req.responseText;

            alert(b);
            if (ge('my_post'))
                getMyPost(1);
            else if (ge('my_application'))
                myApplication();
        }
    }
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function sendApplication(id_application, id_post, pack)
{
    var query;
    var id_user = ge('id_user');
    query = 'send=1&application=' + id_application +
            '&id_post=' + id_post +
            '&id_user=' + id_user.value +
            '&pack=' + pack;

    req.open('post', './moduls/send_application.php', false);
    req.onreadystatechange = RefreshSendApplication;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function showHistory(mode)
{
    var query;
    var id_user = ge('id_user');
    query = 'all_history=1&id_user=' + id_user.value + '&mode=' + mode;
    req.open('post', './moduls/all_history_ajax.php', true);
    req.onreadystatechange = RefreshMyPayHistory;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function loaderShadow(id)
{
    var standart = 'buusy-box';
    var curr_name = document.getElementById(id).className;

    if (standart != curr_name)
    {
        document.getElementById(id).className = 'buusy-box';
    }
    else
    {
        document.getElementById(id).className = '';
    }
}