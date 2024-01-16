const router = require("express").Router();

router.use("/timestamp", require("./timestamp"));
router.use("/req", require("./req"));
router.use("/short", require("./short"));
router.use("/metadata", require("./metadata"));
router.use("/tracker", require("./tracker"));

module.exports = router;