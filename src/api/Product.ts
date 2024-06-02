const apiAddress = import.meta.env.VITE_API_END_POINT + "/products";

export const getAllProduct =
  async (): // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Promise<any> => {
    try {
      const res = await fetch(`${apiAddress}/getAll`);
      return res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  };
