import axios from "axios";

export const getAllOrders = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_END_POINT}/orders/getAll`
    );
    if (response.data.status == "ok") {
      return { success: true, orders: response.data.data };
    } else {
      return { success: false, message: "Cannot get all orders" };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
