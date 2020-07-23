
exports.up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
      table.increments('id')
      table.text('username').notNullable().unique()
      table.text('password').notNullable()
      table.text('first_name').notNullable()
      table.text('last_name').notNullable()
      table.text('email').notNullable().unique()
      
  })
  await knex.schema.createTable('items', (table) => {
      table.increments('id')
      table.text('name').notNullable()
      table.text('description').notNullable()
      table.decimal('price').notNullable()
      table.integer('location_id')
           .references('id')
           .inTable('locations')
           .onDelete('RESTRICT')
           .onUpdate('CASCADE'); 
  })
  await knex.schema.createTable('locations', (table) => {
      table.increments('id')
      table.text('location').notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('items')
  await knex.schema.dropTableIfExists('locations')
  await knex.schema.dropTableIfExists('users')
};
