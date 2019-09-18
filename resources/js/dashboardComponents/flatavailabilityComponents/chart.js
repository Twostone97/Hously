import React, { useContext } from "react";
import DashboardContext from "../../context/dashboard/DashboardContext";
import Chart from "react-apexcharts";

const Pie = () => {
    const dashboardContext = useContext(DashboardContext);
    const { flats, this_building } = dashboardContext.data;

    let residential = [0, 0];
    let commercial = [0, 0];
    if (dashboardContext.loading || dashboardContext.errorFetch) {
        ("loading");
    } else {
        flats.forEach(flat => {
            if (flat.building_id == this_building.id) {
                if (flat.residential) {
                    if (flat.available) {
                        residential[0]++;
                    } else {
                        residential[1]++;
                    }
                } else {
                    if (flat.available) {
                        commercial[0]++;
                    } else {
                        commercial[1]++;
                    }
                }
            }
        });
    }
    return (
        <>
            <div className="dashboard__sections__box__body">
                <div className="pieholder">
                    <Chart
                        options={{
                            labels: ["Volné", "Obsazené"],
                            colors: ["#FF7119", "#598028"],
                            legend: {
                                position: "top"
                            },
                            title: {
                                text: "Bytové jednotky",
                                align: "center",
                                style: {
                                    fontSize: "20px",
                                    color: "#000"
                                }
                            },

                            dataLabels: {
                                enabled: true
                            }
                        }}
                        series={residential}
                        type="pie"
                        width="300"
                    />
                    <Chart
                        options={{
                            labels: ["Volné", "Obsazené"],
                            colors: ["#FF7119", "#598028"],
                            legend: {
                                position: "top"
                            },
                            title: {
                                text: "Kommerční jednotky",
                                align: "center",
                                style: {
                                    fontSize: "20px",
                                    color: "#000"
                                }
                            },

                            dataLabels: {
                                enabled: true
                            }
                        }}
                        series={commercial}
                        type="pie"
                        width="300"
                    />
                </div>
            </div>
        </>
    );
};

export default Pie;
