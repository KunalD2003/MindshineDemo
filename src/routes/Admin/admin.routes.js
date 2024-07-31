const express = require('express');
const {deleteAdminById, getAllAdmin, updateAdminById, getAdminById, adminRegister} = require('../../controller/adminController/admin.controller')
const { authenticateToken, authorizeRoles } = require('../../middleware/authMiddleware');

const router = express.Router()

router.post('/register',authenticateToken, authorizeRoles('admin'), adminRegister);
router.get('/',authenticateToken, authorizeRoles('admin'), getAllAdmin);
router.get('/:id',authenticateToken, authorizeRoles('admin'), getAdminById);
router.patch('/:id',authenticateToken, authorizeRoles('admin'), updateAdminById)
router.delete('/:id',authenticateToken, authorizeRoles('admin'), deleteAdminById)

module.exports = router