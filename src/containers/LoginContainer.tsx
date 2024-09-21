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

  const timeoutAnimation = (stepStatusParam: number): Promise<boolean> => {
    return new Promise((resolve) => {
      if (stepStatus === stepStatusParam) {
        setTimeout(() => {
          resolve(true);
        }, 1000);
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
  }, [stepStatus]);

  useEffect(() => {
    if (stepStatus === 1) {
      const timer = setTimeout(() => {
        setShowSlide(true);
      }, 1100);
      return () => clearTimeout(timer);
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
    setStepStatus(1);
  };

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box
      sx={{
        height: {
          xs: "auto",
          sm: "100vh",
          md: "100vh",
        },
      }}
    >
      <Grid
        container
        height={"100vh"}
        sx={{
          bgcolor: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={isRegisterVisible ? 0 : 6}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
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
            height: {
              xs: "auto",
              sm: "100vh",
              md: "100vh",
            },
          }}
        >
          <div
            className="bg-white rounded-[10px] h-auto md:h-[90vh] p-3 w-[90%] mx-auto lg:rounded-none lg:h-auto lg:p-0 lg:w-full"
            style={{
              overflow: "hidden",
              transition: "all 0.6s ease-in-out",
              minHeight: isOptionSelected ? "90vh" : "90vh",
            }}
          >
            <Fade in={showSlide} timeout={500} unmountOnExit>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: !isOptionSelected ? "flex" : "none",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.6s ease-in-out",
                }}
              >
                <OptionButtons
                  isLogin={isLogin}
                  isOptionSelected={isOptionSelected}
                  handleOptionChange={handleOptionChange}
                />
              </Box>
            </Fade>

            <Fade in={isOptionSelected} timeout={500} unmountOnExit>
              <Box
                sx={{
                  display: isOptionSelected ? "block" : "none",
                  width: "100%",
                  height: "auto",
                  transition: "all 0.6s ease-in-out",
                }}
              >
                <Fade in={isLogin} timeout={500} unmountOnExit>
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: isOptionSelected ? "block" : "none",
                      transition: "min-height 0.6s ease-in-out",
                      minHeight: isLogin ? "50vh" : "30vh",
                    }}
                  >
                    <BackButton handleGoBack={handleGoBack} />
                    <LoginForm />
                  </Box>
                </Fade>

                <Fade in={isRegisterVisible} timeout={500} unmountOnExit>
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      transition: "min-height 0.6s ease-in-out",
                      minHeight: isRegisterVisible ? "60vh" : "40vh",
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
