# DotNotify ![Release](https://img.shields.io/github/v/release/dotmix/dotnotify)

> Бот-напоминалка ВКонтакте

![Size](https://img.shields.io/github/repo-size/dotmix/dotnotify)
![License](https://img.shields.io/github/license/dotmix/dotnotify)

## Описание

**DotNotify** — бот-напоминалка, отправляющий сообщения и изображения в чаты ВКонтакте, работающий на Bots LongPoll API [ВКонтакте](https://vk.com), можно использовать как на страничке, так и на группе

> Написано на Node.JS с использованием библиотеки VK-IO

[Демонстрация](https://i.imgur.com/LybDqQ0.gif)

## Установка и конфигурация

Настройки бота и их описание находятся в файле `config.yml`

Несколько чатов пока что можно сделать только продублировав CRON-запись в `core.js`, потом сделаю это в конфиге (наверное)

_Установка зависимостей: `npm i`, запуск: `node .`_

## Лицензия

Copyright © 2022 [dotmix](https://github.com/dotmix)

Проект распространяется под лицензией [MIT](LICENSE)
