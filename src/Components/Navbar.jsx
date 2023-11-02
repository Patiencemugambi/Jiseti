import React from "react";
import { Typography } from "@material-tailwind/react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Contact Us
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <a className="flex items-center hover:text-blue-500 transition-colors">
          Sign Up
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href=""
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Jiseti
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
      </div>
    </div>
  );
}

export default NavbarSimple;
