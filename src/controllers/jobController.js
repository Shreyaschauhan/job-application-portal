const Job = require("../models/Job");

// Get all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create sample jobs (one-time use)
const createSampleJobs = async (req, res) => {
  try {
    const jobs = await Job.insertMany([
      {
        title: "Backend Developer Intern",
        company: "TechCorp",
        location: "Remote",
        description: "Work with Node.js and MongoDB",
      },
      {
        title: "Full Stack Developer Intern",
        company: "StartupX",
        location: "Bangalore",
        description: "React, Node.js, REST APIs",
      },
      {
        title: "Software Engineer Intern",
        company: "Innovate Labs",
        location: "Pune",
        description: "Build scalable backend services",
      },
    ]);

    res.status(201).json({
      message: "Sample jobs created",
      jobs,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllJobs, createSampleJobs };
