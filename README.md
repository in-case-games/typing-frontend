# Typing InCase - Frontend

<img src="https://sun9-9.userapi.com/impg/TvxOs5Z6Oq4zIVtUnJD0uvbLUPHa86M0OkuSBQ/xwSvc-KOU-s.jpg?size=107x55&quality=96&sign=80e1a5000a20607c8bd1afe5453abefc&type=album" align="right"/>

#### [Наш сайт](https://typing.in-case.games)

> Проект по тренировки и развитию слепой печати.</br>

<b>Технологии на визуальной части:</b>

- Docker Compose
- Nginx
- Typescript
- Angular

# Первый запуск

> [!TIP]
> Весь запуск происходит через Docker Compose.</br>

<b>Разработка:</b>

1. Меняем .env файлы конфигураций
2. `docker-compose -f compose.yml -f compose.dev.yml --verbose up --build`

<b>Выпуск:</b>

1. Меняем .env файлы конфигураций
2. `docker-compose -f compose.yml -f compose.dev.yml --verbose build`
3. `docker save -o images.tar typing-frontend`
4. Переносим images.tar на сервер
5. `docker load -i images.tar`
6. `docker-compose -f compose.yml -f compose.prod.yml --verbose up`

> [!IMPORTANT]
>
> 1. Перенести папку src/nginx с папкой conf.\*.d
> 2. Создать папку .ssl и перенести туда сертификат и ключ

# Ссылки

- [Главная страница сайта](https://typing.in-case.games/)
- [FAQ](https://typing.in-case.games/faq)
