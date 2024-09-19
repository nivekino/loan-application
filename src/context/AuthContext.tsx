import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthContextProps {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  stepStatus: number;
  setStepStatus: Dispatch<SetStateAction<number>>;
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  login: () => {},
  logout: () => {},
  stepStatus: 1,
  setStepStatus: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("authToken")
  );
  const [stepStatus, setStepStatus] = useState<number>(1);

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem("authToken", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        stepStatus,
        setStepStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
