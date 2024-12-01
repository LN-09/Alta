import React from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PriavteProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};
export const Private = ({ isLoggedIn, component: Component }: PriavteProps) => {
  if (isLoggedIn) {
    return <Component name="Tom" />;
  } else {
    return <Login />;
  }
};
