const express = require('express');
const { getService } = require("../controller/service-controller");
const router = express.Router();

router.route("/Service").get(getService);

module.exports = router;
