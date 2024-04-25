const express = require('express');
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const uuid = require("uuid");

// MongoDB connection
const mongourl = "mongodb://localhost:27017/store";
var db;

MongoClient.connect(mongourl, (err, database) => {
    if (err) return console.log(err);
    db = database.db("store");
});

// Get all items
router.get("/", (req, res) => {
    db.collection('items').find().toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Add new item
router.post('/', (req, res) => {
    db.collection("items").insertOne({
        id: uuid.v4(),
        termek_nev: req.body.termek_nev,
        gyarto: req.body.gyarto,
        kategoria: req.body.kategoria,
        ar: req.body.ar,
        raktarkeszlet: req.body.raktarkeszlet,
        leiras: req.body.leiras,
        img: req.body.img
    });
    res.json({ success: true });
});

// Update item
router.put("/:id", (req, res) => {
    var myquery = { id: req.params.id };
    var newvalues = {
        $set: {
            termek_nev: req.body.termek_nev,
            gyarto: req.body.gyarto,
            kategoria: req.body.kategoria,
            ar: req.body.ar,
            raktarkeszlet: req.body.raktarkeszlet,
            leiras: req.body.leiras,
            img: req.body.img
        }
    };
    db.collection("items").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated...");
    }, { upsert: true });
    res.send('ok');
});

// Increment item stock
router.put("/:id/add", (req, res) => {
    var myquery = { id: req.params.id };
    db.collection("items").updateOne(myquery, {
        $inc: { raktarkeszlet: 1 }
    }, function(err, res) {
        if (err) throw err;
        console.log("1 document updated...");
    });
    res.send('ok');
});

// Delete item
router.delete('/:id', (req, res) => {
    var myquery = { id: req.params.id };
    db.collection("items").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted...");
    });
    res.send('ok');
});

module.exports = router;
