const {AmbilModelContoh} = require("../model/ContohModel");
const AmbilModel = async(req,res) =>{
    const data = await AmbilModelContoh();
    res.json({ContohData: {data}});
};

module.exports = {AmbilModel};