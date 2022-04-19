const {Router} = require("express");
const {AmbilModel} = require("../controller/ContohController");
const route = Router();
route.get("/",(req,res)=>{
    AmbilModel(req,res);
});

module.exports = route;