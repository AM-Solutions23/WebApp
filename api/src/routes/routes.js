const express = require('express')

const router = express.Router()
const empresa_controllers = require('../controllers/empresa-controllers')
const solicitacao_controllers = require('../controllers/solicitacao-controllers')
const auth_controller = require('../controllers/auth-controller')
const api_status_controller = require('../controllers/api-status-controller')
const middleware = require('../middlewares/middleware')

router.post('/login', empresa_controllers.login)

/**
 * Empresa routes
 */
router.get('/empresa', middleware.authUser, empresa_controllers.getAllEmpresas)
router.get('/empresa/:empresa_id', middleware.authUser, empresa_controllers.getOne)
router.post('/empresa', [middleware.validateRequestBody, middleware.authUser], empresa_controllers.newEmpresa)
router.put('/empresa/:empresa_id', [middleware.validateRequestBody, middleware.authUser], empresa_controllers.updateEmpresa)
router.delete('/empresa/:empresa_id', middleware.authUser, empresa_controllers.deleteEmpresa)


/**
 * Solicitacao routes
 */
router.post('/solicitacao', [middleware.validateRequestBody, middleware.authUser], solicitacao_controllers.newSolicitacao)
router.get('/solicitacao', middleware.authUser, solicitacao_controllers.getAllSolicitacoes)
router.get('/solicitacao/:solicitacao_id', middleware.authUser, solicitacao_controllers.getOneSolicitacao)
router.put('/solicitacao/:solicitacao_id', [middleware.validateRequestBody, middleware.authUser], solicitacao_controllers.updateSolicitacao)
router.delete('/solicitacao/:solicitacao_id', middleware.authUser, solicitacao_controllers.deleteSolicitacao)
router.get('/solicitacao/status/:status', middleware.authUser, solicitacao_controllers.getAllSolicitacoesByStatus)
router.get('/solicitacao-estatisticas', middleware.authUser, solicitacao_controllers.estatisticasSolicitacoes)


/**
 * Token Validation route
 */
router.post('/token-validation', auth_controller.validateToken)

/**
 * Api Status
 */
router.get('/api-status', api_status_controller.apiStatus)

module.exports = router