"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// 1. initialize the express app -express walin app eka hadanwa
const app = (0, express_1.default)();
//2. port ekk dunna application ekata-define the application port
const port = 3000;
// 3. define get request for test
app.get('/', (req, res) => {
    res.send('Hellow!');
});
// 4.app ekata kiynwa me port ek listen krn inna kiyl
// listen on port 3000
app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});
