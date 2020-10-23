const Order = require("../models/Order");

exports.getAll = (req, res) => {
  Order.all().then((tasks) => {
    res.send(tasks);
  });
};

exports.addOrder = async (req, res) => {
  let order = {};
  order.name = req.body.name;
  const registered_order = await Order.create(order);
  await Order.update(registered_order.id_order, 1);

  if (req.xhr || req.headers.accept.indexOf("json") > -1) {
    return res.json(registered_order);
  }
};

exports.updateOrder = (req, res) => {
  let id = req.params.id;
  let location = req.params.location;

  Order.update(id, location).then(() => {
    res.send("success");
  });
};

exports.orderPath = (req, res) => {
  let id = req.params.id;
  Order.ordersTrack(id).then((order) => {
    res.send(order);
  });
};
