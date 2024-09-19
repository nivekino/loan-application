import { useContext, useEffect, useState } from "react";
import { Box, Grid, Fade, Slide } from "@mui/material";
import BackgroundImageContainer from "../components/BackgroundImageContainer";
import OptionButtons from "../components/OptionButtons";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import BackButton from "../components/BackButton";
import BackGroundImage from "../assets/images/bgLogin.svg";
import { AuthContext } from "../context/AuthContext";

const LoginContainer: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(false);
  const [showSlide, setShowSlide] = useState<boolean>(false);

  const { stepStatus, setStepStatus } = useContext(AuthContext);

  // ? useEffect para mostrar el formulario de registro
  const timeoutAnimation = (stepStatusParam: number): Promise<boolean> => {
    return new Promise((resolve) => {
      if (stepStatus === stepStatusParam) {
        setTimeout(() => {
          resolve(true);
        }, 1000); // 1 segundo de espera
      } else {
        resolve(false);
      }
    });
  };

  useEffect(() => {
    const handleLoginAnimation = async () => {
      const result = await timeoutAnimation(2);
      setIsRegisterVisible(result);
    };

    handleLoginAnimation();
  }, [stepStatus]); // Solo cuando stepStatus cambie

  // ? useEffect para mostrar la animación de la imagen de fondo
  useEffect(() => {
    if (stepStatus === 1) {
      const timer = setTimeout(() => {
        setShowSlide(true);
      }, 1100); // 1 segundo de retraso y un poco mas por un error de parpadeo en la imagen grande
      return () => clearTimeout(timer); // Limpiar el timeout cuando se desmonte
    } else {
      setShowSlide(false);
    }
  }, [stepStatus]);

  const handleOptionChange = (option: "login" | "formulario"): void => {
    setIsLogin(option === "login");
    setIsOptionSelected(true);
  };

  const handleGoBack = (): void => {
    setIsOptionSelected(false);
    setStepStatus(1); // Volver a stepStatus 1
  };

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box height={"100vh"}>
      <Grid
        container
        height={"100vh"}
        sx={{
          bgcolor: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={isRegisterVisible ? 0 : 6}>
          <Slide
            direction={"right"}
            in={showSlide}
            timeout={1000}
            unmountOnExit
            style={{ animationDelay: "1s" }}
          >
            <div>
              <BackgroundImageContainer checked={checked} />
            </div>
          </Slide>
        </Grid>

        <Grid
          item
          xs={12}
          md={isRegisterVisible ? 12 : 6}
          sx={{
            bgcolor: "#fff",
            padding: "2rem",
            position: "relative",
            backgroundImage: { xs: `url(${BackGroundImage})`, md: "none" },
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            transition: "1s ease",
            minHeight: "100vh",
          }}
        >
          <div className="bg-white rounded-[10px] h-[90vh] p-3 w-[90%] mx-auto lg:rounded-none lg:h-auto lg:p-0 lg:w-full">
            <Fade in={showSlide} timeout={1000} unmountOnExit>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: !isOptionSelected ? "flex" : "none",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "min-height 0.5s ease",
                }}
              >
                <OptionButtons
                  isLogin={isLogin}
                  isOptionSelected={isOptionSelected}
                  handleOptionChange={handleOptionChange}
                />
              </Box>
            </Fade>

            <Fade in={isOptionSelected} timeout={1000} unmountOnExit>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              >
                <Fade in={isLogin} timeout={1000} unmountOnExit>
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: isOptionSelected ? "block" : "none",
                      transition: "min-height 0.5s ease",
                    }}
                  >
                    <BackButton handleGoBack={handleGoBack} />
                    <LoginForm />
                  </Box>
                </Fade>

                {/* Mostrar RegisterForm cuando isRegisterVisible es true */}
                <Fade in={isRegisterVisible} timeout={1000} unmountOnExit>
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <BackButton handleGoBack={handleGoBack} />
                    <RegisterForm />
                  </Box>
                </Fade>
              </Box>
            </Fade>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginContainer;
