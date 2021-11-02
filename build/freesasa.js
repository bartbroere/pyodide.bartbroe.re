var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="freesasa.data";var REMOTE_PACKAGE_BASE="freesasa.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","freesasa-2.1.0-py3.9.egg-info",true,true);Module["FS_createPath"]("/","include",true,true);Module["FS_createPath"]("/include","python3.9",true,true);Module["FS_createPath"]("/include/python3.9","freesasa",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:429192,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1306,2585,3699,4782,5778,6752,7390,8204,9018,9876,10657,11726,12777,13811,14778,15819,16842,17847,18906,19949,20917,21876,22846,23823,24902,25914,26925,28061,29195,30551,32008,33583,35042,36388,37772,39146,40540,42093,43587,45079,46652,48014,49424,51061,52693,54257,55736,57371,58969,60561,61816,62880,63529,64359,65284,66082,67098,67798,68850,69781,71306,72550,73254,74316,75506,76472,77467,78525,79958,80674,81429,82247,83183,84059,85539,86641,88085,89573,90818,91878,93241,94094,95072,96413,97696,98640,99837,100978,102058,103405,104240,105184,106479,107524,108708,109901,110760,111929,113257,114264,115258,116158,117182,118081,119176,120326,121664,123027,124091,125332,126635,127698,129009,129958,130970,132068,132876,134079,135365,136575,137901,139147,140659,141932,143147,144310,145414,146573,147759,148682,149853,150956,152081,153135,154237,155157,156120,157038,158217,159310,160395,161626,162455,163718,165028,165754,167026,168189,169219,169680,170958,172178,173406,174475,175553,176769,177993,179204,179914,180635,181427,182286,183110,183855,184803,185837,186906,187835,188931,190091,191475,192961,193991,195164,195686,196585,197291,198407,199465,200850,202251,203263,204569,205889,207230,208380,209398,210625,211916,213145,214407,215484,216555,217771,218758,219580,220761,221939,223201,224238,225101,226159,227118,227993,228869,229729,230661,231499,232451,233442,234258,235234,236089,237033,238075,238942,239902,241174,242314,243138,244137,245291,246115,247070,248118,248936,249774,250483,251228,251904,252629,253324,254104,254862,255668,256487,257190,258020,258783,259667,260772,261813,263113,264310,265408,266549,267864,268897,269948,270979,271967,273175,274636,275718,276283,277027,277994,279273,280161,281210,282637,283978,285244,286538,287789,288883,289960,290879,291933,293193,294490,295644,297023,298052,298886,299598,300457,301297,302412,303460,304185,304962,306193,307084,308112,309369,310508,311673,312813,313691,314819,315691,316491,317626,319e3,320302,321461,322768,323700,324872,326237,327393,328136,329248,330201,331411,332869,333976,335064,335901,337092,338188,339137,340341,341566,342635,343581,344560,345545,345960,346597,347398,348885,350071,351236,352363,353659,354708,355089,356324,357378,358255,359243,360293,361745,363134,364511,365488,366807,368173,369551,370683,371119,371852,373259,374495,375672,377094,378371,379356,380211,381330,382122,382951,383617,384322,385108,385912,386691,387507,388275,389397,390540,391663,392895,393979,395167,396011,397425,398571,399771,400939,402236,403230,404198,405101,406077,406868,407821,408682,409764,410850,411761,412713,413497,414735,416048,416966,417822,418656,419608,420572,421534,422456,423403,424215,425153,425648,426594,427795,428899],sizes:[1306,1279,1114,1083,996,974,638,814,814,858,781,1069,1051,1034,967,1041,1023,1005,1059,1043,968,959,970,977,1079,1012,1011,1136,1134,1356,1457,1575,1459,1346,1384,1374,1394,1553,1494,1492,1573,1362,1410,1637,1632,1564,1479,1635,1598,1592,1255,1064,649,830,925,798,1016,700,1052,931,1525,1244,704,1062,1190,966,995,1058,1433,716,755,818,936,876,1480,1102,1444,1488,1245,1060,1363,853,978,1341,1283,944,1197,1141,1080,1347,835,944,1295,1045,1184,1193,859,1169,1328,1007,994,900,1024,899,1095,1150,1338,1363,1064,1241,1303,1063,1311,949,1012,1098,808,1203,1286,1210,1326,1246,1512,1273,1215,1163,1104,1159,1186,923,1171,1103,1125,1054,1102,920,963,918,1179,1093,1085,1231,829,1263,1310,726,1272,1163,1030,461,1278,1220,1228,1069,1078,1216,1224,1211,710,721,792,859,824,745,948,1034,1069,929,1096,1160,1384,1486,1030,1173,522,899,706,1116,1058,1385,1401,1012,1306,1320,1341,1150,1018,1227,1291,1229,1262,1077,1071,1216,987,822,1181,1178,1262,1037,863,1058,959,875,876,860,932,838,952,991,816,976,855,944,1042,867,960,1272,1140,824,999,1154,824,955,1048,818,838,709,745,676,725,695,780,758,806,819,703,830,763,884,1105,1041,1300,1197,1098,1141,1315,1033,1051,1031,988,1208,1461,1082,565,744,967,1279,888,1049,1427,1341,1266,1294,1251,1094,1077,919,1054,1260,1297,1154,1379,1029,834,712,859,840,1115,1048,725,777,1231,891,1028,1257,1139,1165,1140,878,1128,872,800,1135,1374,1302,1159,1307,932,1172,1365,1156,743,1112,953,1210,1458,1107,1088,837,1191,1096,949,1204,1225,1069,946,979,985,415,637,801,1487,1186,1165,1127,1296,1049,381,1235,1054,877,988,1050,1452,1389,1377,977,1319,1366,1378,1132,436,733,1407,1236,1177,1422,1277,985,855,1119,792,829,666,705,786,804,779,816,768,1122,1143,1123,1232,1084,1188,844,1414,1146,1200,1168,1297,994,968,903,976,791,953,861,1082,1086,911,952,784,1238,1313,918,856,834,952,964,962,922,947,812,938,495,946,1201,1104,293],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_freesasa.data")}Module["addRunDependency"]("datafile_freesasa.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/freesasa.so",start:0,end:306340,audio:0},{filename:"/lib/python3.9/site-packages/freesasa-2.1.0-py3.9.egg-info/top_level.txt",start:306340,end:306349,audio:0},{filename:"/lib/python3.9/site-packages/freesasa-2.1.0-py3.9.egg-info/SOURCES.txt",start:306349,end:307129,audio:0},{filename:"/lib/python3.9/site-packages/freesasa-2.1.0-py3.9.egg-info/dependency_links.txt",start:307129,end:307130,audio:0},{filename:"/lib/python3.9/site-packages/freesasa-2.1.0-py3.9.egg-info/PKG-INFO",start:307130,end:307914,audio:0},{filename:"/include/python3.9/freesasa/nb.c",start:307914,end:322704,audio:0},{filename:"/include/python3.9/freesasa/classifier_oons.c",start:322704,end:337771,audio:0},{filename:"/include/python3.9/freesasa/log.c",start:337771,end:345574,audio:0},{filename:"/include/python3.9/freesasa/lexer.c",start:345574,end:407196,audio:0},{filename:"/include/python3.9/freesasa/rsa.c",start:407196,end:413213,audio:0},{filename:"/include/python3.9/freesasa/coord.c",start:413213,end:419659,audio:0},{filename:"/include/python3.9/freesasa/json.c",start:419659,end:428883,audio:0},{filename:"/include/python3.9/freesasa/xml.c",start:428883,end:444384,audio:0},{filename:"/include/python3.9/freesasa/pdb.c",start:444384,end:456496,audio:0},{filename:"/include/python3.9/freesasa/util.c",start:456496,end:459188,audio:0},{filename:"/include/python3.9/freesasa/classifier_protor.c",start:459188,end:491340,audio:0},{filename:"/include/python3.9/freesasa/selection.h",start:491340,end:492484,audio:0},{filename:"/include/python3.9/freesasa/classifier.c",start:492484,end:525929,audio:0},{filename:"/include/python3.9/freesasa/pdb.h",start:525929,end:532619,audio:0},{filename:"/include/python3.9/freesasa/freesasa.h",start:532619,end:578954,audio:0},{filename:"/include/python3.9/freesasa/main.c",start:578954,end:602329,audio:0},{filename:"/include/python3.9/freesasa/example.c",start:602329,end:603753,audio:0},{filename:"/include/python3.9/freesasa/nb.h",start:603753,end:605784,audio:0},{filename:"/include/python3.9/freesasa/lexer.h",start:605784,end:614414,audio:0},{filename:"/include/python3.9/freesasa/freesasa_internal.h",start:614414,end:627356,audio:0},{filename:"/include/python3.9/freesasa/structure.c",start:627356,end:659447,audio:0},{filename:"/include/python3.9/freesasa/parser.c",start:659447,end:710702,audio:0},{filename:"/include/python3.9/freesasa/parser.h",start:710702,end:713425,audio:0},{filename:"/include/python3.9/freesasa/freesasa.c",start:713425,end:719593,audio:0},{filename:"/include/python3.9/freesasa/classifier_naccess.c",start:719593,end:740202,audio:0},{filename:"/include/python3.9/freesasa/sasa_lr.c",start:740202,end:753867,audio:0},{filename:"/include/python3.9/freesasa/sasa_sr.c",start:753867,end:763238,audio:0},{filename:"/include/python3.9/freesasa/selection.c",start:763238,end:790071,audio:0},{filename:"/include/python3.9/freesasa/coord.h",start:790071,end:799647,audio:0},{filename:"/include/python3.9/freesasa/node.c",start:799647,end:817996,audio:0},{filename:"/include/python3.9/freesasa/classifier.h",start:817996,end:821856,audio:0}],remote_package_size:433288,package_uuid:"ce3aaafa-cc5f-4799-a7d1-c06bd06fb931"})})();