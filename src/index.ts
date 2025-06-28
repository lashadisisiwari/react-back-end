import express, {Express, Request, Response} from "express";
import app from "./app";

//2. port ekk dunna application ekata-define the application port
const port = 3000;


// 4.app ekata kiynwa me port ek listen krn inna kiyl
// listen on port 3000
app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});


