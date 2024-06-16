import axios from "axios";

const addAddress = async (body: any) => {
    try {
        const url = `${import.meta.env.VITE_API_END_POINT}/address/insert`;
        const res = await axios.post(url, {
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
        return { message: "Insert address successfully", data: res.data.data }
    } catch (error) {
        console.log(error);
        return { message: "Fail to add address" }
    }
}

export default addAddress;