
exports.seed = function(knex, Promise) {
  return knex('locations').truncate()
    .then(function () {
      return knex('locations').insert([
    {location: 'Michigan'},
    {location: 'Illinois'},
    {location: 'Ohio'},
  ])
})
};
