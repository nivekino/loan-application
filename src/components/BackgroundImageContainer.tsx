import { Box, Grow } from "@mui/material";
import BackGroundImage from "../assets/images/bgLogin.svg";
import LoginImage from "../assets/images/imageLogin.png";

interface BackgroundImageContainerProps {
  checked: boolean;
}

const BackgroundImageContainer = ({
  checked,
}: BackgroundImageContainerProps) => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        bgcolor: "#0D65FD",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${BackGroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
    </Box>
  );
};

export default BackgroundImageContainer;
