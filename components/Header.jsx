import React from "react";

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
    name: "CAREER",
    href: "/",
  },
  {
    name: "BLOGS",
    href: "/",
  },
];

const Header = () => {
  return (
    <div className="py-[41px] lg:py-[30px]">
      <div className="container mx-auto">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
