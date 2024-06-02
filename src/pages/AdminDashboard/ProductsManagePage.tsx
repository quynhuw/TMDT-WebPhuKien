import ManageDashboard from "./components/manage-dashboard";

const ProductsManagePage = () => {
  const subjects = [
    {
      field: "ID",
      data: "DH001",
      width: 1,
    },
    {
      field: "Tên",
      data: "Ốp điện thoại Silver bow nơại Silver bow nơ",
      width: 2,
    },
    {
      field: "",
      data: "",
      width: 1,
    },
    {
      field: "Giá",
      data: "60.000",
      width: 1,
    },
    {
      field: "Đã bán",
      data: "60",
      width: 1,
    },
    {
      field: "Còn lại",
      data: "60",
      width: 1,
    },
    {
      field: "Ngày tạo",
      data: "29/11/2023",
      width: 1,
    },
    {
      field: "Ngày cập nhật",
      data: "30/11/2000",
      width: 2,
    },
  ];
  return <ManageDashboard subjectName="sản phẩm" subjects={subjects} />;
};
export default ProductsManagePage;
