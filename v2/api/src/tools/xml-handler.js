fs = require('fs');
var parser = require('xml2json');

exports.xmlHandler = (filename, token) => {
    const data = fs.readFileSync(__dirname + '/uploads/' + filename)

    var json = parser.toJson(data)

    const xml_data = JSON.parse(json).cteProc.CTe.infCte


    const solicitacao_data = {
        nome_destinatario: xml_data.dest.xNome,
        cep_destinatario: xml_data.dest.enderDest.CEP,
        endereco_destinatario: ` ${xml_data.dest.enderDest.xBairro} - ${xml_data.dest.enderDest.xLgr}`,
        nome_local_entrega: xml_data.dest.xNome,
        numero_endereco_destinatario: xml_data.dest.enderDest.nro,
        numero_telefone_destinatario: xml_data.dest.fone,
        complemento_destinatario: "",
        cidade_destinatario: xml_data.dest.enderDest.xMun,
        estado_destinatario: xml_data.dest.enderDest.UF,
        documento_destinatario: xml_data.dest.CNPJ,
        nome_local_coleta: xml_data.rem.xNome,
        endereco_coleta: ` ${xml_data.rem.enderReme.xBairro} - ${xml_data.rem.enderReme.xLgr}`,
        numero_endereco_coleta: xml_data.rem.enderReme.nro,
        cep_coleta: xml_data.rem.enderReme.CEP,
        cidade_coleta: xml_data.rem.enderReme.xMun,
        estado_coleta: xml_data.rem.enderReme.UF,
        categoria_carga: xml_data.infCTeNorm.infCarga.xOutCat,
        nome_carga: xml_data.infCTeNorm.infCarga.proPred,
        volumes_carga: xml_data.infCTeNorm.infCarga.vCarga,
        peso_carga: xml_data.infCTeNorm.infCarga.infQ.qCarga,
        cfop: xml_data.ide.CFOP,
        quantidade_unidade: xml_data.infCTeNorm.infCarga.infQ.cUnid,
        data_coleta: xml_data.ide.dhEmi,
        data_solicitacao: new Date().toISOString(),
        prazo_maximo_entrega:  xml_data.infCTeNorm.infDoc.infNFe.dPrev,
        valor_nota_fiscal: xml_data.vPrest.vTPrest,
        status: "solicitado",
        id_empresa_distribuicao: 0,
        id_veiculo: 0,
        id_motorista: 0,
        id_empresa_operacao: token
    }



    return solicitacao_data
}