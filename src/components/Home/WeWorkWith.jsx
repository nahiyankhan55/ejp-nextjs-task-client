"use client";

import Marquee from "react-fast-marquee";
import sb1 from "@/brands/sb1a.png";
import sb2 from "@/brands/sb2a.png";
import sb3 from "@/brands/sb3a.png";
import sb4 from "@/brands/sb4a.png";
import sb5 from "@/brands/sb5a.png";
import sb6 from "@/brands/sb6a.png";
import sb7 from "@/brands/sb7a.png";
import Image from "next/image";

const WeWorkWith = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-linear-to-tl from-emerald-100 via-white to-orange-100">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
        We Work With
      </h2>
      <p className="text-center text-gray-700 mt-3 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
        Partnering with top brands to shape the future of online commerce
      </p>

      <div className="mt-5 md:w-4/5 w-full mx-auto bg-white border-b-2 border-gray-100 shadow-lg shadow-gray-400 p-1 rounded-lg sm:h-44 h-28 flex flex-col justify-center">
        <Marquee gradient speed={50} gradientWidth={50} pauseOnHover>
          <Image
            src={sb1}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-600"
          />
          <Image
            src={sb2}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-600"
          />
          <Image
            src={sb3}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-600"
          />
          <Image
            src={sb4}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-600"
          />
          <Image
            src={sb5}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-600"
          />
          <Image
            src={sb6}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-600"
          />
          <Image
            src={sb7}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-600"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default WeWorkWith;
