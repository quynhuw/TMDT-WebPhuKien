import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassPage = () => {
  const [isValidForgotPass, setIsValidForgotPass] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (email != "") setIsValidForgotPass(true);
    else setIsValidForgotPass(false);
  }, [email]);
  return (
    <div className="my-4 w-[600px] max-w-[90%] border border-line mx-auto rounded">
      <div className="relative">
        <p
          onClick={() => {
            navigate("/user");
          }}
          className="cursor-pointer absolute top-1/2 left-2 -translate-y-1/2 text-gray-400 hover:text-blue-400 underline"
        >
          Back
        </p>
        <p className="text-center p-2 border-b-2 border-primary text-primary">
          Quên mật khẩu
        </p>
      </div>
      <div className="flex flex-col gap-y-3 p-3">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border border-line rounded p-2"
          type="text"
          placeholder="Email hoặc số điện thoại (*)"
        />
        <button
          disabled={!isValidForgotPass}
          className={`p-2 bg-primary rounded hover:brightness-110 text-white ${
            !isValidForgotPass && "bg-gray-400"
          }`}
        >
          Gửi
        </button>
      </div>
    </div>
  );
};

export default ForgotPassPage;
