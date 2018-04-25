function file_send() {
    if (ge('count_picture') != null)
    {
        var count = Number(ge('count_picture').value);
        if (count >= 10)
        {
            alert('Вы не можете загружать более 10-и картинок.');
            return false;
        }
        else
            ge('count_picture').value = count + 1;
    }

    sendForm("my_form", "./moduls/uplodeFile.php", callback);
    return false;
}
function sendForm(form, url, callfunc) {
    if (!document.createElement)
        return;
    if (typeof (form) == "string")
        form = document.getElementById(form);
    var frame = createIFrame();
    var act = form.getAttribute('action');
    frame.onSendComplete = function () {
        callfunc(form, act, getIFrameXML(frame));
    };
    form.setAttribute('target', frame.id);
    form.setAttribute('action', url);
    form.submit();
}

function createIFrame() {
    var id = 'f' + Math.floor(Math.random() * 99999);
    var div = document.createElement('div');
    div.innerHTML = "<iframe style=\"display:none\" src=\"about:blank\" id=\"" + id + "\" name=\"" + id + "\" onload=\"sendComplete('" + id + "')\"></iframe>";
    document.body.appendChild(div);
    return document.getElementById(id);
}

function sendComplete(id) {
    var iframe = document.getElementById(id);
    if (iframe.onSendComplete &&
            typeof (iframe.onSendComplete) == 'function')
        iframe.onSendComplete();
}

function getIFrameXML(iframe) {
    var doc = iframe.contentDocument;
    if (!doc && iframe.contentWindow)
        doc = iframe.contentWindow.document;
    if (!doc)
        doc = window.frames[iframe.id].document;
    if (!doc)
        return null;
    if (doc.location == "about:blank")
        return null;
    if (doc.XMLDocument)
        doc = doc.XMLDocument;
    return doc;
}

function callback(form, act, doc) {
    form.setAttribute('action', act);
    form.removeAttribute('target');
    if (doc.body.innerHTML == 01)
    {
        alert('Выберите картинку!');
    }
    else if (doc.body.innerHTML == 02)
    {
        alert('mime тип картинки не соответствует разрешённому! Разрешённые mime-типы: image/pjpeg, image/gif, image/x-png.');
    }
    else if (doc.body.innerHTML == 03)
    {
        alert('Файл с таким именем уже существует! Попробуйте ещё раз его загрузить!');
    }
    else if (doc.body.innerHTML == 04)
    {
        alert('При загрузке файла произошла ошибка, повторите пожалуйста ещё раз!');
    }
    else if (doc.body.innerHTML == 05)
    {
        alert('В названии файла содержатся недопустимые символы! Допустимые: "a-zA-Z0-9-_"');
    }
    else if (doc.body.innerHTML == 06)
    {
        alert('Вы можете загрузить не более 10-и картинок!');
    }
    else if (doc.body.innerHTML == 07)
    {
        alert('Вы можете загружать картинки размером до 1Мб.');
    }
    else if (doc.body.innerHTML == 08)
    {
        alert('Такое расширение файла не допускается');
    }
    else
    {
        var result = document.getElementById('resultUplodeFile').innerHTML += doc.body.innerHTML;
    }
    document.getElementById('file').innerHTML = '<input type="file" name="file" value="file" onChange="file_send()" size="48" style="margin-bottom: 5px; padding-bottom: 2px; padding-top: 2px; width: 397px; border: 1px solid #999999; height: 25px;">';
}

function Refresh_pic()
{
    var a = req.readyState;

    if (a == 4)
    {
        var b = req.responseText;
        if (ge('count_picture') != null)
        {
            var count = Number(ge('count_picture').value);
            ge('count_picture').value = count - 1;
        }
        document.getElementById('resultUplodeFile').innerHTML = b;
    }
}

function delete_picture(filename, id_file)
{
    var query;

    query = 'delete_pic=1&filename=' + filename + '&id_file=' + id_file;

    req.open('post', './moduls/deletePicture.php', true);
    req.onreadystatechange = Refresh_pic;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);
}