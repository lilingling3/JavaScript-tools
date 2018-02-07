
var thunkfiy = require('thunkify')
var fs = require('fs');
var util = require('util');
//thunk
exports.readFileTk1 = thunkfiy(fs.readFile);

exports.readFileTk2 = (filename) => cb => fs.readFile(filename, (err, content) => err ? cb(err) : cb(null, content.toString()))
//promise
exports.readFileTk3 = util.promisify(fs.readFile);

exports.readFileTk4 = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, content) => {
      err ? reject(err) : resolve(content)
    });
  });
}

//async
exports.readFileTk6 = async (filename) => {
  var content = await exports.readFileTk3(filename);
  return content;
}

exports.readFileTk5 = function* (filename) {
  var content = yield exports.readFileTk1(filename);
  return content;
}