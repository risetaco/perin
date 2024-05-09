import React from "react";
import { kebutuhanKapal } from "@/data/public-information/kebutuhan-kapal";
import { Table } from "flowbite-react";

export default function KebutuhanKapal() {
  return (
    <>
      <div className=" text-center text-xl">Kebutuhan Kapal</div>
      <Table hoverable={true} border>
        <Table.Body className="divide-y">
          <Table.Row className="font-bold bg-gray-50 uppercase text-center">
            <Table.Cell rowSpan={2}>Jenis Kapal</Table.Cell>
            <Table.Cell colSpan={6}>Jumlah Terbanung (unit)</Table.Cell>
          </Table.Row>
          <Table.Row className="font-bold bg-gray-50 uppercase text-center">
            <Table.Cell className="text-right">2020</Table.Cell>
            <Table.Cell className="text-right">2021</Table.Cell>
            <Table.Cell className="text-right">2022</Table.Cell>
            <Table.Cell className="text-right">2023</Table.Cell>
            <Table.Cell className="text-right">2024</Table.Cell>
            <Table.Cell className="text-right bg-yellow-100 font-bold text-black">Total</Table.Cell>
          </Table.Row>
          {kebutuhanKapal.map((data) => (
            <Table.Row>
              <Table.Cell>{data.type}</Table.Cell>
              <Table.Cell className="text-right">{data[2020]}</Table.Cell>
              <Table.Cell className="text-right">{data[2021]}</Table.Cell>
              <Table.Cell className="text-right">{data[2022]}</Table.Cell>
              <Table.Cell className="text-right">{data[2023]}</Table.Cell>
              <Table.Cell className="text-right">{data[2024]}</Table.Cell>
              <Table.Cell className="text-right bg-yellow-100 font-bold text-black">{data.total}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
