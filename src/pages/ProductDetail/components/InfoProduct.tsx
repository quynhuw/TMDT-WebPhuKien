import { useContext, useState } from "react";
import { ToastContext } from "../../../hooks/ToastMessage/ToastContext";

const InfoProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { showToast } = useContext(ToastContext);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity - 1 > 0) setQuantity((prev) => prev - 1);
    else showToast("Số lượng phải lớn hơn 0");
  };

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
        <div className="">
          <p className="text-lg">Màu sắc</p>
        </div>
        <div className="flex items-center">
          <p className="text-lg">Số lượng</p>
          <div className="ml-4 flex border border-line rounded">
            <p
              onClick={() => decreaseQuantity()}
              className="select-none cursor-pointer hover:bg-gray-200 h-10 aspect-square grid place-items-center border-r border-line"
            >
              -
            </p>
            <input
              disabled
              className="w-16 text-center focus:outline-none"
              value={quantity}
            />
            <p
              onClick={() => increaseQuantity()}
              className="select-none cursor-pointer hover:bg-gray-200 h-10 aspect-square grid place-items-center border-l border-line"
            >
              +
            </p>
          </div>
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
