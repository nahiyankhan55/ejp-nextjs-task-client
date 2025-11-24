const ProductDetails = async ({ params }) => {
  const { id } = await params;
  return <div>ProductDetails of: {id}</div>;
};

export default ProductDetails;
