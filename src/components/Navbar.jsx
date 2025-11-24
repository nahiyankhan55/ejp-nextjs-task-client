"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdLogIn } from "react-icons/io";
import { GrDocumentUser } from "react-icons/gr";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { IoMdList } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";

const Navbar = () => {
  // mobile nav control
  const [navShow, setNavShowHide] = useState(false);
  const navControl = () => setNavShowHide((prev) => !prev);
  // profile control
  const [showHideProfile, setShowHideProfile] = useState(false);
  const profileControl = () => setShowHideProfile((prev) => !prev);
  // current path
  const pathname = usePathname();
  // get auth
  const { data: session, status } = useSession();
  // logout
  const handleLogout = async () => {
    await signOut();
    toast.success(`Logout Successful`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowHideProfile(false);
        setNavShowHide(false);
      }}
    >
      <div className="flex items-center gap-6 justify-between max-w-[1440px] mx-auto py-5 w-full sm:px-5 px-3 shadow-lg z-50 fixed bg-white/95">
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

                  {session?.user && (
                    <>
                      <Link
                        className={
                          pathname === "/add"
                            ? "px-5 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 text-pink-800 transition hover:shadow-lg bg-linear-to-br from-pink-300 to-white hover:from-pink-300 hover:to-cyan-100"
                            : "px-5 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 transition hover:shadow-lg bg-linear-to-br from-white to-white hover:from-pink-300 hover:to-cyan-100"
                        }
                        href={"/add"}
                      >
                        Add Product
                      </Link>
                      <Link
                        className={
                          pathname === "/manage"
                            ? "px-5 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 text-pink-800 transition hover:shadow-lg bg-linear-to-br from-pink-300 to-white hover:from-pink-300 hover:to-cyan-100"
                            : "px-5 py-1 rounded-md shadow-md hover:text-pink-700 duration-300 transition hover:shadow-lg bg-linear-to-br from-white to-white hover:from-pink-300 hover:to-cyan-100"
                        }
                        href={"/manage"}
                      >
                        Manage Products
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
          <Link
            className="text-xl font-bold duration-300 font-serif transition hover:scale-105 bg-linear-to-r from-cyan-800 to-pink-500 bg-clip-text text-transparent hover:from-cyan-600 hover:to-pink-400"
            href={"/"}
          >
            E.martBD
          </Link>
        </div>

        <ul className="lg:flex hidden items-center gap-3 text-lg font-medium text-black">
          <Link
            className={
              pathname === "/"
                ? "px-4 py-1 rounded-full shadow-md hover:text-pink-700 duration-300 text-pink-800 transition hover:shadow-lg bg-linear-to-br from-pink-300 to-white hover:from-pink-300 hover:to-cyan-100"
                : "px-4 py-1 rounded-full shadow-md hover:text-pink-700 duration-300 transition hover:shadow-lg bg-linear-to-br from-white to-white hover:from-pink-300 hover:to-cyan-100"
            }
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={
              pathname === "/products"
                ? "px-4 py-1 rounded-full shadow-md hover:text-pink-700 duration-300 text-pink-800 transition hover:shadow-lg bg-linear-to-br from-pink-300 to-white hover:from-pink-300 hover:to-cyan-100"
                : "px-4 py-1 rounded-full shadow-md hover:text-pink-700 duration-300 transition hover:shadow-lg bg-linear-to-br from-white to-white hover:from-pink-300 hover:to-cyan-100"
            }
            href={"/products"}
          >
            Products
          </Link>

          {session?.user && (
            <>
              <Link
                className={
                  pathname === "/add"
                    ? "px-4 py-1 rounded-full shadow-md hover:text-pink-700 duration-300 text-pink-800 transition hover:shadow-lg bg-linear-to-br from-pink-300 to-white hover:from-pink-300 hover:to-cyan-100"
                    : "px-4 py-1 rounded-full shadow-md hover:text-pink-700 duration-300 transition hover:shadow-lg bg-linear-to-br from-white to-white hover:from-pink-300 hover:to-cyan-100"
                }
                href={"/add"}
              >
                Add Product
              </Link>
              <Link
                className={
                  pathname === "/manage"
                    ? "px-4 py-1 rounded-full shadow-md hover:text-pink-700 duration-300 text-pink-800 transition hover:shadow-lg bg-linear-to-br from-pink-300 to-white hover:from-pink-300 hover:to-cyan-100"
                    : "px-4 py-1 rounded-full shadow-md hover:text-pink-700 duration-300 transition hover:shadow-lg bg-linear-to-br from-white to-white hover:from-pink-300 hover:to-cyan-100"
                }
                href={"/manage"}
              >
                Manage Products
              </Link>
            </>
          )}
        </ul>

        {session?.user ? (
          <div className="relative">
            <button onClick={profileControl}>
              <img
                className="h-12 w-12 object-cover rounded-full border-2 border-green-700 cursor-pointer hover:scale-105 duration-300 transition"
                src={session?.user.image}
                alt="User-Photo"
              />
            </button>
            {showHideProfile && (
              <div className="absolute top-16 right-2 flex flex-col gap-2 py-5 px-3 bg-gray-50 rounded-lg border-2">
                <h3 className="text-lg text-green-700 font-bold">
                  {session?.user.name}
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  {session?.user.email}
                </p>

                <div>
                  <button
                    onClick={handleLogout}
                    className="mt-3 text-xl text-left font-bold text-red-600 cursor-pointer hover:text-red-800 duration-300 transition hover:scale-105"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
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
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Navbar;
