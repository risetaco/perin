import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import topology from "@/data/chart/id-topology";
import { komponenKapal } from "@/data/public-information/komponen-kapal";

export default function KomponenKapal() {
  return (
    <div className="w-100 lg:w-[1024px] mx-auto">
      {topology && (
        <HighchartsReact
          constructorType="mapChart"
          highcharts={Highcharts}
          options={{
            title: {
              text: "Industri Komponen Kapal (119)",
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
              max: 40
            },
            series: [
              {
                data: komponenKapal,
                name: "Industri Komponen Kapal",
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
