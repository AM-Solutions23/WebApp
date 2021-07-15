const { xmlToObject, xmlHandler } = require("../tools/xml-handler");
const MasterController = require("./master-controller");
const multer = require("multer");
fs = require("fs");
var parser = require("xml2json");

module.exports = class SolicitacaoControllers extends MasterController {
  constructor() {
    super("solicitacao");
  }

  update = async (req, res) => {
    let solicitacao = await this.repository.getOne(req.params.id);

    solicitacao = solicitacao[0];

    if (
      solicitacao.status == "em-andamento" ||
      solicitacao.status == "entregue"
    ) {
      return res
        .status(400)
        .json({ updated: false, message: "Not allowed status." });
    }
    const ID = req.params.id;
    const updated = await this.repository.updateData(ID, req.body);

    if (!updated) {
      return res
        .status(500)
        .json({ message: `Error updating ${this.entity} with ID ${ID}.` });
    }

    res
      .status(201)
      .json({ message: `${this.entity} with ID: ${ID} updated successfully.` });
  };

  updateStatus = async (req, res) => {
    if (
      !(
        req.body.solicitacao.status == "em-andamento" ||
        req.body.solicitacao.status == "entregue" ||
        req.body.solicitacao.status == "solicitado"
      )
    ) {
      return res
        .status(400)
        .json({ updated: false, message: "Not allowed status." });
    }
    const ID = req.params.id;
    const updated = await this.repository.updateData(ID, req.body);

    if (!updated) {
      return res
        .status(500)
        .json({ message: `Error updating ${this.entity} with ID ${ID}.` });
    }

    res
      .status(201)
      .json({ message: `${this.entity} with ID: ${ID} updated successfully.` });
  };

  estatisticasSolicitacoes = async (req, res) => {
    console.log(req.token);
    const estatisticas = await this.repository.estatisticas(req.token.userID);
    res.status(200).json(estatisticas);
  };

  xmlReader = async (req, res) => {
    let repository = this.repository;

    const filename = Date.now() + "-" + "solicitacao.xml";

    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "src/tools/uploads");
      },
      filename: function (req, file, cb) {
        cb(null, filename);
      },
    });

    var upload = multer({ storage: storage }).single("file");
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        console.log(err);
        return res.status(500).json(err);
      } else if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      const data_parsed = xmlHandler(filename, req.token.userID);

      const created = await repository.createNew(data_parsed, req.token.userID);

      console.log(created);

      res.sendStatus(201);
    });
  };

  solicitado = async (req, res) => {
    const solicitados = await this.repository.getByStatus(
      req.token.userID,
      "solicitado"
    );

    res.status(200).json(solicitados);
  };
  em_andamento = async (req, res) => {
    const em_andamentos = await this.repository.getByStatus(
      req.token.userID,
      "em-andamento"
    );

    res.status(200).json(em_andamentos);
  };
  entregue = async (req, res) => {
    const entregues = await this.repository.getByStatus(
      req.token.userID,
      "entregue"
    );

    res.status(200).json(entregues);
  };

  createNewSolicitation = async (req, res) => {
    let created = await this.repository.createNew(req.body, req.token.userID);
    if (!created) {
      return res
        .status(500)
        .json({ created: false, message: `Error creating new ${this.entity}` });
    }

    res.status(201).json({
      created: true,
      message: `New ${this.entity} created successfully.`,
    });
  };
};
