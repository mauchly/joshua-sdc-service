const Faker = require('faker');

let id_counter = 20000000;

function generateArtilleryData(userContext, events, done) {

  const listing_type_options = ['Entire place', 'Private room', 'Hotel room', 'Shared room'];
  const listing_category_options = ['apartment','house', 'hotel', 'cabin', 'bnb'];

  // const listing_id = Math.floor(Math.random() * 10000000) + 90000000;
  const listing_id = id_counter;
  const listing_type = listing_type_options[Math.floor(Math.random() * 4)];
  const listing_category = listing_category_options[Math.floor(Math.random() * 5)];
  const night_price = 100 + Math.random() * 100;
  const avg_review = 2 + Math.random() * 3;
  const num_review = 2 + Math.floor(Math.random() * 50)
  const num_beds = 1 + Math.floor(Math.random() * 7)
  const listing_title = Faker.lorem.sentence(3, 6);
  const is_fav = (Math.floor(Math.random() * 20) + 1) % 20 === 0 ? true : false;

  userContext.vars.listing_id = listing_id;
  userContext.vars.listing_type = listing_type;
  userContext.vars.listing_category = listing_category;
  userContext.vars.night_price = night_price;
  userContext.vars.avg_review = avg_review;
  userContext.vars.num_review = num_review;
  userContext.vars.num_beds = num_beds;
  userContext.vars.listing_title = listing_title;
  userContext.vars.is_fav = is_fav;

  id_counter++;

  return done();
}
module.exports = {
  generateArtilleryData
};