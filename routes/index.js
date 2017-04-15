var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var json2html = require('node-json2html');
var urlencode = require('urlencode');

var transform = {'<>':'tr','html':'<th>${category1}</th> <th>${category2}</th> <th><a href=${goodsurl} target="_blank">${goodsname}</a></th> <th>${price}</th> <th>${region1}</th> <th>${region2}</th> '
        + '<th class="ui-table-cell-hidden">${startdate}</th> <th class="ui-table-cell-hidden">${goodsgrade}</th> <th class="ui-table-cell-hidden">${goodscode}</th> <th class="ui-table-cell-hidden"><img src=${imageurl} />  </th> '
};

var testdata = [
    {'name':'Bob','age':40},
    {'name':'Frank','age':15},
    {'name':'Bill','age':65},
    {'name':'Robert','age':24}
];


var testLink = "http://toursearch.interpark.com/WS/IntegrationSearch.asmx/Search?callback=SearchResultBindCallbackH&query=%EC%9D%BC%EB%B3%B8&rquery=&category=&cNum=0&pNum=5&destination=H"
var testlink2="http://toursearch.interpark.com/WS/IntegrationSearch.asmx/SearchCategory?callback=SearchResultCategoryListCallback&query=%ED%98%B8%ED%85%94&rquery="


var getSearchUrl_V1 = function (searchTxt,Group) {
    return "http://toursearch.interpark.com/WS/IntegrationSearch.asmx/Search?callback=SearchResultBindCallbackH&query=" +
    searchTxt + "&rquery=&category=&cNum=0&pNum=5" +
    "&destination=" + Group;
}

var getAutoTxtUrl_V1 = function (searchTxt,Group) {
    return "http://toursearch.interpark.com/WS/IntegrationSearch.asmx/Search?callback=SearchResultBindCallbackH&query=&rquery=" +
        searchTxt + "&category=&cNum=0&pNum=5" +
        "&destination=" + Group;
}

router.get('/',function (req,res,next) {
    var htmlResultO="";
    var htmlResultH="";
    var htmlResultR="";
    var htmlResultT="";
    var htmlResultE="";
    res.render('index',{title: 'SearchDiff'});
})

/* GET home page. */
router.get('/search/:searchtxt', function(req, res, next) {

    var client = new Client();
    var htmlResultO="";
    var htmlResultH="";
    var htmlResultR="";
    var htmlResultT="";
    var htmlResultE="";
    var searchtxt = urlencode(req.params.searchtxt);

    //var searchtxt = req.params.searchtxt;

    console.log(searchtxt);

    var searchCount=0;
    var LastView = function (data1) {
        if(searchCount==4){
            htmlResult = htmlResultO+htmlResultE+htmlResultH+htmlResultR+htmlResultT;
            res.render('search', { title: '검색 엔진 DataDiff',
                htmlResultO:htmlResult
            });
        }
        searchCount++;
    }

    client.get( getSearchUrl_V1(searchtxt,"O") , function (data) {
        // parsed response body as js object
        //console.log(data.docs.doc);
        // raw response
        //console.log(response);
        //var jsonData = response.replace("SearchResultBindCallbackH(","");
        //jsonData = jsonData.replace("}]}})","}]}}");

        if(data.docs){
            if(data.docs.doc){
                htmlResultO = json2html.transform(data.docs.doc,transform);
                //htmlResultO += '<p>' + data.docs.ret.query + '</p>';
            }
        }
        LastView()
    })

    client.get( getSearchUrl_V1(searchtxt,"H") , function (data) {
        // parsed response body as js object
        //console.log(data);
        // raw response
        //console.log(response);
        //var jsonData = response.replace("SearchResultBindCallbackH(","");
        //jsonData = jsonData.replace("}]}})","}]}}");

        if(data.docs){
            if(data.docs.doc){
                htmlResultH = json2html.transform(data.docs.doc,transform);
            }
        }

        LastView()
    })

    client.get( getSearchUrl_V1(searchtxt,"R") , function (data) {
        // parsed response body as js object

        // raw response
        //console.log(response);
        //var jsonData = response.replace("SearchResultBindCallbackH(","");
        //jsonData = jsonData.replace("}]}})","}]}}");

        if(data.docs){
            if(data.docs.doc){
                console.log(data.docs.doc);
                htmlResultR = json2html.transform(data.docs.doc,transform);
            }
        }


        LastView()
    })

    client.get( getSearchUrl_V1(searchtxt,"T") , function (data) {
        // parsed response body as js object
        //console.log(data.docs.doc);
        // raw response
        //console.log(response);
        //var jsonData = response.replace("SearchResultBindCallbackH(","");
        //jsonData = jsonData.replace("}]}})","}]}}");

        if(data.docs){
            if(data.docs.doc){
                htmlResultT = json2html.transform(data.docs.doc,transform);
            }
        }

        LastView()
    })

    client.get( getSearchUrl_V1(searchtxt,"E") , function (data) {
        // parsed response body as js object
        //console.log(data.docs.doc);
        // raw response
        //console.log(response);
        //var jsonData = response.replace("SearchResultBindCallbackH(","");
        //jsonData = jsonData.replace("}]}})","}]}}");
        if(data.docs){
            if(data.docs.doc){
                htmlResultE = json2html.transform(data.docs.doc,transform);
            }
        }
        LastView()
    })



});

module.exports = router;
