/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('vouchers').del()
  await knex('vouchers').insert([
    {
      id: '780c3e0a-9a3c-4185-a9bf-7640823e6e1b',
      brand_id: '780c3e0a-9a3c-4185-a9bf-7640823e6e1b',
      name: 'Indomilk',
      point_value: 10,
      created_at: '2025-02-26 07:47:00',
      updated_at: '2025-02-26 07:47:00'
    }
  ]);
};
