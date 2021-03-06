/**
 * Created by Sharon.Xi on 9/1/2016.
 */
"use strict";
var InMemoryUserDAO = (function () {
    function InMemoryUserDAO() {
        this.id = 1;
        this.users = {
            0: { id: 0, firstname: 'first', lastname: 'last', age: 42 }
        };
    }
    InMemoryUserDAO.prototype.create = function (user) {
        user.id = this.id;
        this.id++;
        this.users[user.id] = user;
        return user;
    };
    InMemoryUserDAO.prototype.read = function (id) {
        return this.users[id];
    };
    InMemoryUserDAO.prototype.getAll = function () {
        return this.users;
    };
    InMemoryUserDAO.prototype.update = function (user) {
        if (this.users[user.id] === null) {
            return false;
        }
        this.users[user.id] = user;
        return true;
    };
    InMemoryUserDAO.prototype.delete = function (id) {
        if (this.users[id] === null) {
            return false;
        }
        this.users[id] = null;
        return true;
    };
    return InMemoryUserDAO;
}());
exports.InMemoryUserDAO = InMemoryUserDAO;
//# sourceMappingURL=inmemoryuserdao.js.map