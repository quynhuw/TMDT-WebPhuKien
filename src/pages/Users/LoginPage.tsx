import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./api/login";
import { ToastContext } from "@/hooks/ToastMessage/ToastContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValidLogin, setIsValidLogin] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);

  const handleLogin = async () => {
    const res = await login(userName, password);
    if (res.success) {
      navigate("/");
      showToast("Login successfully!");
    } else {
      showToast(res.message);
    }
  };

  useEffect(() => {
    if (userName != "" && password != "") setIsValidLogin(true);
    else setIsValidLogin(false);
  }, [userName, password]);

  return (
    <div className="flex flex-col gap-y-3">
      <input
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        className="border border-line rounded p-2"
        type="text"
        placeholder="Email hoặc số điện thoại (*)"
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
      <button
        disabled={!isValidLogin}
        onClick={handleLogin}
        className={`p-2 bg-primary rounded hover:brightness-110 text-white ${
          !isValidLogin && "!bg-gray-400"
        }`}
      >
        Đăng nhập
      </button>
      <p
        onClick={() => {
          navigate("/forgot_pass");
        }}
        className="text-end underline cursor-pointer hover:text-blue-400"
      >
        Quên mật khẩu?
      </p>
    </div>
  );
};

export default Login;
