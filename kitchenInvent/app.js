const express = require("express");
const session = require("express-session");
const app = express();
const passport = require('passport');              
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = 8001;

mongoose.connect(
 "mongodb://localhost/kitchen-invent",
 { useNewUrlParser: true },
 function(err, connection) {
  if (err) throw err;
  else console.log("connected to mongodb");
 }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

app.use(
 session({
  secret: "writer",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ url: "mongodb://localhost/inventory-session" })
 })
);

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "development") {
 var webpack = require("webpack");
 var webpackConfig = require("./webpack.config");
 var compiler = webpack(webpackConfig);

 app.use(
  require("webpack-dev-middleware")(compiler, {
   noInfo: true,
   publicPath: webpackConfig.output.publicPath
  })
 );

 app.use(require("webpack-hot-middleware")(compiler));
}
app.use(cors());

require('./server/module/passport')(passport)

// app.use("/api", require("./server/routes/api"));
app.use(require("./server/routes/index"));
app.use("*", require("./server/routes"));


app.listen(port, () => {
 console.log(`server is running on http://localhost:${port}`);
});