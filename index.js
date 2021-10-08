const path = require("path");
// const config = require(path.resolve("config.js"));
const config = {
    port: process.env.PORT || 3000
}
const express = require("express");
const chalk = require("chalk");
const morgan = require('morgan');
// const mongodb = require("./database");

// mongodb.connect();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.resolve("./modules/views"));

app.use(express.static(path.resolve("public")));

let corsOptionsDelegate = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next()
};
app.use(corsOptionsDelegate);

// api's
const route = module => require(`./modules/${module}/routes`);


app.use(route('home'));
app.use(route('bio'));
app.use(route('music'));
app.use(route('video'));
app.use(route('gallery'));
app.use(route('contact'));

app.use(morgan('dev'));

app.listen(config.port, () => {
    console.log(chalk.yellow("🚀 server launched on port "), config.port);
    console.log(chalk.yellow(`App is running in ${app.get('env')} environment`));
});