const loremIpsum = require("lorem-ipsum").loremIpsum;
const fs = require('fs');

//Needed to allow multiple loops to run without timeout
require('events').EventEmitter.defaultMaxListeners = 50;

const listing_type_options = ['Entire place', 'Private room', 'Hotel room', 'Shared room'];
const listing_category_options = ['apartment','house', 'hotel', 'cabin', 'bnb'];

//Streams to process both files
let listingsStream = fs.createWriteStream('./database/listingsCSV');
let listing_imagesStream = fs.createWriteStream('./database/listings_imagesCSV');

//Initial row for each table
const listingDataLabels = `listing_id, listing_type, listing_category, night_price, avg_review, num_review, number_beds, listing_title, is_fav\n`;
const listingImagesDataLabels = `listing_id, image_url\n`;

//generate data for listings table
const generateDataListingsTable = (id) => {
  let listingsResult = '';
  for (let i = 0; i < 10000; i ++) {
    let listing_id = id + i;
    let listing_type =  listing_type_options[Math.floor(Math.random() * 4)];
    let listing_category = listing_category_options[Math.floor(Math.random() * 5)];
    let night_price = 100 + Math.random() * 100;
    let avg_review = 2 + Math.random() * 3;
    let num_review = 2 + Math.floor(Math.random() * 50)
    let number_beds = 1 + Math.floor(Math.random() * 7)
    let listing_title = loremIpsum({
      count: 1,
      format:  "plain",
      sentenceLowerBound: 3,
      sentenceUpperBound: 6,
      units: "sentences"
    });
    let is_fav = i % 20 === 0 ? true : false;
    listingsResult += `${listing_id}, ${listing_type}, ${listing_category}, ${night_price}, ${avg_review}, ${num_review}, ${number_beds}, ${listing_title}, ${is_fav}\n`;
  }
  return listingsResult;
}

//generate data for listing_images
const generateDataListingsImagesTable = (id) => {
  let result = '';
  for (let i = 0; i < 10000; i ++) {
    let listing_id = id + i;
    for (let j = 0; j < 5; j++) {
      let image_url = `https://picsum.photos/300/200?random=${listing_id}${j}\n`;
      result += `${listing_id}, ${image_url}`;
    }
  }
  return result;
}

// //Method called to generate 10M records, drain method need to clear out buffer to allow multiple writes
const recordGenerator = (dataFunc, stream, initString) => {
  let listingId = 1;
  for (let i = 0; i < 1000; i++) {
    if (i === 0) {
      let result = dataFunc(listingId);
      stream.write(initString);
      let write = stream.write(result);
      if (!write) {
        stream.once('drain', dataFunc);
      }
    } else {
      listingId += 10000;
      let data = dataFunc(listingId);
      let write = stream.write(data);
      if (!write) {
        stream.once('drain', dataFunc);
      }
    }
    console.log('listingId', listingId);
  }
  stream.end();
}

// createListingsCSV();
// createListingsImagesCSV();

recordGenerator(generateDataListingsTable, listingsStream, listingDataLabels);
recordGenerator(generateDataListingsImagesTable, listing_imagesStream, listingImagesDataLabels);