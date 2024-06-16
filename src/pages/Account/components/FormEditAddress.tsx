import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "@/hooks/LoginStatus/LoginContext";
import { ToastContext } from "@/hooks/ToastMessage/ToastContext";
import updateAddress from "../api/updateAddress";

interface FormEditAddressProps {
  hide: () => void;
  update: () => void;
  address: any;
}

const FormEditAddress: React.FC<FormEditAddressProps> = ({
  hide,
  update,
  address,
}) => {
  const { user } = useContext(LoginContext);
  const { showToast } = useContext(ToastContext);
  const [subAddress, setSubAddress] = useState(address?.subAddress);
  const [wardValue, setWardValue] = useState(address?.wardValue);
  const [wardId, setWardId] = useState(address?.wardId);
  const [districtValue, setDistrictValue] = useState(address?.districtValue);
  const [districtId, setDistrictId] = useState(address?.districtId);
  const [provinceValue, setProvinceValue] = useState(address?.provinceValue);
  const [provinceId, setProvinceId] = useState(address?.provinceId);

  const editAddress = async () => {
    if (
      !subAddress ||
      !wardId ||
      !wardValue ||
      !districtId ||
      !districtValue ||
      !provinceId ||
      !provinceValue
    ) {
      return;
    }

    const data = {
      id: address.id,
      provinceId,
      provinceValue,
      districtId,
      districtValue,
      wardId,
      wardValue,
      subAddress,
      customerId: user.id,
    };

    const res = await updateAddress(data);
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
          value={subAddress || address.subAddress}
          onChange={(e) => setSubAddress(e.target.value)}
        />
        <select
          defaultValue={address.wardId}
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
          <option value={2}>Thanh An2</option>
          <option value={3}>Thanh An3</option>
          <option value={4}>Thanh An4</option>
        </select>
        <select
          defaultValue={address.districtId}
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
          <option value={2}>Mo Cay Bac2</option>
          <option value={3}>Mo Cay Bac3</option>
          <option value={4}>Mo Cay Bac4</option>
        </select>
        <select
          defaultValue={address.provinceId}
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
          <option value={2}>Ben Tre2</option>
          <option value={3}>Ben Tre3</option>
          <option value={4}>Ben Tre4</option>
        </select>

        <div className="flex gap-x-2">
          <Button
            onClick={hide}
            className="flex-1 py-1 border rounded hover:border-black"
          >
            Huỷ
          </Button>
          <Button
            onClick={editAddress}
            className="flex-1 py-1 rounded bg-primary hover:bg-white"
          >
            Thêm
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormEditAddress;
