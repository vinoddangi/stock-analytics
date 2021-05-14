const sql = require("./db.js");

// constructor
const DayHistoricalData = function (dayHistoricalData) {
    this.symbol = dayHistoricalData.symbol;
    this.historicalDate = dayHistoricalData.historicalDate;
    this.dayOpen = dayHistoricalData.dayOpen;
    this.dayHigh = dayHistoricalData.dayHigh;
    this.dayLow = dayHistoricalData.dayLow;
    this.dayClose = dayHistoricalData.dayClose;
    this.dayAdjClose = dayHistoricalData.dayAdjClose;
    this.dayVolume = dayHistoricalData.dayVolume;
};

DayHistoricalData.findBySymbol = (symbol, result) => {
    sql.query("SELECT * FROM stock_day_historical WHERE symbol = '" + symbol + "'", (err, res) => {
        if (err) {
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });

};

module.exports = DayHistoricalData;