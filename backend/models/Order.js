const knex = require("../database/connection");

exports.all = async () => {
  return await knex("order")
    .select("*")
    .innerJoin("location", "order.location_id", "=", "location.id_location");
};

exports.find = async (id) => {
  return await knex("order").select("*").where("id_order", id).first();
};

exports.create = async ({ name }) => {
  order = {
    name,
    location_id: 1,
  };
  id_created = await knex("order").insert(order);
  await transfer(id_created);
  return id_created;
};

exports.update = async (id, location) => {
  order = await this.find(id);
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

  id_update = await knex("order").update(order).where("id_order", id);
  await this.transfer(id_update);
  return id_update;
};

exports.ordersTrack = async (id) => {
  order = await this.find(id)
    .leftJoin("transfer", "order.transfer_id", "=", "transfer.order_id")
    .leftJoin("location", "transfer.location_id", "=", "location.id_location");

  return order;
};

const transfer = async (id) => {
  await this.find(id).then((order) => {
    knex("transfer").insert({
      order_id: order.id_order,
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
