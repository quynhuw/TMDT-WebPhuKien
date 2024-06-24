import { useContext, useEffect, useState } from "react";
import UpdateQuantity from "../../../components/Quantity/UpdateQuantity";
import { CartDetailType, ProductType } from "@/utils/models";
import { formatPrice } from "@/utils";
import {
  getCartsByCustomerId,
  insertNewCartDetail,
  updateCarts,
} from "@/pages/Cart/api";
import { getUserFromSession } from "@/utils/User";
import { ToastContext } from "@/hooks/ToastMessage/ToastContext";

interface ProductProps {
  product: ProductType;
}
const InfoProduct: React.FC<ProductProps> = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const toast = useContext(ToastContext);
  const [carts, setCarts] = useState<CartDetailType[]>([]);
  const [isContainQuantity, setIsContainQuantity] = useState(0);
  const user = getUserFromSession();

  useEffect(() => {
    if (user) {
      getCartsByCustomerId(user.id).then((res) => {
        setCarts(res.data);
      });
    } else {
      toast.showToast("Vui lòng đăng nhập để xem giỏ hàng");
    }
  }, []);
  useEffect(() => {
    const isContain = carts.find((cart) => cart.product.id === product.id);
    if (isContain) {
      setIsContainQuantity(isContain.quantity);
    }
  }, []);

  // add products to cart

  const handleAddToCart = () => {
    if (user) {
      // const cartQuantity = document.querySelector("#cart-quantity")?.innerHTML;
      // document.querySelector("#cart-quantity")!.innerHTML = (
      //   Number.parseInt(cartQuantity || "0") + quantity
      // ).toString();
      const isContain = carts.filter(
        (cart) => cart.product.id === product.id
      )[0];
      if (isContain) {
        setIsContainQuantity(isContainQuantity + isContain.quantity);
        if (isContainQuantity > product.quantity) {
          return toast.showToast("Vượt quá số lượng sản phẩm có sẵn");
        }
        console.log("before update cart", isContainQuantity);
        console.log("update cart", isContainQuantity + quantity);
        updateCarts(isContain.id, isContainQuantity + quantity);
        // console.log("isContainQuantity", isContain.quantity);
        // console.log("quantity", quantity);
      } else {
        const cartDetail = {
          product: {
            id: product?.id,
          },
          phoneCategory: {
            id: product?.phoneCategories[0]?.id,
          },
          customer: {
            id: user.id,
          },
          quantity: quantity,
          status: 1,
        };
        insertNewCartDetail(cartDetail);
      }
    } else {
      toast.showToast("Vui lòng đăng nhập để thêm vào giỏ hàng");
    }
  };

  return (
    <div className="flex gap-4">
      <div className="flex-1 max-w-[50%]">
        <img src={product.images && product.images[0].url} alt="" />
        <div className="flex justify-center max-w-full mt-4 overflow-auto gap-x-4">
          {product.images?.map((image, index) => {
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
          <p className="text-[25px] font-extrabold">{product.name}</p>
        </div>
        <p className="text-[25px] font-extrabold">
          {formatPrice(product.price)}
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
            productQuantity={product.quantity}
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
