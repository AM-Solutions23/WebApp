CREATE DATABASE emaLog;
USE emaLog;

/*
    Banco de dados baseado no diagrama entidade relacionamento descrito no arquivo : emaLogDB2.vpd.pdf
    https://drive.google.com/drive/folders/1vXbIN_N0kzsZnXQU7LCN888958lZ5GNX?usp=sharing 
*/

CREATE TABLE IF NOT EXISTS Empresa(
    id INT auto_increment PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    nome TEXT NOT NULL,
    CNPJ VARCHAR(20) NOT NULL UNIQUE,
    created_at timestamp,
    updated_at timestamp
);

CREATE TABLE IF NOT EXISTS Solicitacao(
    id INT auto_increment PRIMARY KEY,
    data_solicitacao DATE NOT NULL,
    data_coleta DATE NOT NULL,
    data_entrega DATE NOT NULL,
    local_coleta TEXT NOT NULL,
    status VARCHAR(255) NOT NULL,
    nome_motorista TEXT NOT NULL,
    tipo_de_caminhao TEXT NOT NULL,
    tempo_total VARCHAR(100) NOT NULL,
    kilometragem_percorrida VARCHAR(80) NOT NULL,
    valor_nota_fiscal VARCHAR(100),
    categoria_da_carga VARCHAR(255),
    descricao_da_carga TEXT NOT NULL,
    nome_destinatario TEXT NOT NULL,
    endereco_destinatario TEXT NOT NULL,
    numero_endereco_destinatario VARCHAR(80) NOT NULL,
    complemento_destinatario VARCHAR(100) NOT NULL,
    CEP_destinatario VARCHAR(20) NOT NULL,
    cidade_destinatario TEXT NOT NULL,
    estado_destinatario VARCHAR(80) NOT NULL,
    nome_remetente TEXT NOT NULL,
    CNPJ_remetente VARCHAR(20) NOT NULL,
    inscricao_estadual_remetente VARCHAR(20) NOT NULL,
    created_at timestamp,
    updated_at timestamp
);
