import UpdateQuantity from "../../../components/Quantity/UpdateQuantity";
import { CartDetailType } from "@/utils/models";
import { formatPrice } from "@/utils";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteCartDetail } from "../api";
import { ToastContext } from "@/hooks/ToastMessage/ToastContext";

interface CartRowProps {
  cartDetail: CartDetailType;
}

const CartRow: React.FC<CartRowProps> = (props) => {
  const { cartDetail } = props;
  const [quantity, setQuantity] = useState<number>(cartDetail.quantity || 0);
  const toast = useContext(ToastContext);
  const navigate = useNavigate();

  const handleDeleteRow = () => {
    deleteCartDetail(cartDetail.id).then(() => {
      toast.showToast("Xóa sản phẩm thành công");
      window.location.reload();
    });
  };

  return (
    <tr className="mt-4 border-2 border-solid">
      <td className="py-4">
        <img
          onClick={() => navigate(`/product_detail/${cartDetail?.product?.id}`)}
          className="w-24 mx-auto rounded-md cursor-pointer"
          src={cartDetail?.product?.images?.[0]?.url}
          alt=""
        />
      </td>
      <td className="py-4 text-base text-center ">
        <div
          onClick={() => navigate(`/product_detail/${cartDetail?.product?.id}`)}
          className="cursor-pointer hover:text-primary"
        >
          {cartDetail?.product?.name}
        </div>
      </td>
      <td className="py-4 text-base font-bold text-center">
        <div>{formatPrice(cartDetail?.product?.price || 0)}</div>
      </td>
      <td className="py-4 text-base text-center ">
        <div className="mx-auto w-fit">
          <UpdateQuantity
            productQuantity={cartDetail?.product?.quantity || 0}
            quantity={quantity}
            setQuantity={setQuantity}
            cartDetailID={cartDetail.id}
          />
        </div>
      </td>
      <td className="py-4 text-base font-bold text-center">
        <div className="total">
          {formatPrice(quantity * (cartDetail?.product?.price || 0))}
        </div>
      </td>
      <td className="py-4 text-xl font-black text-center cursor-pointer">
        <div onClick={() => handleDeleteRow()} className="hover:text-primary">
          Xóa
        </div>
      </td>
    </tr>
  );
};
export default CartRow;
