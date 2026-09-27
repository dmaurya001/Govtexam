/**
 * server/src/routes/studentRoutes.js
 * Endpoints for permanent student account registration, authentication, profile, and mock history.
 */

"use strict";

const express = require("express");
const router = express.Router();
const studentStore = require("../services/studentStore");

/**
 * POST /api/student/register
 */
router.post("/register", (req, res) => {
  try {
    const { name, phone, roll, batch, password, confirmPassword, dob, fatherName, photoUrl } = req.body;
    if (!name || !phone || !password) {
      return res.status(400).json({ error: "Missing required fields (Name, Phone, Password)" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    if (photoUrl && photoUrl.length > 7 * 1024 * 1024) { // Roughly 5MB binary in base64
      return res.status(400).json({ error: "Profile photo must be 5 MB or smaller" });
    }

    const student = studentStore.createStudent({
      name, phone, roll, batch, password, dob, fatherName, photoUrl
    });

    res.status(201).json({
      status: "success",
      message: "Permanent student account created successfully",
      student
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * POST /api/student/login
 */
router.post("/login", (req, res) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      return res.status(400).json({ error: "Identifier and password are required" });
    }
    const student = studentStore.authenticateStudent(identifier, password);
    res.json({
      status: "success",
      student,
      token: "STU-" + Date.now() + "-" + Math.random().toString(36).substring(2, 8)
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

/**
 * GET /api/student/mocks?studentId=GMH20260001
 */
router.get("/mocks", (req, res) => {
  const { studentId } = req.query;
  if (!studentId) {
    return res.status(400).json({ error: "studentId is required" });
  }
  const mocks = studentStore.getMocks(studentId);
  res.json({ status: "success", studentId, mocks });
});

/**
 * POST /api/student/mocks
 */
router.post("/mocks", (req, res) => {
  try {
    const { studentId, submission } = req.body;
    if (!studentId || !submission) {
      return res.status(400).json({ error: "Missing studentId or submission payload" });
    }
    const saved = studentStore.recordMock(studentId, submission);
    res.json({ status: "success", saved });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * POST /api/student/sync (Offline-first client sync)
 */
router.post("/sync", (req, res) => {
  res.json({ status: "synced", timestamp: new Date().toISOString() });
});

module.exports = router;
