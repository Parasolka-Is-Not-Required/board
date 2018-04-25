/**
 * Вспомогательные функции сайта
 */

function onCheck(id, mode)
{
    var adv = ge(id);
    if (adv.checked === true && mode == undefined)
        adv.checked = false;
    else
        adv.checked = true;
}

function test_num(input)
{
    input.value = input.value.replace(/[^\d,]/g, '');
}

function refresh_captcha()
{
    var a = req.readyState;
    if (a == 4)
    {
        var b = req.responseText;
        ge('captcha').src = b;
        howMatch();
    }
}

function upCaptcha()
{
    var query;
    var path = './moduls/upcap.php';
    query = 'captcha=1';
    req.open('post', path, true);
    req.onreadystatechange = refresh_captcha;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function namePostCheck(v, num, div)
{
    var string = num - v.value.length;
    ge(div).maxlength = 10;
    if (string <= 0)
    {
        ge(div).maxlength = num - 100;
    }

    if (string <= 20)
        ge(div).innerHTML = '<span style="color: red;">' + string + '</span>';
    else
        ge(div).innerHTML = string;

}

// Добавляем страницу в избранное
function addBookmark() {
    if (document.all)
        window.external.addFavorite('http://ukrgo.com', 'Украина. Бесплатные объявления');
}

function bannerCounter(id_banner)
{
    var query;

    query = 'id_banner=' + id_banner;
    req.open('post', './moduls/rating_banner.php', true);
    req.onreadystatechange = function ref() {
        document.location.replace('./faq.php');
    };
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

function shadow(mode)
{
    var rt = mode * 100;
    ge('shadow').style.width = rt + '%';
    ge('shadow').style.height = rt + '%';
}

/*
 * Функции пакетов
 */
function packOpen(mode, ad_name, id_application)
{
    shadow(mode);
    if (mode == 1)
    {
        ge('package').style.display = 'block';

        if (ad_name)
            ge('ad_name').value = ad_name;
        else
            ge('ad_name').value = '';

        if (id_application)
            ge('id_application').value = id_application;
        else
            ge('id_application').value = '';
    }
    else
    {
        if (ge('value_pack').value == 0 && ge('top_0'))
            dropChecked('top', false, 2);

        ge('package').style.display = 'none';
    }
}

//
function onSelPack(value_pack)
{
    var ad_name = ge('ad_name').value;

    if (ad_name != '')
    {
        if (ge('my_post'))
            ApplicationUp(ad_name, value_pack);
        else if (ge('my_application'))
            sendApplication(ge('id_application').value, ge('ad_name').value, value_pack);
        //        setTimeout (getMyPost, 500);
        // сбрасываем пакет
        ge('value_pack').value = 0;
    }
    else
    {
        ge('value_pack').value = value_pack;
        ge('sel_pack_user').innerHTML = ' (Пакет: ' + ge('pack_title_' + value_pack).innerHTML + ', ' + ge('price_pack_' + value_pack).innerHTML + ')';
    }

    // сбрасываем радиокнопки пакетов
    dropChecked('pack', false, 1);

    packOpen(0);
}

/*
 * Действия над радиокнопками
 */
function dropChecked(name, id, action)
{
    if (id != false)
    {
        var elem = document.getElementById(id);
    }
    else if (name != false)
    {
        var elem = document.getElementsByName(name);
    }

    var length = elem.length;

    // сбрасываем все позицияя
    for (var i = 0; i < length; i++)
    {
        if (action == 1)
        {
            if (elem[i].checked == true)
                elem[i].checked = false;
        }
        // выставляем первую позицию
        else if (action == 2)
        {
            if (i == 0)
                elem[i].checked = true;
            else
                elem[i].checked = false;
        }
    }
}

function sendModerator(form)
{
    form.action = './send_mail_moderator.php';
    form.method = 'post';
}

function changePictureViewPost(filename)
{
    ge('main_picture').src = filename;
}

function getPrice(value)
{
    if (value == '')
    {
        ge('select_price').innerHTML = '';
        return false;
    }

    var query = 'getPrice=1&id_operator=' + value;

    req.open('post', 'moduls/operator.php', true);
    req.onreadystatechange = function ()
    {
        var a = req.readyState;

        if (a == 4)
        {
            var b = req.responseText;
            ge('select_price').innerHTML = b;
        }
    };

    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}

// function popup error for add_post
function errPopup(err, left, top)
{
    var er = '<table cellpadding="0" cellspacing="0" style="position: absolute; margin-left: ' + left + 'px; margin-top: ' + top + 'px;">';
    er += '<tr><td class="left-trigle-top">&nbsp;</td><td class="top-st"></td><td class="right-trigle-top">&nbsp;</td></tr>';
    er += '<tr><td class="left-st"></td><td class="ctr-st">';
    er += err;
    er += '</td><td class="right-st">&nbsp;</td></tr>';
    er += '<tr><td class="left-trigle-bottom">&nbsp;</td><td class="bottom-st"><div class="trigle-st"></div></td><td class="right-trigle-bottom">&nbsp;</td></tr></table>';

    return er;
}