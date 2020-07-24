
exports.seed = async function(knex) {
  await knex('items').insert([
    {name: 'eggs', description: 'organic, 12 eggs', price: 2.49, location_id: 'Michigan'},
    {name: 'milk', description: 'whole milk, 1 liter', price: 3.99, location_id: 'Ohio'},
    {name: 'beef', description: 'cow meat', price: 6.99, location_id: 'Illinois'},
    {name: 'turkey', description: 'best turkey', price: 4.99, location_id: 'Michigan'},
    {name: 'tomato', description: 'vine tomato', price: 1.89, location_id: 'Ohio'},
    {name: 'onion', description: 'red onion', price: 1.59, location_id: 'Illinois'},
  ])
};
