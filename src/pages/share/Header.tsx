import { useNavigate } from "react-router-dom";
import logo from "../../assets/image-common/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  function navigateTo(link: string) {
    navigate(link);
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-14 ">
          <div className="h-full" onClick={() => navigateTo("/homepage")}>
            <img className="h-full" src={logo} alt="" />
          </div>

          <div className="flex overflow-hidden items-center w-[400px] h-9 border-2 border-primary rounded-lg">
            <div className="flex-1 px-1 py-1 overflow-hidden rounded-md">
              <input
                className="w-full px-2 focus:outline-none"
                type="text"
                placeholder="Tìm kiếm sản phẩm"
              />
            </div>
            <div className="bg-primary h-full aspect-[1.2] grid place-items-center text-[16px] text-white cursor-pointer hover:bg-purple-800 transition-all duration-700">
              <FaSearch />
            </div>
          </div>
          <div className="flex items-center gap-x-10">
            <div className="flex flex-col font-bold justify-evenly">
              <div
                onClick={() => navigateTo("/user")}
                className="transition-all cursor-pointer hover:text-primary"
              >
                Dương Thanh Phụng
              </div>
              <div
                onClick={() => navigateTo("/logout")}
                className="transition-all cursor-pointer hover:text-primary"
              >
                Thoát
              </div>
            </div>
            <div
              onClick={() => navigateTo("/cart")}
              className="relative transition-all cursor-pointer hover:text-primary"
            >
              <div className="absolute grid place-items-center left-full top-0 rounded-full h-5 aspect-square bg-red-500 text-white text-[13px] -translate-x-1/2 -translate-y-1/2">
                1
              </div>
              <FaShoppingCart className="text-[30px] " />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen p-4 bg-primary">
        <div className="flex justify-between mx-auto font-bold text-gray-900 max-w-7xl">
          <div className="transition-all cursor-pointer hover:text-black">
            <p>Ốp điện thoại</p>
          </div>
          <div className="transition-all cursor-pointer hover:text-black">
            <p>Tai nghe/Phụ kiện tai nghe</p>
          </div>
          <div className="transition-all cursor-pointer hover:text-black">
            <p>Dây đeo điện thoại</p>
          </div>
          <div className="transition-all cursor-pointer hover:text-black">
            <p>Mojipop/Móc cầm điện thoại</p>
          </div>
          <div className="transition-all cursor-pointer hover:text-black">
            <p>Túi chống nước điện thoại</p>
          </div>
          <div className="transition-all cursor-pointer hover:text-black">
            <p>Phụ kiện điện thoại khác</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
