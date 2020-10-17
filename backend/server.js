const express = require("express");
const webRoutes = require("./routes/web");

const app = express();
var cors = require("cors");

const appConfig = require("./configs/app");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/", webRoutes);

app.listen(appConfig.expressPort, () => {
  console.log(
    `Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`
  );
});
