# secret_santa

still in process

for run use : ts-node index.ts

TODO: connect SQlite


Правила Secret Santa: 
у грі може брати участь 3 і більше осіб (але не більше 500)
кожен окремий учасник має бути зареєстрований у гру окремим запитом. Учасник вказує своє ім'я та прізвище, а також список побажань. 
У списку може бути від 1 до 10 пунктів. Зберігати цю інформацію у БД.
створити окремий запит (POST /shuffle), у якому визначаться пари санта-одержувач та запишуться у БД. Мається на увазі, що при викликі цього запиту всі учасники вже будуть зареєстровані, т.к. повторно перемішати людей вже не можна.
кожен учасник-санта може отримати інформацію (ім'я, прізвище, список бажань) про свого одержувача за своїм ID.


Технічні вимоги до проекту:

у корені проекту має бути файл README з описом усіх необхідних інструкцій для розгортання програми
у якості БД необхідно використовувати SQLite (https://www.npmjs.com/package/sqlite3 )
для виконання завдання дозволено використовувати будь-який Node.js фреймворк (express, koa, nest..)
має бути присутня валідація вхідних параметрів

Буде плюсом:
використання Typescript (https://www.typescriptlang.org/docs/ )
покрити код юніт тестами
документація АПІ (переважно Swagger https://www.npmjs.com/package/swagger )
