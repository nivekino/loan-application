import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (data: {
  correoElectronico: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error en la solicitud:", error.response?.data);
      throw new Error(
        error.response?.data.message || "Error en el inicio de sesión"
      );
    }
    throw new Error("Error desconocido");
  }
};
