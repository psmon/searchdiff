/**
 * Created by psmon_qapgr0w on 2017-04-15.
 */


// BasicGoods

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search? 기본 상품 검색
 * @apiGroup BasicGoods
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} filter filter.XXXX=O|H|R|T|E 필터 OR 조건
 * @apiParam {String} filter.categorycode1 filter.categorycode1=O|H|R|T|E 해외호텔,국내숙박,해외여행,국내여행,땡처리항공에서 검색
 * @apiParam {String} filter.saleschannel filter.saleschannel=S02001 카테고리 지정없이, 기본 통합 검색 기본 상품 채널로도 검색가능
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccess {Object[]} CategoryList.headerInfo 컬렉션 정보
 * @apiSuccess {String} CategoryList.headerInfo.name 컬렉션 이름
 * @apiSuccess {Number} CategoryList.headerInfo.cnt 검색수
 * @apiSuccess {Object[]} CategoryList.dataList 검색 결과 리스트
 * @apiSuccess {Number} CategoryList.dataList.id 고유ID
 * @apiSuccess {String} CategoryList.dataList.category1 카테고리명 1
 * @apiSuccess {String} CategoryList.dataList.category2 카테고리명 2
 * @apiSuccess {String} CategoryList.dataList.categorycode1 카테고리 코드1
 * @apiSuccess {String} CategoryList.dataList.categorycode2 카테고리 코드2
 * @apiSuccess {String} CategoryList.dataList.region1 지역명1
 * @apiSuccess {String} CategoryList.dataList.region2 지역명2
 * @apiSuccess {String} CategoryList.dataList.regioncode1 지역코드1
 * @apiSuccess {String} CategoryList.dataList.regioncode2 지역코드2
 * @apiSuccess {String} CategoryList.dataList.goodsname 상품명(표시우선)
 * @apiSuccess {String} CategoryList.dataList.goodsname_kr 상품명(한글)
 * @apiSuccess {String} CategoryList.dataList.goodsname_en 상품명(영문)
 * @apiSuccess {Number} CategoryList.dataList.price 상품가격
 * @apiSuccess {Number} CategoryList.dataList.pointrate 포인트 적립률
 * @apiSuccess {Date} CategoryList.dataList.startdate 여행 시작날짜
 * @apiSuccess {Date} CategoryList.dataList.enddate 여행 종료날짜
 * @apiSuccess {Date} CategoryList.dataList.regdate 등록일
 * @apiSuccess {String} CategoryList.dataList.imageurl 이미지 URL
 * @apiSuccess {String} CategoryList.dataList.goodsurl 상품 URL
 * @apiSuccess {String} CategoryList.dataList.goodscode 상품코드
 * @apiSuccess {Number} CategoryList.dataList.commentcount 상품 뎃글수
 * @apiSuccess {Number} CategoryList.dataList.customervaluation 상품 평점
 * @apiSuccess {String} CategoryList.dataList.goodsgrade 상품등급
 * @apiSuccess {String} CategoryList.dataList.saleschannel 검색채널
 * @apiSuccess {String} CategoryList.dataList.salestypecode 판매TypeCode
 * @apiSuccess {String} CategoryList.dataList.salestypename 판매Type명
 * @apiSuccess {String} CategoryList.dataList.terms 검색 키워드
 * @apiSuccess {String} CategoryList.dataList.airplan 항공총일정
 * @apiSuccess {String} CategoryList.dataList.airline 이용 출발 항공사
 * @apiSuccess {String} CategoryList.dataList.tripday 여행일정
 * @apiSuccess {String} CategoryList.dataList.facility 호텔옵션
 * @apiSuccess {String} CategoryList.dataList.meal 조식여부
 * @apiSuccess {String} CategoryList.dataList.goodstype 상품Type
 * @apiSuccess {Number} CategoryList.dataList.salecnt 판매량
 * @apiSuccess {Number} CategoryList.dataList.viewcnt 조회수
 * @apiSuccess {Number} CategoryList.dataList.latitude 위도
 * @apiSuccess {Number} CategoryList.dataList.longitude 경도
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *    docs:[{
 *      "id":"OF1000000003",
 *      "category1":"해외호텔",
 *      "category2":"유럽",
 *      "categorycode1":"O",
 *      "categorycode2":"F",
 *      "region1":"독일",
 *      "region2":"아헨",
 *      "regioncode1":"FAT",
 *      "regioncode2":"FATAAAAA",
 *      "goodsname":"aquis grana city hotel",
 *      "price":160820,
 *      "pointrate":1,
 *      "startdate":"2008-12-01T20:06:36",
 *      "enddate":"2008-12-01T20:06:36",
 *      "productdescription":"전망 좋은 호텔입니다.",
 *      "regdate":"2008-12-01T20:06:36",
 *      "imageurl":"http://a.com/a.png",
 *      "goodsurl":"http://a.com?code=100000003",
 *      "commentcount":3,
 *      "customervaluation":8.5,
 *      "goodsgrade":"4",
 *      "goodsname_kr":"아퀴스 그라나 시티 호텔",
 *      "goodsname_en":"aquis grana city hotel",
 *      "saleschannel":"S02001",
 *      "salestypecode":"G9002",
 *      "salestypename":"체크인나우",
 *      "terms":"aquis grana city hotel 아퀴스 그라나 시티 호텔  HOTEL 호텔 Aquis Grana City hotel 독일 아헨",
 *      "airplan":"2일",
 *      "airline":"아시아니",
 *      "tripday":"1박2일",
 *      "facility":"레스토랑/미팅룸/바/라운지",
 *      "meal":"Y",
 *      "goodstype":"호텔",
 *      "salecnt":7,
 *      "viewcnt":6,
 *      "latitude":50.7765,
 *      "longitude":6.0859
 *      },....],
 *      header{
 *          "cnt":6
 *
 *      }
 *
 *
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */


