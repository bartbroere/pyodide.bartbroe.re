var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="cffi.data";var REMOTE_PACKAGE_BASE="cffi.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cffi",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cffi-1.14.6-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:295891,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1352,2677,3819,4521,5169,5799,6409,7501,8682,9723,10905,12111,13366,14976,16421,17998,19330,20892,22387,23758,25354,27010,28467,30137,31718,32876,34413,36032,37403,38861,40329,41394,42343,43689,44916,46391,47828,49139,50637,51935,53476,55140,56636,58204,59584,60942,62514,64084,65466,67102,68490,69727,71155,72684,74071,75317,76191,77304,78616,79950,81390,82720,84135,85685,87252,88771,90122,91553,92994,94443,95376,96233,97284,97766,97791,98015,99250,100250,101475,102693,103681,104302,104828,105725,106699,107883,109106,110082,111522,112642,113861,115151,116206,117540,118740,120034,121239,122578,123853,124994,125966,126931,127953,128924,130152,131413,132492,133510,134654,135861,136941,138157,139139,140302,141614,142947,144008,145029,146014,147192,148350,149379,150388,151424,152493,153556,154774,155845,156658,157765,158968,159957,160729,161809,162910,164069,165105,166102,167054,168088,169432,170657,171952,173291,174661,175931,177125,178539,179477,180414,181262,182488,183600,184605,185695,186766,187814,189014,190111,191190,192167,193215,194222,195225,196340,197614,198686,199885,200767,201808,202827,204060,205174,206284,207313,208288,209399,210542,211557,212917,214278,215617,216770,218200,219466,220804,221865,223239,224570,225814,226973,227921,228954,230003,230853,231889,232644,233524,234390,235403,236398,237343,238360,239340,240230,241338,242281,243337,244317,245344,246468,247794,248779,249902,251214,252406,253526,254766,255859,256810,257876,258723,259843,260963,261996,262855,264146,265391,266579,267686,268426,269568,270724,271893,273265,274331,275582,276717,277773,278795,279886,280911,281804,282914,283920,284903,285882,286944,287877,289129,290004,290643,291143,292144,293422,294479,295122],sizes:[1352,1325,1142,702,648,630,610,1092,1181,1041,1182,1206,1255,1610,1445,1577,1332,1562,1495,1371,1596,1656,1457,1670,1581,1158,1537,1619,1371,1458,1468,1065,949,1346,1227,1475,1437,1311,1498,1298,1541,1664,1496,1568,1380,1358,1572,1570,1382,1636,1388,1237,1428,1529,1387,1246,874,1113,1312,1334,1440,1330,1415,1550,1567,1519,1351,1431,1441,1449,933,857,1051,482,25,224,1235,1e3,1225,1218,988,621,526,897,974,1184,1223,976,1440,1120,1219,1290,1055,1334,1200,1294,1205,1339,1275,1141,972,965,1022,971,1228,1261,1079,1018,1144,1207,1080,1216,982,1163,1312,1333,1061,1021,985,1178,1158,1029,1009,1036,1069,1063,1218,1071,813,1107,1203,989,772,1080,1101,1159,1036,997,952,1034,1344,1225,1295,1339,1370,1270,1194,1414,938,937,848,1226,1112,1005,1090,1071,1048,1200,1097,1079,977,1048,1007,1003,1115,1274,1072,1199,882,1041,1019,1233,1114,1110,1029,975,1111,1143,1015,1360,1361,1339,1153,1430,1266,1338,1061,1374,1331,1244,1159,948,1033,1049,850,1036,755,880,866,1013,995,945,1017,980,890,1108,943,1056,980,1027,1124,1326,985,1123,1312,1192,1120,1240,1093,951,1066,847,1120,1120,1033,859,1291,1245,1188,1107,740,1142,1156,1169,1372,1066,1251,1135,1056,1022,1091,1025,893,1110,1006,983,979,1062,933,1252,875,639,500,1001,1278,1057,643,769],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_cffi.data")}Module["addRunDependency"]("datafile_cffi.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/_cffi_backend.so",start:0,end:155399,audio:0},{filename:"/lib/python3.9/site-packages/cffi/cffi_opcode.py",start:155399,end:161123,audio:0},{filename:"/lib/python3.9/site-packages/cffi/_cffi_include.h",start:161123,end:175923,audio:0},{filename:"/lib/python3.9/site-packages/cffi/pkgconfig.py",start:175923,end:180297,audio:0},{filename:"/lib/python3.9/site-packages/cffi/__init__.py",start:180297,end:180810,audio:0},{filename:"/lib/python3.9/site-packages/cffi/api.py",start:180810,end:222874,audio:0},{filename:"/lib/python3.9/site-packages/cffi/verifier.py",start:222874,end:234127,audio:0},{filename:"/lib/python3.9/site-packages/cffi/vengine_gen.py",start:234127,end:260811,audio:0},{filename:"/lib/python3.9/site-packages/cffi/parse_c_type.h",start:260811,end:266787,audio:0},{filename:"/lib/python3.9/site-packages/cffi/model.py",start:266787,end:288555,audio:0},{filename:"/lib/python3.9/site-packages/cffi/ffiplatform.py",start:288555,end:292601,audio:0},{filename:"/lib/python3.9/site-packages/cffi/error.py",start:292601,end:293478,audio:0},{filename:"/lib/python3.9/site-packages/cffi/setuptools_ext.py",start:293478,end:302409,audio:0},{filename:"/lib/python3.9/site-packages/cffi/recompiler.py",start:302409,end:366977,audio:0},{filename:"/lib/python3.9/site-packages/cffi/_cffi_errors.h",start:366977,end:370885,audio:0},{filename:"/lib/python3.9/site-packages/cffi/lock.py",start:370885,end:371632,audio:0},{filename:"/lib/python3.9/site-packages/cffi/_embedding.h",start:371632,end:389213,audio:0},{filename:"/lib/python3.9/site-packages/cffi/backend_ctypes.py",start:389213,end:431667,audio:0},{filename:"/lib/python3.9/site-packages/cffi/cparser.py",start:431667,end:475898,audio:0},{filename:"/lib/python3.9/site-packages/cffi/commontypes.py",start:475898,end:478587,audio:0},{filename:"/lib/python3.9/site-packages/cffi/vengine_cpy.py",start:478587,end:521907,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/top_level.txt",start:521907,end:521926,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/not-zip-safe",start:521926,end:521927,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/requires.txt",start:521927,end:521937,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/entry_points.txt",start:521937,end:522013,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/SOURCES.txt",start:522013,end:527026,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/dependency_links.txt",start:527026,end:527027,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/PKG-INFO",start:527027,end:528215,audio:0}],remote_package_size:299987,package_uuid:"5c41bf99-c36b-4aa6-9099-81138ea3eece"})})();