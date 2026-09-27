/**
 * src/index.js
 * GovtExamHub AI Backend Server
 * Express entry point, middleware configuration, API routes, and scheduler boot.
 */

"use strict";

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const express = require("express");
const cors = require("cors");
const paperRoutes = require("./routes/paperRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { startScheduler } = require("./services/scheduler");

const app = express();
const PORT = process.env.PORT || 3001;

// CORS setup
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map(o => o.trim())
  .filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or local files)
    if (!origin) return callback(null, true);
    if (allowedOrigins.length === 0 || allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
      return callback(null, true);
    }
    // Allow localhost and common development ports
    if (/^http:\/\/localhost(:\d+)?$/.test(origin) || /^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }
    return callback(null, true); // Permissive in dev to avoid CORS blocking frontend
  },
  credentials: true
}));

app.use(express.json({ limit: "5mb" }));

// Request logging in development
if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
}

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "govtexamhub-ai-server",
    time: new Date().toISOString()
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "govtexamhub-ai-server",
    time: new Date().toISOString()
  });
});

const studentRoutes = require("./routes/studentRoutes");

// Mount routes
app.use("/api", paperRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error("[ServerError]", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

// Start listening
const server = app.listen(PORT, () => {
  console.log("==================================================");
  console.log(` GovtExamHub AI Backend Server running on port ${PORT}`);
  console.log(` Health check: http://localhost:${PORT}/health`);
  console.log(` Paper API:    http://localhost:${PORT}/api/papers/active?examId=neet`);
  console.log("==================================================");

  // Boot the scheduler
  try {
    startScheduler();
  } catch (schedErr) {
    console.error("[Scheduler] Failed to initialize:", schedErr.message);
  }
});

module.exports = app;
