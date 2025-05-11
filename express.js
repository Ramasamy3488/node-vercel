const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(express.json());
const TraineeRoutes = require("./routes/trainee-routes");
app.use("/*", (req,res)=>{
    res.send("Invalid Route!!!");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});
