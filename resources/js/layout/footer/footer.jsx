import React from "react";
import { Icon } from '@iconify/react';


export default function Footer() {
  return (
    <footer className="bg-[#D9D9D9] py-20">
      <div className="container mx-auto p-4">
        <div className="w-100 md:w-[600px] flex justify-left items-center">
          <img width="40%" src="/storage/images/footer/kemenperin.png" alt="logo kemenperin" />
          <img width="50%" src="/storage/images/footer/ilmate.png" alt="logo ilmate" />
          <img width="15%" src="/storage/images/footer/making-indonesia-4.png" alt="logo making ina 4" />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
          <div>
            <div className="text-lg font-bold text-[#3F6E75]">Alamat</div>
            <div className="mb-8">
              Gedung Kementerian Perindustrian RI,
              <br />
              Jl. Jend. Gatot Subroto Kav. 52-53 Lantai 12, RT.1/RW.4, Kuningan Tim, Jakarta Selatan, Kota Jakarta
              Selatan,
              <br />
              Daerah Khusus Ibukota Jakarta 12950, Indonesia
            </div>
            <a href="tel:5255509" className="flex items-center"><Icon className="w-8" icon="carbon:phone-voice-filled" /> (021) 5252954, 5255509</a>
            <a href="mailto:pepilmate@gmail.com" className="flex items-center"><Icon className="w-8" icon="carbon:email" /> pepilmate@gmail.com</a>
          </div>

          <div>
            <div className="text-lg font-bold text-[#3F6E75]">Sosial Media</div>
            <a href="https://www.instagram.com/ditjenilmate/?igshid=YmMyMTA2M2Y" className="flex items-center"><Icon className="w-8" icon="fa6-brands:instagram" />@ditjenilmate </a>
            <a href="https://www.youtube.com/channel/UC31dIcJQWh4ZJKg8aL8Jmwg" className="flex items-center"><Icon className="w-8" icon="fa6-brands:youtube" />Direktorat Jenderal ILMATE </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
