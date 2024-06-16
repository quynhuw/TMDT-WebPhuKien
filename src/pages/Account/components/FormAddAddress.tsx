import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import addAddress from "../api/addAddress";
import { LoginContext } from "@/hooks/LoginStatus/LoginContext";
import { ToastContext } from "@/hooks/ToastMessage/ToastContext";

interface FormAddAddressProps {
  hide: () => void;
  update: () => void;
}

const FormAddAddress: React.FC<FormAddAddressProps> = ({ hide, update }) => {
  const { user } = useContext(LoginContext);
  const { showToast } = useContext(ToastContext);
  const [subAddress, setSubAddress] = useState("");
  const [wardValue, setWardValue] = useState("");
  const [wardId, setWardId] = useState(0);
  const [districtValue, setDistrictValue] = useState("");
  const [districtId, setDistrictId] = useState(0);
  const [provinceValue, setProvinceValue] = useState("");
  const [provinceId, setProvinceId] = useState(0);

  const insertAddress = async () => {
    if (
      !subAddress ||
      !wardId ||
      !wardValue ||
      !districtId ||
      !districtValue ||
      !provinceId ||
      !provinceValue
    ) {
      showToast("Hãy thêm đầy đủ địa chỉ");

      return;
    }

    const data = {
      provinceId,
      provinceValue,
      districtId,
      districtValue,
      wardId,
      wardValue,
      subAddress,
      customerId: user.id,
    };

    const res = await addAddress(data);
    showToast(res.message);
    hide();
    update();
  };

  return (
    <>
      <div
        onClick={hide}
        className="fixed z-[1] w-screen h-screen top-0 left-0 bg-black/30"
      ></div>
      <div className="flex gap-4 flex-col p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] bg-slate-300 w-[400px]">
        <p className="text-2xl">thêm địa chỉ mới</p>
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Đường, số nhà"
          value={subAddress}
          onChange={(e) => setSubAddress(e.target.value)}
        />
        <select
          onChange={(e) => {
            if (
              e.target.options[e.target.selectedIndex].text &&
              e.target.value
            ) {
              setWardId(parseInt(e.target.value));
              setWardValue(e.target.options[e.target.selectedIndex].text);
            }
          }}
          className="p-2 border rounded"
        >
          <option>Xã</option>
          <option value={1}>Thanh An</option>
        </select>
        <select
          onChange={(e) => {
            if (
              e.target.options[e.target.selectedIndex].text &&
              e.target.value
            ) {
              setDistrictId(parseInt(e.target.value));
              setDistrictValue(e.target.options[e.target.selectedIndex].text);
            }
          }}
          className="p-2 border rounded"
        >
          <option>Huyện</option>
          <option value={1}>Mo Cay Bac</option>
        </select>
        <select
          required
          onChange={(e) => {
            if (
              e.target.options[e.target.selectedIndex].text &&
              e.target.value
            ) {
              setProvinceId(parseInt(e.target.value));
              setProvinceValue(e.target.options[e.target.selectedIndex].text);
            }
          }}
          className="p-2 border rounded"
        >
          <option>Tỉnh</option>
          <option value={1}>Ben Tre</option>
        </select>

        <div className="flex gap-x-2">
          <Button
            onClick={hide}
            className="flex-1 py-1 border rounded hover:border-black"
          >
            Huỷ
          </Button>
          <Button
            onClick={insertAddress}
            className="flex-1 py-1 rounded bg-primary hover:bg-white"
          >
            Thêm
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormAddAddress;
