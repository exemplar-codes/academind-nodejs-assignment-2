const express = require("express");
const path = require("node:path");
const cors = require("cors");

const mainRouter = require("./routes/main");
const sidesRouter = require("./routes/sides");
const orderRouter = require("./routes/order");

const app = express();

app.use(cors()); // ignore
app.set("project-root-path", __dirname);
const rootPath = app.get("project-root-path");

app.use(express.static(path.join(rootPath, "public")));

app.use("/sides", sidesRouter); // kept above, to prevent premature handling by mainRouter
app.use("/main", mainRouter);
// IMPORTANT: this is a callback, don't call it.
// pluggable middlewares need to be called,
// since they return a configured middleware(based on arguments passed, if any)
app.use(["/order", "/api/order"], orderRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(rootPath, "views", "index.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootPath, "views", "404.html"));
});

app.listen(3000, () => console.log("Server started on port 3000"));
