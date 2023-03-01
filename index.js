const express = require("express");
const path = require("node:path");
const cors = require("cors");

const app = express();

app.use(cors()); // ignore
app.set("project-root-path", __dirname);
const rootPath = app.get("project-root-path");

app.use((req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "404.html"));
});

app.listen(3000, () => console.log("Server started on port 3000"));
