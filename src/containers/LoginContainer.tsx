import { useEffect, useState } from "react";
import { Box, Grid, Fade } from "@mui/material";
import BackgroundImageContainer from "../components/BackgroundImageContainer";
import OptionButtons from "../components/OptionButtons";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import BackButton from "../components/BackButton";
import BackGroundImage from "../assets/images/bgLogin.svg";

const LoginContainer: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const handleOptionChange = (option: "login" | "formulario"): void => {
    setIsLogin(option === "login");
    setIsOptionSelected(true);
  };

  const handleGoBack = (): void => {
    setIsOptionSelected(false);
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
          bgcolor: "#000",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <BackgroundImageContainer checked={checked} />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            bgcolor: "#fff",
            padding: "2rem",
            position: "relative",
            backgroundImage: { xs: `url(${BackGroundImage})`, md: "none" },
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <div className="bg-white rounded-[10px] h-[90vh] p-3 w-[90%] mx-auto lg:rounded-none lg:h-auto lg:p-0 lg:w-full">
            <Fade in={!isOptionSelected} timeout={1000} unmountOnExit>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
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
                  transition: "min-height 0.5s ease",
                }}
              >
                <BackButton handleGoBack={handleGoBack} />

                <Fade in={isLogin} timeout={1000} unmountOnExit>
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      transition: "min-height 0.5s ease",
                    }}
                  >
                    <LoginForm />
                  </Box>
                </Fade>

                <Fade in={!isLogin} timeout={1000} unmountOnExit>
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      transition: "min-height 0.5s ease",
                    }}
                  >
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
