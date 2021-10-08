const path = require('path');
const knex = require(path.resolve("database"));

const uuid = require('uuid');

const helper = {
    generateUuid: () => uuid.v4(),
}

knex.table('waitlist').then(function(result) {
    console.log("User table already exist");
}).catch(err => {
    console.log(err.message);
    knex.schema.createTable("waitlist", table => {
        table.string("id").unique().notNullable(),
            table.string("email").unique().notNullable(),
            table.string("country").notNullable(),
            table.string("state").notNullable(),
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
            email: this._email,
            country: this._country,
            state: this._state
        };
    }
    async add() {
        const data = this.getData();
        data.id = helper.generateUuid();

        return knex("waitlist").insert(data, "*").then(res => {
            console.log(res);
            return res
        }).catch(err => {
            console.log(err.message);
            if (err.message.includes("duplicate key")) throw new Error("You have already been added to the waitlist.");

            else throw new Error("Failed to create user");
        });
    }

}

module.exports = User;