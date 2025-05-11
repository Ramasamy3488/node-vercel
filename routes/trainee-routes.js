const router = require('express').Router();
const traineeController = require('../controllers/trainee-controller');

// http://localhost:5000/v1/api/trainees/readAllTrainees
router.get("/readAllTrainees", traineeController.readAllTrainees);

// http://localhost:5000/v1/api/trainees/readTrainee
router.get("/readTrainee", traineeController.readTrainee);

// http://localhost:5000/v1/api/trainees/addTrainee
router.post("/addTrainee", traineeController.addTrainee);

// http://localhost:5000/v1/api/trainees/updateTrainee
router.put("/updateTrainee", traineeController.updateTrainee);

// http://localhost:5000/v1/api/trainees/deleteTrainee
router.delete("/deleteTrainee", traineeController.deleteTrainee);

module.exports = router;