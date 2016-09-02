/**
 * Created by Sharon.Xi on 9/1/2016.
 */
import * as express from 'express';
import * as bodyParser from  'body-parser';
import {InMemoryDealDAO} from "./inmemorydealdao";
import IDeal = Model.IDeal;


const userDAO : InMemoryDealDAO = new InMemoryDealDAO();


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port: number = process.env.PORT || 8080;
const router = express.Router();

//test route
router.get('/api/deals/', function (req, res) {
    res.json(userDAO.getAll());
});

router.get('/api/deals/:id', function (req, res) {
     res.json(userDAO.read(+req.params.id));
});
router.post('/api/deals/', function (req, res) {
    res.json(userDAO.create(<IDeal>req.body));
});
router.put('/api/deals/', function (req, res) {
    res.json({result : userDAO.update(req.body)});
});
router.delete('/api/deals/:id', function (req, res) {
    res.json({result : userDAO.delete(+req.param.id)});
});


app.use('/', router);
app.listen(port);
console.log('app started: http://localhost:' + port + '/api' );
