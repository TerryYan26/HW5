export function remove() {
    document.getElementById('id').value = '';
    document.getElementById('article_name').value = '';
    document.getElementById('article_body').value = '';
    document.getElementById('date').value = '';
}

export function ban() {
    document.getElementById('id').setAttribute('disabled', 'true');
    document.getElementById('article_name').setAttribute('disabled', 'true');
    document.getElementById('article_body').setAttribute('disabled', 'true');
    document.getElementById('date').setAttribute('disabled', 'true');
}

export function open() {
    document.getElementById('id').removeAttribute('disabled');
    document.getElementById('article_name').removeAttribute('disabled');
    document.getElementById('article_body').removeAttribute('disabled');
    document.getElementById('date').removeAttribute('disabled');

}

export function PostR() {
    let form = document.getElementById('http-form');
    let method = 'POST';
    let endpoint = 'https://httpbin.org/post';

    let payload = new FormData(form);
    payload.set('date', String(new Date()));

    let xhr = new XMLHttpRequest();
    xhr.open(method, endpoint, true);
    xhr.onload = () => document.getElementById('response').innerText = xhr.responseText;
    xhr.send(payload);
}

export function GetR() {
    let method = 'GET';
    let endpoint = 'https://httpbin.org/get';

    let xhr = new XMLHttpRequest();
    xhr.open(method, endpoint, true);
    xhr.onload = () => document.getElementById('response').innerText = xhr.responseText;
    xhr.send();
}

export function PutR() {
    let form = document.getElementById('http-form');
    let method = 'PUT';
    let endpoint = 'https://httpbin.org/put';

    let payload = new FormData(form);
    payload.set('date', String(new Date()));

    let xhr = new XMLHttpRequest();
    xhr.open(method, endpoint, true);
    xhr.onload = () => document.getElementById('response').innerText = xhr.responseText;
    xhr.send(payload);
}

export function DelR() {
    let method = 'DELETE';
    let endpoint = 'https://httpbin.org/delete';

    let xhr = new XMLHttpRequest();
    xhr.open(method, endpoint, true);
    xhr.onload = () => document.getElementById('response').innerText = xhr.responseText;
    xhr.send();
}
