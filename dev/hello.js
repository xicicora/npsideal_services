"use strict";
/**
 * Created by Sharon.Xi on 9/1/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var inmemoryuserdao_1 = require("./inmemoryuserdao");
var userDAO = new inmemoryuserdao_1.InMemoryUserDAO();
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var router = express.Router();
//test route
router.get('/', function (req, res) {
    res.json(userDAO.getAll());
});
router.get('/:id', function (req, res) {
    res.json(userDAO.read(req.params.id));
    // res.json(req.params.id);
});
router.post('/', function (req, res) {
    res.json(userDAO.create(req.body));
});
router.put('/', function (req, res) {
    res.json({ result: userDAO.update(req.body) });
});
router.delete('/', function (req, res) {
    res.json({ result: userDAO.delete(req.query.id) });
});
app.use('/api', router);
app.listen(port);
console.log('app started: http://localhost:' + port + '/api');
//# sourceMappingURL=hello.js.map