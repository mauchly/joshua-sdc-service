require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');
const knex = require('../database/knex');

const app = express();

app.use(express.text());
app.use(express.urlencoded());
app.use(express.json());

var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/bundle.js', (req, res) => {
  if (req.header('Accept-Encoding').includes('br')) {
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
    console.log('sent compressed file');
    return res.sendFile(path.join(__dirname, '../client/dist', '/bundle.js.br'));
  } else if (req.header('Accept-Encoding').includes('gz')) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
    return res.sendFile(path.join(__dirname, '../client/dist', '/bundle.js.gz'));
  }
});

app.use(express.static(__dirname + '/../client/dist'));

//MYSOL
// app.get('/listings', function (req, res) {
//   db.selectAll(req.body, function(err, data) {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });

app.get('/listings', function (req, res) {

  console.log('req.query.data', typeof req.query.data);

  let listingId = req.query.data;

  // let url = req.headers.referer;
  // let listingId = url.split('/').pop();

  // if (typeof +listingId !== 'number') {
  //   listingId = '9000000';
  // }

  db.selectAll(listingId, function(err, data) {
    if (err) {
      console.log('err at get req');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  })
  // console.log('req.query', req.query);
  // knex('listings')
  //   .where({listing_id: req.query.data})
  //   .then((rows) => {
  //     console.log('rows', rows);
  //     res.send(rows[0]);
  //   })
});

//Add POST - INSERT

app.post('/listings', function (req, res) {
  console.log(req.body);
  db.addListing(req.body, function(err, data) {
    if (err) {
      console.log('error');
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

//Add PUT - UPDATE

app.put('/listings/:id', function (req, res) {
  console.log(req.params.id);
  db.updateListing(req.body, req.params.id, function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

//Add DELETE - DELETE

app.delete('/listings/:id', function (req, res) {
  db.deleteListing(req.body, req.params.id, function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.get('/images', urlencodedParser, function (req, res) {
  console.log('server /images');
  db.selectImages(req.body, function(err, data) {
    if (err) {
      console.log('error images');
      res.sendStatus(500);
    } else {
      // console.log('image data', data);
      res.send(data);
    }
  });
});

app.get('/:id', (req, res) => {
  console.log('send file');
  res.sendFile(path.join(__dirname, '../client/dist', '/index.html'));
});

app.listen(3003, function() {
  console.log('listening on port 3003!');
});

module.exports = app;
