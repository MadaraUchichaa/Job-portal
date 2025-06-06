//copied from hello world express .js
const express = require('express')
const app = express()
const cors=require("cors");
const port = process.env.PORT||3000 //to start the port
require("dotenv").config()
//console.log(process.env)//to get all infomation
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)

//middleware
app.use(express.json())
app.use(cors())
//user:root
//pass:root

const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://harshuverma03:uZeTmAJSxWCDjvJ7@cluster0.h1a4vao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
   // create db
const db=client.db("mernJOBPortal")
const jobsCollections=db.collection("demoJobs");
//post a job and insert a job in database
app.post("/post-job",async(req,res)=>{
    const body=req.body;
    body.createAT=new Date();
    //console.log(body);
    const result=await jobsCollections.insertOne(body);
    if(result.insertedId)
    {
        return res.status(200).send(result)
    }
    else
    {
        return res.status(404).send({
            message:"can not insert :try again later",
            status:false
        })
    }

})
//get all jobs
app.get("/all-jobs",async(req,res)=>{
    const jobs=await  jobsCollections.find().toArray()
    res.send(jobs);
})
//get jobs by email
app.get("/myJobs/:email",async(req,res)=>{
 // console.log(req.params.email)//we get this on terminal, we get email when we write localhost:3000/my-jobs/:divyanshisarraf192gmail.com
  const jobs=await jobsCollections.find({postedBy: req.params.email}).toArray();//filtering the data based on email address and when we type localhost:3000/my-jobs/:divyanshisarraf192gmail.com we get on server
  res.send(jobs);
})
//get all jobs by id
app.get("/all-jobs/:id", async(req,res)=>{
  const id=req.params.id;
  const job= await jobsCollections.findOne({
    _id:new ObjectId(id)
  })
  res.send(job);
})
//delete a job
app.delete("/job/:id",async(req,res)=>{
  const id=req.params.id;
  //get a query
  const filter={_id:new ObjectId(id)}
  //delete it
  const result=await jobsCollections.deleteOne(filter);
  res.send(result);
})
//update a job
app.patch("/update-job/:id",async(req,res)=>{
  const id=req.params.id;
  const jobData=req.body;
  const filter={_id:new ObjectId(id)};
  const options={upsert:true};
  const updateDoc={
   $set :{
      ...jobData
    }
  }
  const result=await jobsCollections.updateOne(filter,updateDoc,options);
  res.send(result);
})

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})