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
 * @author: inesterenko
 * @version: $Id: export.servererrortrait.js 7762 2014-09-19 10:16:02Z sergey.prilukin $
 */

JRS.Export.ServerErrorTrait = (function (Export, $, _, ServerErrorsBackboneTrait) {

    return _.extend(ServerErrorsBackboneTrait,{

        statuses :{
            0 : Export.i18n["export.server.not.avaliable"],
            403 : Export.i18n["export.session.expired"],
            503 : Export.i18n["export.server.not.avaliable"],
            404 : Export.i18n["export.server.not.avaliable"]
        }

    })
})(
    JRS.Export,
    jQuery,
    _,
   jaspersoft.components.ServerErrorsBackboneTrait
);
