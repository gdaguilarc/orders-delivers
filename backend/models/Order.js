const knex = require("../database/connection");

exports.all = () => {
  return knex("order").select("*");
};

exports.create = (order) => {
  order = {
    name: order.name,
    location_id: 1,
  };
  id_created = knex("order").insert(order);
  this.find(id_created).then((order) => {
    knex("transfer").insert({
      order_id: order.id,
      location_id: order.location_id,
    });
  });
  return id_created;
};
/*
exports.update = (id, location) => {
  order = {
    location_id: location
  }

  return knex("tasks")
    .update(task)
    .update("updated_at", knex.fn.now())
    .where("id", id);
};
*/
exports.find = (id) => {
  return knex("order").select("*").where("id", id).first();
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
