import express, {Express, Request, Response} from "express";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();   //load krnawa envirement properties tik


//2. port ekk dunna application ekata-define the application port
const port = process.env.PORT || 3000;  //access the port from the environment variables || dala 3000 denna pluwan default fort eka eka safe


// 4.app ekata kiynwa me port ek listen krn inna kiyl
// listen on port 3000
app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});


