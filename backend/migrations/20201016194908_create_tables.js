exports.up = function (knex) {
  return knex.schema
    .createTable("location", (table) => {
      table.increments("id_location");
      table.string("location_name", 512).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("order", (table) => {
      table.increments("id_order");
      table.string("name", 512).notNullable();
      table
        .integer("location_id")
        .unsigned()
        .notNullable()
        .references("id_location")
        .inTable("location")
        .onDelete("CASCADE")
        .index();
      table.boolean("delivered_center").notNullable().defaultTo(false);
      table.boolean("delivered").notNullable().defaultTo(false);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      //table.foreign("location_id").references("location.id");
    })
    .createTable("transfer", (table) => {
      table.increments("id_transfer");
      table
        .integer("order_id")
        .unsigned()
        .notNullable()
        .references("id_order")
        .inTable("order")
        .onDelete("CASCADE")
        .index();
      table
        .integer("location_id")
        .unsigned()
        .notNullable()
        .references("id_location")
        .inTable("location")
        .onDelete("CASCADE")
        .index();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      // table.foreign("order_id").references("order.id");
      // table.foreign("location_id").references("location.id");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("transfer")
    .dropTable("order")
    .dropTable("location");
};
