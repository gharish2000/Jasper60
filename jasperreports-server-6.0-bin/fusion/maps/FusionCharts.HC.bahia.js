/*!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @version fusioncharts/3.2.4-sr1.10100
 * @id fusionmaps.Bahia.20.10-30-2012 08:20:36
 */
FusionCharts(["private","modules.renderer.highcharts-bahia",function(){var p=this,k=p.hcLib,n=k.chartAPI,h=k.moduleCmdQueue,a=k.injectModuleDependency,i="M",j="L",c="Z",f="Q",b="left",q="right",t="center",v="middle",o="top",m="bottom",s="maps",l=false&&!/fusioncharts\.com$/i.test(location.hostname),r=!!n.geo,d,e,u,g;d=[{name:"Bahia",revision:20,creditLabel:l,standaloneInit:true,baseWidth:310,baseHeight:340,baseScaleFactor:10,entities:{"BR.BA":{outlines:[[i,2429,81,f,2406,71,2396,71,2336,99,2322,107,2305,117,2295,133,2273,166,2252,169,2230,171,2211,211,2193,249,2165,249,2153,244,2131,244,2107,244,2098,267,2080,310,2067,326,2061,333,2029,351,1993,371,1981,370,1969,369,1959,349,1948,328,1950,302,1952,279,1938,262,1919,239,1914,222,1907,196,1894,186,1885,179,1872,142,1864,130,1854,128,1841,128,1834,127,1759,116,1759,116,1748,116,1735,129,1722,142,1718,159,1717,185,1715,190,1708,206,1679,201,1632,193,1639,242,1642,263,1624,276,1608,287,1591,286,1535,282,1491,301,1467,311,1441,328,1427,336,1380,375,1347,403,1316,403,1253,403,1208,376,1163,349,1158,349,j,1121,352,f,1102,352,1093,341,1076,318,1057,306,1056,305,1047,308,1039,311,1026,310,1000,308,984,315,967,339,957,347,946,357,943,391,j,943,392,f,946,398,946,411,j,944,433,f,944,443,951,456,955,478,958,482,973,504,974,508,j,969,542,f,972,557,972,563,972,568,945,604,917,643,913,658,j,913,661,914,666,f,894,683,889,688,j,876,706,f,876,706,864,721,842,752,836,753,793,763,764,763,j,741,761,f,731,761,724,772,717,783,706,780,695,780,691,783,687,786,680,795,672,799,657,799,644,799,639,811,634,824,630,826,621,833,619,834,609,842,577,842,572,842,569,837,569,836,550,835,545,835,537,836,530,835,523,827,515,818,500,819,496,818,496,814,j,489,813,f,476,809,475,808,473,800,456,791,439,776,438,772,427,741,415,730,406,725,400,718,398,716,388,704,383,699,375,682,372,677,365,677,357,677,352,677,351,678,322,677,308,678,305,684,304,690,293,691,288,692,281,692,279,693,270,697,257,702,251,717,249,724,245,726,234,732,228,734,j,217,743,f,214,748,211,750,206,755,195,755,163,771,157,772,149,774,145,785,143,802,142,809,143,818,139,847,134,874,132,883,130,892,112,907,93,923,90,934,85,953,70,971,59,985,59,1007,j,60,1024,f,63,1028,82,1040,j,96,1050,f,96,1051,103,1063,107,1070,131,1074,146,1080,154,1082,173,1088,180,1090,190,1094,190,1101,190,1107,185,1115,181,1122,177,1123,165,1128,165,1131,j,164,1142,f,164,1148,165,1150,j,165,1168,f,169,1172,180,1178,185,1181,185,1191,185,1200,178,1211,161,1238,153,1243,146,1247,128,1260,119,1264,118,1267,119,1272,119,1278,j,115,1326,f,115,1344,151,1369,168,1393,168,1393,171,1423,172,1426,169,1469,168,1470,158,1485,158,1496,158,1511,176,1518,196,1527,202,1554,196,1575,195,1582,178,1604,178,1616,178,1628,192,1635,203,1641,200,1654,203,1690,190,1695,176,1701,176,1715,176,1728,180,1746,180,1764,167,1785,j,167,1790,f,169,1793,169,1803,169,1810,167,1833,167,1856,177,1884,j,177,1920,f,204,1949,208,1963,213,1976,231,1999,245,2017,245,2033,j,245,2067,244,2071,f,244,2076,261,2088,278,2099,278,2121,278,2150,236,2193,232,2245,232,2247,232,2267,243,2279,243,2286,226,2312,j,226,2316,f,256,2299,258,2296,267,2279,273,2273,277,2269,302,2269,309,2276,327,2277,329,2270,350,2256,355,2250,365,2240,384,2210,393,2210,404,2214,410,2214,428,2214,432,2206,439,2191,441,2190,448,2182,455,2176,j,456,2175,f,464,2167,479,2148,494,2128,503,2127,j,543,2112,f,562,2112,575,2105,587,2098,593,2092,627,2080,636,2066,646,2052,668,2031,692,2008,731,1995,735,1994,762,1979,767,1976,791,1973,j,810,1973,f,816,1972,850,1970,850,1970,851,1970,882,1970,908,1978,954,1993,954,2026,954,2034,949,2052,949,2058,945,2081,945,2103,979,2115,987,2117,1006,2128,1050,2138,1057,2141,j,1086,2119,f,1093,2113,1113,2109,1134,2097,1167,2097,1215,2097,1223,2099,1238,2104,1271,2134,1285,2146,1306,2171,1312,2177,1321,2181,1325,2184,1331,2190,1343,2196,1346,2199,1348,2202,1354,2225,1357,2235,1373,2240,1392,2244,1398,2245,j,1518,2245,f,1563,2250,1582,2259,1593,2264,1611,2278,1625,2277,1649,2287,1676,2298,1690,2314,1697,2323,1705,2332,1708,2337,1715,2362,1742,2399,1745,2414,1748,2418,1758,2422,1768,2426,1774,2434,1778,2439,1783,2451,1796,2460,1807,2458,j,1807,2458,f,1820,2458,1826,2452,1833,2451,1854,2448,1861,2438,1868,2438,1875,2438,1901,2436,1925,2436,1940,2452,1946,2454,1970,2455,1974,2456,1985,2464,j,2014,2470,f,2018,2471,2060,2475,2081,2481,2100,2500,2104,2510,2118,2516,2153,2533,2158,2535,2206,2562,2210,2586,2211,2610,2210,2615,2206,2630,2188,2643,2168,2663,2161,2685,2155,2706,2124,2731,2119,2731,2111,2743,2107,2750,2095,2755,2081,2764,2084,2814,2084,2841,2078,2843,2061,2850,2046,2849,2040,2849,2036,2853,2031,2859,2028,2860,2008,2869,2007,2879,j,2008,3001,2028,3034,f,2029,3035,2055,3072,2065,3086,2076,3096,2104,3133,2104,3160,2104,3169,2097,3183,2093,3185,2087,3187,2082,3189,2082,3195,2082,3207,2119,3227,2168,3254,2172,3256,2236,3309,2264,3309,2278,3309,2293,3297,2309,3282,2321,3275,2334,3267,2367,3214,2381,3188,2387,3177,2397,3158,2409,3151,2428,3142,2429,3119,2428,3106,2427,3097,2427,3094,2427,3091,j,2457,2775,f,2456,2760,2477,2736,2498,2712,2498,2701,2498,2631,2502,2621,2527,2564,2530,2553,2532,2547,2532,2514,2527,2488,2528,2430,2518,2403,2510,2380,2496,2337,2496,2308,2495,2198,2487,2105,2487,2103,2487,2102,j,2542,1765,2542,1758,f,2541,1666,2541,1658,2541,1623,2550,1615,2565,1604,2623,1550,2627,1548,2672,1544,2705,1541,2715,1520,j,2723,1518,f,2742,1520,2761,1497,2767,1488,2793,1445,2809,1417,2875,1368,2883,1360,2908,1341,2931,1322,2940,1303,2951,1281,2966,1255,2978,1232,2988,1199,j,2988,1177,f,3027,1125,3027,1099,3027,1079,3001,1073,2953,1061,2948,1059,2913,1042,2871,1036,2842,996,2839,991,2836,985,2837,967,2837,947,2823,933,2810,920,2792,892,2772,863,2772,856,2772,842,2782,815,2782,808,2788,800,2791,794,2789,790,j,2901,790,f,2948,707,2917,624,2886,540,2886,538,j,2847,496,2829,461,2734,217,f,2712,217,2700,194,2687,171,2675,171,2666,171,2662,176,2656,184,2637,189,2624,189,2611,176,2589,155,2586,152,2583,150,2547,141,2516,124,2508,122,2505,121,2481,121,2475,121,2466,109,2461,103,2457,96,f,2450,90,2429,81,c]],label:"Bahia",shortLabel:"BA",labelPosition:[154.3,139],labelAlignment:[t,v]}}}];g=d.length;if(r){while(g--){e=d[g];n(e.name.toLowerCase(),e,n.geo)}}else{while(g--){e=d[g];u=e.name.toLowerCase();a(s,u,1);h[s].unshift({cmd:"_call",obj:window,args:[function(w,x){if(!n.geo){p.raiseError(p.core,"12052314141","run","JavaScriptRenderer~Maps._call()",new Error("FusionCharts.HC.Maps.js is required in order to define vizualization"));return}n(w,x,n.geo)},[u,e],window]})}}}]);