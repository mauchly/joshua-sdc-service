//POSTGRES
// const { Client } = require('pg');
const knex = require('./knex.js');
require('dotenv').config()

// const client = new Client({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT
// })

// client.connect(err => {
//   if (err) {
//     console.error('connection error', err.stack)
//   } else {
//     console.log('db connected')
//   }
// })

var selectAll = function(listing, callback) {
  // let ramdomListing1 = Math.floor(Math.random() * 1000000) + 10001;
  // let ramdomListing2 = Math.floor(Math.random() * 1000000) + 100010;
  // let ramdomListing3 = Math.floor(Math.random() * 1000000) + 1000100;
  // let ramdomListing4 = Math.floor(Math.random() * 1000000) + 5000000;
  // let ramdomListing5 = Math.floor(Math.random() * 1000000) + 7000000;
  // let ramdomListing6 = Math.floor(Math.random() * 1000000) + 9000000;

  let ramdomListing1 = +listing + 1;
  let ramdomListing2 = +listing + 2;
  let ramdomListing3 = +listing + 3;
  let ramdomListing4 = +listing + 4;
  let ramdomListing5 = +listing + 5;
  let ramdomListing6 = +listing + 6;

  knex.raw('select * from listings where listing_id = ANY(?)', [[ramdomListing1, ramdomListing2, ramdomListing3, ramdomListing4, ramdomListing5, ramdomListing6]])
    .then((rows) => {
      callback(null, rows);
    })
};

var selectImages = function(listing, callback) {
  let ramdomListing1 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing2 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing3 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing4 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing5 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing6 = Math.floor(Math.random() * 100) + 10001;

  knex.raw('select * from listing_images where listing_id = ANY(?)', [[ramdomListing1, ramdomListing2, ramdomListing3, ramdomListing4, ramdomListing5, ramdomListing6]])
    .then((rows) => {
      // console.log('image rows', rows);
      callback(null, rows);
    })
};



//MYSQL
// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'recommendations'
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   //console.log("Connected!");
// });

// var selectAll = function(listing, callback) {
//   let ramdomListing1 = Math.floor(Math.random() * 100) + 10001;
//   let ramdomListing2 = Math.floor(Math.random() * 100) + 10001;
//   let ramdomListing3 = Math.floor(Math.random() * 100) + 10001;
//   let ramdomListing4 = Math.floor(Math.random() * 100) + 10001;
//   let ramdomListing5 = Math.floor(Math.random() * 100) + 10001;
//   let ramdomListing6 = Math.floor(Math.random() * 100) + 10001;

//   let sql = `SELECT * FROM listings WHERE listing_id IN (${ramdomListing1},${ramdomListing2},${ramdomListing3},${ramdomListing4},${ramdomListing5},${ramdomListing6})`;
//   connection.query(sql, function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// var selectImages = function(listing, callback) {
//   let ramdomListing1 = Math.floor(Math.random() * 100) + 10001;
//   let ramdomListing2 = Math.floor(Math.random() * 100) + 10001;
//   let ramdomListing3 = Math.floor(Math.random() * 100) + 10001;
//   let ramdomListing4 = Math.floor(Math.random() * 100) + 10001;
//   let ramdomListing5 = Math.floor(Math.random() * 100) + 10001;
//   let ramdomListing6 = Math.floor(Math.random() * 100) + 10001;

//   let sql = `SELECT * FROM listing_images WHERE listing_id IN (${ramdomListing1},${ramdomListing2},${ramdomListing3},${ramdomListing4},${ramdomListing5},${ramdomListing6})`;
//   connection.query(sql, function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const addListing = (listing, callback) => {
//   let sql = `INSERT INTO listings (listing_id, listing_type, listing_category, night_price, avg_review, num_review, num_beds, listing_title, is_fav)
//   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//   connection.query(sql, [listing.listing_id, listing.listing_type, listing.listing_category, listing.night_price, listing.avg_review, listing.num_review, listing.num_beds, listing.listing_title, listing.is_fav], function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// }

// const updateListing = (listing, id, callback) => {
//   let sql = `UPDATE listings SET listing_id = ?, listing_type = ?, listing_category = ?, night_price = ?, avg_review = ?, num_review = ?, num_beds = ?, listing_title = ?, is_fav = ? WHERE listing_id = ${id}`;
//   connection.query(sql, [listing.listing_id, listing.listing_type, listing.listing_category, listing.night_price, listing.avg_review, listing.num_review, listing.num_beds, listing.listing_title, listing.is_fav], function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// }

// const deleteListing = (listing, id, callback) => {
//   let sql = `DELETE FROM listings WHERE listing_id = ${id}`;
//   connection.query(sql, function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// }

const addListing = (listing, callback) => {
  console.log('listing', listing);
  knex('listings')
    .insert({
      listing_id: listing.listing_id,
      listing_type: listing.listing_type,
      listing_category: listing.listing_category,
      night_price: listing.night_price,
      avg_review: listing.avg_review,
      num_review: listing.num_review,
      num_beds: listing.num_beds,
      listing_title: listing.listing_title,
      is_fav: listing.is_fav
    })
    .then((results) => {
      console.log('insert complete')
      callback(null, results);
    }
  )
}

const updateListing = (listing, id, callback) => {
  console.log('listing', listing);
  knex('listings')
    .where('listing_id', id)
    .update({
      listing_id: listing.listing_id,
      listing_type: listing.listing_type,
      listing_category: listing.listing_category,
      night_price: listing.night_price,
      avg_review: listing.avg_review,
      num_review: listing.num_review,
      num_beds: listing.num_beds,
      listing_title: listing.listing_title,
      is_fav: listing.is_fav
    })
    .then((results) => {
      console.log('update complete')
      callback(null, results);
    }
  )
}

const deleteListing = (listing, id, callback) => {
  console.log('listing', listing);
  knex('listings')
    .where('listing_id', id)
    .del()
    .then((results) => {
      console.log('delete complete')
      callback(null, results);
    }
  )
}

module.exports.selectAll = selectAll;
module.exports.selectImages = selectImages;
module.exports.addListing = addListing;
module.exports.updateListing = updateListing;
module.exports.deleteListing = deleteListing;

// {
  // "listing_id": 10200,
  // "listing_type": "Shared room",
  // "listing_category": "apartment",
  // "night_price": 171.477,
  // "avg_review": 3.24735,
  // "num_review": 28,
  // "num_beds": 4,
  // "listing_title": "Ex sint ipsum Lorem adipisicing adipisicing.",
  // "is_fav": 0
// }