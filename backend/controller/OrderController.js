const Order = require("../models/Order");

exports.getAll = (req, res) => {
  Order.all().then((tasks) => {
    res.send(tasks);
  });
};

exports.addOrder = (req, res) => {
  let order = {};
  order.name = req.body.name;
  Order.create(order).then((id) => {
    if (req.xhr || req.headers.accept.indexOf("json") > -1) {
      Order.find(id).then(() => res.send("success"));
    }
  });
};
/*
exports.updateOrder = (req, res) => {

};*/
