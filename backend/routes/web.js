const router = require("express").Router();
const orderController = require("../controller/OrderController");

router.get("/", orderController.getAll);
router.post("/", orderController.addOrder);
router.post("/update/:id/:location", orderController.updateOrder);

module.exports = router;
