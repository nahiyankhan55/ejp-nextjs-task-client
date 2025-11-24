"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdLogIn } from "react-icons/io";
import { GrDocumentUser } from "react-icons/gr";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { IoMdList } from "react-icons/io";

const Navbar = () => {
  const [navShow, setNavShowHide] = useState(false);
  const navControl = () => setNavShowHide((prev) => !prev);
  const [showHideProfile, setShowHideProfile] = useState(false);
  const profileControl = () => setShowHideProfile((prev) => !prev);
  const pathname = usePathname();
  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowHideProfile(false);
        setNavShowHide(false);
      }}
    >
      <div className="flex items-center gap-6 justify-between py-5 w-full sm:px-5 px-3 shadow-lg z-50 fixed bg-white/95">
        <div className="relative text-xl flex gap-3 font-bold items-center">
          <div className="flex">
            <button className="lg:hidden text-2xl" onClick={navControl}>
              <IoMdList></IoMdList>
            </button>
            {navShow && (
              <div className="absolute lg:hidden border-2 text-base rounded-lg top-14 font-bold bg-gray-100 text-gray-700 p-4">
                <ul className="flex flex-col gap-3 text-nowrap">
                  <Link
                    className={
                      pathname === "/"
                        ? "px-5 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 text-pink-800 transition hover:shadow-lg bg-linear-to-br from-pink-300 to-white hover:from-pink-300 hover:to-cyan-100"
                        : "px-5 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 transition hover:shadow-lg bg-linear-to-br from-white to-white hover:from-pink-300 hover:to-cyan-100"
                    }
                    href={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    className={
                      pathname === "/products"
                        ? "px-5 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 text-pink-800 transition hover:shadow-lg bg-linear-to-br from-pink-300 to-white hover:from-pink-300 hover:to-cyan-100"
                        : "px-5 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 transition hover:shadow-lg bg-linear-to-br from-white to-white hover:from-pink-300 hover:to-cyan-100"
                    }
                    href={"/products"}
                  >
                    Products
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <Link
            className="text-xl font-bold duration-300 transition hover:scale-105 bg-linear-to-r from-cyan-800 to-pink-500 bg-clip-text text-transparent hover:from-cyan-600 hover:to-pink-400"
            href={"/"}
          >
            E.martBD
          </Link>
        </div>

        <ul className="lg:flex hidden items-center gap-3 text-lg font-medium text-black">
          <Link
            className={
              pathname === "/"
                ? "px-4 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 text-pink-800 transition hover:shadow-lg bg-linear-to-br from-pink-300 to-white hover:from-pink-300 hover:to-cyan-100"
                : "px-4 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 transition hover:shadow-lg bg-linear-to-br from-white to-white hover:from-pink-300 hover:to-cyan-100"
            }
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={
              pathname === "/products"
                ? "px-4 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 text-pink-800 transition hover:shadow-lg bg-linear-to-br from-pink-300 to-white hover:from-pink-300 hover:to-cyan-100"
                : "px-4 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 transition hover:shadow-lg bg-linear-to-br from-white to-white hover:from-pink-300 hover:to-cyan-100"
            }
            href={"/products"}
          >
            Products
          </Link>
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className={
              pathname === "/login"
                ? "flex gap-2 items-center hover:shadow-md sm:px-3 p-1 bg-linear-to-r from-pink-700 to-cyan-800 transition border border-gray-500 shadow-gray-400 text-white rounded-full text-2xl"
                : "flex gap-2 items-center hover:shadow-md sm:px-3 p-1 bg-linear-to-r from-pink-700 to-cyan-500 transition border border-gray-500 shadow-gray-400 text-white rounded-full text-2xl"
            }
          >
            <p className="text-lg font-medium sm:block hidden">Login</p>
            <IoMdLogIn></IoMdLogIn>
          </Link>
          <Link
            href="/register"
            className={
              pathname === "/register"
                ? "flex gap-2 items-center hover:shadow-md sm:px-3 p-1 bg-linear-to-r from-pink-700 to-cyan-800 transition border border-gray-500 shadow-gray-400 text-white rounded-full text-2xl"
                : "flex gap-2 items-center hover:shadow-md sm:px-3 p-1 bg-linear-to-r from-pink-700 to-cyan-500 transition border border-gray-500 shadow-gray-400 text-white rounded-full text-2xl"
            }
          >
            <p className="text-lg font-medium sm:block hidden">Register</p>
            <GrDocumentUser></GrDocumentUser>
          </Link>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Navbar;
