/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('vouchers', (table) => {
    table.string('id').primary();
    table.string('brand_id').unsigned().notNullable();
    table
      .foreign('brand_id')
      .references('id')
      .inTable('brands')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('name').notNullable().unique();
    table.integer('point_value').notNullable();
    table.timestamps(true, true, { useNull: true }); // Adds `created_at` and `updated_at` columns
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('vouchers');
};
