const express = require("express");
const path = require("node:path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(
    path.join(req.app.get("project-root-path"), "views", "place-order.html")
  );
});

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post("/", (req, res) => {
  Object.keys(req.body).forEach((key) => {
    req.body[key] = parseInt(req.body[key]) || 0;
  });

  if (req.is("urlencoded") || req.is("form-data")) {
    res
      .status(200)
      .send("Order placed successfully" + JSON.stringify(req.body));
  } else if (req.is("json")) {
    res.status(200).json({
      message: "Order placed",
      orderDetails: req.body,
    });

    // copy and paste in browser console to test /api endpoint
    const browserTestCode = `
      fetch(
        'http://localhost:3000/api/order',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({burgers: 2})
        })
    `;
  }
});

module.exports = router;