/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=test&filter.categorycode1=O|H 특정 컬렉션 검색(필터)
 * @apiGroup BasicGoods
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} filter filter.categorycode1=O|H 해외호텔,국내숙박에서만 검색
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
  *    결과 준비중
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=test&sort=salecnt,desc 상품 정렬
 * @apiGroup BasicGoods
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} sort sort=salecnt,desc : desc or asc,default: relevance desc
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
  *    결과 준비중
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=test&filter.salestypecode=G9002 체크인 나우 검색
 * @apiDescription 체크인 나우 상품 검색이 가능하며, 필터조건은 saleschannel=S02002 and salestypecode=G9002 입니다.
 * @apiGroup BasicGoods
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} filter filter.salestypecode=G9002 체크인나우 상품채널만 검색
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
  *    결과 준비중
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=test&filter.goodstype=출발 출발 여행 상품 검색
 * @apiDescription 필터조건은 기존에는 상품코드로만 검색이되었던 항목이며, 필터 조건은 saleschannel=TS1000 을 통해 키워드+출발날짜+가격 검색 가능해졌습니다.
 * @apiGroup BasicGoods
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} filter 필터
 * @apiParam {String} filter.goodstype filter.goodstype=출발 출발 or 기초 ( 필터조건으로 대체가능 )
 * @apiParam {String} filter.startdate filter.startdate=[2015-06-23T00:00:00,2015-06-24T00:00:00]
 * @apiParam {String} filter.enddate filter.enddate=[2015-06-23T00:00:00,2015-06-24T00:00:00]
 * @apiParam {String} filter.enddate filter.price=[1000,5000]
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
  *    결과 준비중
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=유휴인&q_option=and,region2 지역명으로 상품검색
 * @apiGroup BasicGoods
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} q_option q_option=and,region2 지역명으로 검색시도
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
  *    결과 준비중
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */



//Spot

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=에펠탑&filter.categorycode1=S 스팟검색
 * @apiDescription categorycode2(H:명소,R:지역명(도시) : SPOT정보를 여행사전으로 활용하여 API검색 Flow 강화, 검색된 스팟명은 도시정보,위경도 정보를 가지기 때문에 상품 재검색 가능합니다.
 * ( API레벨에서 지원시 형태소분석후 1차검색에서 가능, 안될시 2차 검색시도 )
 * @apiGroup Spot
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} filter filter.categorycode1=S 스팟에서 검색
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccess {String} CategoryList.dataList.terms 스팟명 = 검색키워드와 동일
 * @apiSuccess {String} CategoryList.dataList.goodscode 스팟넘버
 * @apiSuccess {Number} CategoryList.dataList.viewcnt 조회수
 * @apiSuccess {String} CategoryList.dataList.region1 지역명1
 * @apiSuccess {String} CategoryList.dataList.region2 지역명2
 * @apiSuccess {Number} CategoryList.dataList.latitude 위도
 * @apiSuccess {Number} CategoryList.dataList.longitude 경도

 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *          id:SP-28-10715,
 *          terms:디아먼트 부틱 호텔,
 *          viewcnt:3,
 *          spottype:명소,
 *          latitude:-33.8754140,
 *          longitude:151.2230000,
 *          region1:오스트레일리아,
 *          region2:시드니,
 *          goodsCode:'29',
 *          viewcnt:3
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

//Content

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=에펠탑&filter.categorycode1=C 컨텐츠 검색
 * @apiDescription categorycode2(F:자주묻는질문,M:동영상,Q:QA,E:상품평,R:리뷰)
 * @apiGroup Content
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} filter filter.categorycode1=C 컨텐츠에서 검색
 * @apiParam {String} filter filter.categorycode2=M 동영상내에서만 검색
 * @apiSuccess {String} CategoryList.dataList.category3 카테고리명 3
 * @apiSuccess {String} CategoryList.dataList.category4 카테고리명 4
 * @apiSuccess {String} CategoryList.dataList.goodscode 컨텐츠
 * @apiSuccess {String} CategoryList.dataList.goodsurl 컨텐츠 url(동영상)
 * @apiSuccess {String} CategoryList.dataList.imageurl 컨텐츠 이미지 URL
 * @apiSuccess {String} CategoryList.dataList.goodsname 상품명(제목)
 * @apiSuccess {String} CategoryList.dataList.regdate 등록일(제목)
 * @apiSuccess {String} CategoryList.dataList.content1 컨텐츠1(본문 요약1)
 * @apiSuccess {String} CategoryList.dataList.content2 컨텐츠2(본문 요약2)
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *    결과 준비중
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */


