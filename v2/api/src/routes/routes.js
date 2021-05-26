const express = require('express')
const middleware = require('../middlewares/middlewares')

const router = express.Router()
const EmpresaControllers = require('../controllers/empresa-controllers')
const CargaControllers = require('../controllers/carga-controllers')
const ClientesControllers = require('../controllers/clientes-controllers')
const ConfiguracaoControllers = require('../controllers/clientes-controllers')
const EmpresaDistribuicaoControllers = require('../controllers/empresa-distribuicao-controllers')
const EmpresaOperacaoControllers = require('../controllers/empresa-operacao-controllers')
const LocalColetaControllers = require('../controllers/local-coleta-controllers')
const LocalEntregaControllers = require('../controllers/local-entrega-controllers')
const MotoristaControllers = require('../controllers/motorista-controllers')
const OperadorControllers = require('../controllers/operador-controllers')
const SolicitacaoControllers = require('../controllers/solicitacao-controllers')
const VeiculoControllers = require('../controllers/veiculo-controllers')

/**
 * * Carga Routes
 */
const carga_controllers = new CargaControllers()
router.post('/carga', carga_controllers.create)
router.get('/carga', middleware.authUser, carga_controllers.readAll)
router.get('/carga/:id', carga_controllers.readOne)
router.put('/carga/:id', carga_controllers.update)
router.delete('/carga/:id', carga_controllers.delete)

/**
 * * Clientes Routes
 */
const clientes_controllers = new ClientesControllers()
router.post('/cliente', clientes_controllers.create)
router.get('/cliente', clientes_controllers.readAll)
router.get('/cliente/:id', clientes_controllers.readOne)
router.put('/cliente/:id', clientes_controllers.update)
router.delete('/cliente/:id', clientes_controllers.delete)

/**
* * Configuracao Routes
*/
const configuracao_controllers = new ConfiguracaoControllers()
router.post('/configuracao', configuracao_controllers.create)
router.get('/configuracao', configuracao_controllers.readAll)
router.get('/configuracao/:id', configuracao_controllers.readOne)
router.put('/configuracao/:id', configuracao_controllers.update)
router.delete('/configuracao/:id', configuracao_controllers.delete)

/**
 * * Empresa Distribuicao Routes
 */
const empresa_distribuicao_controllers = new EmpresaDistribuicaoControllers()
router.post('/empresa-distribuicao', empresa_distribuicao_controllers.create)
router.get('/empresa-distribuicao', empresa_distribuicao_controllers.readAll)
router.get('/empresa-distribuicao/:id', empresa_distribuicao_controllers.readOne)
router.put('/empresa-distribuicao/:id', empresa_distribuicao_controllers.update)
router.delete('/empresa-distribuicao/:id', empresa_distribuicao_controllers.delete)

/**
 * * Empresa Operacao Routes
 */
const empresa_operacao_controllers = new EmpresaOperacaoControllers()
router.post('/empresa-operacao', empresa_operacao_controllers.create)
router.get('/empresa-operacao', empresa_operacao_controllers.readAll)
router.get('/empresa-operacao/:id', empresa_operacao_controllers.readOne)
router.put('/empresa-operacao/:id', empresa_operacao_controllers.update)
router.delete('/empresa-operacao/:id', empresa_operacao_controllers.delete)


/**
* * Local Coleta Routes
*/
const local_coleta_controllers = new LocalColetaControllers()
router.post('/local-coleta', local_coleta_controllers.create)
router.get('/local-coleta', local_coleta_controllers.readAll)
router.get('/local-coleta/:id', local_coleta_controllers.readOne)
router.put('/local-coleta/:id', local_coleta_controllers.update)
router.delete('/local-coleta/:id', local_coleta_controllers.delete)

/**
* * Local Entrega Routes
*/
const local_entrega_controllers = new LocalEntregaControllers()
router.post('/local-entrega', local_entrega_controllers.create)
router.get('/local-entrega', local_entrega_controllers.readAll)
router.get('/local-entrega/:id', local_entrega_controllers.readOne)
router.put('/local-entrega/:id', local_entrega_controllers.update)
router.delete('/local-entrega/:id', local_entrega_controllers.delete)


/**
* * Motorista Coleta Routes
*/
const motorista_controllers = new MotoristaControllers()
router.post('/motorista', motorista_controllers.create)
router.get('/motorista', motorista_controllers.readAll)
router.get('/motorista/:id', motorista_controllers.readOne)
router.put('/motorista/:id', motorista_controllers.update)
router.delete('/motorista/:id', motorista_controllers.delete)

/**
* * Operador Routes
*/
const operador_controllers = new OperadorControllers()
router.post('/operador', operador_controllers.create)
router.get('/operador', operador_controllers.readAll)
router.get('/operador/:id', operador_controllers.readOne)
router.put('/operador/:id', operador_controllers.update)
router.delete('/operador/:id', operador_controllers.delete)

/**
* * Solicitacao Routes
*/
const solicitacao_controllers = new SolicitacaoControllers()
router.post('/solicitacao', solicitacao_controllers.create)
router.get('/solicitacao', solicitacao_controllers.readAll)
router.get('/solicitacao/:id', solicitacao_controllers.readOne)
router.put('/solicitacao/:id', solicitacao_controllers.update)
router.delete('/solicitacao/:id', solicitacao_controllers.delete)
router.patch('/solicitacao-status/:id', solicitacao_controllers.updateStatus)
/**
* * Veiculo Routes
*/
const veiculo_controllers = new VeiculoControllers()
router.post('/veiculo', veiculo_controllers.create)
router.get('/veiculo', veiculo_controllers.readAll)
router.get('/veiculo/:id', veiculo_controllers.readOne)
router.put('/veiculo/:id', veiculo_controllers.update)
router.delete('/veiculo/:id', veiculo_controllers.delete)




/**
 * * Empresa Routes
 */
const empresa_controller = new EmpresaControllers()

router.post('/empresa', empresa_controller.create)
router.get('/empresa', empresa_controller.readAll)
router.get('/empresa/:id', empresa_controller.readOne)
router.put('/empresa/:id', empresa_controller.update)
router.delete('/empresa/:id', empresa_controller.delete)


module.exports = router