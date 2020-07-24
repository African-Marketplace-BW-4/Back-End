
exports.seed = async function(knex) {
  await knex("items").truncate()
};
