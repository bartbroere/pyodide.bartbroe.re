var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="future-tests.data";var REMOTE_PACKAGE_BASE="future-tests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","future",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/future","moves",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/future/moves","test",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/future","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/future","backports",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/future/backports","test",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:90040,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1113,2209,3182,4280,5470,6582,7403,8404,9574,10897,12652,14583,16513,18374,19405,21253,23141,25057,26643,27790,28770,29986,31384,32534,33733,35285,36575,38476,40022,41459,43298,45178,46653,48105,49327,50556,51971,53137,54384,55622,56771,58338,60001,61246,62685,64137,65431,66726,68067,69359,70663,71774,72942,74159,75520,76649,77912,79148,80302,81604,82762,84143,85579,86611,87790,88926],sizes:[1113,1096,973,1098,1190,1112,821,1001,1170,1323,1755,1931,1930,1861,1031,1848,1888,1916,1586,1147,980,1216,1398,1150,1199,1552,1290,1901,1546,1437,1839,1880,1475,1452,1222,1229,1415,1166,1247,1238,1149,1567,1663,1245,1439,1452,1294,1295,1341,1292,1304,1111,1168,1217,1361,1129,1263,1236,1154,1302,1158,1381,1436,1032,1179,1136,1114],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_future-tests.data")}Module["addRunDependency"]("datafile_future-tests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/future/moves/test/__init__.py",start:0,end:110,audio:0},{filename:"/lib/python3.9/site-packages/future/moves/test/support.py",start:110,end:369,audio:0},{filename:"/lib/python3.9/site-packages/future/tests/__init__.py",start:369,end:369,audio:0},{filename:"/lib/python3.9/site-packages/future/tests/base.py",start:369,end:20325,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/sha256.pem",start:20325,end:28669,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/badcert.pem",start:28669,end:30597,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/keycert.pem",start:30597,end:32380,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/__init__.py",start:32380,end:32644,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/keycert.passwd.pem",start:32644,end:34474,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/nokia.pem",start:34474,end:36397,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/ssl_key.pem",start:36397,end:37313,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/pystone.py",start:37313,end:44740,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/ssl_servers.py",start:44740,end:51949,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/ssl_cert.pem",start:51949,end:52816,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/badkey.pem",start:52816,end:54978,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/dh512.pem",start:54978,end:55380,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/https_svn_python_org_root.pem",start:55380,end:57949,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/nullbytecert.pem",start:57949,end:63384,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/keycert2.pem",start:63384,end:65179,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/nullcert.pem",start:65179,end:65179,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/ssl_key.passwd.pem",start:65179,end:66142,audio:0},{filename:"/lib/python3.9/site-packages/future/backports/test/support.py",start:66142,end:137023,audio:0}],remote_package_size:94136,package_uuid:"6a9ba130-14b6-44f4-95ea-292b60a99d1b"})})();