const router = require("express").Router();
const orderController = require("../controller/OrderController");

router.get("/", orderController.getAll);
router.post("/", orderController.addOrder);
router.post("/update/:id/:location", orderController.updateOrder);
/*
router.get("/", homepageController.index);

router.post("/tasks", tasksController.store);

router.get("/tasks/:id", tasksController.get);
router.put("/tasks/:id", tasksController.done);
router.delete("/tasks/:id", tasksController.delete);
*/
module.exports = router;
