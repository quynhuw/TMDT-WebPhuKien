import { useState } from "react";
import UserProfile from "./UserProfile";
import OrdersHistory from "./OrdersHistory";
import ChangePassword from "./ChangePassword";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);

  return (
    <div className="flex flex-col gap-2 py-5 mx-auto max-w-7xl">
      <div className="text-center text-[35px]">Tài khoản của tôi</div>
      <div className="flex gap-5">
        <div className="w-1/4 p-5 px-10 select-none">
          <div className="flex flex-col gap-1">
            <div
              onClick={() => setActiveTab(0)}
              className={` cursor-pointer w-fit hover:text-primary hover:text-opacity-50 ${
                activeTab === 0 ? "text-primary font-semibold" : "text-black "
              }`}
            >
              Thông tin cá nhân
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className={`  cursor-pointer w-fit hover:text-primary hover:text-opacity-50 ${
                activeTab === 1 ? "text-primary font-semibold" : "text-black "
              }`}
            >
              Lịch sử mua hàng
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className={`  cursor-pointer w-fit hover:text-primary hover:text-opacity-50 ${
                activeTab === 2 ? "text-primary font-semibold" : "text-black "
              }`}
            >
              Đổi mật khẩu
            </div>
            <div className="cursor-pointer w-fit hover:text-primary hover:text-opacity-50">
              Đăng xuất
            </div>
          </div>
        </div>
        <div className="w-3/4">
          {activeTab === 0 ? (
            <UserProfile />
          ) : activeTab === 1 ? (
            <OrdersHistory />
          ) : (
            <ChangePassword />
          )}
        </div>
      </div>
    </div>
  );
};
export default AccountPage;
