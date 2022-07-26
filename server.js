const express = require("express")
const app =  express ()
const cors = require("cors")
const mysql = require("mysql")

app.use(cors())
app.use(express.json())

const dataBase = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database: "E-commerce"

})
module.exports =dataBase;
dataBase.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + dataBase.threadId);
  });

app.get('/products',(res,req)=>{
    let input="SELECT * FROM products";

    connection.query(`$input`), function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results)
    }
})

