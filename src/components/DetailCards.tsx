import { useState } from "react";
import { Button, Card, CardContent } from "@mui/material";
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

interface DetailCardsProps {
  users: User[];
}

const DetailCards: React.FC<DetailCardsProps> = ({ users }) => {
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

  const textName: string =
    "text-[16px] text-[#101828] font-Roboto font-[700] mb-1";

  const textData: string = "text-[16px] text-[#667085] font-Roboto font-[500]";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <Card key={user._id} className="border border-[#e5e7eb]">
          <CardContent>
            <p className={textName}>
              {user.nombres} {user.apellidos}
            </p>
            <p className={textData}>{user.correoElectronico}</p>
            <p className={textData}>{user.numeroTelefono}</p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2754F7",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "#2754F7",
                  transition: "background-color 0.3s ease",
                },
              }}
              onClick={() => handleOpen(user)}
            >
              Ver detalle
            </Button>
          </CardContent>
        </Card>
      ))}

      <DetailModal
        open={open}
        handleClose={handleClose}
        detailData={detailData}
      />
    </div>
  );
};

export default DetailCards;
