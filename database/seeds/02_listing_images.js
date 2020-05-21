
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listing_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('listing_images').insert([
        {
          listing_id: 10200,
          image_url: "https://picsum.photos/300/200?random=10"
        },
        {
          listing_id: 10200,
          image_url: "https://picsum.photos/300/200?random=11"
        },
        {
          listing_id: 10200,
          image_url: "https://picsum.photos/300/200?random=12"
        },
        {
          listing_id: 10200,
          image_url: "https://picsum.photos/300/200?random=13"
        },
        {
          listing_id: 10200,
          image_url: "https://picsum.photos/300/200?random=14"
        },
        {
          listing_id: 10201,
          image_url: "https://picsum.photos/300/200?random=15"
        },
        {
          listing_id: 10201,
          image_url: "https://picsum.photos/300/200?random=16"
        },
        {
          listing_id: 10201,
          image_url: "https://picsum.photos/300/200?random=17"
        },
        {
          listing_id: 10201,
          image_url: "https://picsum.photos/300/200?random=18"
        },
        {
          listing_id: 10201,
          image_url: "https://picsum.photos/300/200?random=19"
        },
        {
          listing_id: 10202,
          image_url: "https://picsum.photos/300/200?random=20"
        },
        {
          listing_id: 10202,
          image_url: "https://picsum.photos/300/200?random=21"
        },
        {
          listing_id: 10202,
          image_url: "https://picsum.photos/300/200?random=22"
        },
        {
          listing_id: 10202,
          image_url: "https://picsum.photos/300/200?random=23"
        },
        {
          listing_id: 10202,
          image_url: "https://picsum.photos/300/200?random=24"
        }
      ]);
    });
};
