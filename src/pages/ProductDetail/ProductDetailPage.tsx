import InfoProduct from "./components/InfoProduct";
import ViewedProduct from "./components/ViewedProducts";

const ProductDetailPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-4">
      <InfoProduct />
      <div className="mt-10">
        <ViewedProduct />
      </div>
    </div>
  );
};

export default ProductDetailPage;
