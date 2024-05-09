import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Carousel } from "flowbite-react";
import Navbar from "@/layout/header/navbar";
import PublicInformation from "@/modules/PublicInformation";
import Footer from "@/layout/footer/footer";
import Introduction from "@/modules/Introduction";
import { Icon } from "@iconify/react";

const SLIDES = [
  {
    url: "/storage/images/1.png",
  },
  {
    url: "/storage/images/2.png",
  },
  {
    url: "/storage/images/3.png",
  },
  {
    url: "/storage/images/4.png",
  },
  {
    url: "/storage/images/5.png",
  },
];

export default function Welcome(props) {
  return (
    <div className="bg-white">
      <Head title="Beranda">
        <link href="http://ilmate.kemenperin.go.id/assets/assets-fe/website/favicon.png" rel="shortcut icon" />
      </Head>
      <div className="">
        <Navbar />
        <div className="h-[320px] sm:h-screen w-screen carousel">
          <Carousel
            leftControl={<Icon fontSize={32} className="drop-shadow" icon="bx:caret-left-circle" />}
            rightControl={<Icon fontSize={32} className="drop-shadow" icon="bx:caret-right-circle" />}
          >
            {SLIDES.map((slide) => (
              <div
                className="h-[320px] sm:h-screen"
                style={{
                  background: `url('${slide.url}') center center / contain no-repeat`,
                  backgroundAttachment: "fixed",
                }}
              ></div>
            ))}
          </Carousel>
        </div>
        <Introduction />
        <PublicInformation />
        <Footer />
      </div>
    </div>
  );
}
