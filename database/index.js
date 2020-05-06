//POSTGRES
const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})



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

// module.exports.selectAll = selectAll;
// module.exports.selectImages = selectImages;
// module.exports.addListing = addListing;
// module.exports.updateListing = updateListing;
// module.exports.deleteListing = deleteListing;

// {
//   "listing_id": 10200,
//   "listing_type": "Shared room",
//   "listing_category": "apartment",
//   "night_price": 171.477,
//   "avg_review": 3.24735,
//   "num_review": 28,
//   "num_beds": 4,
//   "listing_title": "Ex sint ipsum Lorem adipisicing adipisicing.",
//   "is_fav": 0
// }