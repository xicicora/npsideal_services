"use strict";
/**
 * Created by Sharon.Xi on 9/1/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var inmemorydealdao_1 = require("./inmemorydealdao");
var userDAO = new inmemorydealdao_1.InMemoryDealDAO();
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var router = express.Router();
//test route
router.get('/api/deals/', function (req, res) {
    res.json(userDAO.getAll());
});
router.get('/api/deals/:id', function (req, res) {
    res.json(userDAO.read(+req.params.id));
});
router.post('/api/deals/', function (req, res) {
    res.json(userDAO.create(req.body));
});
router.put('/api/deals/', function (req, res) {
    res.json({ result: userDAO.update(req.body) });
});
router.delete('/api/deals/:id', function (req, res) {
    res.json({ result: userDAO.delete(+req.param.id) });
});
app.use('/', router);
app.listen(port);
console.log('app started: http://localhost:' + port + '/api');
//# sourceMappingURL=app.js.map