define({ "api": [
  {
    "type": "get",
    "url": "http://alpha-api-suggest-ac.search.nhnent.com/ac/v1/appkeys/interpark0000000/domains/TourGoods,TourCity/suggest?title='TG','TC'&query=%E3%84%B1",
    "title": "자동 완성",
    "group": "AutoCompleted",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>질의</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domains",
            "description": "<p>TourGoods,TourCity 자동완성 대상 목록 항목들(투어상품,투어도시)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "collections",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n      \"collections\" : [\n              { \"index\" : 0, \"items\" : [ [ \"그랜드힐튼서울\" ], [ \"구미 메트로호텔\" ], [ \"경주스위트호텔\" ], [ \"괌쉐라톤(조,+중식3회+bbq1회)5일\" ], [ \"경주 나이스펜션\" ], [ \"김치버스와 골든홀리데이에 떠나는 푸켓 여행의 기술\" ], [ \"경주한국콘도\" ], [ \"강남 영동호텔\" ], [ \"강남 선샤인호텔\" ], [ \"광주 신양파크호텔\" ] ], \"title\" : \"'TG'\" },\n              { \"index\" : 1, \"items\" : [ [ \"강원\" ], [ \"경기\" ], [ \"강남구\" ], [ \"경북\" ], [ \"경남\" ], [ \"경주시\" ], [ \"괌\" ], [ \"그랜드캐년\" ], [ \"꾸스꼬\" ], [ \"고성군\" ] ], \"title\" : \"'TC'\" }\n              ],\n      \"query\" : [ \"ㄱ\", \"r\" ], \"ver\" : \"1.0\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "AutoCompleted",
    "name": "GetHttpAlphaApiSuggestAcSearchNhnentComAcV1AppkeysInterpark0000000DomainsTourgoodsTourcitySuggestTitleTgTcQueryE384B1"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?",
    "title": "기본 상품 검색",
    "group": "BasicGoods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>filter.XXXX=O|H|R|T|E 필터 OR 조건</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.categorycode1",
            "description": "<p>filter.categorycode1=O|H|R|T|E 해외호텔,국내숙박,해외여행,국내여행,땡처리항공에서 검색</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.saleschannel",
            "description": "<p>filter.saleschannel=S02001 카테고리 지정없이, 기본 통합 검색 기본 상품 채널로도 검색가능</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList.headerInfo",
            "description": "<p>컬렉션 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.headerInfo.name",
            "description": "<p>컬렉션 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.headerInfo.cnt",
            "description": "<p>검색수</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList.dataList",
            "description": "<p>검색 결과 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.id",
            "description": "<p>고유ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.category1",
            "description": "<p>카테고리명 1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.category2",
            "description": "<p>카테고리명 2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.categorycode1",
            "description": "<p>카테고리 코드1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.categorycode2",
            "description": "<p>카테고리 코드2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.region1",
            "description": "<p>지역명1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.region2",
            "description": "<p>지역명2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.regioncode1",
            "description": "<p>지역코드1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.regioncode2",
            "description": "<p>지역코드2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodsname",
            "description": "<p>상품명(표시우선)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodsname_kr",
            "description": "<p>상품명(한글)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodsname_en",
            "description": "<p>상품명(영문)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.price",
            "description": "<p>상품가격</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.pointrate",
            "description": "<p>포인트 적립률</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "CategoryList.dataList.startdate",
            "description": "<p>여행 시작날짜</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "CategoryList.dataList.enddate",
            "description": "<p>여행 종료날짜</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "CategoryList.dataList.regdate",
            "description": "<p>등록일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.imageurl",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodsurl",
            "description": "<p>상품 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodscode",
            "description": "<p>상품코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.commentcount",
            "description": "<p>상품 뎃글수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.customervaluation",
            "description": "<p>상품 평점</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodsgrade",
            "description": "<p>상품등급</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.saleschannel",
            "description": "<p>검색채널</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.salestypecode",
            "description": "<p>판매TypeCode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.salestypename",
            "description": "<p>판매Type명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.terms",
            "description": "<p>검색 키워드</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.airplan",
            "description": "<p>항공총일정</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.airline",
            "description": "<p>이용 출발 항공사</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.tripday",
            "description": "<p>여행일정</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.facility",
            "description": "<p>호텔옵션</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.meal",
            "description": "<p>조식여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodstype",
            "description": "<p>상품Type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.salecnt",
            "description": "<p>판매량</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.viewcnt",
            "description": "<p>조회수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.latitude",
            "description": "<p>위도</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.longitude",
            "description": "<p>경도</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\ndocs:[{\n  \"id\":\"OF1000000003\",\n  \"category1\":\"해외호텔\",\n  \"category2\":\"유럽\",\n  \"categorycode1\":\"O\",\n  \"categorycode2\":\"F\",\n  \"region1\":\"독일\",\n  \"region2\":\"아헨\",\n  \"regioncode1\":\"FAT\",\n  \"regioncode2\":\"FATAAAAA\",\n  \"goodsname\":\"aquis grana city hotel\",\n  \"price\":160820,\n  \"pointrate\":1,\n  \"startdate\":\"2008-12-01T20:06:36\",\n  \"enddate\":\"2008-12-01T20:06:36\",\n  \"productdescription\":\"전망 좋은 호텔입니다.\",\n  \"regdate\":\"2008-12-01T20:06:36\",\n  \"imageurl\":\"http://a.com/a.png\",\n  \"goodsurl\":\"http://a.com?code=100000003\",\n  \"commentcount\":3,\n  \"customervaluation\":8.5,\n  \"goodsgrade\":\"4\",\n  \"goodsname_kr\":\"아퀴스 그라나 시티 호텔\",\n  \"goodsname_en\":\"aquis grana city hotel\",\n  \"saleschannel\":\"S02001\",\n  \"salestypecode\":\"G9002\",\n  \"salestypename\":\"체크인나우\",\n  \"terms\":\"aquis grana city hotel 아퀴스 그라나 시티 호텔  HOTEL 호텔 Aquis Grana City hotel 독일 아헨\",\n  \"airplan\":\"2일\",\n  \"airline\":\"아시아니\",\n  \"tripday\":\"1박2일\",\n  \"facility\":\"레스토랑/미팅룸/바/라운지\",\n  \"meal\":\"Y\",\n  \"goodstype\":\"호텔\",\n  \"salecnt\":7,\n  \"viewcnt\":6,\n  \"latitude\":50.7765,\n  \"longitude\":6.0859\n  },....],\n  header{\n      \"cnt\":6\n\n  }\n\n\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "BasicGoods",
    "name": "GetWellcomeinterpkV1SearchTourSearch"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=유휴인&q_option=and,region2",
    "title": "지역명으로 상품검색",
    "group": "BasicGoods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q_option",
            "description": "<p>q_option=and,region2 지역명으로 검색시도</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 준비중\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "BasicGoods",
    "name": "GetWellcomeinterpkV1SearchTourSearchQQ_optionAndRegion2"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=test&filter.categorycode1=O|H",
    "title": "특정 컬렉션 검색(필터)",
    "group": "BasicGoods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>filter.categorycode1=O|H 해외호텔,국내숙박에서만 검색</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 준비중\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "BasicGoods",
    "name": "GetWellcomeinterpkV1SearchTourSearchQTestFilterCategorycode1OH"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=test&filter.goodstype=출발",
    "title": "출발 여행 상품 검색",
    "description": "<p>필터조건은 기존에는 상품코드로만 검색이되었던 항목이며, 필터 조건은 saleschannel=TS1000 을 통해 키워드+출발날짜+가격 검색 가능해졌습니다.</p>",
    "group": "BasicGoods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>필터</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.goodstype",
            "description": "<p>filter.goodstype=출발 출발 or 기초 ( 필터조건으로 대체가능 )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.startdate",
            "description": "<p>filter.startdate=[2015-06-23T00:00:00,2015-06-24T00:00:00]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.enddate",
            "description": "<p>filter.enddate=[2015-06-23T00:00:00,2015-06-24T00:00:00]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 준비중\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "BasicGoods",
    "name": "GetWellcomeinterpkV1SearchTourSearchQTestFilterGoodstype"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=test&filter.salestypecode=G9002",
    "title": "체크인 나우 검색",
    "description": "<p>체크인 나우 상품 검색이 가능하며, 필터조건은 saleschannel=S02002 and salestypecode=G9002 입니다.</p>",
    "group": "BasicGoods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>filter.salestypecode=G9002 체크인나우 상품채널만 검색</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 준비중\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "BasicGoods",
    "name": "GetWellcomeinterpkV1SearchTourSearchQTestFilterSalestypecodeG9002"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=test&sort=salecnt,desc",
    "title": "상품 정렬",
    "group": "BasicGoods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>sort=salecnt,desc : desc or asc,default: relevance desc</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 준비중\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "BasicGoods",
    "name": "GetWellcomeinterpkV1SearchTourSearchQTestSortSalecntDesc"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=동남아여행&filter.categorycode1=O|H|R|T&return=category1,category2,categorycode1,categorycode2,region1,region2,regioncode1,regioncode2",
    "title": "카테고리추천",
    "description": "<p>categorycode1(O:해외호텔,H:국내숙박,R:해외여행,T:국내여행,E:땡처리항공,V:기획전,C:컨텐츠,S:스팟정보)</p>",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>filter.categorycode1=O|H|R|T 지정된 카테고리 내에서</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>summary.FIELD=categorycode1,categorycode2,regioncode1,regioncode2 Groby옵션및 Order옵션</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p>return=category1,category2,categorycode1,categorycode2,region1,region2,regioncode1,regioncode2 카테고리 추천에 필요한 필드만 지정함</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.category1",
            "description": "<p>카테고리명 1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.category2",
            "description": "<p>카테고리명 2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.categorycode1",
            "description": "<p>카테고리 코드1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.categorycode2",
            "description": "<p>카테고리 코드2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.region1",
            "description": "<p>지역명1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.region2",
            "description": "<p>지역명2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.regioncode1",
            "description": "<p>지역코드1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.regioncode2",
            "description": "<p>지역코드2</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.count",
            "description": "<p>카테고리 검색내 상품 카운터</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 생략\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "Category",
    "name": "GetWellcomeinterpkV1SearchTourSearchQFilterCategorycode1OHRTReturnCategory1Category2Categorycode1Categorycode2Region1Region2Regioncode1Regioncode2"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=에펠탑&filter.categorycode1=C",
    "title": "컨텐츠 검색",
    "description": "<p>categorycode2(F:자주묻는질문,M:동영상,Q:QA,E:상품평,R:리뷰)</p>",
    "group": "Content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>filter.categorycode1=C 컨텐츠에서 검색</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.category3",
            "description": "<p>카테고리명 3</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.category4",
            "description": "<p>카테고리명 4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodscode",
            "description": "<p>컨텐츠</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodsurl",
            "description": "<p>컨텐츠 url(동영상)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.imageurl",
            "description": "<p>컨텐츠 이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodsname",
            "description": "<p>상품명(제목)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.regdate",
            "description": "<p>등록일(제목)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.content1",
            "description": "<p>컨텐츠1(본문 요약1)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.content2",
            "description": "<p>컨텐츠2(본문 요약2)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 준비중\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "Content",
    "name": "GetWellcomeinterpkV1SearchTourSearchQFilterCategorycode1C"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=10.2,10.3&q_option=geo,1000",
    "title": "반경 검색",
    "group": "Geo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q_option",
            "description": "<p>q_option=geo,1000 반경검색옵션</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 생략\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "Geo",
    "name": "GetWellcomeinterpkV1SearchTourSearchQ102103Q_optionGeo1000"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=test&format=json",
    "title": "반환 포맺",
    "group": "Option",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>format=json json or xml</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n지정된 반환 포맺(json or xml )\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "Option",
    "name": "GetWellcomeinterpkV1SearchTourSearchQTestFormatJson"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=test&return=startdate,desc",
    "title": "결과셋 지정",
    "group": "Option",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p>return=goodscode,goodsname (결과셋 지정)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n      goodscode:23234,\n      goodsname:\"아퀴스 그라나 시티 호텔\"\n\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "Option",
    "name": "GetWellcomeinterpkV1SearchTourSearchQTestReturnStartdateDesc"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=test&sort=startdate,desc",
    "title": "정렬",
    "group": "Option",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>sort=startdate,desc (sort option)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 생략\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "Option",
    "name": "GetWellcomeinterpkV1SearchTourSearchQTestSortStartdateDesc"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=test&start=1&size=10",
    "title": "페이징",
    "description": "<p>start,size Option을 사용하여 페이징(더보기) 기능을 구현할수 있습니다.</p>",
    "group": "Option",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>start=1 문서 시작번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>size=10 반환 문서 개수</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 생략\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "Option",
    "name": "GetWellcomeinterpkV1SearchTourSearchQTestStart1Size10"
  },
  {
    "type": "get",
    "url": "/WellcomeInterpk/v1/search/tour.search?q=에펠탑&filter.categorycode1=S",
    "title": "스팟검색",
    "description": "<p>categorycode2(H:명소,R:지역명(도시) : SPOT정보를 여행사전으로 활용하여 API검색 Flow 강화, 검색된 스팟명은 도시정보,위경도 정보를 가지기 때문에 상품 재검색 가능합니다. ( API레벨에서 지원시 형태소분석후 1차검색에서 가능, 안될시 2차 검색시도 )</p>",
    "group": "Spot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>filter.categorycode1=S 스팟에서 검색</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.terms",
            "description": "<p>스팟명 = 검색키워드와 동일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.goodscode",
            "description": "<p>스팟넘버</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.viewcnt",
            "description": "<p>조회수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.region1",
            "description": "<p>지역명1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryList.dataList.region2",
            "description": "<p>지역명2</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.latitude",
            "description": "<p>위도</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryList.dataList.longitude",
            "description": "<p>경도</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n      id:SP-28-10715,\n      terms:디아먼트 부틱 호텔,\n      viewcnt:3,\n      spottype:명소,\n      latitude:-33.8754140,\n      longitude:151.2230000,\n      region1:오스트레일리아,\n      region2:시드니,\n      goodsCode:'29',\n      viewcnt:3\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "Spot",
    "name": "GetWellcomeinterpkV1SearchTourSearchQFilterCategorycode1S"
  },
  {
    "type": "get",
    "url": "http://10.20.3.91:5000/",
    "title": "검색결과 비교",
    "group": "TestAPI",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "CategoryList",
            "description": "<p>컬렉션 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n결과 생략\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/searchapi_v1.js",
    "groupTitle": "TestAPI",
    "name": "GetHttp10203915000"
  }
] });
