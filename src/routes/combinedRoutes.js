const express = require("express")
const authRoutes = require("./AuthRoutes/authRoutes")
const adminRoutes = require("./Admin/admin.routes")

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);

module.exports = router