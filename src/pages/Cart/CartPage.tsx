import product1 from "../../assets/image-common/product-1.jpeg";
import { useNavigate } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
const CartPage = () => {
  const navigate = useNavigate();

  function navigateTo(link: string) {
    navigate(link);
  }
  return (
    <div>
      <section className="mx-auto mt-10 max-w-7xl">
        <table className="w-full table-fixed ">
          <thead>
            <tr className="border-2 border-solid ">
              <th className="py-2 font-extrabold ">Sản phẩm</th>
              <th className="py-2 font-extrabold">Mô tả</th>
              <th className="py-2 font-extrabold">Giá</th>
              <th className="py-2 font-extrabold">Số lượng</th>
              <th className="py-2 font-extrabold">Tổng</th>
              <th className="py-2 font-extrabold"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="mt-4 border-2 border-solid">
              <td className="py-4">
                <img
                  className="w-24 mx-auto rounded-md"
                  src={product1}
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
              <td className="py-4 text-base text-center">
                <div className="flex items-center justify-center gap-5">
                  <IoAddCircleOutline className="text-3xl cursor-pointer" />
                  <div className="font-bold">5</div>
                  <IoRemoveCircleOutline className="text-3xl cursor-pointer" />
                </div>
              </td>
              <td className="py-4 text-base font-bold text-center">
                <div>250.000đ</div>
              </td>
              <td className="py-4 text-xl font-black text-center cursor-pointer">
                <div className="hover:text-primary">Xóa</div>
              </td>
            </tr>
            <tr className="mt-4 border-2 border-solid">
              <td className="py-4">
                <img
                  className="w-24 mx-auto rounded-md"
                  src={product1}
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
              <td className="py-4 text-base text-center">
                <div className="flex items-center justify-center gap-5">
                  <IoAddCircleOutline className="text-3xl cursor-pointer" />
                  <div className="font-bold">5</div>
                  <IoRemoveCircleOutline className="text-3xl cursor-pointer" />
                </div>
              </td>
              <td className="py-4 text-base font-bold text-center">
                <div>250.000đ</div>
              </td>
              <td className="py-4 text-xl font-black text-center cursor-pointer">
                <div className="hover:text-primary">Xóa</div>
              </td>
            </tr>
            <tr className="mt-4 border-2 border-solid">
              <td className="py-4">
                <img
                  className="w-24 mx-auto rounded-md"
                  src={product1}
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
              <td className="py-4 text-base text-center">
                <div className="flex items-center justify-center gap-5">
                  <IoAddCircleOutline className="text-3xl cursor-pointer" />
                  <div className="font-bold">5</div>
                  <IoRemoveCircleOutline className="text-3xl cursor-pointer" />
                </div>
              </td>
              <td className="py-4 text-base font-bold text-center">
                <div>250.000đ</div>
              </td>
              <td className="py-4 text-xl font-black text-center cursor-pointer">
                <div className="hover:text-primary">Xóa</div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <div className="flex justify-end mt-10 max-w-7xl">
          <div className="flex flex-col items-end gap-5">
            <div className="flex justify-between gap-20">
              <div className="text-3xl font-extrabold text-primary ">
                Tạm tính
              </div>
              <div className="text-3xl font-extrabold text-primary ">
                250.000đ
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigateTo("/")}
                className="px-10 py-3 text-xl font-extrabold text-white duration-300 rounded-full bg-primary hover:bg-purple-500"
              >
                Tiếp tục mua hàng
              </button>
              <button
                onClick={() => navigateTo("/payment")}
                className="px-10 py-3 text-xl font-extrabold duration-300 border-2 border-solid rounded-full border-primary text-primary hover:bg-purple-500 hover:text-white"
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mx-auto mt-16 max-w-7xl gap-7">
        <div className="text-3xl font-black">Các sản phẩm đã xem</div>
        <div className="grid my-6 xl:grid-cols-4 gap-14 md:grid-cols-2 sm:grid-cols-2 ">
          <div className="w-[285px] h-[350px] bg-slate-500"></div>
          <div className="w-[285px] h-[350px] bg-slate-500"></div>
          <div className="w-[285px] h-[350px] bg-slate-500"></div>
          <div className="w-[285px] h-[350px] bg-slate-500"></div>
          <div className="w-[285px] h-[350px] bg-slate-500"></div>
          <div className="w-[285px] h-[350px] bg-slate-500"></div>
          <div className="w-[285px] h-[350px] bg-slate-500"></div>
          <div className="w-[285px] h-[350px] bg-slate-500"></div>
        </div>
      </section>
    </div>
  );
};
export default CartPage;
