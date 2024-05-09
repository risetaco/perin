import React, { useState } from "react";
import classnames from "@/utils/classnames";
import KomponenKapal from "./IndustrialMap/KomponenKapal";
import GalanganKapal from "./IndustrialMap/GalanganKapal";
import HighestImport from "./ExportImportActivity/HighestImport";
import HighestExport from "./ExportImportActivity/HighestExport";
import InvestmentPMDN from "./Investment/InvestmentPMDN";
import InvestmentPMA from "./Investment/InvestmentPMA";
import Worker from "./Worker/Worker";
import Experience from "./Experience/Experience";
import KebutuhanKapal from "./KebutuhanKapal/KebutuhanKapal";
import ExportImportValue from "./ExportImportActivity/Value";
import ExportImportSize from "./ExportImportActivity/Size";

const MENUS = [
  {
    key: "industrial-map",
    text: "Peta persebaran industri",
  },
  {
    key: "export-import-activities",
    text: "Statistik Ekspor Impor Kapal",
  },
  {
    key: "investment",
    text: "Data Ralisasi Investasi",
  },
  {
    key: "worker",
    text: "Serapan Tenaga Kerja",
  },
  {
    key: "industrial-experience",
    text: "Pengalaman Industri",
  },
  {
    key: "ship-requirement",
    text: "Kebutuhan Kapal",
  },
];
export default function PublicInformation() {
  const [activeTab, setActiveTab] = useState(MENUS[0].key);

  return (
    <div id="public-information" className="container mx-auto px-4 py-16">
      <h1 className="text-center lg:text-4xl text-2xl font-bold text-[#3F6E75]">Informasi Publik</h1>
      <div className="mb-12">
        {activeTab === "industrial-map" && (
          <div className="min-h-[70vh] grid grid-cols-1 gap-2">
            <GalanganKapal />
            <KomponenKapal />
          </div>
        )}
        {activeTab === "export-import-activities" && (
          <div className="min-h-[70vh] mb-2 grid md:grid-cols-2 grid-cols-1 gap-16">
            <ExportImportValue />
            <ExportImportSize />
            <HighestImport />
            <HighestExport />
          </div>
        )}
        {activeTab === "investment" && (
          <div className="min-h-[70vh] grid grid-cols-1 gap-2">
            <InvestmentPMDN />
            <InvestmentPMA />
          </div>
        )}
        {activeTab === "worker" && (
          <div className="min-h-[70vh] grid grid-cols-1 gap-2">
            <Worker />
          </div>
        )}
        {activeTab === "industrial-experience" && (
          <div className="min-h-[70vh] grid grid-cols-1 gap-2">
            <Experience />
          </div>
        )}
        {activeTab === "ship-requirement" && (
          <div className="min-h-[70vh] lg:px-64 px-4 grid grid-cols-1 gap-2">
            <KebutuhanKapal />
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {MENUS.map((menu) => (
          <a
            href="#public-information"
            className={classnames(
              "border border-2 border-[#3D6B71] hover:text-white hover:bg-[#3D6B71] lg:h-20 font-bold rounded-lg p-2 flex items-center text-center justify-center cursor-pointer shadow-lg transition",
              activeTab === menu.key ? "bg-[#3D6B71] text-white" : "text-[#3D6B71]  bg-white",
            )}
            onClick={() => setActiveTab(menu.key)}
          >
            {menu.text}
          </a>
        ))}
      </div>
    </div>
  );
}
