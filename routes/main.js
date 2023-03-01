const express = require("express");
const path = require("node:path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(
    path.join(req.app.get("project-root-path"), "views", "main.html")
  );
});

router.use(express.json());
router.use(express.urlencoded());

router.post("/", (req, res) => {
  res.status(200).json({
    message: "Order for main course placed",
    orderDetails: req.body,
  });
});

module.exports = router;
