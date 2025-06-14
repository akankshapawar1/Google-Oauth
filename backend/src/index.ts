import express, { Response, Request } from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello World!')
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})