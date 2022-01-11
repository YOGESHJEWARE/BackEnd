const express=require('express')

const cors=require('cors')


const app=express()

const PORT=8989

var corsOptions={
    origin:'http://localhost:3000' //domain abc.com
}

app.use(cors(corsOptions))

//content-type is application/json

app.use(express.json())

// app.get('/check',(req,res)=>{
//     res.send('Hiii from server...')
// })

const database = require('./app/models')
console.log(database)

database.mongoose.connect(database.url)
    .then(()=>{
        console.log('connected to DB server...');
    })

// require("./App/routes/user.routes")(app)
require('./app/routes/user.routes')(app);
// console.log(module);

app.listen(PORT,()=>{
    console.log(`Node server started on PORT Number : ${PORT} `);
})

// node server.js  ---> application started

// pm2 server build









