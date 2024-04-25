# Webáruház alkalmazás dokumentációja
-----------------------------------

A feladat egy egyszerű webáruház alkalmazást valósít, amely Express.js segítségével épül fel, valamint MongoDB-t adatbázist használ az adatok tárolására.
Az alkalmazás három fő részből áll: az **items.js** az árukhoz kapcsolódó műveletekért felelős, a **users.js** a felhasználókhoz tartozó műveleteket implementálja, míg a **logger.js** egy middleware, amely naplózza a kéréseket.
#### Futtatás: node create_database.js majd node index.js

### **items.js**

Ez a rész felelős az áruk kezeléséért. Az Express.js Router modulját használja, hogy az árukhoz kapcsolódó végpontokat definiálja. Az adatokat MongoDB adatbázisból szerez be, és RESTful API-n keresztül nyújtja ki.

#### Végpontok:

*   **GET /**: Az összes áru lekérdezése.
*   **POST /**: Új áru hozzáadása.
*   **PUT /:id**: Áru frissítése azonosító alapján.
*   **PUT /:id/add**: Árukészlet növelése azonosító alapján.
*   **DELETE /:id**: Áru törlése azonosító alapján.

### A **users.js** fájl

Ebben a részben találhatók meg a felhasználókkal kapcsolatos műveletek. Szintén Express.js Router modult használ, és az adatokat MongoDB-ből szerez be, majd RESTful API-n keresztül nyújtja ki.

#### Végpontok:

*   **GET /**: A bejelentkezett felhasználó adatainak lekérése.
*   **POST /**: Új felhasználó hozzáadása.
*   **PUT /:id**: Felhasználó frissítése azonosító alapján.
*   **DELETE /:id**: Felhasználó törlése azonosító alapján.

### A **logger.js** fájl

Ez a middleware funkció felelős a kérések naplózásáért. Egyszerűen csak naplózza a bejövő kérések részleteit, mint például az URL-t és az időbélyeget.

### A **vue.js** fájl

A Vue.js keretrendszer segítségével készült, amely kliensoldali alkalmazással interaktív módon kommunikál a szerverrel. A felhasználói felület segítségével böngészhet az áruk között, kosárba helyezheti azokat és leadhatja a rendelést.

### Az **index.js** fájl

Ez a fő alkalmazásfájl, amely beállítja az Express.js szervert, kezeli a végpontokat, a middleware-eket és a statikus fájlok szolgáltatását. Továbbá, kezeli a felhasználói munkameneteket is, és az adatbáziskapcsolatot inicializálja.

### A **database\_create.js** fájl

Ez a fájl egy inicializáló szkript, amely létrehozza a MongoDB adatbázist, az azon belüli táblákat (kollekciókat), valamint feltölti azokat kezdeti adatokkal. A fájl futtatásával az alkalmazás kezdeti adatbázis konfigurációja automatikusan létrejön.

Ez az alkalmazás segítséget nyújt egy egyszerű webáruház megvalósításához, és alkalmas lehet továbbfejlesztésre vagy testelésre.
