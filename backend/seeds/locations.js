exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("location")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("location").insert([
        { name: "Salida de Planta" },
        { name: "Local Delivery Center" },
        { name: "Proceso de Entrega" },
        { name: "Entregado" },
        { name: "Fallido" },
      ]);
    });
};
