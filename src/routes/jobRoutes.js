const express = require("express");

const {
  getAllJobs,
  createSampleJobs,
} = require("../controllers/jobController");

const router = express.Router();

router.get("/", getAllJobs);

// TEMP route – use once, then delete or protect
router.post("/seed", createSampleJobs);

module.exports = router;
