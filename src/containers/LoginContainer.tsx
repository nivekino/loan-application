import { useEffect, useState } from "react";
import { Box, Grid, Button, Fade, IconButton, Grow } from "@mui/material";
import BackGroundImage from "../assets/images/bgLogin.svg";
import LoginImage from "../assets/images/imageLogin.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const LoginContainer: React.FC = () => {
  // Estado para seleccionar entre login o formulario
  const [isLogin, setIsLogin] = useState<boolean>(true);

  // Estado para controlar si una opción ha sido seleccionada
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  // Manejar el cambio entre login y formulario
  const handleOptionChange = (option: "login" | "formulario"): void => {
    setIsLogin(option === "login");
    setIsOptionSelected(true); // Una vez seleccionado, se ocultan los botones y aparece el contenido
  };

  // Manejar el clic en "Volver"
  const handleGoBack = (): void => {
    setIsOptionSelected(false); // Volver al estado inicial donde se muestran los botones
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
          height: "100vh",
          bgcolor: "#000",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            bgcolor: "#0D65FD",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${BackGroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grow in={checked} timeout={1000}>
            <Box
              component="img"
              src={LoginImage}
              alt="LoginImage"
              sx={{
                width: "65%",
                height: "auto",
                my: 0,
              }}
            />
          </Grow>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            bgcolor: "#fff",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            backgroundImage: { xs: `url(${BackGroundImage})`, md: "none" },
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Fade in={isOptionSelected}>
            <Box sx={{ width: "50%" }}>
              <IconButton onClick={handleGoBack}>
                <ArrowBackIcon />
              </IconButton>
            </Box>
          </Fade>

          {/* Fade para los botones de Login y Registro */}
          <Fade in={!isOptionSelected}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <Button
                variant={isLogin ? "contained" : "outlined"}
                onClick={() => handleOptionChange("login")}
                sx={{ mx: 1 }}
              >
                Login
              </Button>
              <Button
                variant={!isLogin ? "contained" : "outlined"}
                onClick={() => handleOptionChange("formulario")}
                sx={{ mx: 1 }}
              >
                Registro
              </Button>
            </Box>
          </Fade>

          {/* Fade para el contenido de Login o Registro */}
          <Fade in={isOptionSelected} timeout={500}>
            <Box>
              {isLogin ? (
                <Box>
                  <h2>Iniciar Sesión</h2>
                  {/* Aquí puedes añadir los campos del login */}
                  <Box>Formulario de Iniciar Sesión</Box>
                </Box>
              ) : (
                <Box>
                  <h2>Registro</h2>
                  {/* Aquí puedes añadir los campos del formulario de registro */}
                  <Box>Formulario de Registro</Box>
                </Box>
              )}
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginContainer;
