const express = require("express");
const router = express.Router();
const controller = require("../controllers/personController");
const {body} = require("express-validator");

router.get("/", controller.getAll);
router.post("/", body("name").exists(), body("name").exists(), controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);
module.exports = router;
