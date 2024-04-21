import { useState } from "react";
import UpdateQuantity from "../../../components/Quantity/UpdateQuantity";

const InfoProduct = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex gap-4">
      <div className="flex-1 max-w-[50%]">
        <img
          src="https://pos.nvncdn.com/cba2a3-7534/ps/20240417_gA471lilMa.jpeg"
          alt=""
        />
        <div className="flex gap-x-4 justify-center mt-4 max-w-full overflow-auto">
          {[1, 2, 3, 3, 3, 3, 3, 3].map((item, index) => {
            return (
              <div className="h-[105px] aspect-square" key={index}>
                <img
                  className="w-full h-full object-cover"
                  src="https://pos.nvncdn.com/cba2a3-7534/ps/20240417_gA471lilMa.jpeg"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-y-8">
        <div>
          <p className="text-[25px] font-extrabold">
            Strap đa năng Capybara flying sweat - Mix
          </p>
          <p className="text-sm text-gray-400">
            Mã sản phẩm: M.C910.NO.24044074-XX
          </p>
        </div>
        <p className="text-[25px] font-extrabold">30,000đ</p>
        <div className="flex items-center gap-x-4">
          <p className="text-lg">Màu sắc</p>
          <div className="flex gap-x-2">
            <div className="h-5 aspect-square bg-red-600 rounded-full border hover:border-black cursor-pointer"></div>
            <div className="h-5 aspect-square bg-green-600 rounded-full border hover:border-black cursor-pointer"></div>
            <div className="h-5 aspect-square bg-blue-600 rounded-full border hover:border-black cursor-pointer"></div>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="text-lg">Số lượng</p>
          <UpdateQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div className="flex gap-4">
          <button className="flex-1 py-3 bg-primary rounded hover:brightness-110">
            Thêm vào giỏ hàng
          </button>
          <button className="flex-1 py-3 bg-primary rounded hover:brightness-110">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
