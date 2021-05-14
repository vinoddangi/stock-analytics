const StockSymbol = require("../models/stock-symbol.model.js");

exports.findAllBySymbol = (req, res) => {
    StockSymbol.findAllBySymbol(req.params.symbol, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found symbol with id ${req.params.symbol}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving symbol with id " + req.params.symbol
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.findAll = (req, res) => {
    StockSymbol.findAll((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found symbol with id ${req.params.symbol}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving symbol with id " + req.params.symbol
                });
            }
        } else res.send(data);
    });
};