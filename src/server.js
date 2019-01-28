
import express from "express";
import routes from "./api/routes";

const app = express();
const port = 8080; // default port to listen

// setup routing
app.all("/", routes);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
