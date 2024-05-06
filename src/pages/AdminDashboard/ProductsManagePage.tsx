import ManageDashboard from "./components/manage-dashboard";

const ProductsManagePage = () => {
  const subjects = [
    {
      field: "ID",
      data: "SP001",
      width: 1,
    },
    {
      field: "Tên",
      data: "Ốp điện thoại Silver bow nơ",
      width: 3,
    },
    {
      field: "Giá",
      data: "60.000",
      width: 1,
    },
    {
      field: "Số lượng",
      data: "23",
      width: 1,
    },
    {
      field: "Ngày tạo",
      data: "29/11/2023",
      width: 2,
    },
    {
      field: "Ngày cập nhật",
      data: "",
      width: 2,
    },
  ];
  return <ManageDashboard subjectName="sản phẩm" subjects={subjects} />;
};
export default ProductsManagePage;
