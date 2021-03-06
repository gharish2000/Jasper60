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
 * @author: Kostiantyn Tsaregradskyi
 * @version: $Id: InputControlModel.js 15 2014-08-31 12:26:53Z inesterenko $
 */

define(function (require, exports, module) {
    "use strict";

    var _ = require("underscore"),
        log = require("logger").register(module),
        BaseModel = require("common/model/BaseModel"),
        InputControlStateModel = require("../model/InputControlStateModel");

    return BaseModel.extend({
        defaults: {
            id: undefined,
            label: undefined,
            mandatory: false,
            readOnly: false,
            type: undefined,
            uri: undefined,
            visible: false,
            masterDependencies: undefined,
            slaveDependencies: undefined,
            validationRules: undefined,
            state: undefined
        },

        initialize: function() {
            BaseModel.prototype.initialize.apply(this, arguments);

            this.state = new InputControlStateModel(this.get("state") || {});

            this.on("change:state", _.bind(function() {
                this.state.clear({silent: true}).set(this.get("state") || {});
            }, this));

            this.on("all", log.debug, log);

        },

        changeState: function(data) {
            this.state.changeState(data);
            this.collection.trigger("changeState", this);
        },

        getData: function() {
            return this.state.getData();
        }

    });
});