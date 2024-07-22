import React from "react";
import Image from "next/image";
import Img from "@/public/NextLogo.svg";
import Link from "next/link";

export const navData = [
  {
    name: "HOME",
    href: "/",
  },

  {
    name: "SERVICES",
    href: "/",
  },

  {
    name: "PROJECTS",
    href: "/",
  },

  {
    name: "ABOUT",
    href: "/",
  },
  {
    name: "CAREERS",
    href: "/",
  },
  {
    name: "BLOGS",
    href: "/",
  },
  {
    name: "BLOGS",
    href: "/",
  },
  {
    name: "CONTACT US",
    href: "/",
  },
];

const Header = () => {
  return (
    <div className="py-[41px] lg:py-[30px]">
      <div className="bg-sectionBlack rounded-xl">
        <div className="flex flex-row   p-5   justify-between items-center">
          <div>
            <Image src={Img} alt="Website Logo" className="w-[97px]" />
          </div>
          <div>
            <ul className="text-navGrey hidden  lg:flex flex-row text-sm font-medium  gap-x-[14px]">
              {navData.map((item, index) => (
                <li
                  key={index}
                  className="bg-inputBlack py-[14px] px-[20px] rounded-lg  last:bg-backgroundOrange last:text-[#0F0F0F]"
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
