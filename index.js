const http = require('http');

let userCountMain = 0;
let userCountAbout = 0;

const server = http.createServer( function(req, res) {
    console.log('Запрос получен'); 

    if (req.url === '/' ) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        console.log("вывод псоле плюса-1", `Всего просмотров: ${userCountMain}.`)
        userCountMain++;
        console.log("вывод псоле плюса-2", `Всего просмотров: ${userCountMain}.`)
        res.end(`<h1>Добро пожаловать на главную страницу!</h1>,<p>Всего просмотров: ${userCountMain}</p>,<a href="/about">Перейти на страницу обо мне!</a>`);

    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        userCountAbout ++;
        console.log(`Всего просмотров: ${userCountAbout}.`)
        res.end(`<h1>Страница обо мне!</h1><p>Всего просмотров: ${userCountAbout}.</p><a href="/">Перейти на страницу главная!</a>`);

    } else {
        res.writeHead(404,{'Content-Type': 'text/html; charset=UTF-8'});
        res.end('<h1>Страница не найдена!</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});