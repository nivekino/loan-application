import { Button, Fade } from "@mui/material";
import Logo from "../assets/images/logo.svg";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

interface OptionButtonsProps {
  isLogin: boolean;
  isOptionSelected: boolean;
  handleOptionChange: (option: "login" | "formulario") => void;
}

const OptionButtons = ({
  isLogin,
  isOptionSelected,
  handleOptionChange,
}: OptionButtonsProps) => {
  const { setStepStatus } = useContext(AuthContext);
  return (
    <Fade in={!isOptionSelected}>
      <div className="flex flex-col justify-center items-center w-full h-[90vh]">
        <img src={Logo} alt="logo" className="w-[100px] h-[60px]" />

        <p className="font-Roboto text-[#8C7A7A] font-[400] text-[16px] text-center mb-4">
          Selecciona una opción
        </p>

        <div className="w-[70%] flex flex-col justify-center items-center">
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleOptionChange("login")}
            sx={{
              mx: 1,
              mb: 3,
              borderRadius: "8px",
              backgroundColor: isLogin ? "primary.main" : "#F2F4F7",
              color: isLogin ? "#fff" : "rgba(0, 0, 0, 0.87)",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: isLogin ? "primary.dark" : "#F2F4F7",
                boxShadow: "none",
              },
            }}
          >
            Dashboard
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              setStepStatus(2);
              handleOptionChange("formulario");
            }}
            sx={{
              mx: 1,
              borderRadius: "8px",
              backgroundColor: !isLogin ? "primary.main" : "#F2F4F7",
              color: !isLogin ? "#fff" : "rgba(0, 0, 0, 0.87)",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: !isLogin ? "primary.dark" : "#F2F4F7",
                boxShadow: "none",
              },
            }}
          >
            Solicitar crédito
          </Button>
        </div>
      </div>
    </Fade>
  );
};

export default OptionButtons;
