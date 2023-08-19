const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "bayuw",
    job: "programmer"
  });
});

module.exports = router;
