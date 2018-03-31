var fs = require('fs')
var jquery     = require ('jquery');
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
	var lines1 = contents.toString()
var lines2 = JSON.parse(lines1);
  var lines3 = JSON.stringify(lines2);
  var lines4 = String(lines1);
  console.log(lines)
  console.log(lines1)
  console.log(lines2)
  console.log(lines3)
  console.log(lines4)
})
