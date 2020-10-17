exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("location")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("location").insert([
        { location_name: "Salida de Planta" },
        { location_name: "Local Delivery Center" },
        { location_name: "Proceso de Entrega" },
        { location_name: "Entregado" },
        { location_name: "Fallido" },
      ]);
    });
};
