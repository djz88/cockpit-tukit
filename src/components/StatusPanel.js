/*
 * Copyright (C) 2022 SUSE LLC
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Cockpit; If not, see <http://www.gnu.org/licenses/>.
 *
 * To contact SUSE LLC about this file by physical or electronic mail, you may
 * find current contact information at www.suse.com.
 */

import cockpit from "cockpit";
import React from "react";
import { Card, CardBody, CardTitle } from "@patternfly/react-core";
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    InfoCircleIcon,
} from "@patternfly/react-icons";

const _ = cockpit.gettext;

const StatusPanel = ({ status }) => {
    const icon = () => {
        if (!status) return;
        const i = (status.details && status.details.icon) || status.type;
        if (i === "error") return <ExclamationCircleIcon />;
        else if (i === "warning") return <ExclamationTriangleIcon />;
        else if (i === "check") return <CheckCircleIcon />;
        else return <InfoCircleIcon />;
    };
    return (
        <Card className="ct-card-info">
            <CardTitle>{_("Status")}</CardTitle>
            {status && (
                <CardBody>
                    {icon()}
                    <span style={{ marginLeft: "4px" }}>{status.title}</span>
                </CardBody>
            )}
        </Card>
    );
};

export default StatusPanel;