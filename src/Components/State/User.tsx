import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Tom",
      email: "tom@example.com",
    });
  };
  const handleLogout = () => {
    return null;
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>user name is {user.name}</div>
      <div>user email is {user.email}</div>
    </div>
  );
}
