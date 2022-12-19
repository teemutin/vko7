"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//sälää
app.get("/", (req, res) => {
    res.send("Hello from TS-Express application – I am up and Kukkuuu!!");
});
app.listen(port, () => {
    console.log("Server is up'n'running at http://localhost:" + port);
});
app.get("/hello", (req, res) => {
    res.send("Hello world");
});
let vehicles = [];
const vehicleHandler = (req, res) => {
    const { model, color, year, power } = req.body;
    const vehicle = { model, color, year, power };
    vehicles.push(vehicle);
    res.status(201).send("Vehicle added");
};
