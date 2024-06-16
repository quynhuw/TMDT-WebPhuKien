/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface LoginContextProps {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  handleLogout: () => void;
}

export const LoginContext = createContext<LoginContextProps>({
  user: null,
  setUser: () => {},
  handleLogout: () => {},
});

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  const contextValue: LoginContextProps = {
    user,
    setUser,
    handleLogout,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};
