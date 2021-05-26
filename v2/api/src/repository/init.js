const EmpresaRepository = require('./empresa-repository')
const CargaRepository = require('./carga-repository')
const ClientesRepository = require('./clientes-repository')
const ConfiguracaoRepository = require('./configuracao-repository')
const EmpresaDistribuicaoRepository = require('./empresa-distribuicao-repository')
const EmpresaOperacaoRepository = require('./empresa-operacao-repository')
const LocalColetaRepository = require('./local-coleta-repository')
const LocalEntregaRepository = require('./local-entrega-repository')
const MotoristaRepository = require('./motorista-repository')
const OperadorRepository = require('./operador-repository')
const SolicitacaoRepository = require('./solicitacao-repository')
const VeiculoRepository = require('./veiculo-repository')

module.exports = repositories = {
   empresa: new EmpresaRepository,
   carga: new CargaRepository,
   clientes: new ClientesRepository,
   configuracao: new ConfiguracaoRepository,
   empresadistribuicao: new EmpresaDistribuicaoRepository,
   empresaoperacao: new EmpresaOperacaoRepository,
   localcoleta: new LocalColetaRepository,
   localentrega: new LocalEntregaRepository,
   motorista: new MotoristaRepository,
   operador: new OperadorRepository,
   solicitacao: new SolicitacaoRepository,
   veiculo: new VeiculoRepository
}