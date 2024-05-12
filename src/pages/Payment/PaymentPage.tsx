const PaymentPage = () => {
  return (
    <div>
      <div className="flex justify-between mx-auto max-w-7xl">
        <div className="w-full p-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="grid h-8 text-lg font-bold text-white rounded-full place-items-center aspect-square bg-primary">
              1
            </div>
            <div className="text-lg font-bold">Thông tin người nhận</div>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="w-full p-2 border rounded outline-primary border-line"
              placeholder="Họ và tên*"
            />
            <input
              type="text"
              className="w-full p-2 border rounded outline-primary border-line"
              placeholder="Số điện thoại*"
            />
            <input
              type="email"
              className="w-full p-2 border rounded outline-primary border-line"
              placeholder="Email*"
            />
            <select className="w-full p-2 border rounded outline-primary border-line ">
              <option value="">Tỉnh/Thành phố</option>
            </select>
            <select className="w-full p-2 border rounded outline-primary border-line ">
              <option value="">Quận/Huyện</option>
            </select>
            <select className="w-full p-2 border rounded outline-primary border-line ">
              <option value="">Phường/Xã</option>
            </select>
            <input
              type="text"
              className="w-full p-2 border rounded outline-primary border-line"
              placeholder="Số nhà, tên đường*"
            />
            <textarea
              cols={5}
              rows={5}
              className="w-full p-2 border rounded outline-primary border-line"
              placeholder="Ghi chú"
            ></textarea>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="grid h-8 text-lg font-bold text-white rounded-full place-items-center aspect-square bg-primary">
              2
            </div>
            <div className="text-lg font-bold">Hình thức thanh toán</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" id="cod" />
              <label htmlFor="cod">Thanh toán khi nhận hàng (COD)</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" id="visa" />
              <label htmlFor="visa">Thanh toán qua Paypal</label>
            </div>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="grid h-8 text-lg font-bold text-white rounded-full place-items-center aspect-square bg-primary">
              3
            </div>
            <div className="text-lg font-bold">Thông tin giỏ hàng</div>
          </div>
          <div className="w-full">
            <div>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-start">Sản phẩm</th>
                    <th className="text-nowrap">Số lượng</th>
                    <th>Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 font-bold text-primary">
                      Quạt USB mini sạc tích điện Capybara basic má hồng - Nâu
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-center">100.000đ</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-4 font-bold text-primary">
                      Quạt USB mini sạc tích điện Capybara basic má hồng - Nâu
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-center">100.000đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="font-bold">Tạm tính</div>
                <div>100.000đ</div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Phí vận chuyển</div>
                <div>100.000đ</div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Dùng điểm tích lũy</div>
                <div className="flex flex-col items-end gap-2">
                  <input
                    type="text"
                    className="p-2 border rounded outline-primary border-line"
                    placeholder="Bạn đang có 200 điểm"
                  />
                  <button className="px-4 py-1 text-base font-bold duration-300 border-2 border-solid rounded-full w-fit border-primary text-primary hover:bg-purple-500 hover:text-white">
                    Sử dụng
                  </button>
                </div>
              </div>
              <div className="flex justify-between text-3xl font-bold">
                <div>Tổng cộng</div>
                <div className="text-primary">100.000đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentPage;
