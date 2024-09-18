import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { UserDetail } from "../interfaces/UserDetail";

interface DetailModalProps {
  open: boolean;
  handleClose: () => void;
  detailData: UserDetail | null;
}

const DetailModal: React.FC<DetailModalProps> = ({
  open,
  handleClose,
  detailData,
}) => {
  if (!detailData) {
    return null;
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
        <Typography variant="h6" component="h2">
          Detalles de {detailData.nombres} {detailData.apellidos}
        </Typography>
        <div className="mt-4">
          <Typography>
            Correo electrónico: {detailData.correoElectronico}
          </Typography>
          <Typography>
            Número de teléfono: {detailData.numeroTelefono}
          </Typography>
          <Typography>
            Tipo de identificación: {detailData.tipoIdentificacion}
          </Typography>
          <Typography>
            Número de identificación: {detailData.numeroIdentificacion}
          </Typography>
          <Typography>Departamento: {detailData.departamento}</Typography>
          <Typography>Municipio: {detailData.municipio}</Typography>
          <Typography>Dirección: {detailData.direccion}</Typography>
          <Typography>
            Ingresos mensuales: ${detailData.ingresosMensuales}
          </Typography>
          <Typography>
            Fecha de creación: {new Date(detailData.createdAt).toLocaleString()}
          </Typography>

          <div className="mt-4">
            <Typography>Selfie:</Typography>
            <img
              src={detailData.selfiePath}
              alt="Selfie"
              className="mt-2 w-full h-auto"
            />
          </div>

          <div className="mt-4">
            <Typography>Documento de Identidad:</Typography>
            {detailData.documentoIdentidadPath.map((path, index) => (
              <img
                key={index}
                src={path}
                alt={`Documento ${index + 1}`}
                className="mt-2 w-full h-auto"
              />
            ))}
          </div>
        </div>

        <Button
          variant="contained"
          className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleClose}
        >
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

export default DetailModal;
