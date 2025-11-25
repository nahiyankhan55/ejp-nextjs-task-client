"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Rating,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import DataLoader from "@/components/DataLoader";
import { useRouter } from "next/navigation";
import AOS from "aos";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";

const ManageProductsProvider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session.user.email);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `http://localhost:6610/products/user/${session.user.email}`
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:6610/products/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          setProducts(products.filter((p) => p._id !== id));
          Swal.fire("Deleted!", "Product has been deleted.", "success");
        } else {
          Swal.fire("Error", "Failed to delete product.", "error");
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "Server error.", "error");
      }
    }
  };

  // Filtered products based on search and category
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? product.category === category : true)
  );

  if (loading) return <DataLoader />;

  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Manage Products
        </h2>
        <p className="text-center text-gray-700 mt-3 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
          View, manage, and delete products from your store.
        </p>

        {/* Search and category filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center w-full">
          <TextField
            label="Search Products"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3"
          />
          <FormControl className="w-full md:w-1/4">
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Foods">Foods</MenuItem>
              <MenuItem value="Accessories">Accessories</MenuItem>
              <MenuItem value="Home Appliances">Home Appliances</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-orange-600">No products found</p>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto">
            {filteredProducts.map((product) => (
              <div
                data-aos="zoom-in"
                key={product._id}
                className="shadow hover:shadow-lg hover:scale-105 transition rounded-tl-none shadow-gray-400 duration-300 border border-purple-400 rounded-xl overflow-hidden bg-linear-to-br from-emerald-300 via-white to-cyan-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover h-40 w-full"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-700 mt-1 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-gray-800 font-medium mt-2">
                    Price: ৳{product.price}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Rating
                      value={Number(product.rating)}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <span className="text-gray-600 text-sm">
                      ({product.rating})
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <Button
                      variant="contained"
                      className="bg-purple-600 hover:bg-cyan-500 text-white font-semibold w-full"
                      onClick={() => router.push(`/product/${product._id}`)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      className="font-semibold w-full"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ManageProductsProvider;
