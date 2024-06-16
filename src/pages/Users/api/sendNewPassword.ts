import axios from "axios"

export const sendNewPassWord = async (email: string) => {
    try {
        const url = `${import.meta.env.VITE_API_END_POINT}/customers/sendNewPasswordEmail?email=${email}`
        const res = await axios.get(url);
        if(res.status == 200) {
            return "Send mail successfully";
        } else {
            return "Email not found";
        }
    } catch (error) {
     return "Email not found";
    }
}