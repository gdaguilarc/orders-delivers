const knex = require("../database/connection");

exports.all = () => {
  return knex("order").select("*");
};

exports.find = (id) => {
  return knex("order").select("*").where("id", id).first();
};

exports.create = (order) => {
  order = {
    name: order.name,
    location_id: 1,
  };
  id_created = knex("order").insert(order);
  this.transfer(id_created);
  return id_created;
};

exports.update = (id, location) => {
  order = this.find(id);
  if (
    (order.delivered_center && location == 1) ||
    (order.delivered && location != 4)
  ) {
    return null;
  }
  if (!order.delivered_center && location > 1) {
    order.delivered_center = true;
  }
  if (!order.delivered && location == 4) {
    order.delivered = true;
  }

  order.location_id = location;

  id_update = knex("order").update(order).where("id", id);
  this.transfer(id_update);
  return id_update;
};

transfer = (id) => {
  this.find(id).then((order) => {
    knex("transfer").insert({
      order_id: order.id,
      location_id: order.location_id,
    });
  });
};
/*

exports.PENDING = "pending";
exports.DONE = "done";

exports.all = () => {
  return knex.select("*").from("tasks");
};

exports.create = (task) => {
  return knex("tasks").insert({ description: task.description });
};

exports.find = (id) => {
  return knex.select("*").from("tasks").where("id", id).first();
};

exports.update = (id, task) => {
  return knex("tasks")
    .update(task)
    .update("updated_at", knex.fn.now())
    .where("id", id);
};

exports.delete = (id) => {
  return knex("tasks").delete().where("id", id);
};
*/
