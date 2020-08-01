
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: "user1",
          password: "pass1",
          email: "email@null.com",
          first_name: "Bloopty",
          last_name: "Malibu",
        },
        {
          username: "user2",
          password: "password22",
          email: "email2@null.com",
          first_name: "Free",
          last_name: "Sink",
        },
        {
          username: "user3",
          password: "pass3",
          email: "email3@null.com",
          first_name: "Man",
          last_name: "Lady",
        },
      ]);
    });
};
