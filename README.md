#Beadandó feladat (Műszaki bolt)

Az adott feladat egy webalkalmazás fejlesztését célozza, amely egy egyszerű online áruház funkcionalitását valósítja meg.
A feladat célja egy teljes körű alkalmazás létrehozása, amely lehetővé teszi a felhasználók számára a termékek böngészését, a kosárba helyezést, a regisztrációt és bejelentkezést, valamint az adminisztrátorok számára a termékek kezelését. 
Az alkalmazás több különálló részből áll, beleértve a szerveroldali logikát Express.js segítségével, adatbázis műveleteket MongoDB-vel,
valamint a kliensoldali felület Vue.js keretrendszerrel. 
A feladat elvégzése során a fejlesztőnek számos funkcionális és biztonsági szempontot is figyelembe kell vennie, hogy biztosítsa az alkalmazás megfelelő működését és biztonságát.


# 1. items.js
## 1.1. Router definíció
- Express Router
- MongoClient
- uuid

## 1.2. MongoDB kapcsolat
- MongoDB connection

## 1.3. Végpontok definiálása
- GET /api/items
- POST /api/items
- PUT /api/items/:id
- PUT /api/items/:id/add
- DELETE /api/items/:id

# 2. users.js
## 2.1. Router definíció
- Express Router
- MongoClient

## 2.2. MongoDB kapcsolat
- MongoDB connection

## 2.3. Végpontok definiálása
- GET /api/users
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id

# 3. logger.js
## 3.1. Middleware definíció
- Logger middleware

# 4. vue.js
## 4.1. Vue.js konfiguráció
- Vue Resource és Vue Router inicializálása

## 4.2. Vue alkalmazás
- Vue alkalmazás létrehozása

# 5. index.js
## 5.1. Express alkalmazás
- Express alkalmazás inicializálása
- MongoDB kapcsolat inicializálása

## 5.2. Végpontok definiálása
- GET /
- POST /login
- POST /register
- GET *

# 6. database_create.js
## 6.1. Adatbázis inicializálása
- MongoDB adatbázis inicializálása
