import { useState } from "react";
import UpdateQuantity from "../../../components/Quantity/UpdateQuantity";
import { ProductType } from "@/utils/models";
import { formatPrice } from "@/utils";

interface ProductProps {
  product?: ProductType;
}
const InfoProduct: React.FC<ProductProps> = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);

  // add products to cart
  const handleAddToCart = () => {
    const cartQuantity = document.querySelector("#cart-quantity")?.innerHTML;
    document.querySelector("#cart-quantity")!.innerHTML = (
      Number.parseInt(cartQuantity || "0") + quantity
    ).toString();
  };

  return (
    <div className="flex gap-4">
      <div className="flex-1 max-w-[50%]">
        <img src={product?.images && product?.images[0]?.url} alt="" />
        <div className="flex justify-center max-w-full mt-4 overflow-auto gap-x-4">
          {product?.images?.map((image, index) => {
            return (
              <div className="h-[105px] aspect-square" key={index}>
                <img
                  className="object-cover w-full h-full"
                  src={image.url}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-y-8">
        <div>
          <p className="text-[25px] font-extrabold">{product?.name}</p>
        </div>
        <p className="text-[25px] font-extrabold">
          {formatPrice(product?.price || 0)}
        </p>
        {/* <div className="flex items-center gap-x-4">
          <p className="text-lg">Màu sắc</p>
          <div className="flex gap-x-2">
            <div className="h-5 bg-red-600 border rounded-full cursor-pointer aspect-square hover:border-black"></div>
            <div className="h-5 bg-green-600 border rounded-full cursor-pointer aspect-square hover:border-black"></div>
            <div className="h-5 bg-blue-600 border rounded-full cursor-pointer aspect-square hover:border-black"></div>
          </div>
        </div> */}
        <div className="flex items-center gap-x-4">
          <p className="text-lg">Số lượng</p>
          <UpdateQuantity
            productQuantity={product?.quantity || 0}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
        <div className="flex items-center opacity-80 gap-x-4">
          <p className="">Còn lại</p>
          <p>{product?.quantity}</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleAddToCart()}
            className="flex-1 py-3 rounded bg-primary hover:brightness-110"
          >
            Thêm vào giỏ hàng
          </button>
          <button className="flex-1 py-3 rounded bg-primary hover:brightness-110">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
