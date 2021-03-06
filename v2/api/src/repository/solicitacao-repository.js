const MasterRepository = require("./master-repository");

module.exports = class SolicitacaoRepository extends MasterRepository {
  constructor() {
    super("solicitacao");
  }

  estatisticas = async (token) => {
    const solicitados = await this.entity.findAll({
      where: {
        status: "solicitado",
        id_empresa_operacao: token,
      },
      limit: 6,
    });

    const em_andamento = await this.entity.findAll({
      where: {
        status: "em-andamento",
        id_empresa_operacao: token,
      },
      limit: 6,
    });

    const n_solicitacoes_solicitadas = await this.entity.count({
      where: {
        status: "solicitado",
      },
    });

    const n_solicitacoes_em_andamento = await this.entity.count({
      where: {
        status: "em-andamento",
      },
    });

    const n_solicitacoes_concluido = await this.entity.count({
      where: {
        status: "entregue",
      },
    });
    return {
      solicitados,
      em_andamento,
      n_solicitacoes_concluido,
      n_solicitacoes_em_andamento,
      n_solicitacoes_solicitadas,
    };
  };

  updateData = async (ID, data) => {
    let edited = true;
    if (data.solicitacao.status == "entregue") {
      data.solicitacao.data_entrega = new Date().toISOString();
    }

    try {
      await this.entity.update(data.solicitacao, {
        where: {
          id: ID,
        },
      });

      data.solicitacao.cargas.forEach(async (carga) => {
        carga = carga[0];
        try {
          await this.entities.carga.update(carga, {
            where: {
              id: carga.id,
            },
          });

          data.solicitacao.coletas.forEach(async (coleta) => {
            coleta = coleta[0];
            try {
              await this.entities.coleta.update(coleta, {
                where: {
                  id: coleta.id,
                },
              });
              data.solicitacao.notas.forEach(async (nota) => {
                nota = nota[0];
                try {
                  await this.entities.nota.update(nota, {
                    where: {
                      id: nota.id,
                    },
                  });
                } catch (updateError) {
                  edited = false;
                  throw new Error(
                    `[X] Error on edit a ${this.entity_type}: ${updateError}`
                  ); //development mode
                }
              });
            } catch (updateError) {
              edited = false;
              throw new Error(
                `[X] Error on edit a ${this.entity_type}: ${updateError}`
              ); //development mode
            }
          });
        } catch (updateError) {
          edited = false;
          throw new Error(
            `[X] Error on edit a ${this.entity_type}: ${updateError}`
          ); //development mode
        }
      });
    } catch (updateError) {
      edited = false;
      throw new Error(
        `[X] Error on edit a ${this.entity_type}: ${updateError}`
      ); //development mode
    }

    return edited;
  };

  getAll = async (token) => {
    const solicitacao_data = await this.entity.findAll({
      where: {
        id_empresa_operacao: token,
      },
    });
    let all_data = [];
    for (let i = 0; i < solicitacao_data.length; i++) {
      var empresa_distribuicao =
        await this.entities.empresadistribuicao.findOne({
          where: {
            id: solicitacao_data[i].id_empresa_distribuicao,
          },
        });

      var veiculo = await this.entities.veiculo.findOne({
        where: {
          id: solicitacao_data[i].id_veiculo,
        },
      });

      var motorista = await this.entities.motorista.findOne({
        where: {
          id: solicitacao_data[i].id_motorista,
        },
      });

      var ColetasSolicitacao = await this.entities.solicitacaoColeta.findAll({
        where: {
          id_solicitacao: solicitacao_data[i].id,
        },
      });

      var CargasSolicitacao = await this.entities.solicitacaoCarga.findAll({
        where: {
          id_solicitacao: solicitacao_data[i].id,
        },
      });

      var NotasSolicitacao = await this.entities.solicitacaoNota.findAll({
        where: {
          id_solicitacao: solicitacao_data[i].id,
        },
      });

      var coletas = [];
      for (let j = 0; j < ColetasSolicitacao.length; j++) {
        var coleta = await this.entities.coleta.findAll({
          where: {
            id: ColetasSolicitacao[j].id_coleta,
          },
        });

        coletas.push(coleta);
      }

      var cargas = [];
      for (let j = 0; j < CargasSolicitacao.length; j++) {
        var carga = await this.entities.carga.findAll({
          where: {
            id: CargasSolicitacao[j].id_carga,
          },
        });

        cargas.push(carga);
      }

      var notas = [];
      for (let j = 0; j < NotasSolicitacao.length; j++) {
        var nota = await this.entities.nota.findAll({
          where: {
            id: NotasSolicitacao[j].id_nota,
          },
        });

        notas.push(nota);
      }

      all_data.push(
        Object.assign(
          {},
          solicitacao_data[i].dataValues,
          { empresa_distribuicao: empresa_distribuicao },
          { veiculo: veiculo },
          { motorista: motorista },
          { coletas: coletas },
          { notas: notas },
          { cargas: cargas }
        )
      );
    }

    return all_data;
  };

  getOne = async (ID) => {
    let solicitacao_data = {};
    try {
      solicitacao_data = await this.entity.findOne({
        where: {
          id: ID,
        },
      });
    } catch (fetch_error) {
      return {};
    }
    if (solicitacao_data == null) return {};
    let all_data = [];

    var empresa_distribuicao = await this.entities.empresadistribuicao.findOne({
      where: {
        id: solicitacao_data.id_empresa_distribuicao,
      },
    });

    var veiculo = await this.entities.veiculo.findOne({
      where: {
        id: solicitacao_data.id_veiculo,
      },
    });

    var motorista = await this.entities.motorista.findOne({
      where: {
        id: solicitacao_data.id_motorista,
      },
    });

    var ColetasSolicitacao = await this.entities.solicitacaoColeta.findAll({
      where: {
        id_solicitacao: solicitacao_data.id,
      },
    });

    var CargasSolicitacao = await this.entities.solicitacaoCarga.findAll({
      where: {
        id_solicitacao: solicitacao_data.id,
      },
    });

    var NotasSolicitacao = await this.entities.solicitacaoNota.findAll({
      where: {
        id_solicitacao: solicitacao_data.id,
      },
    });

    var coletas = [];
    for (let j = 0; j < ColetasSolicitacao.length; j++) {
      var coleta = await this.entities.coleta.findAll({
        where: {
          id: ColetasSolicitacao[j].id_coleta,
        },
      });

      coletas.push(coleta);
    }

    var cargas = [];
    for (let j = 0; j < CargasSolicitacao.length; j++) {
      var carga = await this.entities.carga.findAll({
        where: {
          id: CargasSolicitacao[j].id_carga,
        },
      });

      cargas.push(carga);
    }

    var notas = [];
    for (let j = 0; j < NotasSolicitacao.length; j++) {
      var nota = await this.entities.nota.findAll({
        where: {
          id: NotasSolicitacao[j].id_nota,
        },
      });

      notas.push(nota);
    }

    all_data.push(
      Object.assign(
        {},
        solicitacao_data.dataValues,
        { empresa_distribuicao: empresa_distribuicao },
        { veiculo: veiculo },
        { coletas: coletas },
        { cargas: cargas },
        { notas: notas },
        { motorista: motorista }
      )
    );

    return all_data;
  };

  getByStatus = async (token, status) => {
    const solicitacao_data = await this.entity.findAll({
      where: {
        id_empresa_operacao: token,
        status: status,
      },
    });
    let all_data = [];
    for (let i = 0; i < solicitacao_data.length; i++) {
      var empresa_distribuicao =
        await this.entities.empresadistribuicao.findOne({
          where: {
            id: solicitacao_data[i].id_empresa_distribuicao,
          },
        });

      var veiculo = await this.entities.veiculo.findOne({
        where: {
          id: solicitacao_data[i].id_veiculo,
        },
      });

      var motorista = await this.entities.motorista.findOne({
        where: {
          id: solicitacao_data[i].id_motorista,
        },
      });

      all_data.push(
        Object.assign(
          {},
          solicitacao_data[i].dataValues,
          { empresa_distribuicao: empresa_distribuicao },
          { veiculo: veiculo },
          { motorista: motorista }
        )
      );
    }

    return all_data;
  };

  createNew = async (data, token) => {
    data.id_empresa_operacao = token;
    let inserted = true;
    try {
      let info_inserted = await this.entity.create(data);

      data;
      try {
        const coleta_save = await this.entities.coleta.create(coleta);

        const solicitacaoColetaVal = {
          id_coleta: coleta_save.id,
          id_solicitacao: info_inserted.id,
        };

        try {
          let solicitacao_coleta = await this.entities.solicitacaoColeta.create(
            solicitacaoColetaVal
          );
        } catch (insertError) {
          inserted = false;
          throw new Error(
            `[X] Error on create a new ${this.entity_type}: ${insertError}`
          ); //development mode
        }
      } catch (insertError) {
        inserted = false;
        throw new Error(
          `[X] Error on create a new ${this.entity_type}: ${insertError}`
        ); //development mode
      }
      data;

      data.cargas.forEach(async (carga) => {
        try {
          const carga_save = await this.entities.carga.create(carga);

          const solicitacaoCargaVal = {
            id_carga: carga_save.id,
            id_solicitacao: info_inserted.id,
          };

          try {
            let solicitacao_carga = await this.entities.solicitacaoCarga.create(
              solicitacaoCargaVal
            );

            data.notas.forEach(async (nota) => {
              try {
                const nota_save = await this.entities.nota.create(nota);

                const solicitacaoNotaVal = {
                  id_nota: nota_save.id,
                  id_solicitacao: info_inserted.id,
                };

                try {
                  let solicitacao_nota =
                    await this.entities.solicitacaoNota.create(
                      solicitacaoNotaVal
                    );
                } catch (insertError) {
                  inserted = false;
                  throw new Error(
                    `[X] Error on create a new ${this.entity_type}: ${insertError}`
                  ); //development mode
                }
              } catch (insertError) {
                inserted = false;
                throw new Error(
                  `[X] Error on create a new ${this.entity_type}: ${insertError}`
                ); //development mode
              }
            });
          } catch (insertError) {
            inserted = false;
            throw new Error(
              `[X] Error on create a new ${this.entity_type}: ${insertError}`
            ); //development mode
          }
        } catch (insertError) {
          inserted = false;
          throw new Error(
            `[X] Error on create a new ${this.entity_type}: ${insertError}`
          ); //development mode
        }
      });
    } catch (insertError) {
      inserted = false;
      throw new Error(
        `[X] Error on create a new ${this.entity_type}: ${insertError}`
      ); //development mode
    }

    return inserted;
  };
};
