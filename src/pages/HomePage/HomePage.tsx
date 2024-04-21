import { useEffect, useState } from "react";
import banner1 from "../../assets/image-common/banner-1.jpeg";
import banner2 from "../../assets/image-common/banner-2.png";
import banner3 from "../../assets/image-common/banner-3.jpg";
import "./css/banner.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import clsx from "clsx";

const HomePage = () => {
  const banners = [banner1, banner2, banner3];
  const [bannerActive, setBannerActive] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);
  const classes = clsx("absolute max-w-full");
  useEffect(() => {
    if (banners.length > 0) {
      setBannerActive(0);
    }
  }, []);

  const handleChangeImage = (direction: number) => {
    const bannerImg = document.getElementById("banner-img");
    if (direction === 1) {
      if (toggle) {
        if (bannerImg)
          bannerImg.innerHTML = `<img id='img' src=${banners[bannerActive]} className='${classes}' alt=""/>`;
        setBannerActive(
          bannerActive === banners.length - 1 ? 0 : bannerActive + 1
        );
        if (bannerImg)
          bannerImg.innerHTML = `<img id='img' src=${banners[bannerActive]} className='${classes}' alt=""/>`;
      }
    } else {
      setBannerActive(
        bannerActive === 0 ? banners.length - 1 : bannerActive - 1
      );
      if (bannerImg)
        bannerImg.innerHTML = `<img id='img' src=${banners[bannerActive]} className='${classes}' alt="" />`;
    }
    const img = document.getElementById("img");
    img?.classList.add(direction === 1 ? "fade-to-right" : "fade-to-left");
  };

  useEffect(() => {
    const bannerImg = document.getElementById("banner-img");
    bannerImg &&
      (bannerImg.innerHTML = `<img src=${banners[bannerActive]} className ='${classes}' alt=""/>`);
  }, []);

  return (
    <div className="relative select-none">
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer z-[1]"
        onClick={() => handleChangeImage(0)}
      >
        <IoIosArrowBack className="text-[50px]" />
      </div>
      <div id="banner-img" className="relative">
        <div id="wrapper1"></div>
        <div id="wrapper2"></div>
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer z-[1]"
        onClick={() => handleChangeImage(1)}
      >
        <IoIosArrowForward className="text-[50px]" />
      </div>
    </div>
  );
};
export default HomePage;
