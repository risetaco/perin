import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/layout/header/navbar";
import Footer from "@/layout/footer/footer";
import { Modal } from "flowbite-react";
import GalanganKapal from "@/modules/PublicInformation/IndustrialMap/GalanganKapal";
import KomponenKapal from "@/modules/PublicInformation/IndustrialMap/KomponenKapal";
import PerusahaanGalanganKapal from "@/modules/PublicInformation/IndustrialMap/PerusahaanGalanganKapal";
import PerusahaanKomponenKapal from "@/modules/PublicInformation/IndustrialMap/PerusahaanKomponenKapal";

export default function IndustriMaritim(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: null,
    children: null,
  });

  const handleOpenDialog = (type) => {
    switch (type) {
      case "Persebaran Galangan":
        setModalData({ title: type, children: <GalanganKapal /> });
        setModalVisible(true);
        break;
      case "Persebaran Komponen":
        setModalData({ title: type, children: <KomponenKapal /> });
        setModalVisible(true);
        break;
      case "Perusahaan Galangan":
        setModalData({ title: type, children: <PerusahaanGalanganKapal /> });
        setModalVisible(true);
        break;
      case "Perusahaan Komponen":
        setModalData({ title: type, children: <PerusahaanKomponenKapal /> });
        setModalVisible(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white">
       <Head title="Industri Maritim">
        <link href="http://ilmate.kemenperin.go.id/assets/assets-fe/website/favicon.png" rel="shortcut icon" />
      </Head>
      <div className="">
        <Navbar />
        <div
          className="h-[70vh] w-screen relative"
          style={{
            background: `url('/storage/images/industri/cover.png') top center / cover no-repeat`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="text-white font-bold text-5xl drop-shadow-xl absolute flex text-center justify-center bottom-32 w-full mx-auto">
            INDUSTRI MARITIM
          </div>
        </div>
        <div className="py-12">
          <div className="container mx-auto px-4">
            <p className="text-center w-100 sm:w-[600px] mx-auto mb-12">
              Informasi daftar perusahaan galangan kapal dan komponen kapal beserta peta sebarannya berdasarkan data
              yang dihimpun oleh Subdit. Industri Maritim
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-8 justify-items-center">
              <div>
                <div className="flex justify-center mx-auto h-96 w-96">
                  <img
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    src="/storage/images/industri/2.png"
                    alt="Kiri"
                  />
                </div>
                <div className="text-xl my-4 text-center">Industri Galangan Kapal</div>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => handleOpenDialog("Persebaran Galangan")}
                    className="bg-gray-600 text-white py-2 hover:bg-white border border-2 border-gray-600 transition hover:text-black"
                  >
                    LIHAT PERSEBARAN
                  </button>
                  <button
                    onClick={() => handleOpenDialog("Perusahaan Galangan")}
                    className="bg-gray-600 text-white py-2 hover:bg-white border border-2 border-gray-600 transition hover:text-black"
                  >
                    DAFTAR PERUSAHAAN
                  </button>
                </div>
              </div>
              <div>
                <div className="flex justify-center mx-auto h-96 w-96">
                  <img
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    src="/storage/images/industri/1.png"
                    alt="Kiri"
                  />
                </div>
                <div className="text-xl my-4 text-center">Industri Komponen Kapal</div>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => handleOpenDialog("Persebaran Komponen")}
                    className="bg-gray-600 text-white py-2 hover:bg-white border border-2 border-gray-600 transition hover:text-black"
                  >
                    LIHAT PERSEBARAN
                  </button>
                  <button onClick={() => handleOpenDialog("Perusahaan Komponen")} className="bg-gray-600 text-white py-2 hover:bg-white border border-2 border-gray-600 transition hover:text-black">
                    DAFTAR PERUSAHAAN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal size="6xl" show={modalVisible} onClose={() => setModalVisible(false)}>
          <Modal.Header>{modalData.title}</Modal.Header>
          <Modal.Body>
            {modalData.children}
          </Modal.Body>
        </Modal>
        <Footer />
      </div>
    </div>
  );
}
