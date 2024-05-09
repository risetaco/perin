import React, { useState } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { production } from "@/data/public-information/produksi-kapal";
import { Modal, Table } from "flowbite-react";

export default function Experience() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState();

  const handleModal = (e) => {
    setModalData(null);

    const data = production.find((el) => el.type === e.point.category);

    setModalData(data);
    setModalVisible(true);
  };

  return (
    <>
      <HighchartsReact
        options={{
          chart: {
            type: "column",
          },
          title: {
            text: "Pengalaman Industri",
          },
          subtitle: {
            text: "Jumlah Produksi Kapal oleh Galangan Kapal Dalam Negeri Periode 2019 - 2021*",
          },
          xAxis: {
            categories: production.map((el) => el.type),
            labels: {
              useHTML: true,
              formatter: function (e) {
                return `<div style="display:flex; flex-direction:column; align-items: center; justify-content: space-between; text-align: center; min-height: 48px">${e.value}<img style="width: 48px" src="/storage/images/home/icons/${e.value}.png" /></div>`;
              },
            },
          },
          legend: {
            enabled: false,
          },
          tooltip: {
            headerFormat: "<i>Klik untuk melihat info detail</i>",
            pointFormat: "",
            footerFormat: "",
            useHTML: true,
          },
          plotOptions: {
            column: {
              events: {
                click: handleModal,
              },
              dataLabels: {
                enabled: true,
              },
            },
          },
          series: [
            {
              name: "Produksi Kapal",
              data: production.map((el) => el.data),
            },
          ],
        }}
        highcharts={Highcharts}
      />
      <Modal show={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Header>{modalData?.type}</Modal.Header>
        <Modal.Body>
          <img className="mx-auto" src={`/storage/images/home/icons/${modalData.type}.png`} />
          <Table>
            <Table.Row>
              <Table.Cell>Jenis Kapal</Table.Cell>
              <Table.Cell>{modalData?.type}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Kode HS</Table.Cell>
              <Table.Cell>{modalData?.data}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ukuran Terbesar</Table.Cell>
              <Table.Cell>{modalData?.largestSize}</Table.Cell>
            </Table.Row>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}
