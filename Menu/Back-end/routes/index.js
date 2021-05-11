var express = require('express');
const dbHandler = require('../handler/dbHandler');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Backend");
});

router.get('/items',async(req,res)=>
{
  dbHandler.getItems().then((products)=>
  {
    res.status(200).send(products)
  })
})

module.exports = router;
