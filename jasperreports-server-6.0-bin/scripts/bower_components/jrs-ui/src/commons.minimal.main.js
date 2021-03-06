/*
 * Copyright (C) 2005 - 2014 TIBCO Software Inc. All rights reserved.
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
 * @version: $Id: commons.minimal.main.js 7808 2014-09-19 13:18:27Z sergey.prilukin $
 */

define(function(require){

    "use strict";

    require("commons.bare.main");
    
    var domReady = require("!domReady");
    var heartbeat = require("components.heartbeat");
    var jrsConfigs = require("jrs.configs");
    var aboutDialog = require("components.about");
    var webHelp = require("components.webHelp");
    var $ = require("jquery");

    domReady(function(){
        //Heartbeat
        heartbeat.initialize(jrsConfigs.heartbeatInitOptions);
        heartbeat.start();

        jrsConfigs.initAdditionalUIComponents && aboutDialog.initialize();

        //Web help
        var helpLink = $("#helpLink");
        if (helpLink) {
            helpLink.on("click", function(e) {
                e.preventDefault();
                webHelp.displayWebHelp();
            });
        }
    });

});
