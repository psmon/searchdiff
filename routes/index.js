var express = require('express');
var router = express.Router();


router.post('/pushdata', function(req, res, next) {
    totalProcessCnt++;
    console.log(req.body)
    console.log('TotalProcessCnt - ' + totalProcessCnt  );
    res.send('OK');
});

module.exports = router;
