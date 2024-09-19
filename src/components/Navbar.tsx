import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import LogNav from "../assets/images/logoNav.svg";
import BackGroundNav from "../assets/images/bgNav.svg";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth } from "../context/useAuth";

const Navbar: React.FC = () => {
  const { logout } = useAuth();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundImage: `url(${BackGroundNav})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <img
              src={LogNav}
              alt="LogNav"
              className="pl-[1.4rem] lg:pl-[8.4rem]"
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={logout}
            >
              <LoginIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
