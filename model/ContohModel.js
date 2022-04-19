const {readFileSync} = require ("fs");
const AmbilModelContoh = async() => {
    const data = await readFileSync("model/ContohData.json", "utf-8");
    return JSON.parse(data)
}

module.exports = {AmbilModelContoh};