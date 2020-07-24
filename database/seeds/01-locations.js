
exports.seed = function(knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return knex('locations').insert([
    {location: 'Michigan'},
    {location: 'Illinois'},
    {location: 'Ohio'},
  ])
})
};
