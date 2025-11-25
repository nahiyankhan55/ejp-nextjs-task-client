"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { toast } from "react-toastify";

const AddProductProvider = () => {
  const { data: session } = useSession();

  const [product, setProduct] = useState({
    name: "",
    image: "",
    description: "",
    rating: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.image ||
      !product.description ||
      !product.rating ||
      !product.price ||
      !product.category
    ) {
      toast.error("All fields are required");
      return;
    }

    const res = await fetch(
      "https://ejp-nextjs-emartbd-server.vercel.app/products",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          userEmail: session?.user?.email,
        }),
      }
    );

    if (res.ok) {
      toast.success("Product added successfully");
      setProduct({
        name: "",
        image: "",
        description: "",
        rating: "",
        price: "",
        category: "",
      });
    } else {
      toast.error("Failed to add product");
    }
  };

  return (
    <Box className="flex justify-center py-20 px-5">
      <Paper
        elevation={4}
        className="sm:p-10 p-5 w-full max-w-4xl bg-linear-to-br! from-purple-100! via-white! to-cyan-100!"
      >
        <Typography
          variant="h4"
          className="font-bold text-center mb-6 md:text-4xl! font-serif sm:text-3xl! text-2xl!"
        >
          Add Product
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full gap-5 mt-5"
        >
          <div className="w-full flex items-center gap-5 md:flex-row flex-col">
            <TextField
              label="Product Name"
              name="name"
              value={product.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Image URL"
              name="image"
              value={product.image}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            value={product.description}
            onChange={handleChange}
            fullWidth
          />

          <div className="w-full flex items-center gap-5 md:flex-row flex-col">
            <TextField
              label="Rating (1-5)"
              type="number"
              name="rating"
              value={product.rating}
              onChange={handleChange}
              fullWidth
              inputProps={{ min: 1, max: 5 }}
            />
            <TextField
              label="Price (৳)"
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              fullWidth
            />
          </div>

          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              label="Category"
              value={product.category}
              onChange={handleChange}
            >
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Foods">Foods</MenuItem>
              <MenuItem value="Accessories">Accessories</MenuItem>
              <MenuItem value="Home Appliances">Home Appliances</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="User Email"
            value={session?.user?.email || ""}
            InputProps={{ readOnly: true }}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="font-semibold!"
          >
            Add Product
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddProductProvider;
