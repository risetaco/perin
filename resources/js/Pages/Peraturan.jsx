import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/layout/header/navbar";
import Footer from "@/layout/footer/footer";
import { Button, Table } from "flowbite-react";
import { peraturan } from "@/data/public-information/peraturan";
import { fasilitas } from "@/data/public-information/fasilitas";

export default function Peraturan(props) {
  return (
    <div className="bg-white">
      <Head title="Peraturan dan Fasilitas">
        <link href="http://ilmate.kemenperin.go.id/assets/assets-fe/website/favicon.png" rel="shortcut icon" />
      </Head>
      <>
        <Navbar />
        <div
          className="h-[70vh] w-screen relative"
          style={{
            background: `url('/storage/images/peraturan/cover.png') top center / cover no-repeat`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="text-white font-bold text-5xl drop-shadow-xl absolute flex text-center justify-center bottom-32 w-full mx-auto">
            PERATURAN DAN FASILITAS
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-32 py-12">
          <h1 className="text-2xl font-bold text-center">PERATURAN</h1>
          <p className="text-center w-full sm:w-[600px] mx-auto mb-12">
            Peraturan terkait dengan pemberdayaan dan pengembangan industri maritim nasional.
          </p>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>No</Table.HeadCell>
              <Table.HeadCell>Nama Peraturan</Table.HeadCell>
              <Table.HeadCell>Aksi</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {peraturan.map((rule) => (
                <Table.Row>
                  <Table.Cell>{rule.no}</Table.Cell>
                  <Table.Cell>{rule.name}</Table.Cell>
                  <Table.Cell>
                    <a target="_blank" href={rule.download}>
                      <Button> Download</Button>
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className="container mx-auto px-4 lg:px-32 py-12">
          <h1 className="text-2xl font-bold text-center">FASILITAS</h1>
          <p className="text-center w-full sm:w-[600px] mx-auto mb-12">
            Fasilitas fiskal maupun nonfiskal yang dapat dimanfaatkan pelaku usaha industri maritim dalam menjalankan
            kegiatan bisnisnya.
          </p>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>No</Table.HeadCell>
              <Table.HeadCell>Nama Fasilitas Fiskas & Nonfiskal</Table.HeadCell>
              <Table.HeadCell>Deskripsi</Table.HeadCell>
              <Table.HeadCell>Aksi</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {fasilitas.map((rule) => (
                <Table.Row>
                  <Table.Cell>{rule.no}</Table.Cell>
                  <Table.Cell>{rule.name}</Table.Cell>
                  <Table.Cell>{rule.desc}</Table.Cell>
                  <Table.Cell>
                    {rule.download && (
                      <a target="_blank" href={rule.download}>
                        <Button> Download</Button>
                      </a>
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <Footer />
      </>
    </div>
  );
}
