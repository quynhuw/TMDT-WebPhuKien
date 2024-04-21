const ViewedProduct = () => {
  return (
    <div>
      <p className="text-xl font-extrabold">Các sản phẩm đã xem</p>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};

export default ViewedProduct;
