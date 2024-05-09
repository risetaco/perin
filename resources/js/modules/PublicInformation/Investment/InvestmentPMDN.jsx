import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import topology from "@/data/chart/id-topology";
import { pmdnInvestment } from "@/data/public-information/investment";

export default function InvestmentPMDN() {
  return (
    <div className="w-100 lg:w-[1024px] mx-auto">
      {topology && (
        <HighchartsReact
          constructorType="mapChart"
          highcharts={Highcharts}
          options={{
            title: {
              text: "Realisasi PMDN (dalam miliar rupiah) - Total: 1.5T",
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
              max: 650
            },
            series: [
              {
                data: pmdnInvestment,
                name: "Realisasi PMDN (dalam miliar rupiah)",
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
