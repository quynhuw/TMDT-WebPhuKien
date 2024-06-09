import { useContext } from "react";
import { ToastContext } from "../../hooks/ToastMessage/ToastContext";

interface UpdateQuantityProps {
  productQuantity: number;
  quantity: number;
  setQuantity: (quatity: number) => void;
}

const UpdateQuantity: React.FC<UpdateQuantityProps> = ({
  quantity,
  productQuantity,
  setQuantity,
}) => {
  const { showToast } = useContext(ToastContext);

  const increaseQuantity = () => {
    if (quantity >= productQuantity)
      return showToast("Số lượng sản phẩm không đủ");
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity - 1 > 0) setQuantity(quantity - 1);
    else showToast("Số lượng phải lớn hơn 0");
  };

  return (
    <div className="flex border rounded border-line w-fit">
      <p
        onClick={() => decreaseQuantity()}
        className="grid h-10 border-r cursor-pointer select-none hover:bg-gray-200 aspect-square place-items-center border-line"
      >
        -
      </p>
      <input
        disabled
        className="w-16 text-center focus:outline-none"
        value={quantity}
      />
      <p
        onClick={() => increaseQuantity()}
        className="grid h-10 border-l cursor-pointer select-none hover:bg-gray-200 aspect-square place-items-center border-line"
      >
        +
      </p>
    </div>
  );
};

export default UpdateQuantity;
