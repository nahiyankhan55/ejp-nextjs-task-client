"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Rating } from "@mui/material";
import DataLoader from "@/components/DataLoader";
import { toast } from "react-toastify";

const DetailsProvider = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:6610/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <DataLoader />;

  if (!product)
    return (
      <div className="text-center py-20 text-red-600">Product not found</div>
    );

  return (
    <section className="max-w-5xl mx-auto p-5 py-16">
      <Button
        variant="outlined"
        onClick={() => router.back()}
        className="mb-6! font-semibold!"
      >
        Go Back
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Large image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:h-96 sm:h-80 h-60 object-cover rounded-lg shadow-lg"
        />

        {/* Product info */}
        <div className="flex flex-col gap-2">
          <h1 className="sm:text-3xl md:text-4xl text-2xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-700">{product.description}</p>

          <p className="text-gray-700 font-semibold mt-3">
            Category: {product.category}
          </p>
          <div className="flex items-center gap-4">
            <Rating value={Number(product.rating)} precision={0.5} readOnly />
            <span className="text-gray-600">({product.rating})</span>
          </div>

          <p className="text-xl font-semibold mb-2">Price: ৳{product.price}</p>
          <p className="text-gray-500 mb-2">
            Added: {new Date(product.createdAt).toLocaleDateString()}
          </p>

          <Button
            variant="contained"
            onClick={() =>
              toast.success(`You have brought - ${product.name}`, {
                position: "top-right",
                autoClose: 2000,
              })
            }
            className="bg-purple-600! hover:bg-cyan-600! py-1! font-semibold! text-white"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DetailsProvider;
