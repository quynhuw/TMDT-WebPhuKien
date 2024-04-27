import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsPage = () => {
  const [hiddenFilters, setHiddenFilters] = useState(true);
  const handleToggleFilters = () => {
    setHiddenFilters(!hiddenFilters);
  };

  return (
    <div className="flex flex-col py-2 mx-auto max-w-7xl">
      <div className="relative flex justify-end w-full">
        <div
          onClick={() => handleToggleFilters()}
          className="flex items-center gap-2 py-2 border-2 rounded cursor-pointer select-none w-fit hover:bg-primary px-7 border-primary"
        >
          <div>Sắp xếp theo</div>
          <FaAngleDown />
        </div>
        <div
          className={
            hiddenFilters
              ? "hidden "
              : "absolute z-[1] select-none  top-12 right-0 flex flex-col overflow-hidden bg-white rounded shadow-form"
          }
        >
          <div className="flex items-center py-2 border-b cursor-pointer hover:bg-primary px-7 ">
            Mới nhất
          </div>
          <div className="flex items-center py-2 border-b cursor-pointer hover:bg-primary px-7">
            Giá thấp đến cao
          </div>
          <div className="flex items-center py-2 border-b cursor-pointer hover:bg-primary px-7 ">
            Giá cao đến thấp
          </div>
        </div>
      </div>
      <div className="flex gap-10 ">
        <div className="flex flex-col w-1/5 mx-5">
          <div className="p-3 pb-2 text-xl font-bold border-b-2 text-primary border-primary">
            Danh mục sản phẩm
          </div>
          <div className="flex flex-col gap-2 p-3 ">
            <div className="cursor-pointer hover:text-primary w-fit">
              Ốp điện thoại
            </div>
            <div className="cursor-pointer hover:text-primary w-fit">
              Tai nghe/ Phụ kiện tai nghe
            </div>
            <div className="cursor-pointer hover:text-primary w-fit">
              Dây đeo điện thoại
            </div>
            <div className="cursor-pointer hover:text-primary w-fit">
              Móc cầm điện thoại
            </div>
            <div className="cursor-pointer hover:text-primary w-fit">
              Phụ kiện khác
            </div>
          </div>
          <div className="p-3 pb-2 text-xl font-bold border-b-2 text-primary border-primary">
            Giá
          </div>
          <div className="flex flex-col gap-2 p-3">
            <div className="cursor-pointer hover:text-primary w-fit">
              0 - 100.000 VND
            </div>
            <div className="cursor-pointer hover:text-primary w-fit">
              0 - 100.000 VND
            </div>
            <div className="cursor-pointer hover:text-primary w-fit">
              0 - 100.000 VND
            </div>
            <div className="cursor-pointer hover:text-primary w-fit">
              0 - 100.000 VND
            </div>
            <div className="cursor-pointer hover:text-primary w-fit">
              0 - 100.000 VND
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-4/5 gap-5">
          <div className="grid grid-cols-4 gap-5 pt-3">
            {Array.from({ length: 12 }).map(() => {
              return <ProductCard />;
            })}
          </div>
          <div className="grid grid-flow-col overflow-hidden border divide-x rounded">
            <div className="px-4 py-1.5 cursor-pointer select-none bg-primary hover:bg-primary">
              1
            </div>
            <div className="px-4 py-1.5 cursor-pointer select-none hover:bg-primary">
              2
            </div>
            <div className="px-4 py-1.5 cursor-pointer select-none hover:bg-primary">
              3
            </div>
            <div className="px-4 py-1.5 cursor-pointer select-none hover:bg-primary">
              4
            </div>
            <div className="px-4 py-1.5 cursor-pointer select-none hover:bg-primary">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;
