const Application = require("../models/Application");
const Job = require("../models/Job");

// Apply for job
const applyForJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;

    if (!req.file) {
      return res.status(400).json({ message: "Resume is required" });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const existingApplication = await Application.findOne({
      user: req.user,
      job: jobId,
    });

    if (existingApplication) {
      return res
        .status(400)
        .json({ message: "Already applied for this job" });
    }

    const application = await Application.create({
      user: req.user,
      job: jobId,
      resume: req.file.path,
    });

    res.status(201).json({
      message: "Job applied successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get logged-in user's applications
const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user })
      .populate("job", "title company location")
      .sort({ createdAt: -1 });

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { applyForJob, getMyApplications };
