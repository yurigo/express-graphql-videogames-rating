const router = require("express").Router();

const c = require("../controller/users.controller");

// router.get("/all", c.all);
// router.get("/get/:id", c.get);
// router.get("/add/:login/:name", c.add);
// router.get("/del/:id", c.del);

router.get("/", c.all);
router.get("/:id", c.get);
router.get("/:id/videogames", c.videogames);

router.post("/", c.add);
router.put("/:id", c.put);
router.delete("/:id", c.del);

module.exports = router;
