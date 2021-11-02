var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="parso.data";var REMOTE_PACKAGE_BASE="parso.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","parso-0.8.2-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","parso",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/parso","python",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/parso","pgen2",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:174271,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1087,1904,3169,4719,6048,7248,8366,9454,10962,12389,13511,14713,16068,17038,17896,19106,20180,21318,22886,24144,25388,26639,28010,29309,30516,31838,33173,34290,35299,36460,37851,39023,40307,41687,42939,44031,45264,46343,47418,48504,49673,50783,51923,52914,54076,55277,56375,57367,58468,59479,60401,61429,62306,63301,64437,65463,66531,67846,68942,70305,71708,73061,74284,75479,76665,77790,79022,80451,81407,82353,83342,84334,85362,86589,87561,88824,90192,91745,92861,94011,95294,96634,97846,98990,100144,101294,102359,103320,104435,105581,106720,107784,108878,110028,111228,112726,113930,115066,116235,117144,118442,119546,120814,121748,122961,124041,125201,126305,127449,128498,129666,130644,131901,132871,134022,135358,136804,137875,139124,140316,141500,142550,143632,144978,146354,147667,148630,149740,150879,151821,152894,153984,155079,155990,156628,157215,158284,159201,160042,161009,162131,163466,164708,166002,167268,168492,169628,170495,171764,172884,173867],sizes:[1087,817,1265,1550,1329,1200,1118,1088,1508,1427,1122,1202,1355,970,858,1210,1074,1138,1568,1258,1244,1251,1371,1299,1207,1322,1335,1117,1009,1161,1391,1172,1284,1380,1252,1092,1233,1079,1075,1086,1169,1110,1140,991,1162,1201,1098,992,1101,1011,922,1028,877,995,1136,1026,1068,1315,1096,1363,1403,1353,1223,1195,1186,1125,1232,1429,956,946,989,992,1028,1227,972,1263,1368,1553,1116,1150,1283,1340,1212,1144,1154,1150,1065,961,1115,1146,1139,1064,1094,1150,1200,1498,1204,1136,1169,909,1298,1104,1268,934,1213,1080,1160,1104,1144,1049,1168,978,1257,970,1151,1336,1446,1071,1249,1192,1184,1050,1082,1346,1376,1313,963,1110,1139,942,1073,1090,1095,911,638,587,1069,917,841,967,1122,1335,1242,1294,1266,1224,1136,867,1269,1120,983,404],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_parso.data")}Module["addRunDependency"]("datafile_parso.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/parso-0.8.2-py3.9.egg-info/top_level.txt",start:0,end:6,audio:0},{filename:"/lib/python3.9/site-packages/parso-0.8.2-py3.9.egg-info/requires.txt",start:6,end:69,audio:0},{filename:"/lib/python3.9/site-packages/parso-0.8.2-py3.9.egg-info/SOURCES.txt",start:69,end:3079,audio:0},{filename:"/lib/python3.9/site-packages/parso-0.8.2-py3.9.egg-info/dependency_links.txt",start:3079,end:3080,audio:0},{filename:"/lib/python3.9/site-packages/parso-0.8.2-py3.9.egg-info/PKG-INFO",start:3080,end:10375,audio:0},{filename:"/lib/python3.9/site-packages/parso/_compatibility.py",start:10375,end:10445,audio:0},{filename:"/lib/python3.9/site-packages/parso/normalizer.py",start:10445,end:16042,audio:0},{filename:"/lib/python3.9/site-packages/parso/__init__.py",start:16042,end:17649,audio:0},{filename:"/lib/python3.9/site-packages/parso/cache.py",start:17649,end:26101,audio:0},{filename:"/lib/python3.9/site-packages/parso/tree.py",start:26101,end:37699,audio:0},{filename:"/lib/python3.9/site-packages/parso/parser.py",start:37699,end:44904,audio:0},{filename:"/lib/python3.9/site-packages/parso/utils.py",start:44904,end:51510,audio:0},{filename:"/lib/python3.9/site-packages/parso/grammar.py",start:51510,end:61993,audio:0},{filename:"/lib/python3.9/site-packages/parso/file_io.py",start:61993,end:63016,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/grammar37.txt",start:63016,end:69820,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/__init__.py",start:69820,end:69820,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/errors.py",start:69820,end:117823,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/grammar36.txt",start:117823,end:124771,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/tokenize.py",start:124771,end:150537,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/grammar39.txt",start:150537,end:158133,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/diff.py",start:158133,end:192339,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/prefix.py",start:192339,end:194798,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/tree.py",start:194798,end:231505,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/grammar310.txt",start:231505,end:239113,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/parser.py",start:239113,end:247340,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/token.py",start:247340,end:248249,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/grammar38.txt",start:248249,end:255840,audio:0},{filename:"/lib/python3.9/site-packages/parso/python/pep8.py",start:255840,end:289405,audio:0},{filename:"/lib/python3.9/site-packages/parso/pgen2/__init__.py",start:289405,end:289787,audio:0},{filename:"/lib/python3.9/site-packages/parso/pgen2/generator.py",start:289787,end:304357,audio:0},{filename:"/lib/python3.9/site-packages/parso/pgen2/grammar_parser.py",start:304357,end:309872,audio:0}],remote_package_size:178367,package_uuid:"051906ce-d54a-4d65-bf14-4a2f114219dd"})})();