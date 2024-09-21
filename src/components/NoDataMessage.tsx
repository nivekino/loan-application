import { Typography } from "@mui/material";

const NoDataMessage: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full w-full p-6"
      style={{
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        border: "2px dashed #ccc",
        height: "200px",
      }}
    >
      <Typography variant="h6" className="text-gray-600 text-center">
        No hay datos disponibles
      </Typography>
      <Typography variant="body1" className="text-gray-500 text-center">
        No se encontraron registros en la base de datos. Intenta nuevamente más
        tarde.
      </Typography>
    </div>
  );
};

export default NoDataMessage;
