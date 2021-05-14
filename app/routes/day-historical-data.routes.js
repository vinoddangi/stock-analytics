module.exports = app => {
    const dayHistoricalData = require("../controllers/day-historical-data.controller.js");
    app.get("/dayHistoricalData/:symbol", dayHistoricalData.findBySymbol);
};