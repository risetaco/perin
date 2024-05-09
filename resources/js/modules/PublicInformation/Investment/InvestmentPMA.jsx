import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import topology from "@/data/chart/id-topology";

import { pmaInvestment } from "@/data/public-information/investment";

export default function InvestmentPMA() {
  return (
    <div className="w-100 lg:w-[1024px] mx-auto">
      {topology && (
        <HighchartsReact
          constructorType="mapChart"
          highcharts={Highcharts}
          options={{
            title: {
              text: "Realisasi PMA (dalam miliar rupiah) - Total: 157.4M",
            },
            chart: {
              map: topology,
            },
            mapNavigation: {
              enabled: true,
              enableMouseWheelZoom: false,
              buttonOptions: {
                verticalAlign: "bottom",
              },
            },
            colorAxis: {
              min: 0,
              max: 1
            },
            series: [
              {
                data: pmaInvestment,
                name: "Realisasi PMA (dalam miliar rupiah)",
                states: {
                  hover: {
                    color: "#BADA55",
                  },
                },
                dataLabels: {
                  enabled: true,
                  format: "{point.name}: {point.value}",
                },
              },
            ],
          }}
        />
      )}
    </div>
  );
}
