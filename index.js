const express = require("express")
const json = require("express")
const authRoutes = require("./Routes/auth.routes")
const userRoutes = require("./Routes/user.route")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser"); 

app.use(express.json());
app.use(bodyParser.json())
app.use(cors())
app.use('/api/medicalrecords',authRoutes);
app.use('/api/medicalrecords',userRoutes);

app.listen(5000, () => { 
    console.log("Server running on port 5000");
})

