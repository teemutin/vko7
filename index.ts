import express, {Express, Request, Response} from "express"

const app: Express = express()
const port: number = 5000


app.get("/", (req: Request, res: Response) => {
    res.send("Hello from TS-Express application – I am up and Kukkuuu!!")
})

app.listen(port, () => {
    console.log("Server is up'n'running at http://localhost:" + port)
})

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello world")
})
