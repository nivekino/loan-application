import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface BackButtonProps {
  handleGoBack: () => void;
}

const BackButton = ({ handleGoBack }: BackButtonProps) => {
  return (
    <Box sx={{ width: "50%" }}>
      <IconButton onClick={handleGoBack}>
        <ArrowBackIcon />
      </IconButton>
    </Box>
  );
};

export default BackButton;
