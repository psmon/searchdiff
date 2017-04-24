var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var json2html = require('node-json2html');
var urlencode = require('urlencode');
var totalProcessCnt = 0;

var transform = {'<>':'tr','html':'<th>${category1}</th> <th>${category2}</th> <th><a href=${goodsurl} target="_blank">${goodsname}</a></th> <th>${price}</th> <th>${region1}</th> <th>${region2}</th> '
        + '<th class="ui-table-cell-hidden">${startdate}</th> <th class="ui-table-cell-hidden">${goodsgrade}</th> <th class="ui-table-cell-hidden">${goodscode}</th> <th class="ui-table-cell-hidden"><img src=${imageurl} />  </th> '
};


var transform2 = {'<>':'tr','html':'<th>${mcategory1}</th> <th>${mcategory2}</th> <th><a href=${imageurl} target="_blank">${goodsname}</a></th> <th>${price}</th> <th>${region1}</th> <th>${region2}</th> '
+ '<th class="ui-table-cell-hidden">${startdate}</th> <th class="ui-table-cell-hidden">${goodstype}</th> <th class="ui-table-cell-hidden">${goodscode}</th> <th class="ui-table-cell-hidden"><img src=${imageurl} />  </th> ' +
'<th class="ui-table-cell-hidden">${airline}</th> <th class="ui-table-cell-hidden">${airplan}</th> <th class="ui-table-cell-hidden">${facility}</th><th class="ui-table-cell-hidden"> <a href="http://maps.google.com/?q=${position}" target="_blank">${position}</a> </th>'

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

var getSearchUrl_V2 = function (searchTxt) {
    return "http://192.168.28.222:8080/tour/select?q=" +
        searchTxt + "&group=true&group.field=mcategory1&group.limit=5&wt=json";
}

var getSearchUrlCate_V1 = function (searchTxt,Group) {
    var tryUrl = "http://toursearch.interpark.com/WS/IntegrationSearch.asmx/Search?callback=SearchResultBindCallbackH&query=" +
        searchTxt + "&rquery=&category=&cNum=0&pNum=50" +
        "&destination=" + Group;

    console.log(tryUrl);
    return tryUrl;
}

var getSearchUrlCate_V2 = function (searchTxt,mcategory1txt) {
    var url = "http://192.168.28.222:8080/tour/select?q=" +
        searchTxt +
        "&fq=" + mcategory1txt + "&debug=true&wt=json&start=0&rows=50";
    return url;
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


router.get('/searchCate/:searchtxt/:category', function(req, res, next) {
    var client = new Client();

    var htmlResult = "";
    var htmlResultNew = "";
    var searchtxt = urlencode(req.params.searchtxt);
    var category1 = req.params.category
    var newCategori = "mcategory1:";

    var GeoInfoList = [];


    switch (category1){
        case "E":
            newCategori = urlencode("mcategory1:땡처리항공권||E")
            break;
        case "O":
            newCategori = urlencode("mcategory1:해외호텔||O")
            break;
        case "H":
            newCategori = urlencode("mcategory1:국내숙박||H")
            break;
        case "R":
            newCategori = urlencode("mcategory1:해외여행||R")
            break;
        case "T":
            newCategori = urlencode("mcategory1:국내여행||T")
            break;
    }
    var searchCount = 0;

    console.log(newCategori)

    var LastView2 = function (data1) {
        if(searchCount==1){
            res.render('search', { title: '검색 엔진 DataDiff',
                htmlResultO:htmlResult,
                htmlResult1:htmlResultNew,
                GeoInfoList:GeoInfoList
            });
        }
        searchCount++;
    }


    client.get( getSearchUrlCate_V1(searchtxt,category1) , function (data) {
        if(data.docs){
            if(data.docs.doc){
                htmlResult = json2html.transform(data.docs.doc,transform);
            }
        }
        LastView2()
    })

    client.get( getSearchUrlCate_V2(searchtxt,newCategori) , function (data) {
        var json = JSON.parse(data.toString());
        if(json.response.docs){
            for(var idx=0; idx<json.response.docs.length; idx++){
                var geoInfo = {};
                geoInfo.name = json.response.docs[idx].goodsname;
                if( json.response.docs[idx].position!=null ) {
                    if( json.response.docs[idx].position.length > 5 ){
                        geoInfo.lat = Number ( json.response.docs[idx].position.split(",")[0] );
                        geoInfo.lon = Number ( json.response.docs[idx].position.split(",")[1] );
                        console.log(geoInfo)
                        GeoInfoList.push((geoInfo));
                    }
                }
            }

            htmlResultNew = json2html.transform(json.response.docs,transform2);
        }
        LastView2()
    })



});

/* GET home page. */
router.get('/search/:searchtxt', function(req, res, next) {

    var client = new Client();
    var htmlResultO="";
    var htmlResultH="";
    var htmlResultR="";
    var htmlResultT="";
    var htmlResultE="";
    var htmlResultNew = "";
    var searchtxt = urlencode(req.params.searchtxt);
    var GeoInfoList = [];

    //var searchtxt = req.params.searchtxt;

    //console.log(searchtxt);

    var searchCount=0;
    var LastView = function (data1) {
        if(searchCount==5){
            htmlResult = htmlResultO+htmlResultE+htmlResultH+htmlResultR+htmlResultT;
            res.render('search', { title: '검색 엔진 DataDiff',
                htmlResultO:htmlResult,
                htmlResult1:htmlResultNew,
                GeoInfoList:GeoInfoList
            });
        }
        searchCount++;
    }

    client.get( getSearchUrl_V1(searchtxt,"O") , function (data) {
        if(data.docs){
            if(data.docs.doc){
                htmlResultO = json2html.transform(data.docs.doc,transform);
                //htmlResultO += '<p>' + data.docs.ret.query + '</p>';
            }
        }
        LastView()
    })

    client.get( getSearchUrl_V1(searchtxt,"H") , function (data) {

        if(data.docs){
            if(data.docs.doc){
                htmlResultH = json2html.transform(data.docs.doc,transform);
            }
        }

        LastView()
    })

    client.get( getSearchUrl_V1(searchtxt,"R") , function (data) {

        if(data.docs){
            if(data.docs.doc){
                //console.log(data.docs.doc);
                htmlResultR = json2html.transform(data.docs.doc,transform);
            }
        }

        LastView()
    })

    client.get( getSearchUrl_V1(searchtxt,"T") , function (data) {

        if(data.docs){
            if(data.docs.doc){
                htmlResultT = json2html.transform(data.docs.doc,transform);
            }
        }

        LastView()
    })

    client.get( getSearchUrl_V1(searchtxt,"E") , function (data) {
        if(data.docs){
            if(data.docs.doc){
                htmlResultE = json2html.transform(data.docs.doc,transform);
            }
        }
        LastView()
    })



    client.get( getSearchUrl_V2(searchtxt) , function (data) {
        //console.log(data);
        var json = JSON.parse(data.toString());
        if(json.grouped){
            if(json.grouped.mcategory1){
                for (i = 0; i < json.grouped.mcategory1.groups.length ; i++) {
                    var docs = json.grouped.mcategory1.groups[i].doclist.docs;

                    for(var idx=0; idx<docs.length; idx++) {
                        var geoInfo = {};
                        geoInfo.name = docs[idx].goodsname;
                        if( docs[idx].position!=null ) {
                            if( docs[idx].position.length > 5 ){
                                geoInfo.lat = Number ( docs[idx].position.split(",")[0] );
                                geoInfo.lon = Number ( docs[idx].position.split(",")[1] );
                                console.log(geoInfo)
                                GeoInfoList.push((geoInfo));
                            }
                        }

                    }

                    htmlResultNew += json2html.transform(docs,transform2);
                }

            }
        }
        LastView()
    })

});

router.post('/pushdata', function(req, res, next) {
    totalProcessCnt++;
    console.log(req.body)
    console.log('TotalProcessCnt - ' + totalProcessCnt)
    res.send('OK');
});

module.exports = router;
