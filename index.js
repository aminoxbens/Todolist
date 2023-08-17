import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
var newTask = [];
var tasks = [];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {tasks: []});
})

app.post("/addTask", (req, res) => {  
  const newTask = req.body["todo"];
    if (newTask) {
        tasks.push(newTask);
    }
  res.render("index.ejs", {tasks});
})

app.listen(port, () =>{
  console.log(`Hey, it's Agent ${port}.`);
})