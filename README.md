# Клиентская часть интеллектуального поиска для компании Газпром-нефть

## Как установить?

`git clone https://github.com/alyush1n/gpn-tc-frontend`

`cd /gpn-tc-frontend`

`npm install`

## Как запустить?

В корневой папке проекта не забудьте создать файл `.env` со следующими переменными:

`REACT_APP_DEFAULT_URL_API` - адрес сервера поиска

`REACT_APP_METAPROM_API_URL` - адрес парсера для сайта [metaprom.ru](https://metaprom.ru)

### `npm start`

Проект запустится на http://localhost:3000.

### Типы поиска

`Везде` - всё сразу

`По компании`

`По патентам`

`По виду деятельности`

`Блочный поиск` 