//AutoCompleted

/**
 * @api {get} http://alpha-api-suggest-ac.search.nhnent.com/ac/v1/appkeys/interpark0000000/domains/TourGoods,TourCity/suggest?title='TG','TC'&query=%E3%84%B1 자동 완성
 * @apiGroup AutoCompleted
 * @apiParam {String} query 질의
 * @apiParam {String} domains TourGoods,TourCity 자동완성 대상 목록 항목들(투어상품,투어도시)
 * @apiSuccess {Object[]} collections 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *          "collections" : [
 *                  { "index" : 0, "items" : [ [ "그랜드힐튼서울" ], [ "구미 메트로호텔" ], [ "경주스위트호텔" ], [ "괌쉐라톤(조,+중식3회+bbq1회)5일" ], [ "경주 나이스펜션" ], [ "김치버스와 골든홀리데이에 떠나는 푸켓 여행의 기술" ], [ "경주한국콘도" ], [ "강남 영동호텔" ], [ "강남 선샤인호텔" ], [ "광주 신양파크호텔" ] ], "title" : "'TG'" },
 *                  { "index" : 1, "items" : [ [ "강원" ], [ "경기" ], [ "강남구" ], [ "경북" ], [ "경남" ], [ "경주시" ], [ "괌" ], [ "그랜드캐년" ], [ "꾸스꼬" ], [ "고성군" ] ], "title" : "'TC'" }
 *                  ],
 *          "query" : [ "ㄱ", "r" ], "ver" : "1.0"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */


//Geo
/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=10.2,10.3&q_option=geo,1000 반경 검색
 * @apiGroup Geo
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} q_option q_option=geo,1000 반경검색옵션
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *    결과 생략
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

//Category 추천

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=동남아여행&filter.categorycode1=O|H|R|T&return=category1,category2,categorycode1,categorycode2,region1,region2,regioncode1,regioncode2 카테고리추천
 * @apiDescription categorycode1(O:해외호텔,H:국내숙박,R:해외여행,T:국내여행,E:땡처리항공,V:기획전,C:컨텐츠,S:스팟정보)
 * @apiGroup Category
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} filter filter.categorycode1=O|H|R|T 지정된 카테고리 내에서
 * @apiParam {String} summary summary.FIELD=categorycode1,categorycode2,regioncode1,regioncode2 Groby옵션및 Order옵션
 * @apiParam {String} return return=category1,category2,categorycode1,categorycode2,region1,region2,regioncode1,regioncode2 카테고리 추천에 필요한 필드만 지정함
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccess {String} CategoryList.dataList.category1 카테고리명 1
 * @apiSuccess {String} CategoryList.dataList.category2 카테고리명 2
 * @apiSuccess {String} CategoryList.dataList.categorycode1 카테고리 코드1
 * @apiSuccess {String} CategoryList.dataList.categorycode2 카테고리 코드2
 * @apiSuccess {String} CategoryList.dataList.region1 지역명1
 * @apiSuccess {String} CategoryList.dataList.region2 지역명2
 * @apiSuccess {String} CategoryList.dataList.regioncode1 지역코드1
 * @apiSuccess {String} CategoryList.dataList.regioncode2 지역코드2
 * @apiSuccess {Number} CategoryList.dataList.count 카테고리 검색내 상품 카운터

 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
  *    결과 생략
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

//Option
/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=test&format=json 반환 포맺
 * @apiGroup Option
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} format format=json json or xml
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *    지정된 반환 포맺(json or xml )
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=test&start=1&size=10 페이징
 * @apiDescription start,size Option을 사용하여 페이징(더보기) 기능을 구현할수 있습니다.
 * @apiGroup Option
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} start start=1 문서 시작번호
 * @apiParam {String} size size=10 반환 문서 개수
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *    결과 생략
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=test&sort=startdate,desc  정렬
 * @apiGroup Option
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} sort sort=startdate,desc (sort option)
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *    결과 생략
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {get} /WellcomeInterpk/v1/search/tour.search?q=test&return=startdate,desc 결과셋 지정
 * @apiGroup Option
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiParam {String} return return=goodscode,goodsname (결과셋 지정)
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *          goodscode:23234,
 *          goodsname:"아퀴스 그라나 시티 호텔"
 *
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

//Test
/**
 * @api {get} http://10.20.3.91:5000/ 검색결과 비교
 * @apiGroup TestAPI
 * @apiParam {String} q 질의 (encoding: utf-8) 질의를 입력하지 않을 경우 filter로 제한 된 검색 결과 제공
 * @apiSuccess {Object[]} CategoryList 컬렉션 리스트
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
  *    결과 생략
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */