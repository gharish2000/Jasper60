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


/*
 * @author inesterenko
 * @version: $Id: SingleValueDatetimeControlView.js 107 2014-11-09 14:57:52Z ktsaregradskyi $
 */

define(function (require, exports, module) {

    "use strict";

    require("jquery.timepicker.addon");

    var BaseInputControlView = require("../BaseInputControlView"),
        $ = require("jquery"),
        _ = require("underscore"),
        log = require("logger").register(module),
        singleValueDatetimeTemplate = require("text!../../template/singleValueDatetimeTemplate.htm"),
        calendarIconSpanTemplate = require("text!../../template/calendarIconSpanTemplate.htm"),
        dateTimeSettings = require("settings!dateTimeSettings"),
        dateUtil = require("common/util/parse/date");

    function getNormalizedDatetimeValue(rawValue) {
        var normalizedValue = rawValue.toUpperCase().replace(/([\s]+$|^[\s]+)/g, "");
        return normalizedValue.replace(/[\s]*(\+|\-)[\s]*/g, "$1");
    }

    return BaseInputControlView.extend({

        template: singleValueDatetimeTemplate,

        initialize:function () {
            this.renderStructure();
            this.renderState();
            if (this.model.get("visible")) {
                this.setupCalendar();
                this.bindCustomEventListeners();
            }
        },

	    setupCalendar:function () {
            var input = this.$el.find('input');

            input.datetimepicker({
                showOn:"button",
                dateFormat:dateTimeSettings.datepicker.timeFormat,
                timeFormat:dateTimeSettings.timepicker.timeFormat,
                showSecond:true,
                changeMonth:true,
                changeYear:true,
                showButtonPanel:true,
                disabled:input[0].disabled,
                onSelect:_.bind(this.updateState, this),
                onChangeMonthYear:null,
                beforeShow:$.datepicker.movePickerRelativelyToTriggerIcon,
                constrainInput:false
            });

            input.change(_.bind(function (evt) {
                //prevent triggering of global control change event
                evt.stopPropagation();

                var $target = $(evt.target);
                //remove all spaces an  d convert to upper case
                var value = getNormalizedDatetimeValue($target.val());
                $target.val(value);

                this.updateState(value);
            }, this));

            input.after('&nbsp;');
            var button = this.$el.find('button');
            button.wrap(calendarIconSpanTemplate).empty();
        },

        updateValue:function (controlData) {
            var value = dateUtil.isoTimestampToLocalizedTimestamp(controlData);
            this.$el.find('input').attr('value', value);
        },

        updateState: function(inputValue) {
            this.model.changeState(dateUtil.localizedTimestampToIsoTimestamp(inputValue));
        },

        bindCustomEventListeners:function () {
            this.listenTo(this.model.state, "change:value", function(model, value) {
                this.updateValue(value);
            }, this);
        },

        remove: function() {
            this.$el.off("change", "input").datetimepicker("destroy");
            BaseInputControlView.prototype.remove.call(this);
        }
    });
});

