Задача:
Компания, занимающаяся прокатом велосипедов, испытывает проблемы с частой кражей их имущества (велосипедов). Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.

Функциональные требования:
Главная страница
Главная страница должна содержать текстовое описание сервиса, возможно, картинки на ваш выбор. Данная страница доступна всем пользователям без авторизации.

Форма авторизации
Форму авторизации можете расположить на главной странице, в шапке сайта или на отдельной странице — на ваше усмотрение. У авторизованных пользователей должна быть возможность выйти из учетной записи.

Сообщить о краже
«Сообщить о краже» должна содержать форму для отправки информации об украденном велосипеде. Форма должна содержать следующие поля:
 -Номер лицензии (обязательное поле);
 -ФИО клиента (обязательное поле);
 -Тип велосипеда (выпадающий список с заранее определенными вариантами, обязательное поле);
 -Цвет велосипеда;
 -Дата кражи;
 -Дополнительная информация.
Страница должна быть доступна всем пользователям без авторизации. Однако, если форму заполняет авторизованный сотрудник (например, если клиент сообщил о краже по телефону), ему доступно ещё одно дополнительное поле: ответственный сотрудник. Поле представляет собой выпадающий список с возможностью выбора из списка всех одобренных сотрудников, которые есть в базе.

Страница регистрации
На странице регистрации должна находиться форма регистрации со следующими полями:
 -E-mail (обязательное поле);
 -Пароль (обязательное поле);
 -Имя;
 -Фамилия;
 -Client ID (обязательное поле).
При отправке формы регистрации в базе данных создаётся новый сотрудник. Первый созданный сотрудник с конкретным client ID автоматически получит статус одобренного, остальных сотрудников нужно будет одобрить вручную.

Сообщения о кражах
Данная страница должна содержать список всех известных случаев краж (это может быть таблица). Отображать служебные поля, например, clientId не нужно. Должна быть возможность удалить сообщение. При клике на одно сообщение из списка должна открываться его детальная страница.

Ответственные сотрудники
Данная страница должна содержать список всех доступных сотрудников. Служебные поля (id, clientId, password) отображать не нужно. Должна быть возможность удалить сотрудника. При клике на одну запись из списка должна открываться детальная страница данного сотрудника.

Детальная страница сотрудника
На этой странице должна содержаться детальная информация по сотруднику с возможностью редактирования. Нельзя редактировать поля email и clientId. Должна быть возможность одобрить сотрудника/снять одобрение.

