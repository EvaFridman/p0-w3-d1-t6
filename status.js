// let http_status = 200;
// let http_status = 301;
// let http_status = 404;
// let http_status = 500;
let http_status = 999;


if (http_status >= 200 && http_status <= 299) {
    console.log("успех");
} else if (http_status >= 300 && http_status <= 399) {
    console.log("редирект");
} else if (http_status >= 400 && http_status <= 499) {
    console.log("ошибка клиента");
} else if (http_status >= 500 && http_status <= 599) {
    console.log("ошибка сервера");
} else {
    console.log("неизвестный код");
}

switch (true) {
    case (http_status >= 200 && http_status <= 299):
        console.log("успех");
        break;
    case (http_status >= 300 && http_status <= 399):
        console.log("редирект");
        break;
    case (http_status >= 400 && http_status <= 499):
        console.log("ошибка клиента");
        break;
    case (http_status >= 500 && http_status <= 599):
        console.log("ошибка сервера");
        break;
    default:
        console.log("неизвестный код");
}

// switch(true) отличается от обычного switch тем, что меняет принцип работы с точного совпадения значений на вычисление логических условий. switch(true) проверяет условия и диапазоны. Выполняет код первого case, который вернет true.