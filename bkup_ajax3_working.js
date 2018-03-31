var express  = require('express');
//var  partials = require('express-partials');
var    http     = require('http');
var    path     = require('path');
var    bodyParser = require('body-parser');
var    fs   =  require('fs');
//var xmlhttprequest= require('xhr2');//require 
var jquery     = require ('jquery');
var str_buffer1 ="z bd ain city";
var str_buffer2 ="z bd ain ";
var string1 ="aabbbhhh";
var string2 ="aaggggfffffaa";
var string1a ="aqqqqq";
var string2a ="arrrrrrpp";
var str ="z bd ain city country12345";
 var friends = ["bill","hill","deal","phil","real"];
var friends_json = new Object();
friends_json.a="Qjill";
friends_json.b="Qphill";
friends_json.c="Qmill";
friends_json.d="Qnill";
friends_json.e="Qrill";
var friends_string=JSON.stringify(friends_json); 
 var friends = ["bill","hill","meal","jhil","neal"];
  fs.readFile("ajax_info.txt", function(err, data)
  {
 str_buffer1= data;
 if (Buffer.isBuffer(data)){ string1 = data.toString()} //('utf8');  }
string1a=string1.split('/n');
 });

  fs.readFile(path.resolve('views/build_ajax_simpl3.html'),function(err, data)
  {
 str_buffer2= data;
 if (Buffer.isBuffer(data)){ string2 = data.toString()}  //('utf8');  }
string2a=string2.split('/n');
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

/*app.post('/', function(req,res){
   res.setHeader("Content-Type", "text/html");
	 res.write(string1);
        res.write(friends_string);
       res.write(String(friends));
});*/
//===========   get'/'   =============================
app.get('/', function(req,res){
//res.setHeader("Content-Type","application/json;charset=utf-8");
res.setHeader("Content-Type","text/html;charset=utf-8");
 res.write(string2);
 res.write(string1);
});
//=======================post '/'====================
app.post('/', function (req,res) {
//res.setHeader("Content-Type","application/json;charset=utf-8");
res.setHeader("Content-Type","text/html;charset=utf-8");
    body=(JSON.stringify(req.body));
  var friends=req.body.friends;
  var response1=req.body.response1;
//res.setHeader("Content-Type","text/html;charset=utf-8");
 //response1=String(JSON.stringify(response1.value));
	console.log("response1", response1,friends);
 friends=String(JSON.stringify(friends));
 //   req.on('data', function (chunk) {
 	if (req.IsAjaxRequest) { res.write("accepted string2");}
res.write(friends);
res.write(string1);
res.write(string2);
	res.end();
//res.send(string1);  //res.status)(202).send???	
  //res.status)(202).send???	
});
 

//===========server(app) created ===========
http.createServer(app).listen(app.get('port'), function(){
  console.log('Application listening on port ' + app.get('port'));
}); 
console.log('Server Started listening on 5050');








//===========post  ===========

//res.setHeader("Content-Type"="text/html;charset=utf-8");
//                contentType: "application/json",
//res.setHeader("Content-Type": "text/html");
//string2=string2;
  //res.contentType('json');
  //res.send({ some: JSON.stringify({response:'json'}) });
 //string1=JSON.stringify(data);
//	 res.write(JSON.stringify(chunk));
   //res.write(Date.now());
  // res.write(string1);
  //console.log(response1);
 //var t = req.body; //t.text///is it possible t.text.getelemntbyTagname=var1
// cursor =db.collection('response').find({"name1":t.text},{"name2":1, "_id":0});
       //	res.set('Content-Type', 'json');
  //   client side:   xhttp.onload = function(){ alert (xhttp.responseText); }
//res.setHeader("Content-Type","application/json;charset=utf-8");
// request.write(JSON.stringify(some_json),'utf8');  

//res.render('build_ajax_simpl3.html' 
//If you just want to serve static files (rather than render templates), 
//you want res.send()/res.sendfile()/res.download() instead of res.render() (or res.write() etc. 
//from the core Node http response API).
/*
app.get('/friends',function(req,res){
      	if (req.IsAjaxRequest) {  res.write(friends_string);
     res.write(String(friends))};
//var friendslist = ["tom","dick","noel","bob","russel"];
	res.render('friends',{friendslist:friendslist ,friend:friend});
friendslist= friendslist;
       	//assigning the last upodated friendlist(posted +push.friend) before next new item (friend) post req
});

app.post('/friends',function(req,res){
    //console.log(JSON.stringify(req.body));
    body=(JSON.stringify(req.body));
 friend=(JSON.stringify(req.body.name));
	friend = friend.replace(/^"(.*)"$/, '$1');
	    friendslist.push(   friend    )
	res.render('friends',{friendslist:friendslist,friend: friend });
//friendslist= friendslist,friend;
});


http.createServer(app).listen(app.get('port'), function(){
*/
//=============   g  e t     get   ==============================================

/*
 * res.end(util.inspect({
            fields: fields,
            files: files
        }));
*/

//	if (req.IsAjaxRequest) {res.redirect('/XHRs')};
  //  res.sendFie(path.resolve('views/build_ajax_simpl3.html'));l
   /*        res.on('data', function (chunk) {
            output += chunk;     });
        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });   */

  //res.writeHead("Content-Type", "text/html");
//  res.set('Content-Type', 'json');
  // var data = JSON_OBJECT;


        

    //res.sendFile('build_ajax_simpl3.html', { root: path.join(__dirname, '/views') });

 
	/*  
	 *  if (!Validation.isValidUTF8(messageBuffer)) {
  self.error('invalid utf8 sequence', 1007);
  return;   
	*/

// =============================
//app.get('/', function (req, res) {
// res.set('Content-Type', 'text/html');
/*  if(req.url == "/sample.html") {
    fs.readFile("sample.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
    return;

  }/res.send(new Buffer('some html'));
//=-----------------------======================server ip-----------------
app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});
// You need to access 192.168.1.11:3000(or whatever your address is), 
// not 0.0.0.0:3000. ¿ Bidhan A Jun 8 '15 at 15:16 

/* localhost is a special hostname that almost always resolves to 127.0.0.1.
  If you ask someone else to connect to http://localhost they'll be connecting to their computer instead or yours.

 also need to make sure any firewalls you may have configured allow traffic on port 80
 to connect to the WAMP server.
*/

//----------------------=========================----------------


//======================callback file read function==================
/*
function readContent(callback) {
    fs.readFile("./Index.html", function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

readContent(function (err, content) {
    console.log(content)
})
*/
//======================
/*
    res.sendFile(path.join(__dirname, '../public', 'index1.html'));
    res.sendFile('index1.html', { root: path.join(__dirname, '../public') });

Note: __dirname returns the directory that the currently executing scrip
*/
//--------------------------------------------------
/*

 * const server = http.createServer(function (req, res) {
res.writeHead(200, { 'content-type': 'text/plain' })
fs.createReadStream(process.argv[3]).pipe(res)
server.listen(Number(process.argv[2]))
    });
*/

	//--------------------------------------------------
//var ejs = require('ejs');
//var assert = require('assert');
//client-side xhr     ----server.ejs(?) to create at current root dir
    // var $ = require("jquery")(window);
 // res.write(build_ajax_simpl3.html)
 // if(req.url == "/") {
     // res.setHeader("Content-Type", "text/html");
     // res.end(text);
//res.send({ user: 'tobi' })
//res.send([1,2,3])
   // req.on('data', function (chunk) {
    //req.on('data', function (data) {
/*
console.log(JSON.parse(req.responseText));
    res.send(body|status[, headers|status[, status]]) (Express only)
    res.attachment(filename) (Express only)
    res.sendfile(path[, options[, callback]]) (Express only)
    res.json(obj[, headers|status[, status]]) (Express only)
    res.redirect(url[, status]) (Express only)
    res.cookie(name, val[, options]) (Express only)
    res.clearCookie(name[, options]) (Express only)
    res.render(view[, options[, fn]]) (Express only)
    res.partial(view[, options]) (Express only)
*/

	
