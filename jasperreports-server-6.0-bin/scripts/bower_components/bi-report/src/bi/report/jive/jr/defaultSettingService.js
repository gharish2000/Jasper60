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
 * @version $Id: defaultSettingService.js 2661 2014-09-19 11:26:52Z dgorbenko $
 */

define(["jquery"], function($) {

    var JRDefaultHighchartsSettingService = {

        perform: function(highchartsOptions, optionsArr) {
            var it = this;
            $.each(optionsArr, function(i, option) {
                if (option) {
                    it.setProperty(highchartsOptions, option.prop, option.val, option.isFunction);
                }
            });
        },

        setProperty: function(options, propertyPath, propertyValue, isFunction) {
            var tokens = propertyPath.split('\.');
            var obj = options;
            var idx;
            for (idx = 0; idx < tokens.length - 1; ++idx) {
                var subobj = obj[tokens[idx]];
                if (typeof(subobj) == 'undefined' || subobj == null) {
                    subobj = obj[tokens[idx]] = {};
                } else if (Object.prototype.toString.call(subobj) === '[object Array]' && subobj.length > 0 && subobj[0]) {
                    // for arrays we are setting the property on the first item
                    subobj = subobj[0];
                }
                obj = subobj;
            }

            if (isFunction) {
                obj[tokens[idx]] = window.eval("[" + propertyValue + "][0]");
            } else {
                obj[tokens[idx]] = propertyValue;
            }
        }
    }

    return JRDefaultHighchartsSettingService;
});