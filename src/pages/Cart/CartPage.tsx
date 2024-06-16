import { useNavigate } from "react-router-dom";
import CartRow from "./Components/CartRow";
import ProductCard from "@/components/ProductCard/ProductCard";

const CartPage = () => {
  const navigate = useNavigate();

  function navigateTo(link: string) {
    navigate(link);
  }
  return (
    <div>
      <section className="mx-auto mt-10 overflow-auto max-w-7xl">
        <table className="w-full table-fixed min-w-[1200px]">
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
            {[11, 1, 1, 1].map((item, index) => (
              <CartRow />
            ))}
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
        <div className="grid gap-12 my-6 xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
};
export default CartPage;
