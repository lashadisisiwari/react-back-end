import express, {Express,Request, Response} from "express";

// 1. initialize the express app -express walin app eka hadanwa
const app: Express = express();

// 2. middleware define krann hdanne - request wlata kalin krn oni
// 2.1 payladd eke ena data json format eken denna
app.use(express.json());

// 3. define get request for test
app.get('/',(req:Request, res:Response) => {
    res.send('Hellow Lashadi!');
});

//hda gtta express app ek eliyata duna
export default app;