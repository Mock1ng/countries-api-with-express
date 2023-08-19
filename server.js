const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const homeController = require("./routes");
const userController = require("./routes/User");
const errorController = require("./routes/error");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", homeController);
app.use("/user", userController);
app.use("/error", errorController);

app.listen(process.env.PORT || 3000, () => console.log("server is running"));
