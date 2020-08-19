"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var fetch_books_1 = __importDefault(require("./controllers/fetch-books"));
var fetch_book_1 = __importDefault(require("./controllers/fetch-book"));
var update_book_1 = __importDefault(require("./controllers/update-book"));
var delete_book_1 = __importDefault(require("./controllers/delete-book"));
var add_book_1 = __importDefault(require("./controllers/add-book"));
dotenv_1.default.config();
// Initialize MongoDB
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose_1.default.set('useFindAndModify', false);
var db = mongoose_1.default.connection;
var app = express_1.default();
// Set the Access-Control-Allow-Origin to htpp://localhost:4200 to allow our Angular app to call the API
app.use(function (req, res, next) {
    /*var err = new Error('Not Found');
     err.status = 404;
     next(err);*/
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Pass to next layer of middleware
    next();
});
// support parsing of application/json type post data
app.use(body_parser_1.default.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(body_parser_1.default.urlencoded({ extended: true }));
// The router
app.post('/book', add_book_1.default);
app.get('/books', fetch_books_1.default);
app.get('/book/:id', fetch_book_1.default);
app.put('/book', update_book_1.default);
app.delete('/book/:id', delete_book_1.default);
app.listen(process.env.port, function () { return console.log("The server is running on http://localhost:" + process.env.port); });
