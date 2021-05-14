const DayHistoricalData = require("../models/day-historical-data.model.js");

exports.findBySymbol = (req, res) => {
    DayHistoricalData.findBySymbol(req.params.symbol, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found historical data with id ${req.params.symbol}.`
                });
            } else {
                console.log(err)
                res.status(500).send({
                    message: "Error retrieving historical data with id " + req.params.symbol
                });
            }
        } else {
            res.send(data);
        }
    });
};