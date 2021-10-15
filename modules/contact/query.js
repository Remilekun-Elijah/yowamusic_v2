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
            table.timestamp("createdAt").defaultTo(knex.fn.now()),
            table.timestamp("updatedAt").defaultTo(knex.fn.now());
        console.log("User table created");
    }).catch(err => {
        console.log(err);
    });
})



class User {
    constructor(data = {}) {
        this._email = data.email;
    }
    getData() {
        return {
            email: this._email,
        };
    }
    async add() {
        const data = this.getData();
        data.id = helper.generateUuid();

        return knex("subscriber").insert(data, "*").then(res => {

            return res[0];
        }).catch(err => {
            console.log(err.message);

        });
    }


}

module.exports = User;