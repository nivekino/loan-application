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
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [detailData, setDetailData] = useState<UserDetail | null>(null);
  const { token } = useAuth();
  const tokenUser: string = token || "";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleOpen = async (user: User) => {
    setSelectedUser(user);
    setOpen(true);

    try {
      const response = await getCreditById(tokenUser, user._id);
      setDetailData(response);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
    setDetailData(null);
  };

  return (
    <div className="p-4">
      <TableContainer className="shadow-md rounded-lg">
        <Table>
          <TableHead className="bg-gray-200">
            <TableRow>
              <TableCell>Nombres y apellidos</TableCell>
              <TableCell>Correo electrónico</TableCell>
              <TableCell>Número telefónico</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
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
