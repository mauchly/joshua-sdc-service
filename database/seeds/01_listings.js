
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
            {
                  listing_id: 10200,
                  listing_type: "Shared room",
                  listing_category: "apartment",
                  night_price: 171.477,
                  avg_review: 3.24735,
                  num_review: 28,
                  num_beds: 4,
                  listing_title: "Ex sint ipsum Lorem adipisicing adipisicing.",
                  is_fav: 0
              },
              {
                    listing_id: 10201,
                    listing_type: "room",
                    listing_category: "apartm",
                    night_price: 173.477,
                    avg_review: 3.24325,
                    num_review: 27,
                    num_beds: 3,
                    listing_title: "Ex si ipsum Lorem adipisicing adipisicing.",
                    is_fav: 1
                },            
              {
                      listing_id: 10202,
                      listing_type: "Sed room",
                      listing_category: "ment",
                      night_price: 1711.477,
                      avg_review: 33.24735,
                      num_review: 283,
                      num_beds: 41,
                      listing_title: "sint ipsum Lorem adipisicing adipisicing.",
                      is_fav: 0
              }
      ]);
    });
};

