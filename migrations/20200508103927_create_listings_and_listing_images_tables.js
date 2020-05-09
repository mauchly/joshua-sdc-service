
exports.up = function(knex) {
  return knex.schema
    .createTable('listings', function(table) {
      table.string('listing_id').notNullable().primary();
      table.string('listing_type').notNullable();
      table.string('listing_category').notNullable();
      table.float('night_price').notNullable();
      table.float('avg_review').notNullable();
      table.integer('num_review').notNullable();
      table.integer('num_beds').notNullable();
      table.string('listing_title').notNullable();
      table.boolean('is_fav').notNullable();
    })
    .createTable('listing_images', function(table) {
      table.string('listing_id').references('listing_id').inTable('listings');
      table.string('image_url');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('listings').dropTable('listing_images');
};
