const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";


const items = [
    {
        id: 1,
        "termek_nev": "Laptop Lenovo ThinkPad X1 Carbon",
        "gyarto": "Lenovo",
        "kategoria": "Laptop",
        "ar": 319990,
        "raktarkeszlet": 5,
        "leiras": "Lenovo ThinkPad X1 Carbon laptop, Intel Core i7 processzorral, 16 GB RAM-mal és 512 GB SSD-vel.",
        "img": "https://www.notebookcheck-hu.com/uploads/tx_nbc2/x1_carbon_g11.jpg"
    },
    {
        id: 2,
        "termek_nev": "Apple iPhone 13 Pro",
        "gyarto": "Apple",
        "kategoria": "Okostelefon",
        "ar": 459990,
        "raktarkeszlet": 10,
        "leiras": "Apple iPhone 13 Pro, 6.1 hüvelykes Super Retina XDR kijelzővel, A15 Bionic chippel és tripla kamerarendszerrel.",
        "img": "https://p1.akcdn.net/full/861800193.apple-iphone-13-pro-1tb.jpg"
    },
    {
        id: 3,
        "termek_nev": "Samsung 34'' QLED Gaming Monitor",
        "gyarto": "Samsung",
        "kategoria": "Monitor",
        "ar": 189990,
        "raktarkeszlet": 7,
        "leiras": "Samsung 34 hüvelykes QLED Gaming Monitor, 21:9 képarány, 3440 x 1440 felbontás és 144Hz frissítési ráta.",
        "img": "https://images.samsung.com/is/image/samsung/p6pim/hu/lc34g55twwpxen/gallery/hu-odyssey-g5-34g5-444680-lc34g55twwpxen-536437057?$650_519_PNG$"
    },
    {
        id: 4,
        "termek_nev": "Sony WH-1000XM4 vezeték nélküli fejhallgató",
        "gyarto": "Sony",
        "kategoria": "Fejhallgató",
        "ar": 89990,
        "raktarkeszlet": 15,
        "leiras": "Sony WH-1000XM4 vezeték nélküli zajszűrő fejhallgató, 30 órás akkumulátor-élettartammal és adaptív zajszűréssel.",
        "img": "https://www.sony.hu/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
    },

    {
        id: 5,
        "termek_nev": "Dell XPS 15'' laptop",
        "gyarto": "Dell",
        "kategoria": "Laptop",
        "ar": 279990,
        "raktarkeszlet": 3,
        "leiras": "Dell XPS 15 hüvelykes laptop, Intel Core i9 processzorral, 32 GB RAM-mal és 1 TB SSD-vel.",
        "img": "https://www.notebookcheck-hu.com/uploads/tx_nbc2/DellXPS15-9510__1__02.jpg"
    },
    {
        id: 6,
        "termek_nev": "Logitech G Pro X Superlight egér",
        "gyarto": "Logitech",
        "kategoria": "Egér",
        "ar": 39990,
        "raktarkeszlet": 8,
        "leiras": "Logitech G Pro X Superlight vezeték nélküli gaming egér, HERO 25K szenzorral és LIGHTSPEED technológiával.",
        "img": "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-6.png?v=1"
    },
    {
        id: 7,
        "termek_nev": "AMD Ryzen 9 5900X processzor",
        "gyarto": "AMD",
        "kategoria": "Processzor",
        "ar": 119990,
        "raktarkeszlet": 12,
        "leiras": "AMD Ryzen 9 5900X processzor, 12 maggal és 24 szállal, 4.8 GHz-es maximális boost órajellel.",
        "img": "https://p1.akcdn.net/full/745267440.amd-ryzen-9-5900x-12-core-3-7ghz-am4-box-without-fan-and-heatsink.jpg"
    },
    {
        id: 8,
        "termek_nev": "Samsung Galaxy Watch 4",
        "gyarto": "Samsung",
        "kategoria": "Okosóra",
        "ar": 69990,
        "raktarkeszlet": 6,
        "leiras": "Samsung Galaxy Watch 4 okosóra, 1.4 hüvelykes Super AMOLED kijelzővel és pulzusmérővel.",
        "img": "https://images.samsung.com/is/image/samsung/p6pim/hu/2108/gallery/hu-galaxy-watch4-sm-r860nzkaeue-481231514?$650_519_PNG$"
    },

    {
        id: 9,
        "termek_nev": "Razer BlackWidow V3 Pro mechanikus billentyűzet",
        "gyarto": "Razer",
        "kategoria": "Billentyűzet",
        "ar": 64990,
        "raktarkeszlet": 9,
        "leiras": "Razer BlackWidow V3 Pro vezeték nélküli mechanikus gaming billentyűzet, Razer Green kapcsolókkal és RGB világítással.",
        "img": "https://s13emagst.akamaized.net/products/34505/34504611/images/res_69c17a53b6b3b26471f3b7732a727663.jpg"
    },
    {
        id: 10,
        "termek_nev": "Canon EOS R5 fényképezőgép",
        "gyarto": "Canon",
        "kategoria": "Fényképezőgép",
        "ar": 949990,
        "raktarkeszlet": 2,
        "leiras": "Canon EOS R5 tükör nélküli fényképezőgép, 45 megapixeles CMOS érzékelővel és 8K videofelvételi képességgel.",
        "img": "https://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c26ad194234d42b3cd9e582a21c99b"
    },
    {
        id: 11,
        "termek_nev": "Sony PlayStation 5 konzol",
        "gyarto": "Sony",
        "kategoria": "Játékkonzol",
        "ar": 249990,
        "raktarkeszlet": 4,
        "leiras": "Sony PlayStation 5 játékkonzol, 4K Ultra HD Blu-ray meghajtóval és hátizsákkal.",
        "img": "https://p1.akcdn.net/full/1228407091.sony-playstation-5-ps5-slim-digital-edition.jpg"
    },
    {
        id: 12,
        "termek_nev": "Bose QuietComfort 45 vezeték nélküli fejhallgató",
        "gyarto": "Bose",
        "kategoria": "Fejhallgató",
        "ar": 74990,
        "raktarkeszlet": 6,
        "leiras": "Bose QuietComfort 45 vezeték nélküli zajszűrő fejhallgató, 24 órás akkumulátor-élettartammal és kényelmes kialakítással.",
        "img": "https://images.euronics.hu/product_images/800x600/resize/2_jn4re147.png?v=1"
    },
    {
        id: 13,
        "termek_nev": "Microsoft Surface Pro 8 táblagép",
        "gyarto": "Microsoft",
        "kategoria": "Táblagép",
        "ar": 289990,
        "raktarkeszlet": 3,
        "leiras": "Microsoft Surface Pro 8 táblagép, 13 hüvelykes PixelSense kijelzővel és Intel Core i7 processzorral.",
        "img": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OUUF?ver=2a16&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
    },
    {
        id: 14,
        "termek_nev": "Xiaomi Mi Electric Scooter Pro 2 elektromos roller",
        "gyarto": "Xiaomi",
        "kategoria": "Elektromos roller",
        "ar": 129990,
        "raktarkeszlet": 8,
        "leiras": "Xiaomi Mi Electric Scooter Pro 2 elektromos roller, 45 km hatótávolsággal és 25 km/h maximális sebességgel.",
        "img": "https://www.xiaomishop.hu/img/52931/2758/2758.webp"
    },
    {
        id: 15,
        "termek_nev": "TP-Link Archer AX6000 WiFi 6 router",
        "gyarto": "TP-Link",
        "kategoria": "Router",
        "ar": 69990,
        "raktarkeszlet": 5,
        "leiras": "TP-Link Archer AX6000 WiFi 6 router, 8 nagy teljesítményű külső antennával és 2.5 Gbps sebességgel.",
        "img": "https://p1.akcdn.net/full/577083738.tp-link-archer-ax6000.jpg"
    },
];

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("store");

    dbo.createCollection("users", function(err, res) {
      console.log("Users created!");
    });

    dbo.createCollection("items", function(err, res) {
        if (err) throw err;
        console.log("Items created!");
        dbo.collection("items").insertMany(items, function(err, result) {
            if (err) throw err;
            console.log("Number of documents inserted: " + result.insertedCount);
            db.close();
        });
    });
});
