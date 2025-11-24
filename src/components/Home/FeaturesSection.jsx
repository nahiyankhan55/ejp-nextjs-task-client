"use client";

import {
  MdNewReleases,
  MdLocalOffer,
  MdTrendingUp,
  MdThumbUp,
} from "react-icons/md";
import AOS from "aos";
import { useEffect } from "react";

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const features = [
    {
      title: "Top Deal",
      desc: "The best trending deals updated daily.",
      icon: <MdTrendingUp className="text-4xl text-sky-600" />,
    },
    {
      title: "Best Discount",
      desc: "Huge savings on top-rated products.",
      icon: <MdLocalOffer className="text-4xl text-pink-700" />,
    },
    {
      title: "New Release",
      desc: "Latest arrivals from trusted sellers.",
      icon: <MdNewReleases className="text-4xl text-purple-700" />,
    },
    {
      title: "Good Product",
      desc: "Verified quality & satisfied buyers.",
      icon: <MdThumbUp className="text-4xl text-teal-600" />,
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-linear-to-l from-purple-100 via-white to-cyan-100">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Why Choose <span className="text-purple-700">E.martBD</span>?
        </h2>
        <p className="text-center text-gray-700 mt-3 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          A trusted online mart to buy, sell, and discover the best product
          deals.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition border border-gray-200 flex flex-col items-center text-center hover:scale-[1.03]"
            >
              {item.icon}
              <h4 className="font-semibold text-gray-900 mt-3 text-lg">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
