/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('brands', (table) => {
    table.string('id').primary();
    table.string('name').notNullable().unique();
    table.timestamps(true, true, { useNull: true }); // Adds `created_at` and `updated_at` columns
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('brands');
};
