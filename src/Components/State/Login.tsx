import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  const handleLogout = () => {
    setIsLogout(!isLogout);
  };
  return (
    <div>
      <button onClick={handleLogin}>
        {isLogin ? `Login Success` : "Fail"}
      </button>
      <button onClick={handleLogout}>
        {isLogout ? "Logout Success" : "fail"}
      </button>
    </div>
  );
}
