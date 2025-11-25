"use client";

import { useEffect, useState } from "react";
import { Button, Rating } from "@mui/material";
import DataLoader from "../DataLoader";
import AOS from "aos";
import { useRouter } from "next/navigation";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch("http://localhost:6610/latest/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Latest Products
        </h2>
        <p className="text-center text-gray-700 mt-3 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          Discover the newest arrivals and top-rated products from our community
        </p>

        {loading ? (
          <DataLoader></DataLoader>
        ) : products.length === 0 ? (
          <p className="text-center text-orange-600">No products found</p>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <div
                data-aos="zoom-in"
                key={product._id}
                className="shadow-md hover:shadow-lg shadow-gray-400 duration-300 border border-purple-400 rounded-xl overflow-hidden bg-linear-to-br from-emerald-300 via-white to-sky-100"
              >
                <img
                  component="img"
                  src={product.image}
                  alt={product.name}
                  className="object-cover h-40 w-full shadow-md"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-xl">{product.name}</h3>

                  <p className="text-gray-700 mt-2 font-medium">
                    Price: ৳{product.price}
                  </p>

                  <p className="font-medium mt-1">
                    <Rating
                      name={`rating-${product._id}`}
                      value={Number(product.rating)}
                      precision={0.5}
                      readOnly
                    />
                  </p>

                  <Button
                    onClick={() => router.push(`/product/${product._id}`)}
                    variant="contained"
                    fullWidth
                    className="mt-4 bg-linear-to-br from-purple-600 to-cyan-600 transition! hover:to-teal-700 text-white font-semibold!"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
