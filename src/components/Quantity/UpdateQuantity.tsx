import { useContext } from "react";
import { ToastContext } from "../../hooks/ToastMessage/ToastContext";

interface UpdateQuantityProps {
  quantity: number;
  setQuantity: (quatity: number) => void;
}

const UpdateQuantity: React.FC<UpdateQuantityProps> = ({
  quantity,
  setQuantity,
}) => {
  const { showToast } = useContext(ToastContext);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity - 1 > 0) setQuantity(quantity - 1);
    else showToast("Số lượng phải lớn hơn 0");
  };

  return (
    <div className="flex border border-line rounded">
      <p
        onClick={() => decreaseQuantity()}
        className="select-none cursor-pointer hover:bg-gray-200 h-10 aspect-square grid place-items-center border-r border-line"
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
        className="select-none cursor-pointer hover:bg-gray-200 h-10 aspect-square grid place-items-center border-l border-line"
      >
        +
      </p>
    </div>
  );
};

export default UpdateQuantity;
