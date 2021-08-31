const filteredData = require('./getFilteredData.js');

const getData = (req, res) => {
  const { key, startDate, endDate } = req.body;
  try {
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    const data = filteredData(key, sDate, eDate);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

module.exports = getData;
