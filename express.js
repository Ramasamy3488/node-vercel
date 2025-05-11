const express = require('express');
const cors = require('cors');
const port = 5000;
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use(express.json());
const TraineeRoutes = require("./routes/trainee-routes");
app.use("/v1/api/trainees", TraineeRoutes);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});