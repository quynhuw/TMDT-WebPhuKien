import { useEffect, useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidRegister, setIsValidRegister] = useState(false);

  const handleRegister = () => {
    if (confirmPassword != password) alert("Mật khẩu không trùng khớp!");
  };

  useEffect(() => {
    if (
      userName != "" &&
      email != "" &&
      password != "" &&
      confirmPassword != ""
    )
      setIsValidRegister(true);
    else setIsValidRegister(false);
  }, [userName, email, password, confirmPassword]);

  return (
    <div className="flex flex-col gap-y-3">
      <input
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        className="border border-line rounded p-2"
        type="text"
        placeholder="Họ và tên (*)"
      />
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border border-line rounded p-2"
        type="text"
        placeholder="Email (*)"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="border border-line rounded p-2"
        type="password"
        placeholder="Mật khẩu (*)"
      />
      <input
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        className="border border-line rounded p-2"
        type="password"
        placeholder="Xác nhận lại mật khẩu (*)"
      />
      <button
        onClick={() => handleRegister()}
        disabled={!isValidRegister}
        className={`p-2 bg-primary rounded hover:brightness-110 text-white ${
          !isValidRegister && "bg-gray-400"
        }`}
      >
        Đăng ký
      </button>
    </div>
  );
};

export default Register;
