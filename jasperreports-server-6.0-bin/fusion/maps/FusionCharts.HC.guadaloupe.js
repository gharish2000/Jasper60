/*!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @version fusioncharts/3.2.4-sr1.10100
 * @id fusionmaps.Guadaloupe.20.10-30-2012 08:20:43
 */
FusionCharts(["private","modules.renderer.highcharts-guadaloupe",function(){var p=this,k=p.hcLib,n=k.chartAPI,h=k.moduleCmdQueue,a=k.injectModuleDependency,i="M",j="L",c="Z",f="Q",b="left",q="right",t="center",v="middle",o="top",m="bottom",s="maps",l=false&&!/fusioncharts\.com$/i.test(location.hostname),r=!!n.geo,d,e,u,g;d=[{name:"Guadaloupe",revision:20,creditLabel:l,standaloneInit:true,baseWidth:350,baseHeight:300,baseScaleFactor:10,entities:{"CA.GU":{outlines:[[i,876,2928,f,871,2928,869,2929,867,2938,886,2945,904,2951,900,2958,j,910,2958,910,2939,901,2939,f,902,2935,897,2935,j,888,2935,f,885,2933,876,2928,c],[i,774,2812,f,770,2819,772,2824,769,2828,749,2843,740,2852,726,2888,j,726,2894,f,752,2902,761,2915,769,2912,779,2920,790,2928,799,2928,817,2928,830,2900,834,2893,851,2884,865,2875,866,2866,867,2852,860,2847,843,2845,838,2843,830,2840,829,2824,825,2822,823,2813,821,2807,816,2807,j,780,2805,f,776,2805,774,2812,c],[i,971,2783,j,971,2770,f,956,2765,943,2760,j,933,2760,f,933,2761,932,2763,931,2764,937,2767,942,2770,943,2779,943,2781,962,2791,959,2786,964,2784,f,968,2782,971,2783,c],[i,1007,2945,f,985,2924,972,2916,968,2927,946,2945,968,2954,992,2954,j,1007,2953,c],[i,1045,2749,f,1041,2748,1039,2762,1037,2775,1029,2775,1021,2775,1010,2768,999,2767,998,2776,997,2782,998,2797,998,2825,958,2826,950,2825,942,2822,j,934,2822,f,934,2835,919,2851,919,2872,967,2878,980,2854,996,2855,j,1016,2856,f,1013,2848,1017,2846,j,1024,2842,f,1026,2822,1029,2818,1068,2799,1068,2788,f,1068,2748,1045,2749,c],[i,2242,2213,f,2227,2213,2221,2219,2217,2223,2203,2238,2188,2250,2187,2286,2173,2301,2152,2319,2134,2333,2111,2350,2102,2356,2103,2397,2103,2442,2092,2456,2081,2469,2047,2473,2033,2481,2033,2518,2033,2539,2044,2580,2057,2624,2058,2643,2063,2692,2072,2709,2080,2724,2111,2743,j,2115,2741,f,2125,2754,2137,2763,2156,2776,2181,2779,2206,2782,2231,2804,2254,2824,2287,2824,2475,2766,2499,2732,2514,2709,2543,2690,2573,2672,2582,2665,2588,2619,2602,2607,2613,2596,2613,2563,2613,2524,2591,2484,2569,2444,2546,2439,2521,2434,2513,2411,2509,2402,2498,2398,2483,2393,2482,2392,2469,2381,2463,2356,2458,2324,2454,2308,j,2421,2308,f,2419,2279,2375,2269,2324,2256,2312,2233,j,2272,2233,f,2271,2230,2270,2227,2270,2226,2269,2226,f,2255,2213,2242,2213,c],[i,3302,780,f,3286,795,3224,817,3219,818,3212,823,3195,834,3162,867,3155,874,3122,880,3094,885,3093,900,3051,896,3028,928,3005,960,3014,1006,3023,989,3079,978,3086,975,3110,956,3134,939,3149,939,3189,939,3212,940,3213,940,3215,940,3222,938,3290,884,3303,873,3357,849,3411,824,3424,814,3414,804,3397,772,3396,771,3396,770,3380,741,3374,741,3333,757,3312,772,f,3306,776,3302,780,c],[i,2909,1530,f,2926,1532,2943,1521,2965,1506,2974,1508,2974,1492,2991,1474,j,2991,1468,f,2976,1472,2960,1482,2947,1490,2940,1490,2920,1501,2912,1504,2888,1501,2884,1514,2900,1514,2907,1526,f,2908,1528,2909,1530,c],[i,1103,1023,f,1092,1022,1081,1019,1070,1019,1068,1026,1065,1032,1058,1032,1052,1032,1037,1023,1032,1024,1017,1032,1004,1037,1003,1043,j,1003,1060,f,1003,1083,987,1083,974,1083,968,1101,j,969,1101,954,1104,f,936,1104,937,1091,937,1085,946,1073,946,1071,939,1071,935,1071,929,1066,923,1066,913,1086,j,909,1094,f,903,1099,888,1099,j,882,1098,f,882,1089,877,1082,877,1068,896,1055,j,896,1051,f,893,1051,874,1044,870,1043,865,1049,860,1054,849,1054,831,1054,831,1050,831,1044,844,1040,860,1029,866,1022,j,871,1005,f,874,993,885,987,889,977,892,973,908,961,910,958,j,910,955,f,903,955,900,951,892,951,856,948,j,829,948,f,821,946,821,943,819,939,817,938,805,938,803,935,796,920,792,920,772,919,749,913,j,749,912,f,760,894,760,893,760,886,746,876,734,867,725,867,725,862,702,870,697,870,677,867,651,867,650,874,635,874,633,853,621,842,609,832,j,605,833,f,583,835,577,830,573,827,570,819,567,817,543,814,544,805,539,806,529,806,523,805,518,805,516,804,491,800,463,799,455,798,450,775,450,775,452,766,451,757,441,758,440,750,427,736,412,721,411,717,408,717,397,714,j,397,710,f,388,711,383,705,378,700,365,702,361,703,353,696,347,693,339,693,331,693,330,697,331,705,329,714,296,713,289,714,267,719,262,719,254,720,255,725,254,731,246,733,225,736,229,745,210,740,206,753,200,759,199,759,j,201,769,f,201,775,191,777,180,778,179,789,166,795,163,798,153,808,149,808,132,808,131,811,120,812,120,821,120,825,128,831,138,837,139,838,j,139,848,f,131,848,131,854,137,861,137,865,137,874,126,875,122,875,120,879,116,882,109,884,106,897,106,905,106,914,116,917,126,921,126,924,126,928,124,931,117,940,116,940,j,106,937,99,937,99,961,f,90,984,90,996,93,1028,94,1037,93,1053,79,1065,78,1068,71,1068,j,71,1089,f,84,1102,85,1121,81,1135,81,1143,81,1150,87,1155,94,1160,95,1172,98,1200,104,1203,114,1220,121,1224,133,1236,134,1238,140,1248,144,1250,166,1271,167,1279,166,1280,177,1298,179,1301,179,1319,j,179,1340,f,179,1350,174,1353,167,1357,164,1366,163,1367,163,1387,160,1396,160,1405,160,1411,167,1416,174,1421,174,1434,170,1454,170,1468,170,1484,178,1489,189,1493,197,1497,200,1500,202,1513,203,1533,203,1534,213,1588,213,1598,213,1608,203,1622,203,1623,197,1628,191,1633,191,1639,191,1645,196,1646,207,1646,211,1647,j,226,1656,f,226,1663,228,1677,228,1697,221,1697,213,1695,213,1716,j,213,1727,f,213,1733,216,1746,226,1777,226,1779,226,1786,220,1791,213,1797,213,1804,213,1811,222,1812,j,222,1853,f,223,1859,231,1868,238,1872,238,1882,238,1884,234,1892,229,1900,229,1915,229,1931,235,1966,236,1971,236,1988,236,1997,241,2001,j,241,2013,f,243,2018,258,2034,276,2048,280,2056,299,2094,316,2130,j,315,2159,f,319,2169,319,2173,321,2194,325,2199,j,342,2218,f,354,2243,367,2247,382,2252,400,2270,400,2270,406,2284,j,416,2294,f,420,2297,429,2308,446,2320,448,2322,457,2325,464,2335,472,2346,472,2356,471,2362,484,2375,489,2393,489,2407,486,2432,484,2438,484,2452,496,2453,494,2462,508,2464,515,2470,518,2470,j,528,2471,f,540,2463,553,2463,553,2463,554,2463,570,2463,573,2464,593,2460,624,2440,650,2405,661,2405,670,2412,674,2412,711,2401,711,2400,722,2386,726,2385,j,739,2379,f,742,2380,745,2381,761,2388,767,2388,j,785,2384,793,2386,f,800,2386,804,2380,810,2372,814,2370,824,2370,827,2369,834,2365,839,2366,856,2368,854,2346,853,2332,869,2333,877,2311,879,2294,880,2286,894,2276,910,2267,913,2264,926,2247,947,2227,959,2218,961,2216,967,2208,974,2208,993,2213,1021,2168,1030,2154,1044,2143,1058,2130,1065,2121,1079,2099,1080,2085,1083,2068,1094,2066,1100,2065,1100,2056,1100,2046,1101,2045,1107,2044,1109,2041,1112,2038,1112,2035,1112,2034,1112,2033,j,1112,2023,1124,2019,1124,2007,f,1120,2007,1115,2006,1117,2001,1112,1995,1108,1989,1103,1988,j,1103,1877,f,1101,1839,1099,1826,1091,1804,1091,1803,1094,1792,1094,1789,1074,1766,1073,1765,1061,1739,1061,1737,1061,1722,1082,1709,1103,1696,1103,1686,1103,1673,1097,1670,1088,1662,1084,1662,1048,1666,1047,1652,1049,1646,1041,1637,1034,1625,1034,1620,1041,1600,1041,1597,1041,1585,1037,1583,1034,1581,1017,1577,1010,1574,1010,1565,1008,1554,1008,1550,999,1552,1000,1534,1001,1516,1003,1513,1023,1502,1023,1495,1023,1493,1016,1486,1013,1484,1014,1475,1012,1470,1007,1470,1001,1471,1000,1465,998,1465,988,1456,983,1451,983,1445,983,1441,986,1428,986,1424,982,1407,982,1403,989,1392,993,1387,993,1380,997,1357,1002,1351,1002,1344,992,1326,990,1320,989,1305,j,989,1291,f,989,1286,988,1285,987,1269,994,1263,1003,1255,1008,1244,1011,1236,1013,1236,j,1058,1237,1075,1249,f,1072,1239,1095,1239,1105,1239,1108,1242,1109,1247,1112,1250,1125,1253,1134,1259,1149,1269,1151,1272,1152,1292,1156,1297,1162,1296,1161,1286,1161,1279,1160,1272,1160,1265,1165,1263,1169,1261,1169,1254,1169,1247,1166,1247,1154,1248,1151,1247,1149,1247,1142,1241,1138,1237,1138,1233,1138,1224,1147,1205,1147,1195,1134,1175,1134,1167,1142,1165,j,1141,1161,f,1141,1153,1147,1135,1147,1121,1141,1079,1141,1067,1119,1032,f,1112,1031,1103,1023,c],[i,1005,738,f,989,737,987,733,984,730,980,730,969,730,969,739,965,751,966,756,965,762,955,773,949,780,958,780,j,984,772,f,1022,764,1022,756,f,1022,755,1005,738,c],[i,1472,51,f,1462,51,1460,53,1454,61,1445,72,1435,74,1437,99,1427,113,1415,126,1412,130,1396,139,1379,148,1376,149,j,1358,155,f,1353,157,1344,163,1336,165,1334,172,1331,182,1329,184,j,1311,210,f,1283,216,1280,218,1270,231,1265,242,1246,254,1235,265,1223,271,1216,280,1214,285,1209,288,j,1196,298,f,1196,326,1193,333,1192,338,1188,342,1187,342,1186,343,1177,352,1177,356,1177,361,1186,368,1194,375,1194,378,1191,388,1191,391,1202,403,1200,414,1199,435,1200,441,1206,459,1213,467,1217,469,1219,472,j,1226,492,f,1224,499,1224,504,1224,515,1241,546,1271,559,1288,568,1330,584,1334,588,1353,603,1359,629,j,1359,659,f,1352,677,1352,686,1355,704,1355,712,1355,725,1353,726,1342,735,1339,739,1325,736,1322,750,1322,766,1321,768,1317,774,1296,771,j,1297,771,f,1297,770,1271,769,j,1257,760,f,1254,760,1243,765,1242,769,1239,774,1234,782,1233,783,1226,786,1225,788,1219,803,1216,805,1211,811,1205,813,1202,814,1202,822,j,1204,848,f,1200,892,1200,903,1201,911,1196,920,1195,926,1194,927,1192,931,1186,937,1181,944,1165,946,1158,947,1155,952,j,1151,967,f,1160,993,1161,994,1161,1001,1142,1010,1141,1010,1140,1010,1131,1014,1127,1017,1143,1034,1147,1044,1147,1063,1151,1073,1154,1109,1154,1111,1158,1132,1158,1140,1157,1145,1149,1156,j,1149,1164,1151,1164,f,1157,1164,1157,1175,1156,1186,1166,1187,j,1166,1196,f,1176,1222,1209,1255,1221,1266,1221,1273,1222,1294,1232,1300,1239,1304,1239,1306,1241,1315,1243,1317,1256,1322,1264,1326,j,1280,1327,f,1295,1327,1297,1320,1298,1313,1303,1313,1307,1313,1312,1325,1317,1335,1317,1336,1315,1344,1315,1346,1314,1375,1361,1371,1396,1368,1404,1374,1415,1381,1419,1381,1442,1386,1446,1386,1454,1386,1467,1391,1478,1392,1485,1395,1490,1406,1496,1407,1501,1406,1502,1399,1503,1392,1510,1392,1526,1390,1527,1387,1527,1383,1537,1383,j,1556,1384,f,1566,1384,1577,1379,1588,1372,1587,1365,1586,1355,1592,1352,1593,1347,1603,1347,1606,1351,1613,1351,j,1623,1351,f,1645,1351,1687,1347,1690,1338,1697,1336,1708,1339,1710,1339,j,1711,1339,f,1721,1337,1727,1335,1729,1334,1730,1332,1733,1330,1739,1322,1747,1318,1752,1310,1756,1304,1765,1305,1771,1305,1775,1309,1778,1313,1786,1313,1799,1313,1802,1307,1803,1304,1801,1295,1801,1288,1853,1288,1853,1267,1854,1266,1856,1265,1867,1262,j,1872,1257,f,1878,1252,1883,1247,1888,1244,1902,1244,1924,1238,1925,1238,1937,1238,1941,1241,1947,1241,1963,1233,1973,1229,1974,1227,j,2005,1227,f,2004,1223,2006,1216,2009,1211,2011,1211,2012,1211,2023,1214,j,2022,1214,f,2037,1217,2054,1208,2061,1207,2075,1211,2080,1211,2084,1211,2089,1210,2092,1208,2096,1208,2119,1211,2138,1211,2152,1205,2154,1204,2156,1203,2162,1203,2186,1206,2202,1206,2215,1200,2220,1198,2231,1189,2240,1184,2267,1175,2272,1172,2307,1172,2321,1166,2332,1163,2342,1162,2347,1155,2352,1148,2359,1147,j,2359,1147,f,2379,1148,2400,1150,2418,1148,2430,1157,2440,1160,2464,1160,2468,1162,2479,1169,2484,1172,2496,1172,2496,1172,2497,1172,2518,1172,2537,1169,2559,1168,2575,1177,2609,1190,2609,1182,2624,1182,2637,1181,2649,1181,2663,1191,2665,1192,2668,1194,2684,1207,2692,1208,2701,1207,2701,1193,2701,1183,2684,1177,2677,1175,2663,1158,2663,1158,2663,1158,2659,1154,2629,1154,2598,1142,2594,1142,j,2552,1146,f,2538,1146,2528,1133,2520,1124,2520,1119,j,2503,1117,f,2499,1114,2496,1112,2491,1110,2487,1109,2466,1107,2452,1095,2443,1092,2437,1087,2427,1076,2424,1074,2416,1069,2410,1059,2409,1058,2392,1037,2395,1027,2392,1024,2386,1020,2383,1015,j,2374,1006,f,2372,1005,2371,993,2370,988,2369,981,2365,977,2355,968,2353,963,2349,951,2348,944,2341,939,2332,938,2329,937,2324,936,2320,929,2317,923,2293,909,2286,905,2279,892,2272,887,2262,882,2220,861,2213,861,2204,859,2200,852,2197,847,2196,847,2179,852,2173,852,2169,852,2163,845,2160,841,2152,839,2150,839,2149,838,2142,824,2119,825,2096,826,2084,825,2071,823,2068,819,2062,810,2042,811,2011,811,2008,810,1995,804,1986,804,1981,804,1980,809,1978,814,1965,814,1958,814,1944,807,1930,799,1921,799,1917,803,1908,803,1897,803,1898,794,j,1885,793,f,1881,792,1882,785,j,1856,785,f,1851,774,1846,769,1841,754,1839,753,1833,751,1829,740,1821,737,1815,725,1809,713,1795,697,1792,693,1786,681,1785,681,1770,656,j,1770,648,f,1767,642,1761,634,1758,631,1757,620,1756,619,1748,608,1742,601,1742,593,1742,584,1751,556,1751,545,1749,538,j,1749,521,f,1749,501,1752,499,1762,496,1762,484,1762,476,1759,474,j,1759,468,f,1760,466,1761,458,j,1770,457,1770,424,f,1769,412,1769,395,1767,390,1761,382,1756,345,1754,344,1752,343,1748,342,1746,340,1743,334,1739,329,1737,320,1735,315,1735,302,1728,289,1729,275,1729,267,1722,257,1722,239,1720,237,1716,234,1705,227,1703,225,1701,221,1699,219,1688,215,1681,212,1672,203,1665,194,1654,191,1641,187,1629,165,1623,152,1612,149,1611,149,1611,148,1606,147,1598,140,1592,139,1589,123,1585,93,1564,96,1563,94,1525,103,1513,103,1513,93,1507,91,1506,87,1506,82,1501,79,1497,77,1492,60,f,1489,51,1472,51,c]],label:"Guadaloupe",shortLabel:"GU",labelPosition:[59.8,155],labelAlignment:[t,v]}}}];g=d.length;if(r){while(g--){e=d[g];n(e.name.toLowerCase(),e,n.geo)}}else{while(g--){e=d[g];u=e.name.toLowerCase();a(s,u,1);h[s].unshift({cmd:"_call",obj:window,args:[function(w,x){if(!n.geo){p.raiseError(p.core,"12052314141","run","JavaScriptRenderer~Maps._call()",new Error("FusionCharts.HC.Maps.js is required in order to define vizualization"));return}n(w,x,n.geo)},[u,e],window]})}}}]);