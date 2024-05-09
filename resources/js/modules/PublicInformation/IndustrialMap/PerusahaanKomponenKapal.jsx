import React, { useState } from "react";
import { perusahaan } from "@/data/public-information/perusahaan-komponen-kapal";
import { Table, Pagination, TextInput } from "flowbite-react";
import { paginate  } from "@/utils/paginate";


export default function PerusahaanKomponenKapal() {
  const [filtered, setFiltered] = useState(paginate(perusahaan, 1, 10))


  const onPageChange = (page) => {
    setFiltered(paginate(perusahaan, page, 10))
  }

  // const handleChange = (e) => {
  //   const { value } = e.currentTarget
    
  //   const filteredSearch = perusahaan.filter((e) => e.name.toLowerCase().indexOf(value.toLowerCase()) > -1 )
  //   setFiltered(paginate(filteredSearch, 1, 10))
  // }
  
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* <TextInput placeholder="Cari Perusahaan" onChange={handleChange} /> */}
      <Table hoverable={true} border>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Nama Perusahaan</Table.HeadCell>
          <Table.HeadCell>Jenis Pekerjaan/Produk</Table.HeadCell>
          <Table.HeadCell>Kabupaten/Kota</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {filtered.data.map((data) => (
            <Table.Row>
              <Table.Cell>{data.no}</Table.Cell>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.type || "-"}</Table.Cell>
              <Table.Cell>{data.city}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex items-center justify-center text-center">
        <Pagination
          currentPage={filtered.page}
          onPageChange={onPageChange}
          totalPages={filtered.total_pages}
        />
      </div>
    </div>
  );
}
