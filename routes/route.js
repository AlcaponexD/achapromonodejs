const express = require("express");

const router = express.Router();
const userController = require("../controllers/controllerUser");
const loginController = require("../controllers/controllerLogin");
const brandController = require("../controllers/controlerBrand");
const usercheck = require("../middlewares/usercheck");

/*
 * public routes
 */
router.post("/user", userController.create);

router.post("/login", loginController.login);

/*
 * private routes
 */

router.put("/user", usercheck, userController.update);
router.get("/user", usercheck, userController.index);

router.post("/brand", usercheck, brandController.create);
router.get("/brand", usercheck, brandController.index);

module.exports = router;
