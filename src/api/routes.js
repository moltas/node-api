
import express from "express";
import { Command } from "../domain/domain";

const routes = express.Router();

routes.post("/command", async function(req, res, next) {

    //finds which commandHandler to use depending on the command from the request
    const commandHandler = handlers[request.body.command.name];

    // transformed command which contains userId
    const command = new Command(req.body.command.payload, req.user.userId);

    try {
        await commandHandler(command);
        res.send("command accepted");
    } catch (err) {
        res.status(500).send(err.message);
        // error logger here
    }
});

routes.get("/", async function(req, res) {
    res.send("Hello world!");
});

export default routes;
