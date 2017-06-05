/**
 * Created by 박상만 on 2017-04-26.
 */

var express = require('express');
var router = express.Router();
var path = require('path');


router.post('/tourgoods', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var sampleFile = req.files.sampleFile;

    //var uploadPath = path.join(__dirname, 'files/' + 'test.png' )
    var uploadPath = "./files/files/test.png";

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv( uploadPath , function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

router.get('/test',function (req,res,next) {
    var htmlResultO="";
    var htmlResultH="";
    var htmlResultR="";
    var htmlResultT="";
    var htmlResultE="";
    res.render('uploadtest',{title: 'SearchDiff'});
})

module.exports = router;