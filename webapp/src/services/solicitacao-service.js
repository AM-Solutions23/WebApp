import TokenStorageCookie from "../token/token-storage-cookie";

const { default: ApiService } = require("./api-service");

class SolicitacaoService extends ApiService{
    constructor(){
        super()
        this.token_storage = new TokenStorageCookie()
        this.token = this.token_storage.getCookieToken()
    }
    async createSolicitacao(data){
        const response = await this.postDataWithToken(data, 'solicitacao', this.token)
        return response
    }
    
    async todasSolicitacoes(){
        const response = await this.getDataWithToken( 'solicitacao', this.token)
        return response
    }
}

export default SolicitacaoService