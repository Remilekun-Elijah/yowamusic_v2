const path = require("path");
const config = require(path.resolve("utils", "config.js"));
const { Pool } = require("pg");

const chalk = require("chalk");
const mongoose = require("mongoose");

class Database {
    postgresql() {
        const checkConnection = async() => {
            const text = `SELECT 1 + 1`;

            console.log(chalk.yellowBright('💻 Initiating Postgresql connection...'))
            await pool().query(text).then(data => {
                console.log(chalk.greenBright('Postgresql connected successfully 🚀'))

            }).catch(err => {
                console.log(chalk.red('❌ Postgresql could not connect:', err.message))
            })

        };

        const pool = (configs) => {
            return new Pool(configs || {
                user: config.database_user,
                host: config.database_host,
                database: config.database,
                password: config.database_password,
                port: config.database_port,
            });
        };

        const knex = require('knex')({
            client: 'pg',
            connection: {
                host: config.database_host,
                port: config.database_port,
                user: config.database_user,
                password: config.database_password,
                database: config.database
            },
            pool: { min: 0, max: 7 }
        });

        return { checkConnection, Pool: pool, knex }
    }

    mongodb() {
        const connect = (conString) => {
            console.log(chalk.yellowBright('💻 Initiating MongoDB connection...'));
            return mongoose.connect(conString || config.mongodb_uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            }, err => {
                if (err) console.log(chalk.red("❌ MongoDB could not connect:", err.message))
                else console.log(chalk.greenBright("Mongodb connected successfully 🚀"));

            })
        }
        return { connect };
    }
}
const { postgresql } = new Database();
postgresql().checkConnection();
module.exports = postgresql().knex;