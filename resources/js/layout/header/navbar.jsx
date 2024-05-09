import React, { useState, useRef } from "react";
import useScrollEvent from "@/hooks/useScrollEvent";
import useWindowSize from "@/hooks/useWindowSize";
import classnames from "@/utils/classnames";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useEffect } from "react";

const MENUS = [
  {
    href: "/",
    text: "BERANDA",
  },
  {
    href: "/industri-maritim",
    text: "INDUSTRI MARITIM",
  },
  {
    href: "/peraturan",
    text: "PERATURAN DAN FASILITAS",
  },
  {
    href: "/publikasi",
    text: "PUBLIKASI",
  },
  {
    href: "/contact-us",
    text: "KONTAK KAMI",
  },
];

export default function Navbar({ white }) {
  const [openNav, setOpenNav] = useState(false);
  const headerRef = useRef(null);
  const { width } = useWindowSize();
  const { scrollAmount } = useScrollEvent();
  const { url } = usePage();
  const firstURL = `/${url.split("/")?.[1]}`;

  useEffect(() => {
    if (width > 720) {
      setOpenNav(false);
    }
  }, [width]);

  return (
    <div
      className={classnames(
        "fixed min-w-screen w-screen z-50 overflow-hidden transition",
        scrollAmount > 10 || openNav || white ? "bg-white shadow-lg" : "bg-black/60",
      )}
      style={
        openNav
          ? { minHeight: "100vh", maxHeight: "100vh" }
          : {
              minHeight: "0vh",
              maxHeight: headerRef.current ? `${headerRef.current.clientHeight}px` : "100vh",
            }
      }
    >
      <div
        ref={headerRef}
        className={classnames("container mx-auto flex justify-between h-[64px]", openNav ? "shadow-sm" : "")}
      >
        <div className="flex w-full justify-end items-center">
          <div className="xl:block md:flex hidden lg:flex-grow-0 sm:flex-grow">
            <div className="inline-block xl:mx-0 mx-auto">
              {MENUS.map((menu) => (
                <Link
                  href={menu.href}
                  className={classnames(
                    "transition-all mx-1 px-2 py-2 hover:border-b",
                    firstURL === menu.href ? (scrollAmount > 10 || white ? "border-black border" : "border-white border") : "",
                    scrollAmount > 10 || white ? "text-black hover:border-black" : "text-white hover:border-white",
                  )}
                >
                  {console.log(menu.href === firstURL)}
                  {menu.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden block">
            <span className="relative inline-block w-full h-full" onClick={() => setOpenNav(!openNav)}>
              <div className="space-y-2 m-4 cursor-pointer">
                <span className="block w-8 h-0.5 bg-gray-600"></span>
                <span className="block w-8 h-0.5 bg-gray-600"></span>
                <span className="block w-5 h-0.5 bg-gray-600"></span>
              </div>
            </span>
          </div>
        </div>
      </div>
      {openNav && (
        <div className="md:hidden grid grid-cols-1 px-4">
          {MENUS.map((menu) => (
            <Link
              href={menu.href}
              className={classnames("px-3 py-2 text-black hover:border-b", firstURL === menu.href ? "border-black border " : "")}
            >
              {menu.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
