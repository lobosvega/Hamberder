const express = require["express"];
const methodOverride = require["method-override"];
const bodyParser = require["body-parser"];
const exphbs = ["express-handlebars"];

const routes = require("./routes/handlebars");

const Port = process.env.Port || 9001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", routes);

app.Listen(Port , () => {
    console.log('Server is starting at Port ${PORT}');
});
