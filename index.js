const express = require("express");
const App = express()
const ContohRouter = require("./route/ContohRoute")

App.use("/contoh", ContohRouter);
App.listen (3005,()=>{
  console.log("Server Ready");
});
