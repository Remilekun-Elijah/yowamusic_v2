const path = require('path');
const knex = require(path.resolve("database"));

const uuid = require('uuid');

const helper = {
    generateUuid: () => uuid.v4(),
}

knex.table('subscriber').then(function(result) {
    console.log("User table already exist");
}).catch(err => {
    console.log(err.message);
    knex.schema.createTable("subscriber", table => {
        table.string("id").unique().notNullable(),
            table.string("email").unique().notNullable(),

            table.timestamp("createdAt").defaultTo(knex.fn.now()),
            table.timestamp("updatedAt").defaultTo(knex.fn.now());
        console.log("User table created");
    }).catch(err => {
        console.log(err);
    });
})



class User {
    constructor(data = {}) {
        this._country = data.country;
        this._state = data.state;
        this._email = data.email;
    }
    getData() {
        return {
            email: this._email
        };
    }
    async add() {
        const data = this.getData();
        data.id = helper.generateUuid();

        return knex("subscriber").insert(data, "*").then(res => {

            return res[0]
        }).catch(err => {
            console.log(err.message);
            if (err.message.includes("duplicate key")) throw new Error("You have already been added to the waitlist.");

            else throw new Error("Failed to create user");
        });
    }

    getUsers() {
        return knex.select('*').from('subscriber').then(res => {

            return res
        }).catch(err => {

            throw new Error("Failed to fetch users");
        });
    }
    getOneUser(email) {
        console.log(email);
        return knex('subscriber').where(email).then(res => {
            console.log(res[0]);
            return res[0]
        }).catch(err => {

            throw new Error("Failed to fetch user");
        });
    }

    getUsersEmail() {
        return knex.select('email').from('subscriber').then(res => {

            return res
        }).catch(err => {

            throw new Error("Failed to fetch users");
        });
    }
}

module.exports = User;