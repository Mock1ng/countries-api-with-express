const express = require("express");
const router = express.Router();
const { getAll, getByName, getByRegion } = require("../models/country");

router.get("/", async (req, res) => {
  try {
    if (Object.prototype.hasOwnProperty.call(req.query, "name")) {
      const countries = await getByName(req.query.name);

      res.render("index", {
        countries
      });
    } else if (Object.prototype.hasOwnProperty.call(req.query, "region")) {
      const countries = await getByRegion();

      res.render("index", {
        countries
      });
    } else {
      const countries = await getAll();

      res.render("index", {
        countries
      });
    }
  } catch (error) {
    res.status(500).render("error");
  }
});

module.exports = router;
