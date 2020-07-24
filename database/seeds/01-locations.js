
exports.seed = async function(knex) {
  await knex('locations').insert([
    {location: 'Michigan'},
    {location: 'Illinois'},
    {location: 'Ohio'},
  ])
};
