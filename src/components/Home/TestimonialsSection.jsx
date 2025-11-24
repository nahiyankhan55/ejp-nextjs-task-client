"use client";

import Marquee from "react-fast-marquee";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rana Ahmed",
      role: "Buyer",
      message: "E.martBD is amazing! Best deals ever.",
    },
    {
      name: "Sadia Khan",
      role: "Seller",
      message: "Selling products is so easy here.",
    },
    {
      name: "Arif Hossain",
      role: "Buyer",
      message: "Secure transactions and fast delivery.",
    },
    {
      name: "Nabila Rahman",
      role: "Buyer",
      message: "Great UI and responsive platform.",
    },
    {
      name: "Fahim Reza",
      role: "Seller",
      message: "Loved the seller dashboard, very intuitive.",
    },
    {
      name: "Tania Akter",
      role: "Buyer",
      message: "Wide variety of products at amazing prices.",
    },
    {
      name: "Shahidul Islam",
      role: "Buyer",
      message: "I trust E.martBD for all my shopping needs.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-linear-to-br from-emerald-100 via-white to-orange-100">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Hear from our Customers
        </h2>
        <p className="text-center text-gray-700 mt-3 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          See what our users say about E.martBD - your trusted online
          marketplace!
        </p>

        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[280px] bg-white p-6 m-3 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="text-3xl text-purple-600 mb-3">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-800 mb-4">{t.message}</p>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
              <div className="text-3xl text-purple-600 mt-3">
                <FaQuoteRight />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;
