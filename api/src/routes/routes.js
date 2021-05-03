const express = require('express')

const router = express.Router()
const empresa_controllers = require('../controllers/empresa-controllers')

const middleware = require('../middlewares/middleware')

router.post('/login', empresa_controllers.login)

/**
 * Empresa routes
 */
router.get('/empresa', middleware.authUser, empresa_controllers.getAllEmpresas)
router.get('/empresa/:empresa_id', middleware.authUser,empresa_controllers.getOne)
router.post('/empresa', [middleware.validateRequestBody,middleware.authUser], empresa_controllers.newEmpresa)
router.put('/empresa/:empresa_id', [middleware.validateRequestBody,middleware.authUser], empresa_controllers.updateEmpresa)
router.delete('/empresa/:empresa_id', middleware.authUser, empresa_controllers.deleteEmpresa)

module.exports = router