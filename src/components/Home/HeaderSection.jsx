"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  MdNewReleases,
  MdLocalOffer,
  MdTrendingUp,
  MdThumbUp,
} from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";

const HeaderSection = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handlePrimary = () => {
    if (session?.user) return router.push("/products");
    signIn();
  };

  const handleSecondary = () => {
    if (session?.user) return router.push("/add");
    router.push("/register");
  };

  return (
    <section className="w-full py-16 md:py-24 bg-linear-to-r from-purple-500 via-white to-cyan-500 text-gray-900 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row items-center gap-10">
        {/* Left */}
        <div className="w-full lg:w-6/12 text-center lg:text-left">
          <h1 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl font-bold leading-tight">
            <span className="text-purple-800 font-extrabold">E.martBD</span>{" "}
            <span className="text-gray-900">— Buy & Sell Products Easily</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl">
            Find the best product deals, sell your old titles, and join a
            trusted online marketplace.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={handlePrimary}
              className="px-7 py-3 rounded-lg text-lg font-semibold bg-linear-to-r from-purple-700 to-purple-600 text-white hover:to-pink-700 cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              {session?.user ? "Browse Games" : "Get Started"}
            </button>

            <button
              onClick={handleSecondary}
              className="px-7 py-3 rounded-lg text-lg font-semibold cursor-pointer bg-white/70 backdrop-blur border border-gray-300 hover:bg-white hover:shadow-lg transition"
            >
              {session?.user ? "Add Product" : "Register"}
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-700">
            <span>🔒 Secure transactions</span>
            <span className="opacity-50">
              <FaRegDotCircle></FaRegDotCircle>
            </span>
            <span>⚡ Fast listings</span>
            <span className="opacity-50">
              <FaRegDotCircle></FaRegDotCircle>
            </span>
            <span>🎮 Trusted Marketplace</span>
          </div>
        </div>

        {/* Right — feature icons */}
        <div className="w-full lg:w-6/12 flex justify-center">
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Top Deal",
                icon: <MdTrendingUp className="text-4xl text-sky-600" />,
              },
              {
                title: "Best Discount",
                icon: <MdLocalOffer className="text-4xl text-pink-700" />,
              },
              {
                title: "New Release",
                icon: <MdNewReleases className="text-4xl text-purple-700" />,
              },
              {
                title: "Good Product",
                icon: <MdThumbUp className="text-4xl text-teal-600" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition border border-gray-200 flex flex-col items-center text-center"
              >
                {item.icon}
                <h4 className="font-semibold text-gray-900 mt-2 sm:text-lg text-base">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
