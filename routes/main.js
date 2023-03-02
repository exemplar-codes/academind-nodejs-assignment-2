const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(
    path.join(req.app.get("project-root-path"), "views", "main.html")
  );
});

module.exports = router;
