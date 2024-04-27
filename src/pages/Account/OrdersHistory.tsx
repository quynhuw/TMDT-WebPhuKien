import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const OrdersHistory = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const handleOpenDetail = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-[25px]  p-5">Lịch sử đặt hàng</div>
      <div className="flex flex-col gap-2 divide-y-2 divide-black">
        <div className="grid grid-cols-5 font-bold place-items-center ">
          <div>Mã đơn hàng</div>
          <div>Ngày</div>
          <div>Tổng đơn</div>
          <div>Trạng thái</div>
          <div></div>
        </div>
        <div className="flex flex-col divide-y divide-black">
          <div className="flex flex-col">
            <div className="grid grid-cols-5 py-3 place-items-center">
              <div className="font-bold text-primary">374416864</div>
              <div>23/04/2024</div>
              <div>285.000 VND</div>
              <div>Chờ xác nhận</div>
              <div
                onClick={() => handleOpenDetail()}
                className={
                  "flex items-center gap-2 cursor-pointer hover:text-primary" +
                  (openDetail ? " text-primary" : "")
                }
              >
                <div> Chi tiết</div>
                <FaInfoCircle className="text-2xl " />
              </div>
            </div>
            <div
              className={`${
                openDetail ? "flex flex-col" : "hidden"
              } duration-500`}
            >
              {" "}
              <div className="flex flex-col ">
                <div>Huỳnh Hữu Duyên - 0999888777</div>
                <div>112 Ấp 1, xã ABC, huyện Con Bò, tỉnh Gia Lai</div>
                <div>Thanh toán khi nhận hàng</div>
                <div>Ghi chú: Halo có thấy nhớ em không từ khi lần đầu</div>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <div className="grid grid-cols-10 py-1 text-center text-white bg-gray-700 rounded-sm">
                  <div className="col-span-5">Sản phẩm</div>
                  <div className="col-span-1">Số lượng</div>
                  <div className="col-span-2">Đơn giá</div>
                  <div className="col-span-2">Thành tiền</div>
                </div>
                <div className="grid grid-cols-10 text-center">
                  <div className="col-span-5">
                    Ốp điện thoại Bow nơ viền màu - Mix - 15 Pro max
                  </div>
                  <div className="col-span-1 ">2</div>
                  <div className="col-span-2">150.000</div>
                  <div className="col-span-2 ">300.000</div>
                </div>
                <div className="grid grid-cols-10 text-center">
                  <div className="col-span-5">
                    Ốp điện thoại Bow nơ viền màu - Mix - 15 Pro max
                  </div>
                  <div className="col-span-1 ">2</div>
                  <div className="col-span-2">150.000</div>
                  <div className="col-span-2 ">300.000</div>
                </div>
                <div className="flex flex-col items-end gap-1 p-3">
                  <div>
                    <strong>TỔNG TIỀN:</strong> 160,000 VNĐ
                  </div>
                  <div>
                    <strong>PHÍ VẬN CHUYỂN:</strong> 25,000VNĐ
                  </div>
                  <div>
                    <strong>KHUYẾN MẠI:</strong> - 0 VNĐ
                  </div>
                  <div>
                    <strong>TỔNG CỘNG:</strong> 185,000 VNĐ
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 py-3 place-items-center">
            <div className="font-bold text-primary">374416864</div>
            <div>23/04/2024</div>
            <div>285.000 VND</div>
            <div>Chờ xác nhận</div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
              <div> Chi tiết</div>
              <FaInfoCircle className="text-2xl " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrdersHistory;
