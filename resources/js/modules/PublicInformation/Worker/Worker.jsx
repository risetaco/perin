import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import topology from "@/data/chart/id-topology";
import { worker } from "@/data/public-information/worker";

export default function Worker() {
  return (
    <div className="w-100 lg:w-[1024px] mx-auto">
      {topology && (
        <HighchartsReact
          constructorType="mapChart"
          highcharts={Highcharts}
          options={{
            title: {
              text: "Jumlah Serapan Tenaga Kerja Industri Maritim - Total 46004",
            },
            subtitle: {
              text: "(Sumber: Diolah oleh Kemenperin)"
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
              max: 650
            },
            series: [
              {
                data: worker,
                name: "Serapan Tenaga Kerja",
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
