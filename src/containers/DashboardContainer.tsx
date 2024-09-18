import { useState, useEffect } from "react";
import { getAllCredits } from "../services/Services";
import DetailTable from "../components/DetailTable";
import { useAuth } from "../context/useAuth";

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
  const { token } = useAuth();
  const tokenUser: string = token || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <DetailTable users={users} />
    </div>
  );
};

export default DashboardContainer;
