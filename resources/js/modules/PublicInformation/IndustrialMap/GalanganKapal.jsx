import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { galanganKapal } from "@/data/public-information/galangan-kapal";
import topology from "@/data/chart/id-topology";

export default function GalanganKapal() {
  return (
    <div className="w-100 lg:w-[1024px] mx-auto">
      {topology && (
        <HighchartsReact
          constructorType="mapChart"
          highcharts={Highcharts}
          options={{
            title: {
              text: "Industri Galangan Kapal (342)",
            },
            chart: {
              map: topology,
            },
            mapNavigation: {
              enableMouseWheelZoom: false,
              enabled: true,
              buttonOptions: {
                verticalAlign: "bottom",
              },
            },
            colorAxis: {
              min: 0,
              max: 120
            },
            legend: {
              enabled: true,
            },
            series: [
              {
                data: galanganKapal,
                name: "Industri Galangan Kapal",
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
