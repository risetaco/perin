import React from "react";
import { Table } from "flowbite-react";
import { highestExport } from "@/data/public-information/highest-export";

export default function HighestExport() {
  return (
    <div>
      <div className="font-bold text-center">5 HS Tertinggi Ekspor </div>
      <Table hoverable={true} border>
        <Table.Head>
          <Table.HeadCell>HS</Table.HeadCell>
          <Table.HeadCell>Negara Tujuan Ekspor</Table.HeadCell>
          <Table.HeadCell>%</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {highestExport.map((data) => (
            <Table.Row>
              {data.hs && <Table.Cell rowSpan={data.rowSpan}>{data.hs}</Table.Cell>}
              <Table.Cell>{data.country}</Table.Cell>
              <Table.Cell>{data.percentage}%</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}