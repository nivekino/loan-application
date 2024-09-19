import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import DetailModal from "./DetailModal";
import { UserDetail } from "../interfaces/UserDetail";
import { getCreditById } from "../services/Services";
import { useAuth } from "../context/useAuth";

interface User {
  _id: string;
  nombres: string;
  apellidos: string;
  correoElectronico: string;
  numeroTelefono: string;
}

interface DetailTableProps {
  users: User[];
}

const DetailTable: React.FC<DetailTableProps> = ({ users }) => {
  const [open, setOpen] = useState(false);
  const [detailData, setDetailData] = useState<UserDetail | null>(null);
  const { token } = useAuth();
  const tokenUser: string = token || "";

  const handleOpen = async (user: User) => {
    setOpen(true);

    try {
      const response = await getCreditById(tokenUser, user._id);
      setDetailData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setDetailData(null);
  };

  const headerCellStyles = {
    color: "#667085",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: 600,
  };

  return (
    <div className="">
      <TableContainer className="rounded-lg border border-[#e5e7eb]">
        <Table>
          <TableHead className="bg-[#FCFCFD]">
            <TableRow>
              <TableCell sx={headerCellStyles}>Nombres y apellidos</TableCell>
              <TableCell sx={headerCellStyles}>Correo electrónico</TableCell>
              <TableCell sx={headerCellStyles}>Número telefónico</TableCell>
              <TableCell sx={headerCellStyles}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user._id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#F2F4FF",
                    transition: "background-color 0.3s ease",
                  },
                  transition: "background-color 0.3s ease",
                }}
              >
                <TableCell>
                  {user.nombres} {user.apellidos}
                </TableCell>
                <TableCell>{user.correoElectronico}</TableCell>
                <TableCell>{user.numeroTelefono}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    className="bg-blue-500 text-white hover:bg-blue-600"
                    onClick={() => handleOpen(user)}
                  >
                    Ver detalle
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DetailModal
        open={open}
        handleClose={handleClose}
        detailData={detailData}
      />
    </div>
  );
};

export default DetailTable;
