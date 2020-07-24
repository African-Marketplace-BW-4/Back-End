
exports.seed = async function(knex) {
  await knex.raw('TRUNCATE TABLE items CASCADE')
  await knex.raw('TRUNCATE TABLE locations CASCADE')
};
