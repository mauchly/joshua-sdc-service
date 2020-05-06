const loremIpsum = require("lorem-ipsum").loremIpsum;
const fs = require('fs');

const listing_type_options = ['Entire place', 'Private room', 'Hotel room', 'Shared room'];
const listing_category_options = ['apartment','house', 'hotel', 'cabin', 'bnb'];

let listingsStream = fs.createWriteStream('./database/listingsCSV');
let listing_imagesStream = fs.createWriteStream('./database/listings_imagesCSV');

const listingDataLabels = `listing_id, listing_type listing_category, night_price, avg_review, num_review, number_beds, listing_title, is_fav`;
const listingImagesDataLabels = `listing_id, image_url`;

//generate data for listings table
let generateDataListingsTable = () => {
  let result = '';
  for (let i = 0; i < 10000; i ++) {
    let listing_id = 10001 + i;
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
    result += `${listing_id}, ${listing_type} ${listing_category}, ${night_price}, ${avg_review}, ${num_review}, ${number_beds}, ${listing_title}, ${is_fav}`
  }
  return result;
}

//generate data for listing_images
let generateDataListingsImagesTable = () => {
  let result = '';
  for (let i = 0; i < 10000; i ++) {
    let listing_id = 10001 + i;
    for (let j = 0; j < 5; j++) {
      let image_url = `https://picsum.photos/300/200?random=${listing_id}${j}`;
      result += `${listing_id}, ${image_url}`;
    }
  }
  return result;
}

const createListingsCSV = () => {
  let result = generateDataListingsTable();
  listingsStream.write(listingDataLabels);
  listingsStream.write(result);
  listingsStream.end();
}


const createListingsImagesCSV = () => {
  let result = generateDataListingsImagesTable();
  listing_imagesStream.write(listingImagesDataLabels);
  listing_imagesStream.write(result);
  listing_imagesStream.end();
}

createListingsCSV();
createListingsImagesCSV();