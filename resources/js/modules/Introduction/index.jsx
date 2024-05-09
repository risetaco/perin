import React from "react";

export default function Introduction() {
  return (
    <div className="container mx-auto p-4 py-12">
      <hr />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-1 my-12">
        <div>
          <img src="/storage/images/home/profile.png" alt="home" />
        </div>
        <div>
          <h1 className="lg:text-6xl text-2xl font-bold text-[#3F6E75]">
            Pusat Informasi <br />
            Industri Maritim
          </h1>
          <h1 className="lg:text-2xl text-lg font-bold text-[#3F6E75]">Kementrian Perindustrian RI</h1>
          <p className="font-bold mt-2">
            Industri Maritim merupakan salah satu industri binaan Direktorat Industri Maritim, Alat Transportasi, dan
            Alat Pertahanan (Dit. IMATAP) tepatnya pada{" "}
            <span className="text-[#3F6E75]">Subdirektorat Industri Maritim.</span>
          </p>
          <p className="mt-4">Terdapat 6 KBLI yang termasuk dalam binaan Subdit. Industri Maritim:</p>
          <ul className="list-disc pl-4">
            <li>KBLI 30111 - Industri Kapal dan Perahu.</li>
            <li>KBLI 30112 - Industri Bangunan Lepas Pantai dan Bangunan Terapung.</li>
            <li>KBLI 30113 - Industri Peralatan, Perlengkapan, dan Bagian Kapal.</li>
            <li>KBLI 30120 - Industri Pembuatan Kapal dan Perahu untuk Tujuan Wisata/Rekreasi dan Olahraga.</li>
            <li>KBLI 33151 - Reparasi Kapal, Perahu, dan Bangunan Terapung.</li>
            <li>
              KBLI 38301 - Pemulihan Material Barang Logam/Daur Ulang Barang Logam (Industri Penutuhan Kapal/Ship
              Recycling).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
