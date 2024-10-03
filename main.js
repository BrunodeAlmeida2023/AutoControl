const bodyParser = require("body-parser");
const express = require("express");
const mainRoutes = require("./routes/main.routes")
const app = express();

app.use(bodyParser.json());

app.use("/concessionaria", mainRoutes)

app.listen(3030, () => {
    console.log("A concessionaria roda na porta 3030!")
});
