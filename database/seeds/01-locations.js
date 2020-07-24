
exports.seed = function(knex, Promise) {
  return knex('accounts').truncate()
    .then(function () {
      return knex('locations').insert([
    {location: 'Michigan'},
    {location: 'Illinois'},
    {location: 'Ohio'},
  ])
})
};
