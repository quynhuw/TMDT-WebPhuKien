import axios from "axios";

const updateAddress = async (body: any) => {
    try {
        const url = `${import.meta.env.VITE_API_END_POINT}/address/update`;
        const res = await axios.put(url, {
            id: body.id,
            provinceId: body.provinceId,
            provinceValue: body.provinceValue,
            districtId: body.districtId,
            districtValue: body.districtValue,
            wardId: body.wardId,
            wardValue: body.wardValue,
            subAddress: body.subAddress,
            status: 1,
            customer: {
                id: body.customerId
            }
        })
        return { message: "Update address successfully", data: res.data.data }
    } catch (error) {
        console.log(error);
        return { message: "Fail to update address" }
    }
}

export default updateAddress;