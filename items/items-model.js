const db = require('../database/dbConfig')

module.exports = {
    get,
    getById,
    add,
    update,
    remove,
  };

  function get() {
      return db('items as i')
      .join('locations as l', 'l.id', 'i.location_id')
      .select('i.id', 'i.name', 'i.description', 'i.price', 'l.location')
  }
  
  
  function getById(id) {
    return db('items as i')
    .join('locations as l', 'l.id', 'i.location_id')
    .where('i.id', id)
    .select('i.id', 'i.name', 'i.description', 'i.price', 'l.location')
}

function add(item) {
    return db('items')
    .insert(item)
    .then(ids => {
       return getById(ids[0]) 
    })
}

function update(change, id) {
    return db('items')
    .update(change)
    .where('id', id)
    .then(() => {
        return getById(id)
    })
}

function remove(id) {
    return db('items')
    .where('id', id)
    .del()
}