import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { data } from "@/data/public-information/export-import";

export default function ExportImportSize() {
  return (
    <HighchartsReact
      options={{
        chart: {
          type: "column",
        },
        title: {
          text: "Ekspor - Impor Kapal Periode 2019-Agustus 2022 (berat Dalam Ton)",
        },
        subtitle: {
          text: "(Sumber: Diolah oleh Kemenperin)",
        },
        xAxis: {
          categories: data.map((el) => el.year),
        },
        yAxis: {
          title: {
            text: "Dalam Ton"
          }
        },
        plotOptions: {
          column: {
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: "Import",
            data: data.map((el) => el.import.size),
          },
          {
            name: "Ekspor",
            data: data.map((el) => el.export.size),
          },
        ],
      }}
      highcharts={Highcharts}
    />
  );
}
