import DetailsProvider from "./DetailsProvider";

export const metadata = {
  title: "Product Details - E.martBD",
};

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  return <DetailsProvider id={id}></DetailsProvider>;
};

export default ProductDetails;
