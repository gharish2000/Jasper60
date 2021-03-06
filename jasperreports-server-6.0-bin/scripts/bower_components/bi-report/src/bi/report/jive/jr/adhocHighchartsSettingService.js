/*
 * Copyright (C) 2005 - 2014 Jaspersoft Corporation. All rights reserved.
 * http://www.jaspersoft.com.
 *
 * Unless you have purchased  a commercial license agreement from Jaspersoft,
 * the following license terms  apply:
 *
 * This program is free software: you can redistribute it and/or  modify
 * it under the terms of the GNU Affero General Public License  as
 * published by the Free Software Foundation, either version 3 of  the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero  General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public  License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * @version $Id: adhocHighchartsSettingService.js 2676 2014-09-19 11:35:52Z dgorbenko $
*/

define(["jquery", "adhoc/highcharts.api"], function($, AdhocHighchartsAdapter) {

    var AdhocHighchartsSettingService = {

        perform: function(highchartsOptions, serviceData) {

            var chartState = serviceData.chartState,
                extraOptions = serviceData.extraOptions;

            if (serviceData.chartType) {
                chartState.chartType = serviceData.chartType;
            }

            if (extraOptions) {
                var jrPage = $('table.jrPage');

                if (jrPage.length) {
                    extraOptions.width = jrPage.parent().width();
                    extraOptions.height = jrPage.parent().height() || 400;
                }
            }

            $.extend(highchartsOptions, AdhocHighchartsAdapter.generateOptions(serviceData.queryData, chartState, extraOptions));
        }
    };

    return AdhocHighchartsSettingService;
});