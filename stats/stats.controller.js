// const service = require("./stats.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const list = async (req, res) => {
 res.json({
   data: [],
 });
}

module.exports = {
 list: [asyncErrorBoundary(list)],
}
