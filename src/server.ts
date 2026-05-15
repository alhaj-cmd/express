import express, { type Application, type Request, type Response } from "express"
const app : Application = express()
const port = 5000;
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.get('/', (req : Request, res: Response) => {
  // res.send('Hello World!')
   res.status(200).json({"message" : "Express Server",
    "author" : "Next Level",
   })
})

app.post("/", async(req:Request, res: Response)=>{
  // console.log(req.body);
  const {name, email, pass} = req.body;
  res.status(201).json({
    message:"created",
  data:{
    name, email, pass
  }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
