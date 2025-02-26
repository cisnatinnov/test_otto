/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('brands').del()
  await knex('brands').insert([
    {id: '780c3e0a-9a3c-4185-a9bf-7640823e6e1b', name: 'Indomilk', createdAt: '2025-02-26 07:47:00', updatedAt: '2025-02-26 07:47:00'}
  ]);
};
