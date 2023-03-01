const express = require("express");
const path = require("node:path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(
    path.join(req.app.get("project-root-path"), "views", "sides.html")
  );
});

module.exports = router;
