import { useState } from "react";
import UpdateQuantity from "../../../components/Quantity/UpdateQuantity";

const CartRow = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <tr className="mt-4 border-2 border-solid">
      <td className="py-4">
        <img
          className="w-24 mx-auto rounded-md"
          src={"https://pos.nvncdn.com/cba2a3-7534/ps/20240417_gA471lilMa.jpeg"}
          alt=""
        />
      </td>
      <td className="py-4 text-base text-center ">
        <div className="cursor-pointer hover:text-primary">
          Strap đa năng Capybara flying sweat - Mix
        </div>
      </td>
      <td className="py-4 text-base font-bold text-center">
        <div>50.000đ</div>
      </td>
      <td className="py-4 text-base text-center ">
        {/* <div className="flex items-center justify-center gap-5">
          <IoAddCircleOutline className="text-3xl cursor-pointer" />
          <div className="font-bold">5</div>
          <IoRemoveCircleOutline className="text-3xl cursor-pointer" />
        </div> */}
        <div className="mx-auto w-fit">
          <UpdateQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>
      </td>
      <td className="py-4 text-base font-bold text-center">
        <div>250.000đ</div>
      </td>
      <td className="py-4 text-xl font-black text-center cursor-pointer">
        <div className="hover:text-primary">Xóa</div>
      </td>
    </tr>
  );
};
export default CartRow;
