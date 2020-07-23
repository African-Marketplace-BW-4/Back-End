
exports.seed = async function(knex) {
  await knex('locations').truncate()
  await knex('items').truncate()
};
