var express = require('express');
var router = express.Router();
var url=require("url");
var Test=require("./test");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/getInfo",function(req,res,next){
  
    var test=new Test();
    var params=url.parse(req.url,true).query;

    if(params.id==1){
      test.name="fuck";
      test.age=1;
      test.city="麻涌";
    }
    else{
      test.name="u";
      test.age=2;
      test.city="常平";
    }

    var resp={status:1,data:test};
    res.send(JSON.stringify(resp));
})

module.exports = router;
