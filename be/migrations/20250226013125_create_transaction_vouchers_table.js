/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('transaction_vouchers', (table) => {
    table.string('id').primary();
    table.string('transaction_id').unsigned().notNullable();
    table
      .foreign('transaction_id')
      .references('id')
      .inTable('transactions')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('voucher_id').unsigned().notNullable();
    table
      .foreign('voucher_id')
      .references('id')
      .inTable('vouchers')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.integer('quantity').notNullable();
    table.timestamps(true, true, { useNull: true }); // Adds `created_at` and `updated_at` columns
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('transaction_vouchers');
};
