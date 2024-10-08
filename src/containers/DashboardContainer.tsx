import { useState, useEffect } from "react";
import { Grow, useMediaQuery } from "@mui/material";
import DetailTable from "../components/DetailTable";
import DetailCards from "../components/DetailCards";
import NoDataMessage from "../components/NoDataMessage";
import { useAuth } from "../context/useAuth";
import TableSkeleton from "../components/TableSkeleton";
import CardSkeleton from "../components/CardSkeleton";
import { getAllCredits } from "../services/Services";
import MyPagination from "../components/CustomPagination";
import ErrorMessage from "../components/ErrorMessage";

interface User {
  _id: string;
  nombres: string;
  apellidos: string;
  correoElectronico: string;
  numeroTelefono: string;
}

const DashboardContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const { token } = useAuth();
  const tokenUser: string = token || "";

  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await getAllCredits(tokenUser);
        setUsers(response);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handleChangePage = (_: unknown, value: number) => {
    setPage(value);
  };

  if (loading) {
    return isMobile ? <CardSkeleton /> : <TableSkeleton />;
  }

  if (error) {
    return (
      <Grow in={!!error} timeout={1000}>
        <div>
          <ErrorMessage message="Error al obtener la información" />
        </div>
      </Grow>
    );
  }

  if (users.length === 0) {
    return (
      <Grow in={users.length === 0} timeout={1000}>
        <div className="px-10">
          <NoDataMessage />
        </div>
      </Grow>
    );
  }

  return (
    <div className="py-4 px-[3rem] lg:px-[10rem]">
      <h1 className="font-Roboto text-[24px] font-[500] mb-6">
        Historial de registro
      </h1>

      <Grow in={!loading} timeout={1000}>
        <div>
          {isMobile ? (
            <DetailCards users={currentUsers} />
          ) : (
            <DetailTable users={currentUsers} />
          )}
        </div>
      </Grow>

      <div className="flex flex-row-reverse mt-5 w-full">
        <MyPagination
          page={page}
          totalPages={totalPages}
          handleChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default DashboardContainer;
