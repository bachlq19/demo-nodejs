const express = require("express");
const createCourse = require("../controllers/course");

const router = express.Router();
router.get("/courses", createCourse);

export default router;
