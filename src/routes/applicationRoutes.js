const express = require("express");

const {
  applyForJob,
  getMyApplications,
} = require("../controllers/applicationController");

const protect = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.post(
  "/:jobId",
  protect,
  upload.single("resume"),
  applyForJob
);

router.get("/my", protect, getMyApplications);

module.exports = router;
