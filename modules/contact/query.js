const path = require('path');
const knex = require(path.resolve("database"));

const uuid = require('uuid');

const helper = {
    generateUuid: () => uuid.v4(),
}

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