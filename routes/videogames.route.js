const router = require("express").Router();

const c = require("../controller/videogames.controller");

router.get("/", c.all);
router.get("/:id", c.get);
router.post("/", c.post);

module.exports = router;
