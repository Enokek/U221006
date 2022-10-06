var express = require('express');
var router = express.Router();
var fs = require('fs')

router.get('/', function(req, res){
    fs.readFile
   res.send('GET route on things.');
  

});
router.post('/', function(req, res){
   res.send('POST route on things.');
});


module.exports = router;