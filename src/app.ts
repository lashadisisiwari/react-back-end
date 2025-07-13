import express, {Express,Request, Response} from "express";

import cors from "cors";
import productRoutes from "./routes/product.routes";
import contactRoutes from "./routes/contact.routes";
import authRoutes from "./routes/auth.routes";


// 1. initialize the express app -express walin app eka hadanwa
const app: Express = express();


app.use(express.json());
const allowedOrigins = [
    "http://localhost:5173"
];

//cros error ekt mek danwa
// app.use(cors());    // enable /arrow CORS here

const corsOptions = {
    origin: (origin: string | undefined,
             callback: (err: Error | null,
                        allow?:boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};

//apply CORS middileware
app.use(cors(corsOptions));

app.use("/api/auth",authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contact",contactRoutes);



// 2. middleware define krann hdanne - request wlata kalin krn oni
// 2.1 payladd eke ena data json format eken denna
app.use(express.json());

// 3. define get request for test
// app.get('/',(req:Request, res:Response) => {
//     console.log(req.body);
//     res.send('Hellow Lashadi!');
// });

//hda gtta express app ek eliyata duna
export default app;