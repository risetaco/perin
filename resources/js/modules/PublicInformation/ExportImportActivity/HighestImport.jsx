import React from "react";
import { Table } from "flowbite-react";
import { highestImport } from "@/data/public-information/highest-import";
export default function HighestImport() {
  return (
    <div>
      <div className="font-bold text-center">5 HS Tertinggi Impor </div>
      <Table hoverable={true} border>
        <Table.Head>
          <Table.HeadCell>HS</Table.HeadCell>
          <Table.HeadCell>Negara Asal Impor</Table.HeadCell>
          <Table.HeadCell>%</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {highestImport.map((data) => (
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
