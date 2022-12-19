import express, {Express, Request, Response} from "express"

const app: Express = express()
const port: number = 3000



app.get("/", (req: Request, res: Response) => {
    res.send("Hello from TS-Express application – I am up and Kukkuuu!!")
})

app.listen(port, () => {
    console.log("Server is up'n'running at http://localhost:" + port)
})

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello world")
})

//app.post()

interface Vehicle {
    model: string;
    color: string;
    year: number;
    power: number;
}

let vehicles: Vehicle[] = [];

const vehicleHandler = (req: Request, res: Response) => {
    const {model, color, year, power} = req.body;

    const vehicle: Vehicle = { model, color, year, power};

    vehicles.push(vehicle);

    res.status(201).send("Vehicle added");

};

