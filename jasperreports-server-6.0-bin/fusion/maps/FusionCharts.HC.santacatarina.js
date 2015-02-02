/*!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @version fusioncharts/3.2.4-sr1.10100
 * @id fusionmaps.SantaCatarina.20.10-30-2012 08:25:27
 */
FusionCharts(["private","modules.renderer.highcharts-santacatarina",function(){var p=this,k=p.hcLib,n=k.chartAPI,h=k.moduleCmdQueue,a=k.injectModuleDependency,i="M",j="L",c="Z",f="Q",b="left",q="right",t="center",v="middle",o="top",m="bottom",s="maps",l=false&&!/fusioncharts\.com$/i.test(location.hostname),r=!!n.geo,d,e,u,g;d=[{name:"SantaCatarina",revision:20,creditLabel:l,standaloneInit:true,baseWidth:380,baseHeight:270,baseScaleFactor:10,entities:{"BR.SC":{outlines:[[i,3226,127,f,3219,131,3212,135,3192,154,3177,167,3150,192,3118,202,3117,203,3115,203,3102,207,3092,220,3079,235,3070,238,3023,257,2999,267,2999,269,2998,269,2997,269,2997,269,j,2996,269,f,2983,269,2916,238,2894,227,2839,187,2838,186,2803,155,2784,137,2771,137,2727,133,2678,133,2639,133,2627,137,2609,141,2522,147,2520,148,2518,148,2459,157,2430,157,2408,157,2372,132,2336,107,2320,107,2246,136,2234,144,2203,167,2206,183,2210,197,2198,209,2182,222,2176,228,2143,258,2132,264,2107,279,2073,279,2052,279,1955,272,1911,272,1880,311,1872,320,1855,324,1846,326,1834,328,1820,334,1800,360,1777,391,1777,417,1777,430,1784,446,1794,467,1800,499,1801,499,1802,500,1814,508,1814,536,1808,576,1808,596,1743,615,1721,614,1681,614,1661,605,1655,603,1635,587,1600,560,1485,560,1481,560,1417,561,1350,561,1324,554,1298,548,1256,521,1196,481,1154,462,1118,446,1094,446,1008,441,1001,435,986,419,955,419,937,419,897,420,856,418,826,405,815,401,758,369,j,750,369,f,734,376,646,378,645,378,643,378,601,378,563,366,551,364,489,360,475,356,431,320,393,290,363,290,336,290,256,313,221,322,215,326,203,331,181,352,120,408,89,492,j,89,540,f,78,567,78,586,92,673,92,720,107,766,107,847,107,867,66,913,26,958,26,973,26,1002,38,1001,67,1000,88,1013,110,1031,122,1034,147,1038,174,1038,202,1038,221,986,j,292,985,f,338,963,341,963,385,963,385,1001,j,388,1059,395,1059,f,557,942,575,942,594,942,598,982,601,1021,627,1021,643,1021,659,1013,676,1005,682,1005,704,1005,710,1019,724,1023,736,1037,748,1051,749,1051,758,1053,779,1053,788,1052,812,1068,830,1081,848,1081,866,1081,872,1075,879,1068,889,1068,974,1074,994,1073,1000,1072,1000,1071,1034,1072,1079,1065,j,1303,1162,1384,1259,1526,1259,1605,1309,1657,1329,f,1668,1347,1674,1353,1678,1358,1731,1398,1789,1433,1825,1454,1861,1475,1923,1536,1970,1572,1992,1608,j,1992,1608,f,1995,1612,1997,1616,1998,1618,1999,1619,2005,1628,2008,1636,2015,1654,2019,1658,2019,1659,2033,1689,j,2047,1709,f,2067,1733,2068,1738,2085,1764,2131,1820,2147,1839,2167,1872,2182,1898,2191,1904,2258,1949,2299,1974,2305,1978,2325,1980,2344,1983,2353,1988,2368,1998,2375,2000,2392,2004,2440,2007,2442,2008,2443,2008,2458,2009,2500,2010,2536,2013,2575,2019,2598,2019,2615,2015,2626,2012,2652,2011,2659,2012,2666,2012,2668,2012,2669,2012,2707,2012,2709,2016,2715,2027,2828,2045,2845,2051,2845,2078,2845,2121,2823,2134,2781,2149,2740,2169,2729,2175,2695,2225,2681,2245,2680,2262,2679,2291,2676,2302,2675,2317,2659,2436,2659,2465,2664,2477,2668,2490,2668,2498,2668,2518,2605,2546,2542,2574,2542,2599,2542,2628,2578,2630,2631,2619,2651,2602,2666,2589,2697,2589,2730,2589,2754,2619,2778,2649,2832,2649,2858,2649,2862,2641,2877,2612,2902,2587,2922,2567,2936,2548,2956,2520,2966,2508,3019,2434,3035,2411,3060,2376,3095,2370,3104,2366,3149,2336,3190,2308,3208,2300,3261,2278,3273,2270,3292,2257,3312,2222,3335,2181,3402,2132,3425,2116,3440,2102,3446,2097,3466,2075,3467,2074,3468,2073,3475,2065,3475,2040,3469,2013,3469,2000,3469,1963,3500,1924,3527,1889,3525,1869,3525,1868,3524,1867,j,3524,1863,f,3538,1849,3550,1811,3574,1729,3574,1718,3571,1689,3571,1674,3571,1653,3591,1622,3612,1591,3612,1574,3612,1557,3607,1554,j,3608,1542,f,3583,1469,3583,1454,3583,1433,3601,1400,3618,1367,3630,1367,3665,1367,3665,1411,3665,1428,3648,1454,3631,1481,3631,1486,3631,1503,3644,1523,3679,1523,3687,1463,3689,1446,3701,1428,3708,1417,3722,1395,3754,1336,3756,1302,3758,1279,3771,1270,3784,1260,3784,1251,3784,1241,3766,1223,3763,1207,3754,1206,3715,1204,3698,1236,3633,1325,3619,1325,3612,1325,3604,1313,3597,1300,3597,1286,3597,1254,3630,1233,3663,1211,3663,1162,3663,1126,3654,1127,3635,1130,3616,1105,j,3616,1098,f,3629,1086,3664,1057,3692,1028,3692,996,3692,970,3680,970,j,3673,970,f,3673,978,3662,993,3651,1009,3642,1010,j,3625,1010,f,3624,994,3626,959,3626,931,3610,924,j,3610,861,f,3616,767,3602,750,3602,732,3586,710,3564,683,3562,667,j,3594,505,3722,305,f,3732,288,3732,274,3732,264,3729,258,3727,250,3721,247,3716,245,3697,243,3663,241,3663,192,3663,173,3670,126,3670,106,3668,102,3662,90,3638,90,3603,81,3519,81,3484,81,3419,93,3361,105,3355,105,3325,102,3304,103,3300,103,3296,104,f,3264,107,3226,127,c]],label:"Santa Catarina",shortLabel:"SC",labelPosition:[230.5,115.5],labelAlignment:[t,v]}}}];g=d.length;if(r){while(g--){e=d[g];n(e.name.toLowerCase(),e,n.geo)}}else{while(g--){e=d[g];u=e.name.toLowerCase();a(s,u,1);h[s].unshift({cmd:"_call",obj:window,args:[function(w,x){if(!n.geo){p.raiseError(p.core,"12052314141","run","JavaScriptRenderer~Maps._call()",new Error("FusionCharts.HC.Maps.js is required in order to define vizualization"));return}n(w,x,n.geo)},[u,e],window]})}}}]);