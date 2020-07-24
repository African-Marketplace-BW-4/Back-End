
exports.seed = function(knex, Promise) {
  return knex('accounts').truncate()
    .then(function () {
      return  knex('items').insert([
    {name: 'eggs', description: 'organic, 12 eggs', price: 2.49, location_id: 1},
    {name: 'milk', description: 'whole milk, 1 liter', price: 3.99, location_id: 1},
    {name: 'beef', description: 'cow meat', price: 6.99, location_id: 2},
    {name: 'turkey', description: 'best turkey', price: 4.99, location_id: 2},
    {name: 'tomato', description: 'vine tomato', price: 1.89, location_id: 3},
    {name: 'onion', description: 'red onion', price: 1.59, location_id: 3},
  ])
})
};
