const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use(express.json());
const TraineeRoutes = require("./routes/trainee-routes");
app.use("/v1/api/trainees", TraineeRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
