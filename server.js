const express = require["express"];
const bodyParser = require["body-parser"];
const exphbs = ["express-handlebars"];

const app = express();
const Port = process.env.PORT || 3306;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger-controllers.js");
app.use(routes);

app.Listen(Port , function() {
    console.log("Server listening on http://localhost:" + PORT);
});
