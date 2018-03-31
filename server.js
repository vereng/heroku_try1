var express  = require('express');
var    http     = require('http');
var    path     = require('path');
var    bodyParser = require('body-parser');
var    fs   =  require('fs');
var jquery     = require ('jquery');
var str_buffer1 ="z bd ain city";
var str_buffer2 ="z bd ain ";
var string1 ="aabbbhhh";
var string2 ="aaggggfffffaa";
var str ="z bd ain city country12345";
 var friends = ["bill","hill","deal","phil","real"];
var friends_json = new Object();
friends_json.a="Qjill";
friends_json.b="Qphill";
friends_json.c="Qmill";
friends_json.d="Qnill";
friends_json.e="Qrill";
 var friends = ["bill","hill","meal","jhil","neal"];
  fs.readFile("ajax_info.txt", function(err, data)
  {
 str_buffer1= data;
 if (Buffer.isBuffer(data)){ string1 = data.toString()} //('utf8');  }
                                                           //string1a=string1.split('/n');
 });

  fs.readFile(path.resolve('views/build_ajax_simpl3.html'),function(err, data)
  {
 str_buffer2= data;
 if (Buffer.isBuffer(data)){ string2 = data.toString()}  //('utf8');  }
 });
	  
var app = express();

app.set('port', process.env.PORT || 5050);

// =============viewss================
app.set('views', __dirname + '/views');

//==============view engine============
app.set("view engine","ejs");
app.engine('html', require('ejs').renderFile); 
 // app.use(express.static(__dirname + '/views'));

//============= bodyparser-json===========
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended' : 'true'}));

//===========   get'/'   =============================
app.get('/', function(req,res){
res.setHeader("Content-Type","text/html;charset=utf-8");
res.write(string2);
res.write(string1);
});
//=======================post '/'====================
app.post('/', function (req,res) {
//res.setHeader("Content-Type","application/json;charset=utf-8");
res.setHeader("Content-Type","text/html;charset=utf-8");
//res.setHeader("Content-type", "application/x-www-form-urlencoded");
   var friends=req.body.friends;
   var textarea="";
   var response2=req.body.response2;
   var response1="";
   var phone=req.body.phone;
 	if (req.method ==="POST" && req.url==='/' && (req.body.response1)){
	response1=JSON.stringify(req.body.response1).value;
	       console.log("ajaxrequest accepted",response1);
		res.write("accepted textarea"+response1)
}
if ( (req.body.friends) &&req.method==="POST" && req.url==='/') {
res.write(phone);
res.write(response2);
res.write(string1);
	res.write(String(JSON.stringify(friends)));
res.write(string2);}
	res.end(); 
});
//===========server(app) created ===========
http.createServer(app).listen(app.get('port'), function(){
  console.log('Application listening on port ' + app.get('port'));
}); 
console.log('Server Started listening on 5050');
