import { Typography, Button } from "@mui/material";
import { useAuth } from "../context/useAuth";

const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div>
      <Typography variant="h4">Dashboard</Typography>
      <Button onClick={logout}>Cerrar sesión</Button>
    </div>
  );
};

export default Dashboard;
