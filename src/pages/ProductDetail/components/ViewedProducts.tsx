import Card from "@/components/ProductCard/ProductCard";

const ViewedProduct = () => {
  return (
    <div>
      <p className="text-xl font-extrabold">Các sản phẩm đã xem</p>
      <div className="flex gap-x-4 overflow-auto">
        {[1, 2, 3, 4, 5, 2, 2, 2].map((item, index) => (
          <div className="min-w-[200px]" key={index}>
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewedProduct;
