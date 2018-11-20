        var express = require("express");
        var app     = express();
        var path    = require("path");
        var mysql = require('mysql');
        var bodyParser = require('body-parser');
        var string;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
            password: "Grizrunner88!",
            port: 3306,
        
        });
       
        app.get('/',function(req,res){
          res.sendFile(path.join(__dirname+'/input.html'));
        });
        app.post('/submit',function(req,res){
        
          var data = req.body.data_field;
          res.write('The new data: "' + req.body.data_field+'" has been sent\n');
         
          var info = "SELECT * FROM homework.info";
            con.query(info,function(err,result){
                string =("Remaining data: " + JSON.stringify(result)); 
                res.write(string + "\n Refresh to see new data point added in JSON array.");
               
            
             res.end();
            });
           
        
        
          con.connect(function(err) {
    
          var sql = "INSERT INTO homework.info (data) VALUES ('" + data + "')";
          
          console.log("1 record inserted");
          con.query(sql, function (err, result) {
            if (err) throw err;
            
             res.end();
          });
          });
        })
        app.listen(3000);
        console.log("Running at Port 3000");
        

   