fs = require('fs');
var parser = require('xml2json');

exports.xmlHandler = (filename, token) => {
    const data = fs.readFileSync(__dirname + '/uploads/' + filename)

    var json = parser.toJson(data)

    const xml_data = JSON.parse(json).cteProc.CTe.infCte
    

    const cliente = {
        nome: xml_data.dest.xNome,
        cep: xml_data.dest.enderDest.CEP,
        endereco: ` ${xml_data.dest.enderDest.xBairro} - ${xml_data.dest.enderDest.xLgr}`,
        numero_endereco: xml_data.dest.enderDest.nro,
        complemento: '',
        cidade: xml_data.dest.enderDest.xMun,
        estado: xml_data.dest.enderDest.UF,
        numero_telefone: xml_data.dest.fone,
        documento: xml_data.dest.CNPJ
    }
    
    const local_entrega = {
        cep: xml_data.dest.enderDest.CEP,
        nome: xml_data.dest.xNome,
        cidade: xml_data.dest.enderDest.xMun,
        estado: xml_data.dest.enderDest.UF,
        endereco: ` ${xml_data.dest.enderDest.xBairro} - ${xml_data.dest.enderDest.xLgr}`,
        numero_endereco: xml_data.dest.enderDest.nro,
    }
    
    const local_coleta = {
        cep: xml_data.rem.enderReme.CEP,
        nome: xml_data.rem.xNome,
        cidade: xml_data.rem.enderReme.xMun,
        estado: xml_data.rem.enderReme.UF,
        endereco: ` ${xml_data.rem.enderReme.xBairro} - ${xml_data.rem.enderReme.xLgr}`,
        numero_endereco: xml_data.rem.enderReme.nro,
    }
    
    const solicitacao = {
        id_empresa_operacao: token,
        id_empresa_distribuicao: 0,
        id_veiculo: 0,
        id_motorista: 0,
        data_coleta: xml_data.ide.dhEmi,
        data_solicitacao: new Date().toISOString(),
        prazo_maximo_entrega: xml_data.infCTeNorm.infDoc.infNFe.dPrev,
        valor_nota_fiscal: xml_data.vPrest.vTPrest,
        status: 'solicitado'
    }
    return {
        cliente_data : cliente,
        local_entrega_data :local_entrega,
        local_coleta_data :local_coleta,
        solicitacao_data:solicitacao
    }
}