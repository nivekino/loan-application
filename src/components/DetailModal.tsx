import React from "react";
import { Modal, Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { UserDetail } from "../interfaces/UserDetail";
import defaultImage from "../assets/images/defaultImage.png";

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
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = defaultImage;
  };

  if (!detailData) {
    return null;
  }

  console.log("detailData", detailData);

  const titleField: string =
    "text-[14px] text-[#101828] font-Roboto font-[500]";

  const titleField2: string =
    "text-[16px] text-[#667085] font-Roboto font-[500] mb-2";

  const textData: string =
    "text-[14px] text-[#667085] font-Roboto font-[500] mb-3";

  const textNombre: string =
    "text-[20px] text-[#000000] font-Roboto font-[500] mb-2";

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[350px] md:w-[700px] md:auto max-h-[85vh] overflow-y-auto">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          <CloseIcon />
        </IconButton>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row justify-start w-full">
            <div className="">
              <img
                src={detailData.selfiePath}
                alt="Selfie"
                className="mt-2 w-[200px] h-[280px] object-cover"
                onError={handleImageError}
              />
            </div>
            <div className="flex flex-col ml-0 md:ml-5 mt-1">
              <p className={textNombre}>
                {detailData.nombres} {detailData.apellidos}
              </p>
              <div className="flex flex-col md:flex-row">
                <div className="">
                  <p className={titleField}>Correo electrónico</p>
                  <p className={textData}>{detailData.correoElectronico}</p>
                  <p className={titleField}>Número de teléfono</p>
                  <p className={textData}>{detailData.numeroTelefono}</p>
                  <p className={titleField}>Tipo de documento</p>
                  <p className={textData}>{detailData.tipoIdentificacion}</p>
                  <p className={titleField}>Número de documento</p>
                  <p className={textData}>{detailData.numeroIdentificacion}</p>
                </div>
                <div className="md-0 md:ml-10">
                  <p className={titleField}>Departamento</p>
                  <p className={textData}>{detailData.departamento}</p>
                  <p className={titleField}>Municipio</p>
                  <p className={textData}>{detailData.municipio}</p>
                  <p className={titleField}>Dirección</p>
                  <p className={textData}>{detailData.direccion}</p>
                  <p className={titleField}>Ingresos mensuales</p>
                  <p className={textData}>{detailData.ingresosMensuales}</p>
                </div>
              </div>
            </div>
          </div>

          <Divider sx={{ marginY: "15px" }} />

          <p className={titleField2}>Documento de identidad</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {detailData.documentoIdentidadPath.map((path, index) => (
              <img
                key={index}
                src={path}
                alt={`Documento ${index + 1}`}
                className="w-full md:w-[200px] h-auto md:h-[120px] object-cover"
                onError={handleImageError}
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;
