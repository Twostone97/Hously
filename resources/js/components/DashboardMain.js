import React, { useEffect } from "react";
import DashboardAdmin from "./DashboardAdmin.js";
import DashboardCommon from "./DashboardCommon.js";
import DashboardOwner from "./DasboardOwner.js";

const DashboardMain = ({ apidata, isLoading, refetchApp }) => {
    useEffect(() => {
        function drawTextAlongArc(
            context,
            str,
            centerX,
            centerY,
            radius,
            angle
        ) {
            context.save();
            context.translate(centerX, centerY);
            context.rotate((-1 * angle) / 2);
            context.rotate((-1 * (angle / str.length)) / 2);
            for (var n = 0; n < str.length; n++) {
                context.rotate(angle / str.length);
                context.save();
                context.translate(0, -1 * radius);
                var char = str[n];
                context.fillText(char, 0, 0);
                context.restore();
            }
            context.restore();
        }

        window.onload = function() {
            var canvas = document.querySelector("#loading");
            var context = canvas.getContext("2d");

            context.font = "800 30pt sans-serif";
            context.textAlign = "center";
            context.fillStyle = "white";

            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
            var angle = Math.PI * 0.8; // radians
            var radius = 180;
            drawTextAlongArc(
                context,
                "Welcome Home",
                centerX,
                centerY,
                radius,
                angle
            );
        };
    });

    if (isLoading) {
        return (
            <div className="loading">
                <canvas id="loading" width="400" height="400" />
            </div>
        );
    } else {
        console.log(
            "*****************API LOADING DONE, rendering dashboard ******************"
        );
        return (
            <>
                <DashboardCommon apidata={apidata} refetchApp={refetchApp} />
                {apidata.profile === "administrator" && (
                    <DashboardAdmin apidata={apidata} refetchApp={refetchApp} />
                )}
                {apidata.profile === "owner" && (
                    <DashboardOwner apidata={apidata} />
                )}
            </>
        );
    }
};

export default DashboardMain;
